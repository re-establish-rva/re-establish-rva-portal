import { Component } from '@angular/core';
import { LessonModule } from '../lessonmodule';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-homepage',
  template: `
  <main>
    <app-lesson-module *ngFor="let lessonModule of lessonModuleList" [lessonModule]="lessonModule"></app-lesson-module>    

    <section>
      <h3 id="progress-check">Progress Check</h3>
      <div id="progress-labels">
        <p *ngFor="let lm of lessonModuleList">{{lm.title}}</p>
      </div>
      <div id="progress">
        <div *ngFor="let style of barStyleIds; let i = index" id="{{style}}" [class.empty]="!lessonModuleList[i].completed"></div>
      </div>
      <p id="history">> <span class="arrow">View Test History</span></p>
    </section>
  </main>
  `,
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  barStyleIds: string[] = ["bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8"];
  lessonModuleList: LessonModule[] = [];

  constructor(private lesson: LessonService) {
    this.lessonModuleList = lesson.getAllLessonModules();
  }

}