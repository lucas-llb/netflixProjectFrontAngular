import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-generic',
  templateUrl: './header-generic.component.html',
  styleUrls: ['./header-generic.component.scss'],
  imports: [RouterModule],
  standalone: true,
})
export class HeaderGenericComponent {
  @Input() logoUrl: string | undefined;
  @Input() btnUrl: string | undefined;
  @Input() btnContent: string | undefined;
}