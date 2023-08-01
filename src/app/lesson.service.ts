import { Injectable } from '@angular/core';
import { LessonModule } from './lessonmodule';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  activeModuleID: number | null = null;

  /* lessonModuleList initialized to the last array of LessonModules stored in LocalStorage; 
     otherwise, sets lessonModuleList to following default array */
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

  constructor() { }

  // Returns lessonModuleList
  getAllLessonModules(): LessonModule[] {
    return this.lessonModuleList;
  }
  
  // Returns specific LessonModule from lessonModuleList based on the inputted id parameter
  getLessonModuleById(id: number): LessonModule | undefined {
    return this.lessonModuleList.find(LessonModule => LessonModule.id === id);
  }

  // If identified LessonModule is not completed already, sets its 'completed' attribute to true and creates/updates the LocalStorage array
  updateCompletion(id: number): void {
    if (this.getLessonModuleById(id) !== undefined && this.getLessonModuleById(id)!.completed === false) {
      this.getLessonModuleById(id)!.completed = true;
      localStorage.setItem('lm-list', JSON.stringify(this.lessonModuleList));
    }
  }

  // Resets progress; sets 'completed' attributes of all the LessonModules to false
  clearProgress(): void {
    this.lessonModuleList.forEach((lesson) => lesson.completed = false);
  }

}