import { Component } from '@angular/core';
import { PricingPlan } from '../../../../dto/pricing-plan.dto';

@Component({
  selector: 'app-pricing-widget',
  imports: [],
  templateUrl: './pricing-widget.html',
  styleUrl: './pricing-widget.scss',
})
export class PricingWidget {
  plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: 29,
      period: '/mo',
      description: 'Perfect for small shops and cafés getting started.',
      features: [
        '1 Register / Terminal',
        'Up to 500 products',
        'Basic sales reports',
        'Email support',
        'Payment processing',
      ],
      highlighted: false,
      cta: 'Start Free Trial',
    },
    {
      name: 'Professional',
      price: 79,
      period: '/mo',
      description: 'For growing businesses that need more power.',
      features: [
        'Up to 5 Registers',
        'Unlimited products',
        'Advanced analytics dashboard',
        'Inventory management',
        'Priority 24/7 support',
        'Multi-location support',
        'Customer loyalty program',
      ],
      highlighted: true,
      cta: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      price: 199,
      period: '/mo',
      description: 'For large-scale operations and chains.',
      features: [
        'Unlimited Registers',
        'Unlimited products',
        'Custom analytics & API access',
        'Advanced inventory & supply chain',
        'Dedicated account manager',
        'Multi-location + franchise tools',
        'Custom integrations',
        'SLA guarantee',
      ],
      highlighted: false,
      cta: 'Contact Sales',
    },
  ];
}
