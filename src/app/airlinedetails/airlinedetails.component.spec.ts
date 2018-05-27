import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinedetailsComponent } from './airlinedetails.component';

describe('AirlinedetailsComponent', () => {
  let component: AirlinedetailsComponent;
  let fixture: ComponentFixture<AirlinedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
