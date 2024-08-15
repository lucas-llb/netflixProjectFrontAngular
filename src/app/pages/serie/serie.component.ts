import { Component, OnInit } from '@angular/core';
import { SerieService, SerieType } from '../../services/serie.service';
import { environment } from '../../environment';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../components/common/spinner/spinner.component';
import { HeaderAuthComponent } from '../../components/common/header-auth/header-auth.component';
import { EpisodeListComponent } from '../../components/episode-list/episode-list.component';
import { FooterComponent } from '../../components/common/footer/footer.component';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [SpinnerComponent, HeaderAuthComponent, EpisodeListComponent, FooterComponent, RouterModule, ],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.scss'
})
export class SerieComponent implements OnInit {
  serie: SerieType | undefined;
  liked = false;
  favorited = false;
  loading = true;
  backendApiUrl = environment.BACKEND_API_URL;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serieService: SerieService
  ) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('netflix-token')) {
      this.router.navigate(['/login']);
    } else {
      this.loading = false;
    }

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getSerie(id);
      }
    });
  }

  async getSerie(id: string): Promise<void> {
    this.serieService.getEpisodes(id).subscribe({
      next: (res) => {
        this.serie = res.data;
        this.liked = res.data.liked;
        this.favorited = res.data.favorited;
      }
    });
  }

  async handleLikeSerie(): Promise<void> {
    if (this.liked) {
      this.serieService.removeLike(this.serie!.id).subscribe({
        next: () => {
          this.liked = false;
        }
      });
    } else {
      this.serieService.addLike(this.serie!.id).subscribe({
        next: () => {
          this.liked = true;
        }
      });
    }
  }

  async handleFavoriteSerie(): Promise<void> {
    if (this.favorited) {
      this.serieService.removeFavorite(this.serie!.id).subscribe({
        next: () => {
          this.favorited = false;
        }
      });
    } else {
      this.serieService.addToFavorite(this.serie!.id).subscribe({
        next: () => {
          this.favorited = true;
        }
      });
    }
  }

  watchNow(): void {
    // Implement watch now functionality
  }
}
