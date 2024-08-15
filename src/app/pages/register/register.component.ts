import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HeaderGenericComponent } from '../../components/common/header-generic/header-generic.component';
import { FooterComponent } from '../../components/common/footer/footer.component';
import { ToastComponent } from '../../components/common/toast/toast.component';


@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [HeaderGenericComponent, FooterComponent, ToastComponent, FormsModule, RouterModule, ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  toastIsOpen: boolean = false;
  toastMessage: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(20)]],
      birth: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('netflix-token')) {
      this.router.navigate(['/home']);
    }
  }

  async handleRegister(): Promise<void> {
    if (this.registerForm.invalid) {
      return;
    }

    const { password, confirmPassword, ...params } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.showToast('Passwords are different');
      return;
    }

    this.authService.register(params).subscribe({
      next:() => {
        this.router.navigate(['/login'], { queryParams: { registered: true } });
      },
      error: (err) => {
        this.showToast(err.error.message);

      }
    });
  }

  private showToast(message: string): void {
    this.toastMessage = message;
    this.toastIsOpen = true;
    setTimeout(() => {
      this.toastIsOpen = false;
    }, 3000);
  }
}
