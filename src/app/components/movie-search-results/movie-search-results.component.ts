import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { catchError, Observable, Subscription, throwError } from "rxjs";
import { Movie } from "src/app/model/movie";
import { MovieService } from "src/app/service/movie.service";

@Component({
  selector: "app-movie-search-results",
  templateUrl: "./movie-search-results.component.html",
  styleUrls: ["./movie-search-results.component.css"],
})
export class MovieSearchResultsComponent implements OnInit, OnDestroy {
  query: string = "";
  errMsg: string = "";
  queryParamSubscription = new Subscription();
  movieSearchResults$: Observable<Movie[]> | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieService.errMsg = "";
    this.queryParamSubscription = this.route.queryParams.subscribe((params) => {
      this.query = params["query"];
      this.getSearchResults();
    });
  }

  getSearchResults() {
    this.movieSearchResults$ = this.movieService.searchMovie(this.query).pipe(
      catchError((err) => {
        console.log("Handling error locally and rethrowing it...", err);
        this.errMsg = err.error.Error;
        return throwError(() => err);
      })
    );
  }

  ngOnDestroy(): void {
    this.queryParamSubscription.unsubscribe();
  }
}
