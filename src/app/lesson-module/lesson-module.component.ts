import { Component, Input } from '@angular/core';
import { LessonModule } from '../lessonmodule';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-lesson-module',
  templateUrl: './lesson-module.component.html',
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent {
  @Input() lessonModule!: LessonModule;

  constructor() {}

}