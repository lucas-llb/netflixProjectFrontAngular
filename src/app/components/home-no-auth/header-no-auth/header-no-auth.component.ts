import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-no-auth',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-no-auth.component.html',
  styleUrl: './header-no-auth.component.scss'
})
export class HeaderNoAuthComponent {

}
