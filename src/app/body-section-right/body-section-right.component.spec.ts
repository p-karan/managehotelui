import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySectionRightComponent } from './body-section-right.component';

describe('BodySectionRightComponent', () => {
  let component: BodySectionRightComponent;
  let fixture: ComponentFixture<BodySectionRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySectionRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySectionRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
