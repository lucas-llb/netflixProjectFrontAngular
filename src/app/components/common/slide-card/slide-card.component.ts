import { Component, Input } from '@angular/core';

interface SerieType {
  id: string;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
}

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./styles.module.scss']
})
export class SlideCardComponent {
  @Input() serie: SerieType;

  getThumbnailUrl(): string {
    return `${process.env.BACKEND_API_URL}/${this.serie.thumbnailUrl}`;
  }
}