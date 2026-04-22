import { Component, Inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { Product } from '../../../../../../dto/Product';

@Component({
  selector: 'app-product-update-dialog-component',
  imports: [MatIcon, ReactiveFormsModule, NgIf],
  templateUrl: './product-update-dialog-component.html',
  styleUrl: './product-update-dialog-component.scss',
})
export class ProductUpdateDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {
    this.form = this.fb.group({
      description: ['', [Validators.required]],
      qtyOnHand: [null, [Validators.required, Validators.min(0)]],
      unitPrice: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      description: this.data.description,
      qtyOnHand: this.data.qtyOnHand,
      unitPrice: this.data.unitPrice,
    });
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data, ...this.form.value });
    } else {
      this.form.markAllAsTouched();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
