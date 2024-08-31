import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EpisodeType, SerieType } from '../../services/serie.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
  imports: [RouterModule],
  standalone: true,
})
export class EpisodeListComponent {
  @Input() episode!: EpisodeType;
  @Input() serie!: SerieType;

  constructor(private router: Router) {}

  handleSecondsToMinutes(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const toString = (num: number) => num.toString().padStart(2, '0');
    return `${toString(minutes)}:${toString(seconds)}`;
  }

  handleEpisodePlayer(): void {
    this.router.navigate([`/serie/episode/${this.episode.order}`], {
      queryParams: { serieid: this.serie.id, episodeid: this.episode.id }
    });
  }
}