import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LykkeComponent } from './lykke.component';

describe('LykkeComponent', () => {
  let component: LykkeComponent;
  let fixture: ComponentFixture<LykkeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LykkeComponent]
    });
    fixture = TestBed.createComponent(LykkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
