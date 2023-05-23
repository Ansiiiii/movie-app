import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { Movie, MovieDetail } from '../model/movie';

@Injectable()
export class MovieService {

  private readonly API_KEY = `6c3a2d45`;

  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
  }

  getMovieDetailsByID(imdbId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }

  getMovieDetailsByTitle(title: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`https://www.omdbapi.com/?apikey=${this.API_KEY}&t=${title}&plot=full`);
  }

}