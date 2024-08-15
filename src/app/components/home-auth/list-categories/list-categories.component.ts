import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { ListCategoriesSlideComponent } from '../list-categories-slide/list-categories-slide.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
  imports: [SpinnerComponent, ListCategoriesSlideComponent],
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
