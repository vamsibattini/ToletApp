import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenentTermsComponent } from './tenent-terms.component';

describe('TenentTermsComponent', () => {
  let component: TenentTermsComponent;
  let fixture: ComponentFixture<TenentTermsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenentTermsComponent]
    });
    fixture = TestBed.createComponent(TenentTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
