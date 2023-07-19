import { Component } from '@angular/core';
import { LessonService } from './lesson.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 're-establish-rva-portal';
  browserLang: any;
  
  constructor(private lessonService: LessonService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    
    this.browserLang = localStorage.getItem("currLang");
    translate.use(this.browserLang?.match(/en|ar|da|ki|pa|sw/) ? this.browserLang : 'en');
  }

  logout(): void {
    this.lessonService.clearStorage();
    window.location.reload();
    //console.log(this.translate.getBrowserLang());
  }

  changeLang(event: any): void {
    this.translate.use(event.target.value);
    //console.log(this.browserLang);
    localStorage.setItem("currLang", event.target.value);
    //console.log(localStorage.getItem("currLang"));
  }
}
