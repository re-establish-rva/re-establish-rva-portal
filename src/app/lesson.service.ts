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
      completed: true,
      hasPracticeTests: false
    },
    {
      id: 2,
      title: "Signals, Signs, and Pavement Markings",
      completed: true,
      hasPracticeTests: true
    },
    {
      id: 3,
      title: "Safe Driving",
      completed: true,
      hasPracticeTests: true
    },
    {
      id: 4,
      title: "Seatbelts, Airbags, and Child Safety Seats",
      completed: true,
      hasPracticeTests: true
    },
    {
      id: 5,
      title: "Penalties",
      completed: true,
      hasPracticeTests: true
    },
    {
      id: 6,
      title: "License Types",
      completed: true,
      hasPracticeTests: false
    },
    {
      id: 7,
      title: "Other Information",
      completed: true,
      hasPracticeTests: false
    },
    {
      id: 8,
      title: "Final Exam",
      completed: true,
      hasPracticeTests: true
    },
  ];

  getAllLessonModules(): LessonModule[] {
    return this.lessonModuleList;
  }
  
  getLessonModuleById(id: number): LessonModule | undefined {
    return this.lessonModuleList.find(LessonModule => LessonModule.id === id);
  }

  constructor() { }
}
