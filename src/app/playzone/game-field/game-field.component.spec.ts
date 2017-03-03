/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameFieldComponent } from './game-field.component';

describe('GameFieldComponent', () => {
  let component: GameFieldComponent;
  let fixture: ComponentFixture<GameFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
