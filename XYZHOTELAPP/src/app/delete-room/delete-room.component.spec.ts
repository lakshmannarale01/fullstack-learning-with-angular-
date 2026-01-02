import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoomComponent } from './delete-room.component';

describe('DeleteRoomComponent', () => {
  let component: DeleteRoomComponent;
  let fixture: ComponentFixture<DeleteRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteRoomComponent]
    });
    fixture = TestBed.createComponent(DeleteRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
