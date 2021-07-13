import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const routes = [
  { path : '', component: DashboardComponent, label: 'teste' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
