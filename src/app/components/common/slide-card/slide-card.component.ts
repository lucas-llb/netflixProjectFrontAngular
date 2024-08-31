import { Component, Input, OnInit } from '@angular/core';
import { SerieType } from '../../../services/serie.service';
import { environment } from '../../../environment';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class SlideCardComponent implements OnInit {
  @Input() serie: SerieType= {
    id: 0,
    name: '',
    synopsis: '',
    thumbnailUrl : '',
    episodes: [],
  };
  
  url = '';
  
  ngOnInit(): void {
    this.url = `${environment.BACKEND_API_URL}${this.serie?.thumbnailUrl}`;
  }

  getThumbnailUrl(): string {
    return `${environment.BACKEND_API_URL}${this.serie?.thumbnailUrl}`;
  }
}