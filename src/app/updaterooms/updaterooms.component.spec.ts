import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateroomsComponent } from './updaterooms.component';

describe('UpdateroomsComponent', () => {
  let component: UpdateroomsComponent;
  let fixture: ComponentFixture<UpdateroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
