import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './compontents/question/question.component';
import { AnswersComponent } from './compontents/answers/answers.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
