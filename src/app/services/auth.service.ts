import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../utilities/enums/user-role.enum';
import { RouterConfigService } from './router-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn : boolean = false;
  private userRole: UserRole = UserRole.Admin

  constructor(private router: Router, private routerConfig: RouterConfigService) { }

  logIn() {
    this.isLoggedIn = true;
    this.routerConfig.configureRoute(this.userRole)
    this.router.navigateByUrl('/')
  
    console.log
  }

  logOut() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
