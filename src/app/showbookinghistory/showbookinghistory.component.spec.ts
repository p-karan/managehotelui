import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbookinghistoryComponent } from './showbookinghistory.component';

describe('ShowbookinghistoryComponent', () => {
  let component: ShowbookinghistoryComponent;
  let fixture: ComponentFixture<ShowbookinghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbookinghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbookinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
