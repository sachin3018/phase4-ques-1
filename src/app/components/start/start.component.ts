import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router : Router,private service : QuizService) { }

  ngOnInit(): void {
    this.service.resetValue();
  }

  startTheQuiz = () => {
    this.router.navigateByUrl("quiz");
  }
}
