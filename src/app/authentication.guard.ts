import { Injectable } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard {

  constructor(private auth: AuthGuardService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.getToken()) {  
      this.router.navigateByUrl("/login");  
    }  
    return this.auth.getToken();  
  }

}