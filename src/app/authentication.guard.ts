import { Injectable } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard {

  constructor(private auth: AuthGuardService, private router: Router) {}

  // If 'SessionUser' is not in LocalStorage, goes back to Login page and restricts access to other pages
  canActivate(): boolean {
    if (!this.auth.getToken()) { // Checks if there's no 'SessionUser' in LocalStorage
      this.router.navigateByUrl("/login");  
    }  
    // Returns false if no 'SessionUser', thus telling CanActivate guard to block all navigation to routes with AuthenticationGuard 
    return this.auth.getToken();
  }

}