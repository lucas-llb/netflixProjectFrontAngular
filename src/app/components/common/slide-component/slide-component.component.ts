import { Component, Input, OnInit } from '@angular/core';
import { SerieType } from '../../../services/serie.service';
import { CarouselModule } from 'primeng/carousel';
import { SlideCardComponent } from '../slide-card/slide-card.component';


@Component({
  selector: 'app-slide-component',
  templateUrl: './slide-component.component.html',
  styleUrls: ['./slide-component.component.scss'],
  imports: [CarouselModule, SlideCardComponent],
  standalone: true,
})
export class SlideComponent implements OnInit {
  @Input() serie: SerieType[] = [];
  slideCount: number = 0;
  responsiveOptions: any[] = [
    {
      breakpoint: '1200px',
      numVisible: this.slideCount >= 2 ? 2 : 1,
      numScroll: 1
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '300px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor() {}
  
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