import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router, private lesson: LessonService) {}

  login() {
    localStorage.setItem('SessionUser', '1');
    this.router.navigateByUrl("/home");
  }

  signup() {
    localStorage.removeItem('lm-list');
    this.lesson.clearProgress();
    localStorage.setItem('SessionUser', '1');
    this.router.navigateByUrl("/home");
  }

}
