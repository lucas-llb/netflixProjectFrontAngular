import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../../services/serie.service';
import { SlideComponent } from '../../common/slide-component/slide-component.component';
import { SpinnerComponent } from '../../common/spinner/spinner.component';

@Component({
  selector: 'app-featured-category',
  templateUrl: './featured-category.component.html',
  styleUrls: ['./featured-category.component.scss'],
  imports: [SpinnerComponent, SlideComponent ],
  standalone: true,
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
