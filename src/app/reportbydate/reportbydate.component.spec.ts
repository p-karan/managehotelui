import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportbydateComponent } from './reportbydate.component';

describe('ReportbydateComponent', () => {
  let component: ReportbydateComponent;
  let fixture: ComponentFixture<ReportbydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportbydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
