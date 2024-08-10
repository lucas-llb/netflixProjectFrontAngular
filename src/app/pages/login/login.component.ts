import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  toastColor: string = '';
  toastIsOpen: boolean = false;
  toastMessage: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('netflix-token')) {
      this.router.navigate(['/home']);
    }

    const registerSuccess =
      this.router.getCurrentNavigation()?.extras.state?.registered;
    if (registerSuccess === 'true') {
      this.showToast('bg-success', 'Register successful!');
    }
  }

  async handleLogin(): Promise<void> {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: () => {
          this.showToast('bg-danger', 'E-mail or password incorrect!');
        },
      });
    }
  }

  showToast(color: string, message: string): void {
    this.toastColor = color;
    this.toastMessage = message;
    this.toastIsOpen = true;
    setTimeout(() => {
      this.toastIsOpen = false;
    }, 3000);
  }
}
