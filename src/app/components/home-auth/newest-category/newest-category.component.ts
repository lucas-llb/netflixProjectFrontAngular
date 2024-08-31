import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../../services/serie.service';
import { SlideComponent } from '../../common/slide-component/slide-component.component';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-newest-category',
  templateUrl: './newest-category.component.html',
  styleUrls: ['./newest-category.component.scss'],
  imports: [SpinnerComponent, SlideComponent, CommonModule],
  standalone: true,
})
export class NewestCategoryComponent implements OnInit {
  data: any;
  error: any;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getNewestSeries().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        this.error = error;
      }
    });
  }
}
