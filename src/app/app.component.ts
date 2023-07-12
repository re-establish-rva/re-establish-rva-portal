import { Component } from '@angular/core';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 're-establish-rva-portal';
  
  constructor(private yaylesson: LessonService) {}

  completeLesson(id: number): void {
    this.yaylesson.updateCompletion(id);
  }
}
