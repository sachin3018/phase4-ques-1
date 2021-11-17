import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  attemptedAnswer : any[] = []
  answerKey : any[] = []
  score : number = 0;
  totalMarks : number = 0
  constructor(private service : QuizService,private router : Router) { }

  ngOnInit(): void {
    this.score =  this.service.genrateScore()
    this.answerKey =  this.service.getAllCorrectAnswer()
    this.attemptedAnswer = this.service.getAttemptedAnswer()
    this.totalMarks = this.answerKey.length
  }

  goToHome = () => {
    this.service.resetValue()
    this.router.navigateByUrl('');
  }

}
