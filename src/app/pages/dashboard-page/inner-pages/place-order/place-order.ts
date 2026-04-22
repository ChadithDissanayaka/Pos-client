import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../../dto/Customer';
import { Product } from '../../../../dto/Product';
import { DUMMY_CUSTOMERS, DUMMY_PRODUCTS } from '../../../../dto/DummyData';
import { Router } from '@angular/router';
import { OrderItem } from '../../../../dto/OrderItem';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-place-order',
  imports: [MatIcon, FormsModule, NgIf, NgForOf, CurrencyPipe],
  templateUrl: './place-order.html',
  styleUrl: './place-order.scss',
})
export class PlaceOrder implements OnInit {
  allCustomers: Customer[] = [];
  allProducts: Product[] = [];

  filteredCustomers: Customer[] = [];
  filteredProducts: Product[] = [];

  customerSearch = '';
  productSearch = '';

  selectedCustomer: Customer | null = null;
  qtyMap: Map<number, number> = new Map();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.allCustomers = [...DUMMY_CUSTOMERS];
    this.allProducts = [...DUMMY_PRODUCTS];
    this.filteredCustomers = [...this.allCustomers];
    this.filteredProducts = [...this.allProducts];
  }

  filterCustomers(): void {
    const term = this.customerSearch.toLowerCase();
    this.filteredCustomers = this.allCustomers.filter(
      (c) => c.name.toLowerCase().includes(term) || c.address.toLowerCase().includes(term),
    );
  }

  filterProducts(): void {
    const term = this.productSearch.toLowerCase();
    this.filteredProducts = this.allProducts.filter((p) =>
      p.description.toLowerCase().includes(term),
    );
  }

  selectCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  getQty(productId: number): number {
    return this.qtyMap.get(productId) ?? 0;
  }

  increaseQty(product: Product): void {
    const current = this.getQty(product.id);
    this.qtyMap.set(product.id, current + 1);
  }

  decreaseQty(product: Product): void {
    const current = this.getQty(product.id);
    if (current > 0) {
      this.qtyMap.set(product.id, current - 1);
    }
  }

  get orderItems(): OrderItem[] {
    const items: OrderItem[] = [];
    this.qtyMap.forEach((qty, productId) => {
      if (qty > 0) {
        const product = this.allProducts.find((p) => p.id === productId);
        if (product) {
          items.push({
            productId: product.id,
            productDescription: product.description,
            qty,
            unitPrice: product.unitPrice,
          });
        }
      }
    });
    return items;
  }

  get orderTotal(): number {
    return this.orderItems.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  }

  submitOrder(): void {
    if (!this.selectedCustomer || this.orderItems.length === 0) return;
    // In a real app, save the order to a service here
    alert(`Order placed successfully for ${this.selectedCustomer.name}!`);
    this.router.navigate(['/dashboard/orders']);
  }

  goBack(): void {
    this.router.navigate(['/dashboard/orders']);
  }
}

