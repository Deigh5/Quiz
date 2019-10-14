 import { Component, OnInit } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email
  password

  constructor(public logServ:QuizService, public alertCtrl:AlertController, public router:Router, public toastCtrl:ToastController) { }

  ngOnInit() {
  }

  login()
  {
    this.logServ.signIn(this.email, this.password).then((result) =>
      {
        console.log(result);
        if(result.operationType == "signIn")
        {
          // this.router.navigate(['/category'])
          this.presentToast()
        }else
        {
          this.presentAlert(result)
        }
      })
  }

  async presentAlert(result)
  {
    const alert = await this.alertCtrl.create(
      {
        header: 'Alert',
        message: result,
        buttons: ['OK']
      }
    )
    await alert.present()
  }

  async presentToast()
  {
    const toast = await this.toastCtrl.create(
      {
        message: 'Login Successfully...',
        duration: 8000,
        color: "secondary",
        position: "middle"
      }
    )
    toast.present()
  }

  async resetPassword()
  {
    let alert = await this.alertCtrl.create(
      {
        header: 'Reset Password',
        inputs: [
          {
            name: 'Email',
            type: 'email',
            placeholder: 'Please Enter email'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: () =>
            {
              console.log('Confirm Cancel'); 
            }
          },
          {
            text: 'OK',
            handler: (email) =>
            {
              this.logServ.resetPassword(email.Email)
              console.log('Confirm OK');
            }
          }
        ]
      }
    )
    await alert.present()
  }
}
