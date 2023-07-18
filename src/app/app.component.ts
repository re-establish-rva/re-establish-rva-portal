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
  
  constructor(private lessonService: LessonService, private translate: TranslateService) {
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ar|da|ki|pa|sw/) ? browserLang : 'en');
  }

  logout(): void {
    this.lessonService.clearStorage();
    window.location.reload();
  }

  changeLang(event: any): void {
    this.translate.use(event.target.value);
  }
}
