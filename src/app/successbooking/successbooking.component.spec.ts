import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessbookingComponent } from './successbooking.component';

describe('SuccessbookingComponent', () => {
  let component: SuccessbookingComponent;
  let fixture: ComponentFixture<SuccessbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
