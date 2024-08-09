import { Component, Input, OnInit } from '@angular/core';
import { SerieType } from '../../../services/serie.service';


@Component({
  selector: 'app-slide-component',
  templateUrl: './slide-component.component.html',
  styleUrls: ['./styles.module.scss']
})
export class SlideComponent implements OnInit {
  @Input() serie: SerieType[] | undefined;
  slideCount: number = 0;

  ngOnInit(): void {
    this.setSlideCount();
  }

  setSlideCount(): void {
    if (this.serie!.length > 4) {
      this.slideCount = 4;
    } else if (this.serie) {
      this.slideCount = this.serie.length;
    }
  }
}