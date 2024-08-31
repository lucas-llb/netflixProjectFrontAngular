import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss'],
  imports: [ FormsModule, RouterModule, ReactiveFormsModule ],
  standalone: true,
})
export class HeaderAuthComponent implements OnInit {
  modalOpen = false;
  initials = '';
  searchName = '';
  searchForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private profileService: ProfileService,
    private modalService: NgbModal
  ) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.profileService.fetchCurrent().subscribe(user => {
      const firstNameInitial = user.firstName.slice(0, 1);
      const lastNameInitial = user.lastName.slice(0, 1);
      this.initials = firstNameInitial + lastNameInitial;
    });
  }

  handleSearch(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/search'], { queryParams: { name: this.searchName } });
    this.searchName = '';
  }

  handleSearchClick(): void {
    this.router.navigate(['/search'], { queryParams: { name: this.searchName } });
    this.searchName = '';
  }

  handleOpenModal(content: any): void {
    this.modalService.open(content);
  }

  handleCloseModal(): void {
    this.modalService.dismissAll();
  }

  handleLogout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}