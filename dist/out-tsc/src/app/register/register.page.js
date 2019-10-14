import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(regService, alertCtrl, toastCtrl, router) {
        this.regService = regService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.regService.signUp(this.name, this.age, this.gender, this.email, this.password).then(function (data) {
            console.log(data);
            if (data.operationType == "signIn") {
                _this.router.navigate(['/login']);
                _this.presentToast();
            }
            else {
                _this.presentAlert(data);
            }
        });
    };
    RegisterPage.prototype.presentAlert = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var aleart;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Aleart',
                            message: data,
                            buttons: ['OK']
                        })];
                    case 1:
                        aleart = _a.sent();
                        return [4 /*yield*/, aleart.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'You are successfully registered!',
                            duration: 8000,
                            color: "secondary",
                            position: "middle"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.getGender = function (event) {
        this.gender = event.detail.value;
        console.log(this.gender);
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QuizService, AlertController,
            ToastController, Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map