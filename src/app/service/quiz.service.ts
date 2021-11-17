import { Injectable } from '@angular/core';
import javascript from 'src/utilities/javascript';
import javascriptAns from 'src/utilities/javascriptAns';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions : any[] = []
  attemptedAnswer : any[] = []
  answer : any[] = []
  score : number = 0

  constructor() {
    this.questions = javascript.questions;
    this.answer = javascriptAns.answer;
   }

   getQuestions = () => {
    return this.questions
   }

   saveQuestionChange = (question : any[]) => {
    this.questions = question;
   }

   saveTheAttemptedAnswer = (answer : any[]) => {
      this.attemptedAnswer = answer;
      console.log(this.attemptedAnswer)
   }

   getAttemptedAnswer = () => {
     return this.attemptedAnswer;
   }

   genrateScore = () => {
    let index = 0;
    for(let ans of this.attemptedAnswer){
      if(ans.marked.answermarked === this.answer[ans.id].ans)
          this.score += 1
    }
    return this.score;
   }

   getAllCorrectAnswer = () => {
     return this.answer;
   }

   resetValue = () => {
     this.attemptedAnswer = []
   }
  
}
