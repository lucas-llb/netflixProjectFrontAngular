import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HeaderGenericComponent } from '../../components/common/header-generic/header-generic.component';
import { ToastComponent } from '../../components/common/toast/toast.component';
import { FooterComponent } from '../../components/common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [HeaderGenericComponent, FormsModule, ToastComponent, FooterComponent, RouterModule, ReactiveFormsModule],
  animations: [BrowserAnimationsModule],
  standalone: true,
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
  }
  
  async handleLogin(): Promise<void> {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe({
        next: ({token}) => {
          sessionStorage.setItem('netflix-token', token);
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
