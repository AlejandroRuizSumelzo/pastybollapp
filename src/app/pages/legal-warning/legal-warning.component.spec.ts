import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalWarningComponent } from './legal-warning.component';

describe('LegalWarningComponent', () => {
  let component: LegalWarningComponent;
  let fixture: ComponentFixture<LegalWarningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalWarningComponent]
    });
    fixture = TestBed.createComponent(LegalWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
