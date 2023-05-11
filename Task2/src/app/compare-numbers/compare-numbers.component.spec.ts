import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareNumbersComponent } from './compare-numbers.component';

describe('CompareNumbersComponent', () => {
  let component: CompareNumbersComponent;
  let fixture: ComponentFixture<CompareNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareNumbersComponent]
    });
    fixture = TestBed.createComponent(CompareNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
