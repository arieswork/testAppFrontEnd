import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MovieDashboardComponent } from '../payroll/movie-dashboard/movie-dashboard.component';
import { PayrollDashboardComponent } from '../payroll/payroll-dashboard/payroll-dashboard.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-dashboard', component: MovieDashboardComponent },
  { path: 'payroll', component: PayrollDashboardComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations:[HomeComponent ],
  providers:[],
})
export class RoutingModule { }
