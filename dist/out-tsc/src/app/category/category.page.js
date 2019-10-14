import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
import { LoadingController } from '@ionic/angular';
var CategoryPage = /** @class */ (function () {
    function CategoryPage(catService, loadCtrl) {
        this.catService = catService;
        this.loadCtrl = loadCtrl;
        this.category = [];
        this.Answers = [];
    }
    CategoryPage.prototype.ngOnInit = function () {
        console.log("sas");
        this.loadData();
    };
    CategoryPage.prototype.loadData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Loading Categories...'
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        this.catService.Category().then(function (categories) {
                            _this.Question = categories;
                            loader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryPage.prototype.getQuiz = function (key) {
        this.catService.setMe(key);
    };
    CategoryPage.prototype.setName = function (name) {
        this.catService.getName(name);
    };
    CategoryPage.prototype.setID = function (id) {
        this.catService.getID(id);
    };
    CategoryPage = tslib_1.__decorate([
        Component({
            selector: 'app-category',
            templateUrl: './category.page.html',
            styleUrls: ['./category.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QuizService, LoadingController])
    ], CategoryPage);
    return CategoryPage;
}());
export { CategoryPage };
//# sourceMappingURL=category.page.js.map