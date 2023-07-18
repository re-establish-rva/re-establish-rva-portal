import { Component, Input } from '@angular/core';
import { LessonModule } from '../lessonmodule';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-lesson-module',
  template: `
    <div class="unit">
      <div class="unit-head">
        <h3>{{ lessonModule.title | translate }}</h3>
      </div>
      <ul>
        <a [routerLink]="['/study',lessonModule.id]" id="study"><li class="arrow"><span>{{ 'study' | translate }}</span></li></a>
        <li class="arrow" *ngIf="lessonModule.hasPracticeTests; else elseBlock">{{ 'practice' | translate }}</li>
        <ng-template #elseBlock>
          <li class="no-arrow"></li>
        </ng-template>
      </ul>
      <div class="unit-foot">
        <p class="resource">> <span class="arrow2">{{ 'extra_resources' | translate }}</span></p>
        <p class="check" [class.hide]="!lessonModule.completed">✓</p>
      </div>
    </div>
  `,
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent {
  @Input() lessonModule!: LessonModule;

  constructor() {}

}