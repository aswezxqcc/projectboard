import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MytaskComponent } from './mytask/mytask.component';
import { ProjectcenterComponent } from './projectcenter/projectcenter.component';
import { TaskcenterComponent } from './taskcenter/taskcenter.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}, 
  {path: 'homepage', component: HomepageComponent},
  {path: 'projectcenter', component: ProjectcenterComponent},
  {path: 'taskcenter', component: TaskcenterComponent},
  {path: 'task/:id', component: TasksComponent},
  {path: 'mytask', component: MytaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
