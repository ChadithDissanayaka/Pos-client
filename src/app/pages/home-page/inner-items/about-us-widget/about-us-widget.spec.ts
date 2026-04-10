import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsWidget } from './about-us-widget';

describe('AboutUsWidget', () => {
  let component: AboutUsWidget;
  let fixture: ComponentFixture<AboutUsWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
