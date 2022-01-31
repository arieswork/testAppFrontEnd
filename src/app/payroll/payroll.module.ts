import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollDashboardComponent } from './payroll-dashboard/payroll-dashboard.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieTableComponent } from './movie-table/movie-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PayrollDashboardComponent, MovieDashboardComponent, MovieTableComponent],
  exports: [PayrollDashboardComponent, MovieDashboardComponent, MovieTableComponent ]
})
export class PayrollModule { }
