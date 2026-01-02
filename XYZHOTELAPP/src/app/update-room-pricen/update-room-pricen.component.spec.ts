import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomPricenComponent } from './update-room-pricen.component';

describe('UpdateRoomPricenComponent', () => {
  let component: UpdateRoomPricenComponent;
  let fixture: ComponentFixture<UpdateRoomPricenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRoomPricenComponent]
    });
    fixture = TestBed.createComponent(UpdateRoomPricenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
