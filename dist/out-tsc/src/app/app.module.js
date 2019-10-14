import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { Camera } from '@ionic-native/camera/ngx';
var firebaseConfig = {
    apiKey: "AIzaSyDV0yS1eUWmD261ZME_5nwJPaYO_atzVQM",
    authDomain: "quizzy-470dd.firebaseapp.com",
    databaseURL: "https://quizzy-470dd.firebaseio.com",
    projectId: "quizzy-470dd",
    storageBucket: "",
    messagingSenderId: "3492041999",
    appId: "1:3492041999:web:75aed0b0ad20e16b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
            providers: [
                Camera,
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map