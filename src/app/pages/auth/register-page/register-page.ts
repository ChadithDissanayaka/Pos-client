import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '../../../shared/alert/alert.service';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { AuthService } from '../../../services/auth-service';
import { RegisterData } from '../../../dto/auth/AuthData';

function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  return value.length >= 8 && pattern.test(value) ? null : { weakPassword: true };
}

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    AlertComponent,
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  router = inject(Router);
  alertService = inject(AlertService);
  authService = inject(AuthService);

  loading = signal(false);
  showPassword = signal(false);

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
      this.alertService.warning('Please check all the fields before submitting.');
      return;
    }

    this.loading.set(true);

    const user: RegisterData = {
      fullName: this.form.get('fullName')?.value!,
      email: this.form.get('email')?.value!,
      password: this.form.get('password')?.value!,
    };

    this.authService.register(user).subscribe({
      complete: () => {
        this.alertService.success('Registration successful! Please login.');
        setTimeout(() => this.router.navigateByUrl('/home/login'), 1000);
      },
      error: (err) => {
        const message = err?.error?.message || 'Registration failed. Please try again.';
        this.alertService.error(message);
        this.loading.set(false);
      },
    });
  }
}
