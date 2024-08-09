import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { SerieService, SerieType } from '../../services/serie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchName: string | undefined;
  searchResult: SerieType[] = [];
  loading: boolean = true;

  constructor(private router: Router, private serieService: SerieService, private http: HttpClient) {}

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
