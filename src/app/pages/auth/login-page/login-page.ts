import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLabel } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { CookieManagerService } from '../../../services/cookie-manager-service';
import { SnackbarService } from '../../../services/snackbar-service';

@Component({
  selector: 'app-login-page',
  imports: [
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router = inject(Router);
  authService = inject(AuthService);
  cookieManagerService = inject(CookieManagerService);
  snackbarService = inject(SnackbarService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  execute() {
    if (this.loginForm.invalid) {
      this.snackbarService.openSnackBar('Please fill in all required fields.', 'Close');
      return;
    }

    const credentials = {
      email: this.loginForm.get('email')?.value!,
      password: this.loginForm.get('password')?.value!,
    };

    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        // Backend wraps the token in StandardResponseDTO: { code, message, data: { token, ... } }
        const token = response?.data?.token;
        if (token) {
          this.cookieManagerService.setToken(token);
          this.snackbarService.openSnackBar('Login successful! Welcome back.', 'Close');
          this.router.navigateByUrl('/dashboard');
        } else {
          this.snackbarService.openSnackBar('Login failed: no token received.', 'Close');
        }
      },
      error: (err) => {
        console.log(err);
        const message = err?.error?.message || 'Invalid email or password.';
        this.snackbarService.openSnackBar(message, 'Close');
      },
    });
  }
}
