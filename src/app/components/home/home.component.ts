import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {
  query: string = '';
  error: string = '';
  constructor(private router: Router) {}

  showSearchResults() {
    if(this.query) {
      this.router.navigate([ '/movie-searchResults' ], { queryParams: { query: this.query } })
    } else {
        this.error = 'Search is empty';
    }
  }
}
