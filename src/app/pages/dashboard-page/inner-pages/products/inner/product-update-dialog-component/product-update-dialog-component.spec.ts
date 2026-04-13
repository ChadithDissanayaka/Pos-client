import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateDialogComponent } from './product-update-dialog-component';

describe('ProductUpdateDialogComponent', () => {
  let component: ProductUpdateDialogComponent;
  let fixture: ComponentFixture<ProductUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductUpdateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductUpdateDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
