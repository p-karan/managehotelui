import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySectionLeftComponent } from './body-section-left.component';

describe('BodySectionLeftComponent', () => {
  let component: BodySectionLeftComponent;
  let fixture: ComponentFixture<BodySectionLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySectionLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySectionLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
