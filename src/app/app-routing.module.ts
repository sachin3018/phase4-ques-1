import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { ResultComponent } from './quiz/result/result.component';
import { ReviewComponent } from './quiz/review/review.component';

const routes: Routes = [
  {path : '' , component: StartComponent },
  {path : 'quiz' , component: QuizComponent },
  {path : 'review', component : ReviewComponent},
  {path : 'result', component : ResultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
