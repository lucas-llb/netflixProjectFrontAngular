import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EpisodeService } from '../../services/episodes.service';
import { SerieService, SerieType } from '../../services/serie.service';
import { SpinnerComponent } from '../../components/common/spinner/spinner.component';
import { HeaderGenericComponent } from '../../components/common/header-generic/header-generic.component';
import { environment } from '../../environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [SpinnerComponent, RouterModule, HeaderGenericComponent, CommonModule],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit{
  serie: SerieType = {
    id: 0,
    name: '',
    synopsis: '',
    thumbnailUrl : '',
    episodes: [],
  };
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
    this.episodeOrder = parseFloat(this.route.snapshot.paramMap.get('order') || '');
    this.episodeId = parseFloat(this.route.snapshot.queryParamMap.get('episodeid') || '');
    this.serieId = this.route.snapshot.queryParamMap.get('serieid') || '';
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
        if (res.seconds !== null) {
          this.getEpisodeTime = res.seconds;
        }
      },
      error: () => {
        this.getEpisodeTime = 0;
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
        console.log(res)
        this.serie = res;
      }
    });
  }

  handlePlayerTime() {
    this.player.seekTo(this.getEpisodeTime);
    this.isReady = true;
  }

  handleLastEpisode() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([`/serie/episode/${this.episodeOrder - 1}`], { queryParams: { serieid: this.serie?.id, episodeid: this.serie!.episodes![this.episodeOrder - 1]?.id } })
    });
  }

  handleNextEpisode() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([`/serie/episode/${this.episodeOrder + 1}`], { queryParams: { serieid: this.serie?.id, episodeid: this.serie!.episodes![this.episodeOrder + 1]?.id } })
    });
    }

  handleVideoUpdate($event: Event){
    const video = $event.target as HTMLVideoElement;
    this.episodeTime = video.currentTime; 
  }

  mountSourceUrl(): string
  {
    return `${environment.BACKEND_API_URL}/episodes/stream?videoUrl=${this.serie!.episodes![this.episodeOrder].videoUrl}&token=${sessionStorage.getItem('netflix-token')}`
  }
}
