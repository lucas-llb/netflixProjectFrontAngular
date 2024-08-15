import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../components/common/spinner/spinner.component';
import { FeaturedSectionComponent } from '../../components/home-auth/featured-section/featured-section.component';
import { NewestCategoryComponent } from '../../components/home-auth/newest-category/newest-category.component';
import { FavoriteCategoryComponent } from '../../components/home-auth/favorite-category/favorite-category.component';
import { FeaturedCategoryComponent } from '../../components/home-auth/featured-category/featured-category.component';
import { ListCategoryComponent } from '../../components/home-auth/list-categories/list-categories.component';
import { FooterComponent } from '../../components/common/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-auth',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    SpinnerComponent,
    FeaturedSectionComponent,
    NewestCategoryComponent,
    FavoriteCategoryComponent,
    FeaturedCategoryComponent,
    ListCategoryComponent,
    FooterComponent,
    RouterModule,
    CommonModule
  ],
  standalone: true,
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
