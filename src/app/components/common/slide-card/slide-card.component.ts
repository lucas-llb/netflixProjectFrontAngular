import { Component, Input } from '@angular/core';
import { SerieType } from '../../../services/serie.service';
import { environment } from '../../../environment';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./styles.module.scss'],
  standalone: true,
})
export class SlideCardComponent {
  @Input() serie: SerieType | undefined;

  getThumbnailUrl(): string {
    return `${environment.BACKEND_API_URL}/${this.serie?.thumbnailUrl}`;
  }
}