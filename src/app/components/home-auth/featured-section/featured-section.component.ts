import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../../services/serie.service';
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { HeaderAuthComponent } from '../../common/header-auth/header-auth.component';

@Component({
  selector: 'app-featured-section',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.scss'],
  imports: [SpinnerComponent, HeaderAuthComponent],
  standalone: true,
})
export class FeaturedSectionComponent implements OnInit {
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
