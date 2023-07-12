import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StudyComponent } from './study/study.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    title: "Homepage",
  },
  {
    path: "study/:id",
    component: StudyComponent,
    title: "Study"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}