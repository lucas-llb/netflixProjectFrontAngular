import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../../services/serie.service';

@Component({
  selector: 'app-featured-category',
  templateUrl: './featured-category.component.html',
  styleUrls: ['./featured-category.component.scss']
})
export class FeaturedCategoryComponent implements OnInit {
  data: any;
  error: any;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getFeaturedSeries().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
