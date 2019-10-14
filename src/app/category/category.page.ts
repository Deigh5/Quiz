import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { QuizService } from '../Service/quiz.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  name
  Category_Key
  category = []
  Question
  Answers = []
  cat_key
  Categories

  constructor(public catService:QuizService, public loadCtrl:LoadingController)
  {

  }

  ngOnInit() 
  {
    this.loadData()
  }

  async loadData()
  {
    const loader = await this.loadCtrl.create(
      {
        message: 'Loading Categories...'
      }
    )

    await loader.present()
    this.catService.Category().then(categories =>
      {
        this.Question = categories
        loader.dismiss()
      })
  }

  getQuiz(key)
  {
    this.catService.setMe(key)
  }

  setName(name)
  {
    this.catService.getName(name)
  }

  setID(id)
  {
    this.catService.getID(id)
  }

}
