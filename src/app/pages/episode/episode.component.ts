import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodeService } from '../../services/episodes.service';
import { SerieService, SerieType } from '../../services/serie.service';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit{
  serie: SerieType | undefined;
  episodeTime: number = 0;
  getEpisodeTime: number = 0;
  isReady: boolean = false;
  loading: boolean = true;
  episodeOrder: number;
  episodeId: number;
  serieId: string;

  @ViewChild('player') player: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService,
    private serieService: SerieService
  ) {
    this.episodeOrder = parseFloat(this.route.snapshot.paramMap.get('id') || '');
    this.episodeId = parseFloat(this.route.snapshot.paramMap.get('episodeid') || '');
    this.serieId = this.route.snapshot.paramMap.get('serieid') || '';
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('netflix-token')) {
      this.router.navigate(['/login']);
    } else {
      this.loading = false;
    }
    this.getSerie();
    this.handleGetEpisodeTime();
  }

  async handleGetEpisodeTime() {
    this.episodeService.getWatchTime(this.episodeId).subscribe({
      next: (res) => {
        if (res.data !== null) {
          this.getEpisodeTime = res.data.seconds;
        }
      }
    });    
  }

  async handleSetEpisodeTime() {
    this.episodeService.setWatchTime({
      episodeId: this.episodeId,
      seconds: Math.round(this.episodeTime)
    }).subscribe();
  }

  async getSerie() {
    if (typeof this.serieId !== 'string') return;
    this.serieService.getEpisodes(this.serieId).subscribe({
      next: (res) => {
        this.serie = res.data;
      }
    });
  }

  handlePlayerTime() {
    this.player.seekTo(this.getEpisodeTime);
    this.isReady = true;
  }

  handleLastEpisode() {
    this.router.navigate([`/serie/episode/${this.episodeOrder - 1}`], { queryParams: { serieid: this.serie?.id, episodeid: this.serie!.episodes![this.episodeOrder - 1]?.id } });
  }

  handleNextEpisode() {
    this.router.navigate([`/serie/episode/${this.episodeOrder + 1}`], { queryParams: { serieid: this.serie?.id, episodeid: this.serie!.episodes![this.episodeOrder + 1]?.id } });
  }
}
