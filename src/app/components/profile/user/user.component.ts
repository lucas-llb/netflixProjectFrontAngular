import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';
import { ToastComponent } from '../../common/toast/toast.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ToastComponent, ToastModule, FormsModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userForm: FormGroup;
  color: string = '';
  toastIsOpen: boolean = false;
  errorMessage: string = '';
  initialEmail: string = '';
  createdAt: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private profileService: ProfileService
  ) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      created_at: [''],
    });
  }

  ngOnInit(): void {
    this.profileService.fetchCurrent().subscribe((user) => {
      this.userForm.patchValue({
        firstName: user.data.firstName,
        lastName: user.data.lastName,
        phone: user.data.phone,
        email: user.data.email,
        created_at: user.data.createdAt,
      });
      this.initialEmail = user.data.email;
      this.createdAt = user.data.createdAt;
    });
  }

  handleUserUpdate(): void {
    if (this.userForm.valid) {
      this.profileService.userUpdate(this.userForm.value).subscribe({
        next: () => {
          this.showToast('User updated!', 'bg-success text-light');
          if (this.userForm.value.email !== this.initialEmail) {
            sessionStorage.clear();
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.showToast(err.error.message, 'bg-danger text-light');
        },
      });
    }
  }

  private showToast(message: string, color: string): void {
    this.errorMessage = message;
    this.toastIsOpen = true;
    this.color = color;
    setTimeout(() => {
      this.toastIsOpen = false;
    }, 3000);
  }
}
