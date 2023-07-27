import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonModuleComponent } from './lesson-module/lesson-module.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudyComponent } from './study/study.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

// Function for Ahead Of Time (AOT) compilation for ngx-translate
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LessonModuleComponent,
    HomepageComponent,
    StudyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Permits app-routing.module.ts

    // For ngx-translate:
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
       }
    })
  ],
  providers: [
    AuthGuardService // CanActivate guard service
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
