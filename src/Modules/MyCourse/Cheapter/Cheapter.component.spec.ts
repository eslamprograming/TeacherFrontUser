/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheapterComponent } from './Cheapter.component';

describe('CheapterComponent', () => {
  let component: CheapterComponent;
  let fixture: ComponentFixture<CheapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
