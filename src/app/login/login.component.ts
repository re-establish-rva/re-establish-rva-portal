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

  // Adds SessionUser into LocalStorage and goes to homepage
  login() {
    localStorage.setItem('SessionUser', '1');
    this.router.navigateByUrl("/home");
  }

  /* Resets lessonModuleList completion progress in LocalStorage and LessonService;
     Also adds SessionUser into LocalStorage and goes to homepage */
  signup() {
    localStorage.removeItem('lm-list');
    this.lesson.clearProgress();
    localStorage.setItem('SessionUser', '1');
    this.router.navigateByUrl("/home");
  }

}
