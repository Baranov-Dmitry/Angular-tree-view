import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tree-View';
  userName = 'username';

  constructor(
    private router: Router,
    public auth: AuthService) {
  }

  logout($event: MouseEvent): void {
    $event.preventDefault();
    this.auth.logout();
    this.router.navigate(['']);
  }
}
