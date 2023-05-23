import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, Subscription, throwError } from 'rxjs';
import { MovieDetail } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.css'],
})
export class FeaturedMoviesComponent implements OnInit, OnDestroy {
  movieDetils$: Observable<MovieDetail> | undefined;
  featuredMovies: MovieDetail[] = [];
  featuredMovieNames: string[] = ['titanic', 'submarine'];
  private getFeaturedMovies = new Subscription();
  errMsg: string = '';

  constructor(private readonly movieService: MovieService) {}

  ngOnInit() {
    this.featuredMovieNames.forEach((featuredMovie) => {
      this.fetchfeaturedMovies(featuredMovie);
    });
  }

  fetchfeaturedMovies(featuredMovie: string) {
    this.getFeaturedMovies = this.movieService
      .getMovieDetailsByTitle(featuredMovie)
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          this.errMsg = err.error.Error;
          return throwError(() => err);
        })
      )
      .subscribe((data) => {
        this.featuredMovies.push(data);
      });
  }

  ngOnDestroy(): void {
    this.getFeaturedMovies.unsubscribe();
  }
}
