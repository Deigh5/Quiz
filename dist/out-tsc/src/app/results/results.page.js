import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
var ResultsPage = /** @class */ (function () {
    function ResultsPage(quizServ) {
        this.quizServ = quizServ;
    }
    ResultsPage.prototype.ngOnInit = function () {
    };
    ResultsPage = tslib_1.__decorate([
        Component({
            selector: 'app-results',
            templateUrl: './results.page.html',
            styleUrls: ['./results.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QuizService])
    ], ResultsPage);
    return ResultsPage;
}());
export { ResultsPage };
//# sourceMappingURL=results.page.js.map