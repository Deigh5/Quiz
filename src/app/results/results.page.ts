import { Component, OnInit } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  resultsCat = [];
  results = [];
  userId;

  constructor(public quizServ:QuizService, private router:Router) 
  { 
    this.userId = this.quizServ.userInfor()
    this.resultsCat = this.quizServ.getCatResults(this.userId)

    this.clearArray(this.results)
    this.quizServ.getResults(this.userId).then(data =>
      {
        let Counter
        this.clearArray(this.results)

        for(let key in data)
        {
          Counter = 1
          var catz = key

          for (let key2 in data[key])
          {
            for (let key3 in data[key][key2])
            {
              this.results.push(
                {
                  counter: Counter++,
                  catID: catz,
                  questions: key3,
                  options: (data[key][key2][key3])
                }
              )
            }
          }
        }
      })

      firebase.auth().onAuthStateChanged((user) =>
      {
        if(user)
        {
          
        }else
        {
          this.router.navigate(['/login'])
        }
      })
  }

  clearArray(array)
  {
    for (let i = 0; i < array.length; i++)
    {
      array.splice(i)
    }
  }

  ngOnInit() {
  }

}
