import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResultsPage } from './results.page';
var routes = [
    {
        path: '',
        component: ResultsPage
    }
];
var ResultsPageModule = /** @class */ (function () {
    function ResultsPageModule() {
    }
    ResultsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ResultsPage]
        })
    ], ResultsPageModule);
    return ResultsPageModule;
}());
export { ResultsPageModule };
//# sourceMappingURL=results.module.js.map