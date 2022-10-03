import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByAlbumComponent } from './search-by-album.component';

describe('SearchByAlbumComponent', () => {
  let component: SearchByAlbumComponent;
  let fixture: ComponentFixture<SearchByAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
