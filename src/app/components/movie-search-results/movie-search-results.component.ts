import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { Movie } from "src/app/model/movie";
import { MovieService } from "src/app/service/movie.service";

@Component({
  selector: "app-movie-search-results",
  templateUrl: "./movie-search-results.component.html",
  styleUrls: ["./movie-search-results.component.css"],
})
export class MovieSearchResultsComponent implements OnInit {
  query: string = "";
  errMsg: string = "";
  movieSearchResults$: Observable<Movie[]> | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieService.errMsg = "";
    this.movieSearchResults$ = this.route.queryParams.pipe(
      switchMap((params) =>
          this.movieService
          .searchMovie(params["query"])
          .pipe(
            catchError((err) => {
              console.log("Handling error locally and rethrowing it...", err);
              this.errMsg = err.error.Error;
              return throwError(() => err);
            })
          )
      )
    );
  }
}
