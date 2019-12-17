import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addrooms2Component } from './addrooms2.component';

describe('Addrooms2Component', () => {
  let component: Addrooms2Component;
  let fixture: ComponentFixture<Addrooms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addrooms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addrooms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
