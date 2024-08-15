import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SerieService, SerieType } from '../../services/serie.service';
import { SpinnerComponent } from '../../components/common/spinner/spinner.component';
import { HeaderAuthComponent } from '../../components/common/header-auth/header-auth.component';
import { SearchCardComponent } from '../../components/search-card/search-card.component';
import { FooterComponent } from '../../components/common/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [SpinnerComponent, HeaderAuthComponent, SearchCardComponent, FooterComponent, RouterModule, CommonModule],
})
export class SearchComponent implements OnInit {
  searchName: string | null = null;
  searchResult: SerieType[] = [];
  loading: boolean = true;

  constructor(private router: Router, private serieService: SerieService) {}

  async searchSeries() {
    if (this.searchName) {
      this.serieService.getSearch(this.searchName).subscribe({
        next: (res) => {
          this.searchResult = res.data.series;
        }
      });
    }
  }

  ngOnInit() {
    this.searchName = this.router.url.split('?name=')[1];
    this.searchSeries();

    if (!sessionStorage.getItem('netflix-token')) {
      this.router.navigate(['/login']);
    } else {
      this.loading = false;
    }
  }
}
