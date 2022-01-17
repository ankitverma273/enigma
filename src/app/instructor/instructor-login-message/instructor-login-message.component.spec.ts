import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorLoginMessageComponent } from './instructor-login-message.component';

describe('InstructorLoginMessageComponent', () => {
  let component: InstructorLoginMessageComponent;
  let fixture: ComponentFixture<InstructorLoginMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorLoginMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorLoginMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
