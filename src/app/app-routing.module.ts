import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoComponent } from './video/video.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path : 'dashboard', component: DashboardComponent},
  {path : 'video', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
