import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../service/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  @Input() employees!: any;

  constructor() {}

  ngOnInit(): void {}
}
