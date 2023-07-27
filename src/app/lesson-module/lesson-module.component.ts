import { Component, Input } from '@angular/core';
import { LessonModule } from '../lessonmodule';

@Component({
  selector: 'app-lesson-module',
  templateUrl: './lesson-module.component.html',
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent {

  // Sets the variable lessonModule to the LessonModule value inputted into its html element
  @Input() lessonModule!: LessonModule;

  constructor() {}

}