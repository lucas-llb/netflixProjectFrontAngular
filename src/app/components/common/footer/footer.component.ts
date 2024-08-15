import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <img src="/logoOnebitcode.svg" alt="logoFooter" class="footerLogo"/>
      <a href="http://someSite.com" target="_blank" class="footerLink">Some Site</a>
    </div>
  `,
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent {
}