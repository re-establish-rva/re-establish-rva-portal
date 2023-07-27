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
    translate.setDefaultLang('en'); // English default lang

    // Sets browser translation to the last used language (defaults to English there isn't one)
    this.browserLang = localStorage.getItem("currLang");
    translate.use(this.browserLang?.match(/en|ar|da|ki|pa|sw/) ? this.browserLang : 'en');
  }

  // Removes SessionUser from LocalStorage and goes back to login page
  logout(): void {
    if (localStorage.getItem("SessionUser")) {
      localStorage.removeItem("SessionUser");
      this.router.navigateByUrl("/login");
    }
  }

  /* Changes browser's current translation to the language dropdown value selected; 
     also stores selected language as 'currLang' in LocalStorage */
  changeLang(event: any): void {
    this.translate.use(event.target.value); // Uses translations from the i18n json file signified by the value selected in language dropdown
    localStorage.setItem("currLang", event.target.value);
  }
}
