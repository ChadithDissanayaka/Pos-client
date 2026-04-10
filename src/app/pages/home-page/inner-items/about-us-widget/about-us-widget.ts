import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-widget',
  imports: [],
  templateUrl: './about-us-widget.html',
  styleUrl: './about-us-widget.scss',
})
export class AboutUsWidget {
  features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Process transactions in under 2 seconds with our optimized checkout flow.',
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Track sales, inventory, and customer trends with live dashboards.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime and encrypted transactions.',
    },
    {
      icon: '🔗',
      title: 'Seamless Integrations',
      description: 'Connect with payment gateways, accounting tools, and e-commerce platforms.',
    },
  ];
}
