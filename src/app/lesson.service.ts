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
      completed: true
    },
    {
      id: 2,
      title: "Signals, Signs, and Pavement Markings",
      completed: true
    },
    {
      id: 3,
      title: "Safe Driving",
      completed: true
    },
    {
      id: 4,
      title: "Seatbelts, Airbags, and Child Safety Seats",
      completed: true
    },
    {
      id: 5,
      title: "Penalties",
      completed: true
    },
    {
      id: 6,
      title: "License Types",
      completed: true
    },
    {
      id: 7,
      title: "Other Information",
      completed: true
    },
    {
      id: 8,
      title: "Final Exam",
      completed: true
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
