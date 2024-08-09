import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../../services/serie.service';


@Component({
  selector: 'app-newest-category',
  templateUrl: './newest-category.component.html',
  styleUrls: ['./newest-category.component.scss']
})
export class NewestCategoryComponent implements OnInit {
  data: any;
  error: any;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getNewestSeries().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
