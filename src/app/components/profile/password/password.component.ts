import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';
import { ToastComponent } from '../../common/toast/toast.component';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [ToastComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent implements OnInit{
  passwordForm: FormGroup;
  toastIsOpen = false;
  errorMessage = '';
  color = '';

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
  ) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  ngOnInit(): void {
    this.profileService.fetchCurrent().subscribe(password => {
      this.passwordForm.patchValue({
        currentPassword: password.currentPassword,
        newPassword: password.newPassword
      });
    });
  }

  async handlePasswordUpdate(): Promise<void> {
    if (this.passwordForm.invalid) {
      return;
    }

    const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;

    if (newPassword !== confirmPassword) {
      this.showToast('Passwords are not equal', 'bg-danger');
      return;
    }

    if (currentPassword === newPassword) {
      this.showToast('New password and current password are the same', 'bg-danger');
      return;
    }

    this.profileService.passwordUpdate({ currentPassword, newPassword }).subscribe({
      next: () => {
        this.showToast('Password updated', 'bg-success');
        this.passwordForm.reset();
        return;
      },
      error: () => {        
         this.showToast('Password incorrect', 'bg-danger');
      },
    });

  }

  private showToast(message: string, color: string): void {
    this.toastIsOpen = true;
    this.errorMessage = message;
    this.color = color;
    setTimeout(() => this.toastIsOpen = false, 3000);
  }
}
