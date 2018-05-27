import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10AllTimeComponent } from './top10-all-time.component';

describe('Top10AllTimeComponent', () => {
  let component: Top10AllTimeComponent;
  let fixture: ComponentFixture<Top10AllTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10AllTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10AllTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
