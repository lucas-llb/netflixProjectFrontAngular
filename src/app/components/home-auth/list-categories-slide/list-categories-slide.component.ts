import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { SlideComponent } from '../../common/slide-component/slide-component.component';

@Component({
  selector: 'app-list-categories-slide',
  templateUrl: './list-categories-slide.component.html',
  styleUrls: ['./list-categories-slide.component.scss'],
  imports: [SpinnerComponent, SlideComponent],
  standalone: true,
})
export class ListCategoriesSlideComponent implements OnInit {
  @Input() categoryId!: number;
  @Input() categoryName!: string;
  data: any;
  error: any;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getSeries(this.categoryId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
