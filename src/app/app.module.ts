import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskcenterComponent } from './taskcenter/taskcenter.component';
import { ProjectcenterComponent } from './projectcenter/projectcenter.component';
import { TasksComponent } from './tasks/tasks.component';
import { MytaskComponent } from './mytask/mytask.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TaskcenterComponent,
    ProjectcenterComponent,
    TasksComponent,
    MytaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
