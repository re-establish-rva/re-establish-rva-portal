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
        <li *ngIf="lessonModule.hasPracticeTests; else elseBlock">Practice</li>
        <ng-template #elseBlock>
          <br><br>
        </ng-template>
      </ul>
      <div class="unit-foot">
        <p class="resource">> Extra Resources</p>
        <p class="check" [class.hide]="!lessonModule.completed">✓</p>
      </div>
    </div>
  `,
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent {
  @Input() lessonModule!: LessonModule;
}
