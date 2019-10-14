import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(quizService) {
        this.quizService = quizService;
        this.Questions = [];
        this.Options = [];
        this.CorrectAnswer = [];
        this.Answered = [];
        this.ID = this.quizService.returnID();
        this.Questions = this.quizService.getQuiz(this.ID);
        this.UID = this.quizService.getUID();
        this.Unique_ID = this.quizService.getUnique_ID();
    }
    QuestionsPage.prototype.setData = function (event, quiz) {
        var _this = this;
        this.Ans = event.detail.value;
        // console.log(this.Ans);
        this.Question = quiz.Question;
        // console.log(this.Questions);
        var index;
        var newIndex;
        var madeIndex;
        var check = false;
        if (this.Answered.length == 0) {
            this.Answered.push({
                Question: this.Question,
                Answer: this.Ans,
                CorrectAnswer: "",
                Score: false
            });
            for (var x = 0; x < this.Questions.length; x++) {
                for (var y = 0; y < this.Questions[x].value.length; y++) {
                    if (this.Questions[x].value[y] == true) {
                        index = this.Questions[x].value.indexOf(this.Questions[x].value[y]);
                        newIndex = this.Questions[x].option[index];
                        this.CorrectAnswer.push(newIndex);
                    }
                }
            }
            // console.log(this.CorrectAnswer);
            this.Answered[0].CorrectAnswer = this.CorrectAnswer[this.Answered[0].Question.indexOf(this.Question)];
            for (var z = 0; z < this.Answered.length; z++) {
                if (this.Answered[z].Answer === this.Answered[z].CorrectAnswer) {
                    this.Answered[z].Score = true;
                }
                else {
                }
            }
            // console.log(this.Answered);
        }
        else {
            var exists = false;
            for (var i = 0; i < this.Answered.length; i++) {
                if (this.Answered[i].Question == this.Question) {
                    this.Answered[i].Answer = this.Ans;
                    exists = true;
                }
                else {
                }
                if (this.Answered[i].Answer === this.Answered[i].CorrectAnswer) {
                    this.Answered[i].Score = true;
                }
                else {
                    this.Answered[i].Score = false;
                }
            }
            var findIndex = this.Questions.find(function (x) { return x.Question === _this.Question; });
            var myIndex = this.Questions.indexOf(findIndex);
            if (exists == false) {
                this.Answered.push({
                    Question: this.Question,
                    Answer: this.Ans,
                    CorrectAnswer: this.CorrectAnswer[myIndex],
                    Score: false
                });
                for (var a = 1; a < this.Answered.length; a++) {
                    if (this.Answered[a].Answer === this.Answered[a].CorrectAnswer) {
                        this.Answered[a].Score = true;
                    }
                    else {
                    }
                }
                // console.log(this.Answered);
            }
            // console.log(this.Answered);
        }
        console.log(this.Answered);
    };
    QuestionsPage.prototype.submit = function () {
        this.quizService.submitData(this.Answered, this.UID, this.ID, this.Unique_ID);
    };
    QuestionsPage.prototype.getQuiz = function (key) {
        this.quizService.setMe(key);
    };
    QuestionsPage.prototype.getAnswer = function (key) {
        this.quizService.setMe(key);
    };
    QuestionsPage.prototype.ngOnInit = function () {
    };
    QuestionsPage = tslib_1.__decorate([
        Component({
            selector: 'app-questions',
            templateUrl: './questions.page.html',
            styleUrls: ['./questions.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QuizService])
    ], QuestionsPage);
    return QuestionsPage;
}());
export { QuestionsPage };
//# sourceMappingURL=questions.page.js.map