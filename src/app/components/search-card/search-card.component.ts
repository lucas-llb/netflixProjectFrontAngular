import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../environment';

interface SerieType {
  id: number;
  thumbnailUrl: string;
  name: string;
  synopsis: string;
}

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
  imports: [RouterModule],
  standalone: true,
})
export class SearchCardComponent {
  @Input() serie: SerieType = {
    id: 0,
    name: '',
    synopsis: '',
    thumbnailUrl : '',
  };;

  constructor(private router: Router) {}

  navigateToSerie(): void {
    this.router.navigate([`/serie/${this.serie.id}`]);
  }
  
  mountSourceRoute(): string {
    return `${environment.BACKEND_API_URL}/${this.serie.thumbnailUrl}`
  }
}