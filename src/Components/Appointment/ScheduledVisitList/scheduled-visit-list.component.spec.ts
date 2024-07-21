import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledVisitListComponent } from './scheduled-visit-list.component';

describe('ScheduledVisitListComponent', () => {
  let component: ScheduledVisitListComponent;
  let fixture: ComponentFixture<ScheduledVisitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledVisitListComponent]
    });
    fixture = TestBed.createComponent(ScheduledVisitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
