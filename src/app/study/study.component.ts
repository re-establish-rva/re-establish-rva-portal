import { Component } from '@angular/core';
import { LessonService } from '../lesson.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})

export class StudyComponent {

  constructor(private route: ActivatedRoute, private lessonService: LessonService){}

  // Calls LessonService to update the 'completed' attribute of the current LessonModule 
  completeLesson(): void {
    this.lessonService.updateCompletion(parseInt(this.route.snapshot.params['id'], 10));
  }

}