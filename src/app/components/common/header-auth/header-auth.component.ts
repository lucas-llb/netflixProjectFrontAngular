import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '@/services/profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./styles.module.scss']
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
    this.profileService.fetchCurrent().then(user => {
      const firstNameInitial = user.data.firstName.slice(0, 1);
      const lastNameInitial = user.data.lastName.slice(0, 1);
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