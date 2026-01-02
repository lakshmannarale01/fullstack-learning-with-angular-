import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomByRangeComponent } from './room-by-range.component';

describe('RoomByRangeComponent', () => {
  let component: RoomByRangeComponent;
  let fixture: ComponentFixture<RoomByRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomByRangeComponent]
    });
    fixture = TestBed.createComponent(RoomByRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
