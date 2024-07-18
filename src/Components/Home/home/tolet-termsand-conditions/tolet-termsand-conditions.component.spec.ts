import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToletTermsandConditionsComponent } from './tolet-termsand-conditions.component';

describe('ToletTermsandConditionsComponent', () => {
  let component: ToletTermsandConditionsComponent;
  let fixture: ComponentFixture<ToletTermsandConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToletTermsandConditionsComponent]
    });
    fixture = TestBed.createComponent(ToletTermsandConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
