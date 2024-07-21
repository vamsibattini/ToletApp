import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsModelComponent } from './terms-model.component';

describe('TermsModelComponent', () => {
  let component: TermsModelComponent;
  let fixture: ComponentFixture<TermsModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsModelComponent]
    });
    fixture = TestBed.createComponent(TermsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
