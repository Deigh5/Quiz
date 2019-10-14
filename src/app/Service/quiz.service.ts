import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { reject } from 'q'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

database = firebase.database()
userID
uiduser
userIDz
userEmail

Newname
name
cat_name

Question
childData
Category_key
catArray = []

Questions=[]
category=[]
Answers = [];
New_ID;

ID
cat_key
Options=[]
Counter = 0;

Ans
CorrectAnswer
answered
Answer

userA = []
namez
genderz
emailz
agez
uid

myResults = []
score
userr
uidd
errData
  catId: any;


constructor() { }
signUp(name, age, gender, email, password)
{
 return firebase.auth().createUserWithEmailAndPassword(email, password).then((user) =>
  {
    if(user)
    {
      this.userID = user['user'].uid
      this.userEmail = user['user'].email

      firebase.database().ref('users/' + this.userID).set(
        {
          name: name,
          email: this.userEmail,
          age: age,
          gender: gender
        })
      }
      return user

    }).catch((error) =>
  {
    var errorCode = error.code
    var errorMessage = error.message

    return errorMessage
  })
}

getUserID()
{
  return this.userID
}

signIn(email, password)
{
  return firebase.auth().signInWithEmailAndPassword(email, password).then((result) =>
  {
    if(result)
    {
      return result
    }
  }).catch((error) =>
  {
    var errorCode = error.code
    var errorMessage = error.message
    console.log(errorMessage)
    return errorMessage
  })
}

signOut()
{   
  firebase.auth().signOut().then(() =>
  {

  }).catch((error) =>
  {
    console.log("Successfully logged out!");
      
  })
}

resetPassword(email)
{
  var auth = firebase.auth()

  auth.sendPasswordResetEmail(email).then(() =>
  {
    console.log("Password Reset!");

  }).catch((error) =>
  {
    var errorCode = error.code
    var errorMessage = error.message
  })
}

getName(Name)
{
  this.cat_name = Name;
}

returnName()
{
  return this.cat_name;
}

delCat()
{
  for(let i =0; i<this.category.length; i++)
  {
    this.category.splice(i)
  }
}

 
Category()
{
  // this.delCat()
  return new Promise((resolve, reject) =>
  {
    var data = firebase.database().ref().child("Category")

    for(var i=0; i<this.category.length; i ++)
    {
      // this.category.splice(i)
    }

    data.on("child_added",snap =>
    {
      this.name = snap.child("cat_name").val();
      this.cat_key = snap.child("ID").val();
      this.category.push(
        {
          Categories: this.name,
          Category_key: this.cat_key
        })
      resolve(this.category) 
    })

    return this.category;
  })
}
 
setMe(key)
{
  this.Category_key = key
}
 
getID(id)
{
  this.New_ID = id;
}
 
returnID() 
{
  return this.New_ID
}
 
delQuiz()
{
  for(let q =0; q<this.category.length; q++)
  {
    this.Questions.splice(q)
  }
}

getQuiz(ID) 
{
  this.delQuiz()
  var rootRef = firebase.database().ref('Quiz/'+ ID)
  rootRef.once('value',(snapshot) => 
  {
    let Questions = snapshot.val();
    for(let key in Questions)
    {
      this.Questions.push(
        {
          Question: key,
          option: Object.keys(Questions[key]),
          value: Object.values(Questions[key])
        })
      // console.log(this.Questions)
    }
  })
    return this.Questions;
}

getUID()
{
  var user = firebase.auth().currentUser
  var name, email, photoUrl, uid, emailVerified

  if (user != null)
  {
    name = user.displayName
    email = user.email
    uid = user.uid
  }

  return uid
}

getUnique_ID()
{
  let id = firebase.database().ref().child("Results").push().key
  return id
}

userInfor()
{
  firebase.auth().onAuthStateChanged((user) =>
  {
    if(user)
    {
      this.uiduser = user.uid
    } else
    {

    }
  })
  return this.uiduser
}

submitData(Answered, UID, ID, Unique_ID)
{
  for(var b= 0; b < Answered.length; b++)
  {
    firebase.database().ref('Results/' + UID + "/" + ID + "/" + Unique_ID + "/" + Answered[b].Question).set(
      {
        Answer: Answered[b].Answer,
        CorrectAnswer: Answered[b].CorrectAnswer,
        Score: Answered[b].Score
      }
    )
  }
}

getUser()
{
  this.uid = this.getUID()
  const rootRef = firebase.database().ref('users/' + this.uid)
  console.log(this.uid);
  
  rootRef.on('value', (data) => 
  {
    const userz = data.val()
    console.log(userz);
    this.namez = userz.name;
    this.agez = userz.age;
    this.genderz = userz.gender;
    this.emailz = userz.email;
    
    this.userA.push(
      {
        Name: this.namez,
        Age: this.agez,
        Gender: this.genderz,
        Email: this.emailz
      }
    )
console.log(this.userA);
// console.log(userz);
  })
  return this.userA
}

clearArray(array)
{
  for (let i=0; i< array.length; i++)
  {
    array.splice(i)
  }
}

getCatResults(New_ID)
{
  console.log(New_ID);
  
  let catResults = firebase.database().ref().child('Results/' + New_ID)
  catResults.on('child_added', snapshot =>
  {
    this.catId = snapshot.key
    console.log(this.catId);
    this.catArray.push(
      {
        key: this.catId
      }
    )
    
  })

  return this.catArray
}

getResults(New_ID)
{
  this.Counter = 0
  let resultQuiz
  let gameID
  let values

  this.clearArray(this.myResults)

  return firebase.database().ref().child('Results/' + New_ID + name).once('value').then((snapshot) =>
  {
    const values = snapshot.val()

    return snapshot.val()
  })
}
}
