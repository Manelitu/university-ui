import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsComponent } from './periods.component';

describe('PeriodsComponent', () => {
  let component: PeriodsComponent;
  let fixture: ComponentFixture<PeriodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodsComponent]
    });
    fixture = TestBed.createComponent(PeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
