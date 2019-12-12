import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySectionMiddleComponent } from './body-section-middle.component';

describe('BodySectionMiddleComponent', () => {
  let component: BodySectionMiddleComponent;
  let fixture: ComponentFixture<BodySectionMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySectionMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySectionMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
