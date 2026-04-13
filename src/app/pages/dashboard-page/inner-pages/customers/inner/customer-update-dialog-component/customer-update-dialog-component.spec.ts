import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUpdateDialogComponent } from './customer-update-dialog-component';

describe('CustomerUpdateDialogComponent', () => {
  let component: CustomerUpdateDialogComponent;
  let fixture: ComponentFixture<CustomerUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerUpdateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerUpdateDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
