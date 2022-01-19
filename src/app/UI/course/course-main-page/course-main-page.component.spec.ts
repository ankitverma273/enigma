import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMainPageComponent } from './course-main-page.component';

describe('CourseMainPageComponent', () => {
  let component: CourseMainPageComponent;
  let fixture: ComponentFixture<CourseMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
