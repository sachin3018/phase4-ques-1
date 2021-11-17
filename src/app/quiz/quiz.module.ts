import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    QuizComponent,
    ReviewComponent,
    ResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
