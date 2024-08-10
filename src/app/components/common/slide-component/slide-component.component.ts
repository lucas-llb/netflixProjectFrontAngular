import { Component, Input, OnInit } from '@angular/core';
import { SerieType } from '../../../services/serie.service';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-slide-component',
  templateUrl: './slide-component.component.html',
  styleUrls: ['./styles.module.scss']
})
export class SlideComponent implements OnInit {
  @Input() serie: SerieType[] | undefined;
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

  constructor(private primengConfig: PrimeNGConfig) {}
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
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