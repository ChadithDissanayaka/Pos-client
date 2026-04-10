import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingWidget } from './pricing-widget';

describe('PricingWidget', () => {
  let component: PricingWidget;
  let fixture: ComponentFixture<PricingWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
