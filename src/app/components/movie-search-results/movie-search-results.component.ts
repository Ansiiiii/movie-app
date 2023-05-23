import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Subscription, throwError } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';


@Component({
  selector: 'app-movie-search-results',
  templateUrl: './movie-search-results.component.html',
  styleUrls: ['./movie-search-results.component.css'],
})
export class MovieSearchResultsComponent implements OnInit, OnDestroy {
  query: string = '';
  movies: Movie[] | undefined;
  errMsg: string = '';
  movieSubscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.getSearchResults();
    });
  }

  getSearchResults() {
    this.movieSubscription = this.movieService
      .searchMovie(this.query)
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          this.errMsg = err.error.Error;
          return throwError(() => err);
        })
      )
      .subscribe((data: any) => {
        data.Response === 'True'
          ? (this.movies = data.Search)
          : (this.errMsg = data.Error);
      });
  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }
}
