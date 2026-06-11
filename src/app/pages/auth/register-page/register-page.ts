import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatLabel } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { SnackbarService } from '../../../services/snackbar-service';
import { AuthService } from '../../../services/auth-service';
import { RegisterData } from '../../../dto/auth/AuthData';

// Password must have uppercase, lowercase, digit, and special char (@$!%*?&)
function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  return value.length >= 8 && pattern.test(value) ? null : { weakPassword: true };
}

@Component({
  selector: 'app-register-page',
  imports: [
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  router = inject(Router);
  snackbarService = inject(SnackbarService);
  authService = inject(AuthService);

  form = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
      Validators.pattern(/^[a-zA-Z\s'-]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(150)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(128),
      strongPasswordValidator,
    ]),
  });

  execute() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackbarService.openSnackBar('Please check all the fields.', 'Close');
      return;
    }

    const user: RegisterData = {
      fullName: this.form.get('fullName')?.value!,
      email: this.form.get('email')?.value!,
      password: this.form.get('password')?.value!,
    };

    this.authService.register(user).subscribe({
      complete: () => {
        this.snackbarService.openSnackBar('Registration successful! Please login.', 'Close');
        this.router.navigateByUrl('/home/login');
      },
      error: (err) => {
        const message = err?.error?.message || 'Registration failed. Please try again.';
        this.snackbarService.openSnackBar(message, 'Close');
      },
    });
  }
}
