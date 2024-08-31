import { Component, OnInit } from '@angular/core';
import { SerieService, SerieType } from '../../../services/serie.service';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { HeaderAuthComponent } from '../../common/header-auth/header-auth.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environment';

@Component({
  selector: 'app-featured-section',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.scss'],
  imports: [SpinnerComponent, HeaderAuthComponent, RouterModule, CommonModule],
  standalone: true,
})
export class FeaturedSectionComponent implements OnInit {
  data: SerieType[] = [];
  error: any;
  backendApiUrl = environment.BACKEND_API_URL;

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
