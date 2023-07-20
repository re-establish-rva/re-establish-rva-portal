import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StudyComponent } from './study/study.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomepageComponent,
    title: "Homepage",
    canActivate: [AuthenticationGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Login"
  },
  {
    path: "study/:id",
    component: StudyComponent,
    title: "Study",
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}