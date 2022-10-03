import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByArtistComponent } from './search-by-artist.component';

describe('SearchByArtistComponent', () => {
  let component: SearchByArtistComponent;
  let fixture: ComponentFixture<SearchByArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByArtistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
