import { Component } from '@angular/core';
import { LessonModule } from '../lessonmodule';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-homepage',
  template: `
  <main>
    <app-lesson-module *ngFor="let lessonModule of lessonModuleList" [lessonModule]="lessonModule"></app-lesson-module>    

    <section>
      <h2 id="progress-check">Progress Check</h2>
      <div id="progress-labels">
        <p style="justify-self: end;">100%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">99%</p>
      </div>
      <div id="progress">
        <!--<div style="background-color: #9FB654; border-radius: 40px 0 0 40px;"></div> #A7BC62-->
        <div style="background-color: #A9BB63; border-radius: 40px 0 0 40px;"></div>
        <div style="background-color: #AFC270;"></div>
        <div style="background-color: #B7C87E;"></div>
        <div style="background-color: #BFCE8D;"></div>
        <div style="background-color: #C7D49B;"></div>
        <div style="background-color: #CFDAA9;"></div>
        <div style="background-color: #D8E0B8; border-radius: 0 40px 40px 0;"></div>
      </div>
      <p id="history">> View Test History</p>
    </section>
  </main>
  `,
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  lessonModuleList: LessonModule[] = [];

  constructor(private lesson: LessonService) {
    this.lessonModuleList = lesson.getAllLessonModules();
  }

}
