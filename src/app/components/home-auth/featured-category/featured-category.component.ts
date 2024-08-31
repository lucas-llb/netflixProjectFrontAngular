import { Component, OnInit } from '@angular/core';
import { SerieService, SerieType } from '../../../services/serie.service';
import { SlideComponent } from '../../common/slide-component/slide-component.component';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-category',
  templateUrl: './featured-category.component.html',
  styleUrls: ['./featured-category.component.scss'],
  imports: [SpinnerComponent, SlideComponent, CommonModule],
  standalone: true,
})
export class FeaturedCategoryComponent implements OnInit {
  data: SerieType[] = [];
  error: any;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getFeaturedSeries().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        this.error = error;
      }
    });
  }
}
