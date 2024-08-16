import { Component, OnInit } from '@angular/core';
import { SerieService, SerieType } from '../../services/serie.service';
import { HeaderNoAuthComponent } from '../../components/home-no-auth/header-no-auth/header-no-auth.component';
import { PresentationSectionComponent } from '../../components/home-no-auth/presentation-section/presentation-section.component';
import { CardSectionComponent } from '../../components/home-no-auth/card-section/card-section.component';
import { SlideSectionComponent } from '../../components/home-no-auth/slide-section/slide-section.component';
import { FooterComponent } from '../../components/common/footer/footer.component';

@Component({
  selector: 'app-home-no-auth',
  templateUrl: './home-no-auth.component.html',
  styleUrls: ['./home-no-auth.component.scss'],
  standalone: true,
  imports: [ HeaderNoAuthComponent, PresentationSectionComponent, CardSectionComponent, SlideSectionComponent, FooterComponent]

})
export class HomeNoAuthComponent implements OnInit {
  serie: SerieType[] = [];

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getNewestSeries().subscribe((data: SerieType[]) => {
      this.serie = data;
    });
  }
}
