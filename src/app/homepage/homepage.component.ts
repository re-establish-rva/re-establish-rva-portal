import { Component } from '@angular/core';
import { LessonModule } from '../lessonmodule';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  barStyleIds: string[] = ["bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8"];
  lessonModuleList: LessonModule[] = [];

  constructor(private lesson: LessonService) {}

  ngOnInit() {
    this.lessonModuleList = this.lesson.getAllLessonModules();
  }

}