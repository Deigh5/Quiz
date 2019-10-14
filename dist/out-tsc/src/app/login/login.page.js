import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(logServ, alertCtrl, router, toastCtrl) {
        this.logServ = logServ;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.logServ.signIn(this.email, this.password).then(function (result) {
            console.log(result);
            if (result.operationType === "signIn") {
                _this.router.navigate(['/category']);
                _this.presentToast();
            }
            else {
                _this.presentAlert(result);
            }
        });
    };
    LoginPage.prototype.presentAlert = function (result) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            message: result,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Login Successfully...',
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
    LoginPage.prototype.resetPassword = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
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
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                },
                                {
                                    text: 'OK',
                                    handler: function (email) {
                                        _this.logServ.resetPassword(email.Email);
                                        console.log('Confirm OK');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [QuizService, AlertController, Router, ToastController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map