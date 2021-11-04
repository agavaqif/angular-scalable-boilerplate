import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    TaskComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
