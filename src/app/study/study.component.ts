import { Component } from '@angular/core';
import { LessonService } from '../lesson.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-study',
  template: `
    <div class = "center">
      <a [routerLink] = "['/']"><button class = "next" (click) = "completeLesson()">Next</button></a>
    </div>
  `,
  styleUrls: ['./study.component.css']
})

export class StudyComponent {
  constructor(private route: ActivatedRoute, private lessonService: LessonService){
    
  }

  completeLesson(): void {
    this.lessonService.updateCompletion(parseInt(this.route.snapshot.params['id'], 10));
  }
}