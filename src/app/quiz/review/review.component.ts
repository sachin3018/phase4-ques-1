import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  answer: any[]  = []
  question : any[] = []
  constructor(private service:QuizService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.answer = this.getAllAttempted();
    this.question = this.service.getQuestions();
    setTimeout(() => {
      this.goToResult();
    },5000)
  }

  getAllAttempted = () => {
    return this.service.getAttemptedAnswer()
    
  }

  goTOQuiz = () => {
    this.router.navigateByUrl("quiz");
  }

  goToResult = () => {
    this.router.navigateByUrl("result")
  }
  

}
