import { Component } from '@angular/core';
import { LessonModule } from '../lessonmodule';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  barStyleIds: string[] = ["bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8"]; // For progress bar styling
  lessonModuleList: LessonModule[] = [];

  constructor(private lesson: LessonService) {}

  // Initializes lessonModuleList to the current array of LessonModules in LessonService
  ngOnInit() {
    this.lessonModuleList = this.lesson.getAllLessonModules();
  }

  expand(): void {
    document.getElementById("sidebar")!.classList.add("expanded");
    document.getElementById("close")!.classList.add("expanded");
  }
  
  close(): void {
    document.getElementById("sidebar")!.classList.remove("expanded");
    document.getElementById("close")!.classList.remove("expanded");
  }

}