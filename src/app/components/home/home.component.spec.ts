import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component';
import { FeaturedMoviesComponent } from '../featured-movies/featured-movies.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [HomeComponent, ErrorMessagesComponent, FeaturedMoviesComponent],
      providers: [MovieService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
