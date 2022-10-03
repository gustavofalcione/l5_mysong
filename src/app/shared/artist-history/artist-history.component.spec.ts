import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistHistoryComponent } from './artist-history.component';

describe('ArtistHistoryComponent', () => {
  let component: ArtistHistoryComponent;
  let fixture: ComponentFixture<ArtistHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
