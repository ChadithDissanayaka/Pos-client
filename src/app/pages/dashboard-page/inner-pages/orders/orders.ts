import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { Order } from '../../../../dto/Order';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DUMMY_ORDERS } from '../../../../dto/DummyData';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { OrderDetailDialogComponent } from './inner/order-detail-dialog-component/order-detail-dialog-component';

@Component({
  selector: 'app-orders',
  imports: [MatIcon, FormsModule, NgIf, NgForOf, CurrencyPipe, DatePipe, MatTooltip, MatPaginator],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  pagedOrders: Order[] = [];

  searchTerm = '';
  currentPage = 1;
  pageSize = 10;

  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.orders = [...DUMMY_ORDERS];
    this.filteredOrders = [...this.orders];
    this.updatePage();
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredOrders = this.orders.filter(
      (o) =>
        o.id.toString().includes(term) ||
        o.customerName.toLowerCase().includes(term) ||
        o.date.includes(term) ||
        o.orderCost.toString().includes(term),
    );
    this.currentPage = 1;
    this.updatePage();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.onSearch();
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.updatePage();
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedOrders = this.filteredOrders.slice(start, start + this.pageSize);
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  placeOrder(): void {
    this.router.navigate(['/dashboard/place-order']);
  }

  viewOrderDetails(order: Order): void {
    this.dialog.open(OrderDetailDialogComponent, {
      width: '680px',
      maxHeight: '90vh',
      panelClass: 'custom-dialog',
      data: order,
    });
  }

  deleteOrder(id: number): void {
    this.orders = this.orders.filter((o) => o.id !== id);
    this.onSearch();
  }
}

