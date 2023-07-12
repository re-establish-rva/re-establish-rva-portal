import { Injectable } from '@angular/core';
import { LessonModule } from './lessonmodule';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  lessonModuleList: LessonModule[] = [
    {
      id: 1,
      title: "About DMV Test",
      completed: false,
      hasPracticeTests: false
    },
    {
      id: 2,
      title: "Signals, Signs, and Pavement Markings",
      completed: false,
      hasPracticeTests: true
    },
    {
      id: 3,
      title: "Safe Driving",
      completed: false,
      hasPracticeTests: true
    },
    {
      id: 4,
      title: "Seatbelts, Airbags, and Child Safety Seats",
      completed: false,
      hasPracticeTests: true
    },
    {
      id: 5,
      title: "Penalties",
      completed: false,
      hasPracticeTests: true
    },
    {
      id: 6,
      title: "License Types",
      completed: false,
      hasPracticeTests: false
    },
    {
      id: 7,
      title: "Other Information",
      completed: false,
      hasPracticeTests: false
    },
    {
      id: 8,
      title: "Final Exam",
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
    }
  }

  constructor() { }
}
