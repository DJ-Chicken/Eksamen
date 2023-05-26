import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookiesComponent } from './components/cookies/cookies.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Eksamen';
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      this.openCookieConsentDialog();
    }
  }

  openCookieConsentDialog(): void {
    this.dialog.open(CookiesComponent, {
      width: '400px',
    });
  }
}
