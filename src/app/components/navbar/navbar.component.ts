import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  socials = [
    {
      name: 'Twitter',
      position: 'CLO',
      img: '../../../assets/Images/twitter.svg',
      description: '(Chief Learning Officer)',
    },
    {
      name: 'LinkedIn',
      position: 'CTO',
      img: `../../../assets/Images/linkedin.svg`,
      description: '(Chief Technology Officer)',
    },

    {
      name: 'Instagram',
      img: '../../../assets/Images/instagram.svg',
      description: 'Instagram',
    },
    {
      name: 'Facebook',
      img: '../../../assets/Images/facebook.svg',
      description: 'Facebook',
    },
  ];
}
