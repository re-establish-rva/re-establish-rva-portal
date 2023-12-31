import { Component } from '@angular/core';
import { LessonService } from '../lesson.service';
import { ActivatedRoute } from '@angular/router';
import { LessonModule } from '../lessonmodule';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})

export class StudyComponent {

  moduleID: number;
  lessonModuleList: LessonModule[] = [];

  constructor(private route: ActivatedRoute, public lessonService: LessonService){
    this.moduleID = parseInt(this.route.snapshot.params['id'], 10);
  }

  // Initializes lessonModuleList to the current array of LessonModules in LessonService
  ngOnInit() {
    this.lessonModuleList = this.lessonService.getAllLessonModules();
  }

  expand(): void {
    document.getElementById("sidebar")!.classList.add("expanded");
    document.getElementById("close")!.classList.add("expanded");
  }
  
  close(): void {
    document.getElementById("sidebar")!.classList.remove("expanded");
    document.getElementById("close")!.classList.remove("expanded");
  }

  // Calls LessonService to update the 'completed' attribute of the current LessonModule 
  completeLesson(): void {
    this.lessonService.updateCompletion(this.moduleID);
  }

}