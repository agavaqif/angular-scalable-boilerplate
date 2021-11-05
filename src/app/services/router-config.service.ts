import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MainComponent } from '../dashboard/main/main.component';
import { TaskComponent } from '../dashboard/task/task.component';
import { UserMainComponent } from '../dashboard/user-main/user-main.component';
import { UserTasksComponent } from '../dashboard/user-tasks/user-tasks.component';
import { UserRole } from '../utilities/enums/user-role.enum';
import { RouteInfo, RouteMap } from '../utilities/interfaces/route-info.interface';

// Admin Layout Info
const adminRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'task',
    component: TaskComponent
  }
]

const adminRouteInfo: RouteInfo[] =[
    {path: '', title: 'Home', class: 'menu-item'},
    {path: 'task', title: 'Task Management',class: 'menu-item'}

]

// User Layout Info
const userRoutes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    data: {
      menuText: 'Home'
    }
  },
  {
    path: 'task',
    component: UserTasksComponent,
    data: {
      menuText: 'Tasks'
    }
  }
]

const userRouteInfo: RouteInfo[] = [
  {path: '', title: 'Home', class: 'menu-item'},
  {path: 'task', title: 'User Tasks', class: 'menu-item'}
]


const map: { [key in UserRole]: RouteMap } = {
  [UserRole.Admin] : {
    routes: adminRoutes,
    routeInfo: adminRouteInfo
  },
  [UserRole.User]: {
    routes: userRoutes,
    routeInfo: userRouteInfo
  }

}

@Injectable({
  providedIn: 'root'
})
export class RouterConfigService {
  private sidebarRoutes: RouteInfo[];
  constructor(private router: Router) { }

  public configureRoute(userRole: UserRole) {
    this.router.config[0].children = map[userRole].routes;
    this.sidebarRoutes = map[userRole].routeInfo;
    this.router.navigateByUrl('/')
  }

  getSidebarRoutes(): RouteInfo[] {
    return this.sidebarRoutes;
  }
}
