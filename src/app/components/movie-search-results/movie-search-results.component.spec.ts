import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component';

import { MovieSearchResultsComponent } from './movie-search-results.component';

describe('MovieSearchResultsComponent', () => {
  let component: MovieSearchResultsComponent;
  let fixture: ComponentFixture<MovieSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      declarations: [ MovieSearchResultsComponent, ErrorMessagesComponent ],
      providers: [MovieService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
