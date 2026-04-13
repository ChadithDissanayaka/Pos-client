import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../../dto/Customer';
import { PageEvent } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DUMMY_CUSTOMERS } from '../../../../dto/DummyData';
import { CustomerCreateDialogComponent } from './inner/customer-create-dialog-component/customer-create-dialog-component';
import { CustomerUpdateDialogComponent } from './inner/customer-update-dialog-component/customer-update-dialog-component';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [MatIcon, FormsModule, NgIf, NgForOf, CurrencyPipe, MatTooltip, MatPaginator],
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
})
export class Customers implements OnInit {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  pagedCustomers: Customer[] = [];

  searchTerm = '';
  currentPage = 1;
  pageSize = 10;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.customers = [...DUMMY_CUSTOMERS];
    this.filteredCustomers = [...this.customers];
    this.updatePage();
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredCustomers = this.customers.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.address.toLowerCase().includes(term) ||
        c.salary.toString().includes(term)
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
    this.pagedCustomers = this.filteredCustomers.slice(start, start + this.pageSize);
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  openCreateDialog(): void {
    const ref = this.dialog.open(CustomerCreateDialogComponent, {
      width: '480px',
      panelClass: 'custom-dialog',
    });
    ref.afterClosed().subscribe((result: Customer | undefined) => {
      if (result) {
        const newId = Math.max(...this.customers.map((c) => c.id)) + 1;
        const newCustomer = { ...result, id: newId };
        this.customers.unshift(newCustomer);
        this.onSearch();
      }
    });
  }

  openUpdateDialog(customer: Customer): void {
    const ref = this.dialog.open(CustomerUpdateDialogComponent, {
      width: '480px',
      panelClass: 'custom-dialog',
      data: { ...customer },
    });
    ref.afterClosed().subscribe((result: Customer | undefined) => {
      if (result) {
        const idx = this.customers.findIndex((c) => c.id === result.id);
        if (idx !== -1) {
          this.customers[idx] = result;
          this.onSearch();
        }
      }
    });
  }

  deleteCustomer(id: number): void {
    this.customers = this.customers.filter((c) => c.id !== id);
    this.onSearch();
  }
}
