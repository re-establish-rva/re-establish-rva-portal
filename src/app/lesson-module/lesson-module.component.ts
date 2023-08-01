import { Component, Input } from '@angular/core';
import { LessonModule } from '../lessonmodule';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson-module',
  templateUrl: './lesson-module.component.html',
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent {

  // Sets the variable lessonModule to the LessonModule value inputted into its html element
  @Input() lessonModule!: LessonModule;

  constructor(private lesson: LessonService) {}

  setActiveModule() {
    this.lesson.activeModuleID = this.lessonModule.id;
  }

}