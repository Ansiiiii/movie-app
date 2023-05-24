import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Movie, MovieDetail } from '../model/movie';

@Injectable()
export class MovieService {

  private readonly API_KEY = `6c3a2d45`;
  errMsg: string = '';
  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
    .pipe(
      map((data: any) => {
        if ( data.Response === 'True'){
          return  data.Search;
        } else {
          this.errMsg = data.Error;
          throwError(() => this.errMsg);
        }
      })
    )
  }

  getMovieDetailsByID(imdbId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }

  getMovieDetailsByTitle(title: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`https://www.omdbapi.com/?apikey=${this.API_KEY}&t=${title}&plot=full`);
  }

}