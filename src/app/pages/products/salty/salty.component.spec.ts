import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltyComponent } from './salty.component';

describe('SaltyComponent', () => {
  let component: SaltyComponent;
  let fixture: ComponentFixture<SaltyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaltyComponent]
    });
    fixture = TestBed.createComponent(SaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
