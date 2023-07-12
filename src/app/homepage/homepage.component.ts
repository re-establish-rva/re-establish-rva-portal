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
        <p>Module 1</p>
        <p>Module 2</p>
        <p>Module 3</p>
        <p>Module 4</p>
        <p>Module 5</p>
        <p>Module 6</p>
        <p>Module 7</p>
        <p>Module 8</p>
        <!--<p style="justify-self: end;">100%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">70%</p>
        <p style="justify-self: end;">99%</p>
        <div style="display: grid; grid-template-columns: repeat(6, 1fr);">
          <p>50%</p>
          <p>60%</p>
          <p>70%</p>
          <p>80%</p>
          <p>90%</p>
          <p>100%</p>
        </div>-->
      </div>
      <div id="progress">
        <div *ngFor="let style of barStyleIds" id="{{style}}"></div>
      </div>
      <p id="history">> View Test History</p>
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