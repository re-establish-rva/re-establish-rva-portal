import { Component, Input } from '@angular/core';
import { LessonModule } from '../lessonmodule';

@Component({
  selector: 'app-lesson-module',
  template: `
    <div class="unit">
      <div class="unit-head">
        <h2>{{lessonModule.title}}</h2>
      </div>
      <ul>
        <li>Study</li>
        <li>Practice</li>
      </ul>
      <div class="unit-foot">
        <p> Extra Resources</p>
        <p class="check">✓</p>
      </div>
    </div>
  `,
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent {
  @Input() lessonModule!: LessonModule;

}
