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
      img: '../../../assets/Images/Person.png',
      description: '(Chief Administrator Officer)',
    },
    {
      name: 'John Doe',
      position: 'CTO',
      img: '../../../assets/Images/Person.png',
      description: '(Chief Technology Officer)',
    },
    {
      name: 'John Doe',
      position: 'CLO',
      img: '../../../assets/Images/Person.png',
      description: '(Chief Learning Officer)',
    },
    {
      name: 'John Doe',
      position: 'CTO',
      img: `../../../assets/Images/Person.png`,
      description: '(Chief Technology Officer)',
    },
    {
      name: 'John Doe',
      position: 'CTO',
      img: `../../../assets/Images/Person.png`,
      description: '(Chief Technology Officer)',
    },
    {
      name: 'John Doe',
      position: 'CTO',
      img: `../../../assets/Images/Person.png`,
      description: '(Chief Technology Officer)',
    },
  ];
}
