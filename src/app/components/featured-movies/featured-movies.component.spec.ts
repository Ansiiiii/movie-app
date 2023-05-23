import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MovieDetail } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component';
import { FeaturedMoviesComponent } from './featured-movies.component';

describe('FeaturedMoviesComponent', () => {
  let component: FeaturedMoviesComponent;
  let fixture: ComponentFixture<FeaturedMoviesComponent>;
  let spy: any;
  let service: MovieService;
  let http: HttpClient;
  let mockMovieDetail: MovieDetail = {
    Title: 'ABC',
    Year: '1990',
    Rated: 'A',
    Released: '2000',
    Runtime: 'sdsd',
    Genre: 'Comedy',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language:'',
    Country: '',
    Awards: '',
    Poster: '',
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: '',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FeaturedMoviesComponent, ErrorMessagesComponent],
      providers: [MovieService],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedMoviesComponent);
    component = fixture.componentInstance;
    service = new MovieService(http);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Movie Service on ngOnInit',() => {
    component = new FeaturedMoviesComponent(service);
    spy = spyOn(service, 'getMovieDetailsByTitle').and.returnValue(of<MovieDetail>(mockMovieDetail));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call fetchfeaturedMovies() on ngOnInit',() => {
    component = new FeaturedMoviesComponent(service);
    component.fetchfeaturedMovies = jasmine.createSpy();
    component.ngOnInit();
    expect(component.fetchfeaturedMovies).toHaveBeenCalled();
  });

  it('should render html', () => {
    component = new FeaturedMoviesComponent(service);
    spyOn(service, 'getMovieDetailsByTitle').and.returnValue(of<MovieDetail>(mockMovieDetail));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.featuredMovies.length).toBeGreaterThan(0);
    const el = fixture.nativeElement.querySelector('h2');
    expect(el.innerText).toBe('Featured Movies')
  })

});


