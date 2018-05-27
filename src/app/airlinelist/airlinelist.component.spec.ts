import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinelistComponent } from './airlinelist.component';

describe('AirlinelistComponent', () => {
  let component: AirlinelistComponent;
  let fixture: ComponentFixture<AirlinelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
