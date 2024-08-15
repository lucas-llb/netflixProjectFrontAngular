import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-page-spinner',
  template: `
    <div class="vh-100 bg-dark d-flex justify-content-center align-items-center">
      <p-progressSpinner strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"></p-progressSpinner>
    </div>
  `,
  styles: [`
    .vh-100 {
      height: 100vh;
    }
    .bg-dark {
      background-color: #343a40;
    }
    .d-flex {
      display: flex;
    }
    .justify-content-center {
      justify-content: center;
    }
    .align-items-center {
      align-items: center;
    }
  `],
  standalone: true,
  imports: [ ProgressSpinnerModule]
})
export class SpinnerComponent {}