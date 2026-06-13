import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { CookieManagerService } from '../../../services/cookie-manager-service';
import { AlertService } from '../../../shared/alert/alert.service';
import { AlertComponent } from '../../../shared/alert/alert.component';

@Component({
  selector: 'app-login-page',
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
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router = inject(Router);
  authService = inject(AuthService);
  cookieManagerService = inject(CookieManagerService);
  alertService = inject(AlertService);

  loading = signal(false);
  showPassword = signal(false);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  execute() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.alertService.warning('Please fill in all required fields.');
      return;
    }

    this.loading.set(true);

    const credentials = {
      email: this.loginForm.get('email')?.value!,
      password: this.loginForm.get('password')?.value!,
    };

    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        const token = response?.data?.token;
        if (token) {
          this.cookieManagerService.setToken(token);
          this.alertService.success('Login successful! Welcome back.');
          setTimeout(() => this.router.navigateByUrl('/dashboard'), 800);
        } else {
          this.alertService.error('Login failed: no token received.');
          this.loading.set(false);
        }
      },
      error: (err) => {
        const message = err?.error?.message || 'Invalid email or password.';
        this.alertService.error(message);
        this.loading.set(false);
      },
    });
  }
}
