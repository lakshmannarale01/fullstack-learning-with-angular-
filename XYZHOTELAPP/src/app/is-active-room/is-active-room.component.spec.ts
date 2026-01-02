import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsActiveRoomComponent } from './is-active-room.component';

describe('IsActiveRoomComponent', () => {
  let component: IsActiveRoomComponent;
  let fixture: ComponentFixture<IsActiveRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsActiveRoomComponent]
    });
    fixture = TestBed.createComponent(IsActiveRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
