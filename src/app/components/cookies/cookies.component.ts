import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
})
export class CookiesComponent {
  constructor(private dialogRef: MatDialogRef<CookiesComponent>) {}

  accept(): void {
    this.dialogRef.close();
  }
}
