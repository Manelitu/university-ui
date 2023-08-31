import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesComponent } from './disciplines.component';

describe('DisciplinesComponent', () => {
  let component: DisciplinesComponent;
  let fixture: ComponentFixture<DisciplinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinesComponent]
    });
    fixture = TestBed.createComponent(DisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
