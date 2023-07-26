import { Injectable } from '@angular/core';
import { LessonModule } from './lessonmodule';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  lessonModuleList: LessonModule[] = localStorage.getItem('lm-list') ? JSON.parse(localStorage.getItem('lm-list')!) : [
    {
      id: 1,
      title: "about_DMV_testing",
      completed: false,
      hasPracticeTests: false
    },
    {
      id: 2,
      title: "signals_signs_pavement",
      completed: false,
      hasPracticeTests: true
    },
    {
      id: 3,
      title: "safe_driving",
      completed: false,
      hasPracticeTests: true
    },
    {
      id: 4,
      title: "seatbelts_airbags_child_safety_seats",
      completed: false,
      hasPracticeTests: true
    },
    {
      id: 5,
      title: "penalties",
      completed: false,
      hasPracticeTests: true
    },
    {
      id: 6,
      title: "license_types",
      completed: false,
      hasPracticeTests: false
    },
    {
      id: 7,
      title: "other_info",
      completed: false,
      hasPracticeTests: false
    },
    {
      id: 8,
      title: "final_exam",
      completed: false,
      hasPracticeTests: true
    },
  ];

  getAllLessonModules(): LessonModule[] {
    return this.lessonModuleList;
  }
  
  getLessonModuleById(id: number): LessonModule | undefined {
    return this.lessonModuleList.find(LessonModule => LessonModule.id === id);
  }

  updateCompletion(id: number): void {
    if (this.getLessonModuleById(id) !== undefined && this.getLessonModuleById(id)!.completed === false) {
      this.getLessonModuleById(id)!.completed = true;
      localStorage.setItem('lm-list', JSON.stringify(this.lessonModuleList));
    }
  }

  clearProgress(): void {
    this.lessonModuleList.forEach((lesson) => lesson.completed = false);
  }

  constructor() { }
}