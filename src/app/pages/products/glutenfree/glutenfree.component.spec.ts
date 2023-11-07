import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlutenFreeComponent } from './glutenfree.component';

describe('GlutenfreeComponent', () => {
  let component: GlutenFreeComponent;
  let fixture: ComponentFixture<GlutenFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlutenFreeComponent]
    });
    fixture = TestBed.createComponent(GlutenFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
