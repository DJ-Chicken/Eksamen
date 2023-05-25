import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  employees = [
    {
      name: 'John Doe',
      position: 'CAO',
      img: '../../../assets/Images/Hologram.png',
      description: '(Chief Administrator Officer)',
    },
    {
      name: 'John Doe',
      position: 'CTO',
      img: '../../../assets/Images/Hologram.png',
      description: '(Chief Technology Officer)',
    },
    {
      name: 'John Doe',
      position: 'CLO',
      img: '../../../assets/Images/Hologram.png',
      description: '(Chief Learning Officer)',
    },
    {
      name: 'John Doe',
      position: 'CTO',
      img: `../../../assets/Images/Hologram.png`,
      description: '(Chief Technology Officer)',
    },
  ];
}
