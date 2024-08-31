import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../../services/serie.service';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { SlideComponent } from '../../common/slide-component/slide-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-category',
  templateUrl: './favorite-category.component.html',
  styleUrls: ['./favorite-category.component.scss'],
  imports: [SpinnerComponent, SlideComponent, CommonModule],
  standalone: true,
})
export class FavoriteCategoryComponent implements OnInit {
  data: any;
  error: any;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getFavorites().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        this.error = error;
      }
    });
  }
}
