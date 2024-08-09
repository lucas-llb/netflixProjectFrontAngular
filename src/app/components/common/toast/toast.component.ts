import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./styles.module.scss']
})
export class ToastComponent {
  @Input() isOpen: boolean | undefined;
  @Input() message: string | undefined;
  @Input() color: string | undefined;
}