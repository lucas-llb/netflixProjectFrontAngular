import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./styles.module.scss']
})
export class ToastComponent {
  @Input() isOpen: boolean;
  @Input() message: string;
  @Input() color: string;
}