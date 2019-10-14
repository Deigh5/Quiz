import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { QuizService } from '../Service/quiz.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(camera, profService, router) {
        var _this = this;
        this.camera = camera;
        this.profService = profService;
        this.router = router;
        this.user = this.profService.getUser();
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.ID = user.uid;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.takeImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.dp = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
        });
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Camera, QuizService, Router])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map