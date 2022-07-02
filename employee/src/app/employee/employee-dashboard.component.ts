import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './service/employee.model';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent implements OnInit {
  employees$!: Observable<Employee[]>;

  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employees$ = this.service.getEmployees();
  }
}
