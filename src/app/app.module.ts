import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonModuleComponent } from './lesson-module/lesson-module.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudyComponent } from './study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonModuleComponent,
    HomepageComponent,
    StudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
