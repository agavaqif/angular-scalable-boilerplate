import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn : boolean = true;
  constructor(private router: Router) { }

  logIn() {
    this.isLoggedIn = true;
    this.router.navigateByUrl('/')
  }

  logOut() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
