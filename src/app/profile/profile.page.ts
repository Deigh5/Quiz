import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { QuizService } from '../Service/quiz.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  dp
  userID
  user
  ID


  constructor(private camera: Camera, public profService:QuizService, private router: Router) 
  { 
    
    this.user = this.profService.getUser()
    console.log(this.user);
    
    firebase.auth().onAuthStateChanged((user) =>
    {
      if(user)
      {
        this.ID = user.uid
      }else
      {
        this.router.navigate(['/login'])
      }
    })
  }

  ngOnInit() {
  }

  takeImage()
  {
    const options: CameraOptions =
    {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) =>
    {
      this.dp = 'data:image/jpeg;base64,' + imageData
    }, (err) =>
    {
      
    })
  }
  
logOut()
{
  this.profService.signOut()
}
}
