import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { IsLoggedInGuard } from './core/guards/is-logged-in.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: ()=> import('./dashboard/dashboard.module').then(m =>m.DashboardModule)
    }]
  },
  {
    path: 'auth',
    canActivate: [IsLoggedInGuard],
    loadChildren: ()=>import('./auth/auth.module').then(m =>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
