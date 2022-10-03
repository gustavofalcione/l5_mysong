import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHistoryComponent } from './album-history.component';

describe('AlbumHistoryComponent', () => {
  let component: AlbumHistoryComponent;
  let fixture: ComponentFixture<AlbumHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
