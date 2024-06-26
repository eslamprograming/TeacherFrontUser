/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyCourseComponent } from './MyCourse.component';

describe('MyCourseComponent', () => {
  let component: MyCourseComponent;
  let fixture: ComponentFixture<MyCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
