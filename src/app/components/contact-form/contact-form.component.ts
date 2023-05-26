import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  category: string | undefined;

  submitForm() {
    console.log(`Form submitted:`, {
      name: this.name,
      email: this.email,
      message: this.message,
      category: this.category,
    });
  }
}
