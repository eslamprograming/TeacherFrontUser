/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllCourseComponent } from './AllCourse.component';

describe('AllCourseComponent', () => {
  let component: AllCourseComponent;
  let fixture: ComponentFixture<AllCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
