import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeDashboardComponent } from './employee-dashboard.component';

@NgModule({
  declarations: [EmployeeCardComponent, EmployeeDashboardComponent],
  imports: [CommonModule],
})
export class EmployeeModule {}
