import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocationComponent } from './update-location.component';

describe('UpdateLocationComponent', () => {
  let component: UpdateLocationComponent;
  let fixture: ComponentFixture<UpdateLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLocationComponent]
    });
    fixture = TestBed.createComponent(UpdateLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
