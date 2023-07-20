import { Component } from '@angular/core';
import { LessonService } from './lesson.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 're-establish-rva-portal';
  browserLang: any;
  
  constructor(private lessonService: LessonService, private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
    
    this.browserLang = localStorage.getItem("currLang");
    translate.use(this.browserLang?.match(/en|ar|da|ki|pa|sw/) ? this.browserLang : 'en');
  }

  logout(): void {
    if (localStorage.getItem("SessionUser")) {
      localStorage.removeItem("SessionUser");
      this.router.navigateByUrl("/login");
    }
    /*
    this.lessonService.clearStorage();
    window.location.reload();*/
    //console.log(this.translate.getBrowserLang());
  }

  changeLang(event: any): void {
    this.translate.use(event.target.value);
    //console.log(this.browserLang);
    localStorage.setItem("currLang", event.target.value);
    //console.log(localStorage.getItem("currLang"));
  }
}
