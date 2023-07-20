import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesAgreementComponent } from './cookies-agreement.component';

describe('CookiesAgreementComponent', () => {
  let component: CookiesAgreementComponent;
  let fixture: ComponentFixture<CookiesAgreementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiesAgreementComponent]
    });
    fixture = TestBed.createComponent(CookiesAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
