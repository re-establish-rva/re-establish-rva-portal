import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <main>
      <div id="login-box">
        <div id="head">
          <h2>ReEstablish Richmond DMV Portal</h2>
        </div>
        <div class="h-center">
          <button (click)="login()">{{ "login" | translate }}</button>
          <button (click)="login()">{{ "login" | translate }}</button>
        </div>
      </div>
    </main>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('SessionUser', '1');
    this.router.navigateByUrl("/home");
  }

}
