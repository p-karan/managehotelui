import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehotelComponent } from './managehotel.component';

describe('ManagehotelComponent', () => {
  let component: ManagehotelComponent;
  let fixture: ComponentFixture<ManagehotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagehotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
