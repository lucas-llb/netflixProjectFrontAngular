import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface SerieType {
  id: number;
  thumbnailUrl: string;
  name: string;
  synopsis: string;
}

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {
  @Input() serie!: SerieType;

  constructor(private router: Router) {}

  navigateToSerie(): void {
    this.router.navigate([`/serie/${this.serie.id}`]);
  }
}