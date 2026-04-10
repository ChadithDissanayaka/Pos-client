import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroWidget } from './hero-widget';

describe('HeroWidget', () => {
  let component: HeroWidget;
  let fixture: ComponentFixture<HeroWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
