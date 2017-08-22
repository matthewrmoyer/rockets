import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketCalendarComponent } from './rocket-calendar.component';

describe('RocketCalendarComponent', () => {
  let component: RocketCalendarComponent;
  let fixture: ComponentFixture<RocketCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
