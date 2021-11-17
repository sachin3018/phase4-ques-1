import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'src/app/models/options';
import { Question } from 'src/app/models/question';
import { QuizService } from 'src/app/service/quiz.service';
import javascript from 'src/utilities/javascript';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  temp : any[] = []
  //a = {"id" : -1,"marked" : {"question" : "dummy","answer" : "dummy"}}
  attempt : any[] = []


  constructor(private router: Router, private service : QuizService) { 
    
  }

  ngOnInit(): void {
    this.temp = this.service.getQuestions();
  }

  onOptionSelect = (index:number,optionIndex : number,id: number, question : string,option : string) => {
    const attemptO = {"id": index,"marked" : {"question" : question,"answermarked" : option}}
    if(this.attempt.length != 0){
      var update = false;
      for(let tattempt of this.attempt){
       
          if(tattempt.id === index){
            let index = this.attempt.indexOf(tattempt);
            this.attempt[index] = attemptO;
            this.rememberTheOptions(index,optionIndex)
            update = true;
            console.log("Re")
            break;
          
        }
      }
      if(!update){
        this.attempt.push(attemptO);
        this.rememberTheOptions(index,optionIndex)
      }
    }else{
      this.attempt.push(attemptO);
      this.rememberTheOptions(index,optionIndex)
    }
    for(let a of this.attempt){
      console.log(a)
    }
  }

  rememberTheOptions = (index:number, optionIndex : number) => {
    for(let i = 0; i < 4; i++){
      if(optionIndex === i){
        this.temp[index].options[i].isSelected = !this.temp[index].options[i].isSelected
        console.log(this.temp[index].options[i].isSelected + " : " + "if wala" + " : "+i)
      }
      else{
      this.temp[index].options[i].isSelected = false
      console.log(this.temp[index].options[i].isSelected + " : " + "else wala" + " : "+i)
      }
    }
   // this.temp[index].options[optionIndex].isSelected = !this.temp[index].options[optionIndex].isSelected
    console.log(this.temp[index].options)
    this.service.saveQuestionChange(this.temp)
   
  }

  onSubmitExam = () => {
    this.service.saveTheAttemptedAnswer(this.attempt)
    this.router.navigateByUrl('review')
  }

 

}
