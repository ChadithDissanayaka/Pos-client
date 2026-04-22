import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-create-dialog-component',
  imports: [MatIcon, ReactiveFormsModule, NgIf],
  templateUrl: './product-create-dialog-component.html',
  styleUrl: './product-create-dialog-component.scss',
})
export class ProductCreateDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductCreateDialogComponent>,
  ) {
    this.form = this.fb.group({
      description: ['', [Validators.required]],
      qtyOnHand: [null, [Validators.required, Validators.min(0)]],
      unitPrice: [null, [Validators.required, Validators.min(0)]],
    });
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
