import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { ListCategoriesSlideComponent } from '../list-categories-slide/list-categories-slide.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
  imports: [SpinnerComponent, ListCategoriesSlideComponent, CommonModule],
  standalone: true,
})
export class ListCategoryComponent implements OnInit {
  data: any;
  error: any;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
