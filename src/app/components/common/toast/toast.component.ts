import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast',
  template: `<p-toast></p-toast>`,
  styles: [`
    :host ::ng-deep .p-toast {
      position: fixed;
      top: 1rem;
      right: 1rem;
    }
  `],
  standalone: true,
  imports: [ToastModule],
  providers: [MessageService]
})
export class ToastComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() message: string = '';
  @Input() color: string = '';

  constructor(private messageService: MessageService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && this.isOpen) {
      this.showToast();
    }
  }

  showToast() {
    this.messageService.add({
      severity: this.color,
      summary: 'Notification',
      detail: this.message,
      life: 3000
    });
  }
}
