import { Component, OnInit } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name
  age
  gender
  password
  email


  constructor(public regService:QuizService, public alertCtrl:AlertController,
    public toastCtrl:ToastController, public router:Router) 
  { 
    
  }

  ngOnInit() {
  }

  register()
  {
    this.regService.signUp(this.name, this.age, this.gender, this.email, this.password).then((data) =>
      {
        console.log(data);
        
        if(data.operationType == "signIn")
        {
          this.router.navigate(['/login'])
          this.presentToast()
        }else
        {
          this.presentAlert(data)
        }
      });
  }

  async presentAlert(data)
  {
    const aleart = await this.alertCtrl.create(
      {
        header: 'Aleart',
        message: data,
        buttons: ['OK']
      }
    )
    await aleart.present()
  }

  async presentToast()
  {
    const toast = await this.toastCtrl.create(
      {
        message: 'You are successfully registered!',
        duration: 8000,
        color: "secondary",
        position: "middle"
      }
    )
    toast.present()
  }

  getGender(event)
  {
    this.gender = event.detail.value
    console.log(this.gender)
  }

}
