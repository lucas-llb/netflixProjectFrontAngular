import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container" [ngClass]="styles.footer">
      <img src="/logoOnebitcode.svg" alt="logoFooter" [ngClass]="styles.footerLogo"/>
      <a href="http://someSite.com" target="_blank" [ngClass]="styles.footerLink">Some Site</a>
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  styles = require('./styles.module.scss');
}