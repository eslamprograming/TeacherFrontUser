/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountactUsComponent } from './CountactUs.component';

describe('CountactUsComponent', () => {
  let component: CountactUsComponent;
  let fixture: ComponentFixture<CountactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
