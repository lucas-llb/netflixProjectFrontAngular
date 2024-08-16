import { Component, Input } from '@angular/core';
import { SerieType } from '../../../services/serie.service';
import { SlideComponent } from '../../common/slide-component/slide-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slide-section',
  standalone: true,
  imports: [SlideComponent, RouterModule],
  templateUrl: './slide-section.component.html',
  styleUrl: './slide-section.component.scss'
})
export class SlideSectionComponent {
  @Input() newestSeries: SerieType[] = []
}
