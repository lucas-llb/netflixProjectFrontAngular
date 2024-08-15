import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../components/common/spinner/spinner.component';
import { HeaderAuthComponent } from '../../components/common/header-auth/header-auth.component';
import { UserComponent } from '../../components/profile/user/user.component';
import { PasswordComponent } from '../../components/profile/password/password.component';
import { FooterComponent } from '../../components/common/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SpinnerComponent, HeaderAuthComponent, UserComponent, PasswordComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  form: string = 'userForm';
  loading: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('netflix-token')) {
      this.router.navigate(['/login']);
    } else {
      this.loading = false;
    }
  }

  setForm(formName: string): void {
    this.form = formName;
  }
}
