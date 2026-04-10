import { Component } from '@angular/core';
import { HeroWidget } from './inner-items/hero-widget/hero-widget';
import { AboutUsWidget } from './inner-items/about-us-widget/about-us-widget';
import { PricingWidget } from './inner-items/pricing-widget/pricing-widget';

@Component({
  selector: 'app-home-page',
  imports: [HeroWidget, AboutUsWidget, PricingWidget],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage { }
