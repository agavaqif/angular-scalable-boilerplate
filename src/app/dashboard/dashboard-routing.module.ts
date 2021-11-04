import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'task',
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
