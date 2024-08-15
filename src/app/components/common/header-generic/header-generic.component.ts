import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-generic',
  templateUrl: './header-generic.component.html',
  styleUrls: ['./styles.module.scss'],
  standalone: true,
})
export class HeaderGenericComponent {
  @Input() logoUrl: string | undefined;
  @Input() btnUrl: string | undefined;
  @Input() btnContent: string | undefined;
}