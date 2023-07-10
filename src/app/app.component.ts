import { Component } from '@angular/core';
import { LessonService } from './lesson.service';
import { LessonModule } from './lessonmodule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 're-establish-rva-portal';
  lessonModuleList: LessonModule[] = [];

  constructor(private lesson: LessonService) {
    this.lessonModuleList = lesson.getAllLessonModules();
  }
}
