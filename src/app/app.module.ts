import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UtilsModule } from './utils/utils.module';
import { MovieService } from './service/movie.service';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FeaturedMoviesComponent } from './components/featured-movies/featured-movies.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSearchResultsComponent } from './components/movie-search-results/movie-search-results.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    UtilsModule,
  ],
  declarations: [
    AppComponent,
    MovieCardComponent,
    FeaturedMoviesComponent,
    HomeComponent,
    MovieSearchResultsComponent,
    ErrorMessagesComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MovieService],
})
export class AppModule {}
