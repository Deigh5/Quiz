import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
var HomePage = /** @class */ (function () {
    function HomePage(homeService) {
        this.homeService = homeService;
        this.category = [];
        this.Question = [];
        this.Answers = [];
        // this.category = this.quizService.Category();
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.getCat = function (key) {
        this.homeService.setMe(key);
    };
    HomePage.prototype.logOut = function () {
        this.homeService.signOut();
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QuizService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map