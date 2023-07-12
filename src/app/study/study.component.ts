import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-study',
  template: `
    <div class = "center">
      <a [routerLink] = "['/']"><button class = "next" (click) = "1">Next</button></a>
    </div>
  `,
  styleUrls: ['./study.component.css']
})

export class StudyComponent {
  /* completeLesson(id: number): void {

    this.lessonService.updateCompletion(id);
    console.log("yay4: " + id);
}
  constructor(private router: Router, private lessonService:LessonService){

  }
 getId():number{
    console.log(this.router.url);
    this.router.events.pipe(filter((event): event is NavigationStart => event instanceof NavigationStart))
          .subscribe(event =>
          {
            if (event.url.indexOf("/study/") >= 0) {
              return(Number(event.url.substring(7)));
            } 
              //console.log("yay: " + event.url);
              //console.log("yay2: " + this.currentId);
              //console.log("yay3: " + event.url.substring(7));
            });
            return 0;
  } */
}