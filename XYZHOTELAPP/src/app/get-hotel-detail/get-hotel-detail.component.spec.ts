import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHotelDetailComponent } from './get-hotel-detail.component';

describe('GetHotelDetailComponent', () => {
  let component: GetHotelDetailComponent;
  let fixture: ComponentFixture<GetHotelDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetHotelDetailComponent]
    });
    fixture = TestBed.createComponent(GetHotelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
