import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../../services/serie.service';

@Component({
  selector: 'app-favorite-category',
  templateUrl: './favorite-category.component.html',
  styleUrls: ['./favorite-category.component.scss']
})
export class FavoriteCategoryComponent implements OnInit {
  data: any;
  error: any;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getFavorites().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
