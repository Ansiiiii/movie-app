import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDetail } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie | undefined;
  @Input() featuredMovie: MovieDetail | undefined;
  @Input() movieDetils$: Observable<MovieDetail> | undefined;
  showFullMoviePlot: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    if (this.movie) {
      this.movieDetils$ = this.movieService.getMovieDetailsByID(this.movie.imdbID);
    }
  }

  readMore() {
    this.showFullMoviePlot = !this.showFullMoviePlot;
  }
}
