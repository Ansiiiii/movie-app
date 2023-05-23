import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieService } from 'src/app/service/movie.service';

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponentComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MovieCardComponent ],
      providers: [MovieService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
