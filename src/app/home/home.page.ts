import { Component } from '@angular/core';
import { QuizService } from '../Service/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  name;Category_key
  category = [];
  Question = []
  Answers = [];

  constructor(public homeService:QuizService) 
  {
    // this.category = this.quizService.Category();
  }

  ngOnInit() {
  }

  getCat(key)
  {
    this.homeService.setMe(key)
  }

  logOut()
  {
    this.homeService.signOut()
  }

}
