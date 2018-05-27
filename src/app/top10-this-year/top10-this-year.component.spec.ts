import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10ThisYearComponent } from './top10-this-year.component';

describe('Top10ThisYearComponent', () => {
  let component: Top10ThisYearComponent;
  let fixture: ComponentFixture<Top10ThisYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10ThisYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10ThisYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
