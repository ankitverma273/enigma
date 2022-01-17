import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorUploadComponent } from './instructor-upload.component';

describe('InstructorUploadComponent', () => {
  let component: InstructorUploadComponent;
  let fixture: ComponentFixture<InstructorUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
