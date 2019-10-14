import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
var QuizService = /** @class */ (function () {
    function QuizService() {
        this.database = firebase.database();
        this.Questions = [];
        this.category = [];
        this.Answers = [];
        this.Options = [];
        this.Counter = 0;
        this.userA = [];
    }
    QuizService.prototype.signUp = function (name, age, gender, email, password) {
        var _this = this;
        return firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
            if (user) {
                _this.userID = user['user'].uid;
                _this.userEmail = user['user'].email;
                firebase.database().ref('users/' + _this.userID).set({
                    name: name,
                    email: _this.userEmail,
                    age: age,
                    gender: gender
                });
            }
            return user;
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            return errorMessage;
        });
    };
    QuizService.prototype.getUserID = function () {
        return this.userID;
    };
    QuizService.prototype.signIn = function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
            if (result) {
                return result;
            }
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            return errorMessage;
        });
    };
    QuizService.prototype.signOut = function () {
        firebase.auth().signOut().then(function () {
        }).catch(function (error) {
            console.log("Successfully logged out!");
        });
    };
    QuizService.prototype.resetPassword = function (email) {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(email).then(function () {
            console.log("Password Reset!");
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    };
    QuizService.prototype.getName = function (Name) {
        this.cat_name = Name;
    };
    QuizService.prototype.returnName = function () {
        return this.cat_name;
    };
    QuizService.prototype.delCat = function () {
        for (var i = 0; i < this.category.length; i++) {
            this.category.splice(i);
        }
    };
    QuizService.prototype.Category = function () {
        var _this = this;
        // this.delCat()
        return new Promise(function (resolve, reject) {
            var data = firebase.database().ref().child("Category");
            for (var i = 0; i < _this.category.length; i++) {
                // this.category.splice(i)
            }
            data.on("child_added", function (snap) {
                _this.name = snap.child("cat_name").val();
                _this.cat_key = snap.child("ID").val();
                _this.category.push({
                    Categories: _this.name,
                    Category_key: _this.cat_key
                });
                resolve(_this.category);
            });
            return _this.category;
        });
    };
    QuizService.prototype.setMe = function (key) {
        this.Category_key = key;
    };
    QuizService.prototype.getID = function (id) {
        this.New_ID = id;
    };
    QuizService.prototype.returnID = function () {
        return this.New_ID;
    };
    QuizService.prototype.delQuiz = function () {
        for (var q = 0; q < this.category.length; q++) {
            this.Questions.splice(q);
        }
    };
    QuizService.prototype.getQuiz = function (ID) {
        var _this = this;
        this.delQuiz();
        var rootRef = firebase.database().ref('Quiz/' + ID);
        rootRef.once('value', function (snapshot) {
            var Questions = snapshot.val();
            for (var key in Questions) {
                _this.Questions.push({
                    Question: key,
                    option: Object.keys(Questions[key]),
                    value: Object.values(Questions[key])
                });
                // console.log(this.Questions)
            }
        });
        return this.Questions;
    };
    QuizService.prototype.getUID = function () {
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        if (user != null) {
            name = user.displayName;
            email = user.email;
            uid = user.uid;
        }
        return uid;
    };
    QuizService.prototype.getUnique_ID = function () {
        var id = firebase.database().ref().child("Results").push().key;
        return id;
    };
    QuizService.prototype.submitData = function (Answered, UID, ID, Unique_ID) {
        for (var b = 0; b < Answered.length; b++) {
            firebase.database().ref('Results/' + UID + "/" + ID + "/" + Unique_ID + "/" + Answered[b].Question).set({
                Answer: Answered[b].Answer,
                CorrectAnswer: Answered[b].CorrectAnswer,
                Score: Answered[b].Score
            });
        }
    };
    QuizService.prototype.getUser = function () {
        var _this = this;
        var rootRef = firebase.database().ref('users/' + this.userID);
        rootRef.on('value', function (data) {
            var userz = data.val();
            _this.namez = userz.name;
            _this.agez = userz.age;
            _this.genderz = userz.gender;
            _this.emailz = userz.email;
            console.log(userz);
            _this.userA.push({
                Name: _this.namez,
                Age: _this.agez,
                Gender: _this.genderz,
                Email: _this.emailz
            });
            console.log(_this.userA);
        });
        return this.userA;
    };
    QuizService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuizService);
    return QuizService;
}());
export { QuizService };
//# sourceMappingURL=quiz.service.js.map