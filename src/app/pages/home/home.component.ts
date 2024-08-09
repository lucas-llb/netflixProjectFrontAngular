import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('netflix-token')) {
      this.router.navigate(['/login']);
    } else {
      this.loading = false;
    }
  }
}
