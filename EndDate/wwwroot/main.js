(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/S4U":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  max-width: 1400px;\n  background-color: #fafafa;\n  height: calc(100vh - 80px);\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.toolbar {\n  background: #0077c1;\n  height: 60px;\n  padding: 20px;\n}\n\n.toolbar a {\n  color: white;\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.toolbar .link:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBRUk7RUFDSSwwQkFBQTtBQUFSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3N2MxO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubGluazpob3ZlcntcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "/l6p":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bank-holidays/bank-holidays.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container >\r\n    <h1>\r\n        <i class=\"fas fa-umbrella-beach\"></i>\r\n        Liste des jours fériés\r\n    </h1>\r\n    <div>\r\n        <div class=\"box\" *ngFor=\"let holiday of holidays\">\r\n            <div class=\"flex-row flex-aic\">\r\n                <div class=\"flex-grow\">\r\n                    {{holiday.date | date: 'fullDate'}}\r\n                </div>\r\n                <div class=\"pointer red\" (click)=\"delete(holiday)\">\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mt2 pointer\" *ngIf=\"addRequested == false\" (click)=\"addRequested = true\">\r\n        <div class=\"flex-row flex-aic green\">\r\n            <i class=\"fas fa-plus-square mr1\"></i>\r\n            Ajouter un nouveau jour férié\r\n        </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"addRequested == true\">\r\n        <h1 class=\"mt2 green\">\r\n            <i class=\"fas fa-plus-square\"></i>\r\n            Ajouter un nouveau jour férié\r\n        </h1>\r\n        <ng-ui-form [formGroup]=\"form\" [disableSectionColoring]=\"true\" *ngIf=\"form\">\r\n            <ng-ui-form-control label=\"Date du jour férié\">\r\n                <ng-ui-date-picker formControlName=\"date\" format=\"EEEE d MMMM yyyy\" [includeTime]=\"false\"></ng-ui-date-picker>\r\n            </ng-ui-form-control>\r\n            <ng-ui-button-group class=\"mt2\">\r\n                <ng-ui-button type=\"success\" (click)=\"add()\" [disabled]=\"!form.valid\" [loading]=\"adding == true\">Ajouter</ng-ui-button>\r\n            </ng-ui-button-group>\r\n        </ng-ui-form>\r\n    </ng-container>\r\n</ng-container>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\Others\EndDate\EndDate.App\src\main.ts */"zUnb");


/***/ }),

/***/ "3rHO":
/*!***********************************************************************!*\
  !*** ./src/app/components/bank-holidays/bank-holidays.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5rLWhvbGlkYXlzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "7n3M":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leave-types/leave-types.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n    <h1>\r\n        <i class=\"fas fa-tag\"></i>\r\n        Code d'absences\r\n    </h1>\r\n    <div>\r\n        <table cellspacing=\"0\" cellpadding=\"0\">\r\n            <thead>\r\n                <tr>\r\n                    <td>\r\n                        Code\r\n                    </td>\r\n                    <td class=\"description\">\r\n                        Descripton\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        Suspensatoire ?\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        Suspensatoire si entre congés ?\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n\r\n                    </td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let type of types\">\r\n                    <td>\r\n                        {{type.code}}\r\n                    </td>\r\n                    <td>\r\n                        {{type.description}}\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <i class=\"fas fa-circle pointer\" (click)=\"toggleExtend(type)\" [class.grey]=\"type.isExtending == false\" [class.green]=\"type.isExtending == true\"></i>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <i class=\"fas fa-circle pointer\" (click)=\"toggleExtendHolidays(type)\" [class.grey]=\"type.isExtendingBetweenHolidays == false\" [class.green]=\"type.isExtendingBetweenHolidays == true\"></i>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <i class=\"fas fa-trash-alt pointer red\" (click)=\"delete(type)\"></i>\r\n                    </td>\r\n\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n\r\n    <div class=\"mt2 pointer\" *ngIf=\"addRequested == false\" (click)=\"addRequested = true\">\r\n        <div class=\"flex-row flex-aic green\">\r\n            <i class=\"fas fa-plus-square mr1\"></i>\r\n            Ajouter un code d'absence\r\n        </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"addRequested == true && form\">\r\n\r\n        <h1 class=\"mt2 green\">\r\n            <i class=\"fas fa-plus-square\"></i>\r\n            Ajouter un code d'absence\r\n        </h1>\r\n        <ng-ui-form [formGroup]=\"form\" [disableSectionColoring]=\"true\" *ngIf=\"form\">\r\n            <ng-ui-form-control label=\"Code\">\r\n                <input type=\"text\" formControlName=\"code\" />\r\n            </ng-ui-form-control>\r\n            <ng-ui-form-control label=\"Description\">\r\n                <input type=\"text\" formControlName=\"description\" />\r\n            </ng-ui-form-control>\r\n            <ng-ui-button-group class=\"mt2\">\r\n                <ng-ui-button type=\"success\" (click)=\"add()\" [disabled]=\"!form.valid\" [loading]=\"adding == true\">Ajouter</ng-ui-button>\r\n            </ng-ui-button-group>\r\n        </ng-ui-form>\r\n    </ng-container>\r\n</ng-container>");

/***/ }),

/***/ "84XB":
/*!*****************************************************!*\
  !*** ./src/app/components/open/open.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVuLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "9mKg":
/*!*************************************************!*\
  !*** ./src/app/components/pdf/pdf.component.ts ***!
  \*************************************************/
/*! exports provided: PdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfComponent", function() { return PdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pdf_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pdf.component.html */ "T0F+");
/* harmony import */ var _pdf_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf.component.scss */ "o+k5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");






let PdfComponent = class PdfComponent {
    constructor(_router, _route) {
        this._router = _router;
        this._route = _route;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (sessionStorage.getItem('open_simulation')) {
                this.result = JSON.parse(sessionStorage.getItem('open_simulation'));
                //sessionStorage.removeItem('open_simulation');
            }
        });
    }
    createPdf() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filename = 'export.pdf';
            const node = document.getElementById('pdf');
            const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__["jsPDF"]('p', 'mm', 'a4');
            yield pdf.html(node);
            pdf.setLineWidth(1);
            pdf.save(filename);
            //htmlToImage.toPng(node)
            //    .then((dataUrl) => {
            //        const img = new Image();
            //        img.src = dataUrl;
            //        const pdf = new jsPdf.jsPDF('p', 'mm', 'a4');
            //        pdf.setLineWidth(1);
            //        pdf.addImage(img, 'PNG', 0, 0, 208, 298);
            //        pdf.save(filename);
            //    })
            //    .catch((error) => {
            //        console.error('oops, something went wrong!', error);
            //    });
        });
    }
};
PdfComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PdfComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pdf',
        template: _raw_loader_pdf_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pdf_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], PdfComponent);



/***/ }),

/***/ "A6fv":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AuthInterceptor = class AuthInterceptor {
    intercept(req, next) {
        const token = sessionStorage.getItem('access_token');
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        return next.handle(req);
    }
};
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "BFaC":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/open/open.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n    <h1>\r\n        <i class=\"fas fa-upload\"></i>\r\n        Ouvrir une simulation\r\n    </h1>\r\n    <ng-ui-form [formGroup]=\"form\" [disableSectionColoring]=\"true\">\r\n        <ng-ui-form-control label=\"Fichier de sauvegarde\">\r\n            <file-upload formControlName=\"simulation\" [multiple]=\"false\" [animation]=\"true\"></file-upload>\r\n        </ng-ui-form-control>\r\n\r\n        <ng-ui-button-group class=\"mt2\">\r\n            <ng-ui-button icon=\"upload\" type=\"success\" (click)=\"open()\" [disabled]=\"!form.valid\" [loading]=\"false\">Ouvrir</ng-ui-button>\r\n        </ng-ui-button-group>\r\n\r\n    </ng-ui-form>\r\n</ng-container>");

/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "zPH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let HomeComponent = class HomeComponent {
    /******************************************************** LIFE CYCLE ********************************************************/
    constructor(_router, _route) {
        this._router = _router;
        this._route = _route;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], HomeComponent);



/***/ }),

/***/ "GOJ5":
/*!*************************************************!*\
  !*** ./src/app/services/calculation.service.ts ***!
  \*************************************************/
/*! exports provided: CalculationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationService", function() { return CalculationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.service */ "Ig2y");




let CalculationService = class CalculationService {
    constructor(_http, _date) {
        this._http = _http;
        this._date = _date;
    }
    calculate(input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._date.convertToString(input);
            var s = yield this._http.post('/api/calculator', input).toPromise();
            return s;
        });
    }
};
CalculationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }
];
CalculationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
], CalculationService);



/***/ }),

/***/ "HsjX":
/*!*********************************************************************!*\
  !*** ./src/app/components/bank-holidays/bank-holidays.component.ts ***!
  \*********************************************************************/
/*! exports provided: BankHolidaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankHolidaysComponent", function() { return BankHolidaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bank_holidays_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bank-holidays.component.html */ "/l6p");
/* harmony import */ var _bank_holidays_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-holidays.component.scss */ "3rHO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_bank_holidays_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/bank-holidays.service */ "aqdw");







let BankHolidaysComponent = class BankHolidaysComponent {
    constructor(_router, _route, _holidays, _fb) {
        this._router = _router;
        this._route = _route;
        this._holidays = _holidays;
        this._fb = _fb;
        this.adding = false;
        this.addRequested = false;
        this.buildForm();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.refresh();
        });
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.valid) {
                this.adding = true;
                yield this._holidays.add(this.form.value.date);
                this.form.reset({ date: null });
                yield this.refresh();
                this.adding = false;
                this.addRequested = false;
            }
        });
    }
    delete(date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._holidays.delete(date);
            yield this.refresh();
        });
    }
    buildForm() {
        this.form = this._fb.group({
            date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    refresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.holidays = yield this._holidays.getAll();
        });
    }
};
BankHolidaysComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_bank_holidays_service__WEBPACK_IMPORTED_MODULE_6__["BankHolidaysService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
BankHolidaysComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'bank-holidays',
        template: _raw_loader_bank_holidays_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bank_holidays_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_bank_holidays_service__WEBPACK_IMPORTED_MODULE_6__["BankHolidaysService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], BankHolidaysComponent);



/***/ }),

/***/ "ITZG":
/*!*****************************************!*\
  !*** ./src/app/services/auth-config.ts ***!
  \*****************************************/
/*! exports provided: authConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
const authConfig = {
    issuer: 'https://login.microsoftonline.com/941ba334-2f43-428b-a77c-f6bac64f847a',
    redirectUri: window.location.origin,
    clientId: 'da864598-d823-4484-b8dc-7597968ba8a6',
    scope: 'offline_access openid profile',
    skipIssuerCheck: true,
    strictDiscoveryDocumentValidation: false,
    resource: 'da864598-d823-4484-b8dc-7597968ba8a6',
    clearHashAfterLogin: true,
    //customQueryParams: { 'domain_hint': 'consultpoint.net' },
    showDebugInformation: false
};


/***/ }),

/***/ "Ig2y":
/*!******************************************!*\
  !*** ./src/app/services/date.service.ts ***!
  \******************************************/
/*! exports provided: Direction, DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



var Direction;
(function (Direction) {
    Direction[Direction["Backward"] = -1] = "Backward";
    Direction[Direction["Forward"] = 1] = "Forward";
})(Direction || (Direction = {}));
let DateService = class DateService {
    /******************************************************** LIFE CYCLE ********************************************************/
    constructor(_datePipe) {
        this._datePipe = _datePipe;
        /******************************************************** VARIABLES ********************************************************/
        this.monthNames = ["january", "february", "march", "april", "may", "june", "july", "augustus", "september", "october", "november", "december"];
        this.PATTERN = "yyyy-MM-ddTHH:mm:ss.SSS";
        this.ISO8601 = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;
    }
    /******************************************************** PUBLIC ********************************************************/
    /**
     *
     * @param body
     */
    convertToDate(body) {
        if (body === null || body === undefined) {
            return body;
        }
        if (typeof body !== 'object') {
            return body;
        }
        for (const key of Object.keys(body)) {
            const value = body[key];
            if (this._isIso8601(value)) {
                console.log("is iso");
                body[key] = new Date(value);
                console.log("converted", body[key]);
            }
            else if (typeof value === 'object') {
                this.convertToDate(value);
            }
        }
    }
    /**
     *
     * @param body
     */
    convertToString(body) {
        if (body === null || body === undefined) {
            return body;
        }
        if (typeof body !== 'object') {
            return body;
        }
        for (const key of Object.keys(body)) {
            const value = body[key];
            if (value instanceof Date) {
                body[key] = this.toJSONLocal(value);
            }
            else if (typeof value === 'object') {
                this.convertToString(value);
            }
        }
    }
    /**
     *
     * @param day
     */
    getCorrectWeekDay(day) {
        return day == _angular_common__WEBPACK_IMPORTED_MODULE_2__["WeekDay"].Sunday ? 7 : day;
    }
    /**
     *
     * @param date
     * @param day
     * @param direction
     */
    ensureDay(date, day, direction = Direction.Forward) {
        while (date.getDate() != day) {
            date.setDate(date.getDate() + direction);
        }
    }
    /**
     *
     * @param date
     * @param day
     */
    ensureWeekDay(date, day, direction = Direction.Forward) {
        if (!direction) {
            direction = Direction.Forward;
        }
        while (date.getDay() != day) {
            date.setDate(date.getDate() + direction);
        }
    }
    /**
     *
     * @param d1
     * @param d2
     */
    getMonthDiff(d1, d2) {
        let months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    /**
     *
     * @param d1
     * @param d2
     */
    getWeekDiff(d1, d2) {
        const from = new Date(+d1 < +d2 ? d1 : d2);
        const to = new Date(+d1 > +d2 ? d1 : d2);
        let week = 0;
        while (+from < +to) {
            from.setDate(from.getDate() + 7);
            week++;
        }
        return week;
    }
    /**
     *
     * @param d1
     * @param d2
     */
    getSecondDiff(d1, d2) {
        const from = new Date(+d1 < +d2 ? d1 : d2);
        const to = new Date(+d1 > +d2 ? d1 : d2);
        const diff = +to - +from;
        return diff / 1000;
    }
    /**
     *
     * @param ignoreTime
     */
    today(ignoreTime = true) {
        const date = new Date();
        if (ignoreTime === true) {
            date.setHours(0, 0, 0, 0);
        }
        return date;
    }
    /**
     *
     * @param ignoreTime
     */
    tomorrow(ignoreTime = true) {
        const date = new Date(this.today(ignoreTime));
        date.setDate(date.getDate() + 1);
        return date;
    }
    /**
     *
     * @param date
     */
    toJSONLocal(date) {
        if (!date) {
            return null;
        }
        return this._datePipe.transform(date, this.PATTERN);
    }
    /**
     *
     * @param ignoreTime
     */
    yesterday(ignoreTime = true) {
        const date = new Date(this.today(ignoreTime));
        date.setDate(date.getDate() - 1);
        return date;
    }
    /******************************************************** PRIVATE ********************************************************/
    /**
     *
     * @param value
     */
    _isIso8601(value) {
        if (value === null || value === undefined) {
            return false;
        }
        return this.ISO8601.test(value);
    }
};
DateService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
], DateService);



/***/ }),

/***/ "MLwJ":
/*!*******************************************************************!*\
  !*** ./src/app/components/leave-types/leave-types.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\ntable td.description {\n  width: 50%;\n}\ntable thead td {\n  background-color: #0077c1;\n  color: white;\n  text-transform: uppercase;\n  padding: 5px 10px;\n  border-bottom: solid 1px black;\n}\ntable tbody td {\n  padding: 5px 10px;\n  border-bottom: solid 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZWF2ZS10eXBlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUVRO0VBQ0ksVUFBQTtBQUFaO0FBSUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFGUjtBQUtJO0VBQ0ksaUJBQUE7RUFDQSw4QkFBQTtBQUhSIiwiZmlsZSI6ImxlYXZlLXR5cGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgICYuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB0ZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdjMTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHkgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "NZIm":
/*!***************************************************!*\
  !*** ./src/app/components/open/open.component.ts ***!
  \***************************************************/
/*! exports provided: OpenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenComponent", function() { return OpenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_open_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./open.component.html */ "BFaC");
/* harmony import */ var _open_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open.component.scss */ "84XB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let OpenComponent = class OpenComponent {
    constructor(_router, _route, _fb) {
        this._router = _router;
        this._route = _route;
        this._fb = _fb;
        this.buildForm();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    buildForm() {
        this.form = this._fb.group({
            simulation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    open() {
        var fr = new FileReader();
        fr.onload = () => {
            sessionStorage.setItem('open_simulation', fr.result.toString());
            this._router.navigateByUrl('/');
        };
        fr.readAsText(this.form.value.simulation[0]);
    }
};
OpenComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
OpenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'open',
        template: _raw_loader_open_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_open_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], OpenComponent);



/***/ }),

/***/ "P65g":
/*!*************************************************************!*\
  !*** ./src/app/components/simulator/simulator.component.ts ***!
  \*************************************************************/
/*! exports provided: SimulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorComponent", function() { return SimulatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simulator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simulator.component.html */ "X0vt");
/* harmony import */ var _simulator_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulator.component.scss */ "QtWg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/calculation.service */ "GOJ5");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/date.service */ "Ig2y");








let SimulatorComponent = class SimulatorComponent {
    constructor(_router, _route, _fb, _calculator, _date) {
        this._router = _router;
        this._route = _route;
        this._fb = _fb;
        this._calculator = _calculator;
        this._date = _date;
        this.state = "input";
        this.toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        this.resetForm();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (sessionStorage.getItem('open_simulation')) {
                this.result = JSON.parse(sessionStorage.getItem('open_simulation'));
                this.updateCalendar();
                this.state = "results";
                sessionStorage.removeItem('open_simulation');
            }
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.state = "loading";
            const v = this.form.value;
            var b64Prestations = yield this.toBase64(v.prestations[0]);
            var b64Leaves = yield this.toBase64(v.leaves[0]);
            this.result = yield this._calculator.calculate({ startDate: v.startDate, endDate: v.endDate, prestations: b64Prestations, leaves: b64Leaves });
            this.updateCalendar();
            if (this.result && this.result.errors && this.result.errors.length == 0) {
                this.state = "results";
                localStorage.setItem("enddate_last_result", JSON.stringify(this.result));
            }
            else {
                this.state = "input";
            }
        });
    }
    updateCalendar() {
        var evts = [];
        for (const m of this.result.extensions) {
            var date = new Date(m.date);
            var endDate = new Date(m.date);
            endDate.setHours(23, 59, 59);
            var title = '';
            for (const c of m.codes) {
                title += c.code + ",";
            }
            evts.push({
                from: date,
                to: endDate,
                title: title,
                type: "extension"
            });
        }
        this.events = evts;
    }
    resetForm() {
        this.form = this._fb.group({
            startDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            endDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prestations: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            leaves: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.downloadForm = this._fb.group({
            fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    resetPage() {
        location.reload();
    }
    downloadResult() {
        if (this.result) {
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.result));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", `${this.downloadForm.value.fileName}.json`);
            dlAnchorElem.click();
        }
    }
    toPdf() {
        if (this.result) {
            sessionStorage.setItem('open_simulation', JSON.stringify(this.result));
            this._router.navigateByUrl('/pdf');
        }
    }
};
SimulatorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_calculation_service__WEBPACK_IMPORTED_MODULE_6__["CalculationService"] },
    { type: _services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"] }
];
SimulatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'simulator',
        template: _raw_loader_simulator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simulator_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_calculation_service__WEBPACK_IMPORTED_MODULE_6__["CalculationService"],
        _services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]])
], SimulatorComponent);



/***/ }),

/***/ "QtWg":
/*!***************************************************************!*\
  !*** ./src/app/components/simulator/simulator.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lds-facebook {\n  display: flex;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n}\n\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: #0077c1;\n  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  animation-delay: -0.24s;\n}\n\n.lds-facebook div:nth-child(2) {\n  left: 32px;\n  animation-delay: -0.12s;\n}\n\n.lds-facebook div:nth-child(3) {\n  left: 56px;\n  animation-delay: 0;\n}\n\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n\n.small-box {\n  padding: 2px 5px;\n  border: solid 1px black;\n  border-radius: 5px;\n  text-transform: uppercase;\n  margin-right: 1rem;\n  background-color: #0077c1;\n  color: white;\n  cursor: help;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW11bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0VBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFlBQUE7RUFDTjtFQUVFO0lBQ0ksU0FBQTtJQUNBLFlBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJzaW11bGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLWZhY2Vib29rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubGRzLWZhY2Vib29rIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc3YzE7XHJcbiAgICBhbmltYXRpb246IGxkcy1mYWNlYm9vayAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcclxufVxyXG5cclxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGxlZnQ6IDMycHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEycztcclxufVxyXG5cclxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGRzLWZhY2Vib29rIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlLCAxMDAlIHtcclxuICAgICAgICB0b3A6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc21hbGwtYm94IHtcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2MxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBoZWxwO1xyXG59Il19 */");

/***/ }),

/***/ "T/0B":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "logo.png");

/***/ }),

/***/ "T0F+":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pdf/pdf.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"result\">\r\n\r\n\r\n    <ng-ui-button icon=\"file-pdf\" type=\"information\" (click)=\"createPdf()\" [loading]=\"false\">Télécharger le PDF</ng-ui-button>\r\n\r\n    <div class=\"pdf mt2\">\r\n        <div id=\"pdf\" class=\"pdf-content\">\r\n            <div>\r\n                <div class=\"title\">\r\n\r\n                    CALCUL DE PROLONGATION DE PRÉAVIS\r\n                </div>\r\n                <div class=\"box\">\r\n                    <div class=\"flex-row flex-aic\">\r\n                        <div class=\"flex-grow\">\r\n                            <p>\r\n                                Date de début de préavis : {{result.startDate | date: 'fullDate'}}\r\n                            </p>\r\n                            <p>\r\n                                Date théorique de fin de préavis :  <strong>{{result.endDate | date: 'fullDate'}}</strong>\r\n                            </p>\r\n                            <p>\r\n                                Prolongation : <strong>{{result.totalExtensions}}</strong> jour(s)\r\n                            </p>\r\n                            <p>\r\n                                Date réelle de fin de préavis : <strong>{{result.calculatedEndDate | date: 'fullDate'}}</strong>\r\n                            </p>\r\n                        </div>\r\n                        <div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div class=\"title mt1\">\r\n\r\n                    JOURS DE PROLONGATIONS\r\n                </div>\r\n                <div class=\"box\" *ngFor=\"let ext of result.extensions\">\r\n                    <div class=\"flex-row\">\r\n                        <div style=\"width:300px\" class=\"flex-row\">\r\n                            {{ext.date | date: 'fullDate'}}\r\n                        </div>\r\n                        <div>\r\n                            <div *ngFor=\"let c of ext.codes\">\r\n                                <div class=\"justification flex-row flex-aic\">\r\n                                    <div class=\"mr2\">{{c.code}}</div>\r\n                                    <div>{{c.description}}</div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "WfQD":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "yK4R");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "/S4U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");






let AppComponent = class AppComponent {
    /******************************************************** LIFE CYCLE ********************************************************/
    constructor(_router, _route, _auth) {
        this._router = _router;
        this._route = _route;
        this._auth = _auth;
        this.applicationIsReady = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._auth.connected$.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.applicationIsReady = true;
            }));
        });
    }
    newSimulation() {
        if (window.location.pathname == '/') {
            window.location.reload();
        }
        else {
            this._router.navigateByUrl('/');
        }
    }
    lastResultAvailable() {
        return localStorage.getItem("enddate_last_result") != null;
    }
    reload() {
        var last = localStorage.getItem("enddate_last_result");
        if (last) {
            sessionStorage.setItem('open_simulation', last);
            this.newSimulation();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'enddate',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "X0vt":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/simulator/simulator.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"simulator\">\r\n    <ng-container *ngIf=\"state == 'input'\">\r\n        <ng-ui-form [formGroup]=\"form\" [disableSectionColoring]=\"true\">\r\n            <ng-ui-form-controls>\r\n                <ng-ui-form-control label=\"Date de début de préavis\">\r\n                    <ng-ui-date-picker formControlName=\"startDate\" format=\"EEEE d MMMM yyyy\" [includeTime]=\"false\"></ng-ui-date-picker>\r\n                </ng-ui-form-control>\r\n                <ng-ui-form-control label=\"Date théorique de fin de préavis\">\r\n                    <ng-ui-date-picker formControlName=\"endDate\" format=\"EEEE d MMMM yyyy\" [includeTime]=\"false\"></ng-ui-date-picker>\r\n                </ng-ui-form-control>\r\n            </ng-ui-form-controls>\r\n\r\n            <ng-ui-form-control label=\"Prestations\">\r\n                <file-upload formControlName=\"prestations\" [multiple]=\"false\" [animation]=\"true\"></file-upload>\r\n            </ng-ui-form-control>\r\n\r\n            <ng-ui-form-control label=\"Absences\">\r\n                <file-upload formControlName=\"leaves\" [multiple]=\"false\" [animation]=\"true\"></file-upload>\r\n            </ng-ui-form-control>\r\n\r\n            <div class=\"errors mt2\" *ngIf=\"this.result && this.result.errors && this.result.errors.length > 0\">\r\n                <div class=\"error box\" *ngFor=\"let err of this.result.errors\">\r\n                    {{err}}\r\n                </div>\r\n            </div>\r\n\r\n            <ng-ui-button-group class=\"mt2\">\r\n                <ng-ui-button icon=\"calculator\" type=\"success\" (click)=\"save()\" [disabled]=\"!form.valid\" [loading]=\"false\">Calculer</ng-ui-button>\r\n\r\n            </ng-ui-button-group>\r\n\r\n        </ng-ui-form>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"state == 'loading'\">\r\n        <div class=\"lds-facebook\"><div></div><div></div><div></div></div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"state == 'results'\">\r\n\r\n        <ng-ui-tab-group orientation=\"vertical\" [light]=\"false\" [hideSingle]=\"true\">\r\n            <ng-ui-tab label=\"Détail du calcul\">\r\n                <h1>\r\n                    <i class=\"fas fa-fw fa-keyboard\"></i>\r\n                    Entrées\r\n                </h1>\r\n                <div>\r\n                    <div class=\"box\">\r\n                        Date de début de préavis : {{result.startDate | date: 'fullDate'}}\r\n                    </div>\r\n                    <div class=\"box\">\r\n                        Date théorique de fin de préavis : {{result.endDate | date: 'fullDate'}}\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <h1 class=\"mt2\">\r\n                    <i class=\"fas fa-fw fa-clipboard-check\"></i>\r\n                    Résultats\r\n                </h1>\r\n                <div>\r\n                    <div class=\"box\">\r\n                        Prolongation : <strong>{{result.totalExtensions}}</strong> jour(s)\r\n                    </div>\r\n                    <div class=\"box\">\r\n                        Date réelle de fin de préavis : <strong>{{result.calculatedEndDate | date: 'fullDate'}}</strong>\r\n                    </div>\r\n                </div>\r\n\r\n                <ng-container *ngIf=\"result && result.extensions && result.extensions.length > 0\">\r\n                    <h1 class=\"mt2\">\r\n                        <i fa-fw class=\"fas fa-info-circle\"></i>\r\n                        Justifications\r\n                    </h1>\r\n                    <div>\r\n                        <div class=\"box\" *ngFor=\"let ext of result.extensions\">\r\n                            <div class=\"flex-row\">\r\n                                <div style=\"width:300px\" class=\"flex-row\">\r\n                                    {{ext.date | date: 'fullDate'}}\r\n                                </div>\r\n                                <div class=\"flex-row flex-aic\">\r\n                                    <div class=\"small-box\" *ngFor=\"let c of ext.codes\" [tooltip]=\"c.description\">\r\n                                        {{c.code}}\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"result && result.missings && result.missings.length > 0\">\r\n                    <h1 class=\"mt2\">\r\n                        <i class=\"fas fa-fw fa-exclamation-triangle\"></i>\r\n                        Jours sans aucune informations\r\n                    </h1>\r\n                    <div>\r\n                        <div class=\"box\" *ngFor=\"let ext of result.missings\">\r\n                            <div class=\"flex-row\">\r\n                                <div style=\"width:300px\" class=\"flex-row\">\r\n                                    {{ext.date | date: 'fullDate'}}\r\n                                </div>\r\n                                <div>\r\n                                    {{ext.comment}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <!--<h1 class=\"mt2 pointer\" (click)=\"toPdf()\">\r\n                    <i class=\"fas fa-file-pdf\"></i>\r\n                    Exporter en PDF\r\n                </h1>-->\r\n\r\n                <h1 class=\"mt2\">\r\n                    <i class=\"fas fa-fw fa-download\"></i>\r\n                    Sauvegarder le résultat\r\n                </h1>\r\n                <ng-ui-form [formGroup]=\"downloadForm\" [disableSectionColoring]=\"true\">\r\n                    <ng-ui-form-control label=\"Nom du fichier\">\r\n                        <input type=\"text\" formControlName=\"fileName\" />\r\n                    </ng-ui-form-control>\r\n                    <ng-ui-button-group class=\"mt1\">\r\n                        <ng-ui-button icon=\"download\" [disabled]=\"!downloadForm.valid\" type=\"information\" (click)=\"downloadResult()\" [loading]=\"false\">Télécharger ce résultat</ng-ui-button>\r\n                    </ng-ui-button-group>\r\n                </ng-ui-form>\r\n\r\n            </ng-ui-tab>\r\n            <ng-ui-tab label=\"Calendrier\">\r\n                <ng-ui-calendar [events]=\"events\">\r\n                    <ng-template ngUiCalendarEvent let-event>\r\n                        {{ event.title }}\r\n                    </ng-template>\r\n                    <ng-template ngUiCalendarTooltip let-day>\r\n                        <div *ngFor=\"let e of day.events\">{{ e.data.title }}</div>\r\n                    </ng-template>\r\n                </ng-ui-calendar>\r\n\r\n            </ng-ui-tab>\r\n\r\n        </ng-ui-tab-group>\r\n\r\n\r\n\r\n        <ng-ui-button-group class=\"mt2\">\r\n            <ng-ui-button icon=\"undo-alt\" type=\"default\" (click)=\"resetPage()\" [loading]=\"false\">Nouvelle simulation</ng-ui-button>\r\n            <a id=\"downloadAnchorElem\" style=\"display:none\"></a>\r\n        </ng-ui-button-group>\r\n    </ng-container>\r\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app/app.component */ "WfQD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_simulator_simulator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/simulator/simulator.component */ "P65g");
/* harmony import */ var _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sfpd/ng-ui */ "1O6W");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iplab/ngx-file-upload */ "zLsU");
/* harmony import */ var _services_translation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/translation.service */ "ty2H");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/fr */ "Hfs6");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_bank_holidays_bank_holidays_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/bank-holidays/bank-holidays.component */ "HsjX");
/* harmony import */ var _components_open_open_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/open/open.component */ "NZIm");
/* harmony import */ var _components_leave_types_leave_types_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/leave-types/leave-types.component */ "oOLH");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-oauth2-oidc */ "LgUO");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.interceptor */ "A6fv");
/* harmony import */ var _components_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pdf/pdf.component */ "9mKg");




















__webpack_require__("u24W");
Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_12___default.a);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_simulator_simulator_component__WEBPACK_IMPORTED_MODULE_7__["SimulatorComponent"], _components_bank_holidays_bank_holidays_component__WEBPACK_IMPORTED_MODULE_14__["BankHolidaysComponent"], _components_leave_types_leave_types_component__WEBPACK_IMPORTED_MODULE_16__["LeaveTypesComponent"], _components_open_open_component__WEBPACK_IMPORTED_MODULE_15__["OpenComponent"], _components_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_19__["PdfComponent"]],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__["FormModule"],
            _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__["DatePickerModule"],
            _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
            _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__["SwitchModule"],
            _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__["TabModule"],
            _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__["OAuthModule"].forRoot({
                resourceServer: {
                    sendAccessToken: true
                }
            })
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
                useValue: 'fr'
            },
            {
                provide: _sfpd_ng_ui__WEBPACK_IMPORTED_MODULE_8__["NG_UI_TRANSLATOR"],
                useClass: _services_translation_service__WEBPACK_IMPORTED_MODULE_11__["TranslationsService"]
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
                multi: true,
            },
            { provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_17__["OAuthStorage"], useValue: sessionStorage },
        ],
        exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
        bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "aqdw":
/*!***************************************************!*\
  !*** ./src/app/services/bank-holidays.service.ts ***!
  \***************************************************/
/*! exports provided: BankHolidaysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankHolidaysService", function() { return BankHolidaysService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.service */ "Ig2y");




let BankHolidaysService = class BankHolidaysService {
    constructor(_http, _date) {
        this._http = _http;
        this._date = _date;
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var values = this._http.get('/api/bankholidays').toPromise();
            this._date.convertToDate(values);
            return values;
        });
    }
    add(date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._date.convertToString(date);
            yield this._http.post('/api/bankholidays', { date: date }).toPromise();
        });
    }
    delete(date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._date.convertToString(date);
            yield this._http.post('/api/bankholidays/delete', date).toPromise();
        });
    }
};
BankHolidaysService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }
];
BankHolidaysService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
], BankHolidaysService);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "LgUO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-config */ "ITZG");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "qfBg");







let AuthService = class AuthService {
    constructor(_oauthService, _activatedRoute, _router, _userService) {
        this._oauthService = _oauthService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._userService = _userService;
        this.stateKey = "eoc_redirect_url";
        this._connectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        this.connected = false;
        this._oauthService.configure(_auth_config__WEBPACK_IMPORTED_MODULE_5__["authConfig"]);
        this._authenticate().then(() => this._connectedSubject.next());
    }
    get connected$() {
        return this._connectedSubject.asObservable();
    }
    _authenticate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._oauthService.hasValidAccessToken() === false && sessionStorage.getItem(this.stateKey) === null) {
                sessionStorage.setItem(this.stateKey, location.pathname);
            }
            if (!this._userService.currentUser) {
                let data = yield this._oauthService.loadDiscoveryDocumentAndLogin();
                if (data === true) {
                    let email = this._oauthService.getIdentityClaims()['upn'];
                    this._userService.currentUser = { email: email };
                    this.connected = true;
                    this._oauthService.setupAutomaticSilentRefresh();
                    if (this._oauthService.hasValidAccessToken()) {
                        const state = sessionStorage.getItem(this.stateKey);
                        sessionStorage.removeItem(this.stateKey);
                        if (state) {
                            this._router.navigateByUrl(state);
                        }
                    }
                }
                else {
                    localStorage.removeItem("intranet.users");
                }
            }
            return true;
        });
    }
    /******************************************************** PUBLIC ********************************************************/
    // TODO: The token should be refreshed when expired
    ensureUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let valueReturned = { authenticated: false, routes: null };
            if (!this._userService.currentUser) {
                yield this._oauthService.loadDiscoveryDocument();
                yield this._oauthService.tryLoginCodeFlow().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const accessToken = sessionStorage.getItem('access_token');
                    let email = this._oauthService.getIdentityClaims()['upn'];
                    this._userService.currentUser = { email: email };
                    valueReturned.routes = location.href;
                    valueReturned.authenticated = true;
                    if (this._userService.currentUser) {
                        valueReturned.authenticated = true;
                    }
                    if (this.connected == false) {
                        this.connected = true;
                        this._connectedSubject.next();
                    }
                }));
            }
            return valueReturned;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], AuthService);



/***/ }),

/***/ "o+k5":
/*!***************************************************!*\
  !*** ./src/app/components/pdf/pdf.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pdf {\n  width: 800px;\n  border: solid 1px black;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  color: white;\n  background-color: #0077c1;\n}\n\n.justification {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZGYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoicGRmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBkZntcclxuICAgIHdpZHRoOjgwMHB4O1xyXG4gICAgYm9yZGVyOnNvbGlkIDFweCBibGFjaztcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdjMTtcclxufVxyXG5cclxuLmp1c3RpZmljYXRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "oOLH":
/*!*****************************************************************!*\
  !*** ./src/app/components/leave-types/leave-types.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaveTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypesComponent", function() { return LeaveTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leave_types_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leave-types.component.html */ "7n3M");
/* harmony import */ var _leave_types_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-types.component.scss */ "MLwJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_leave_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/leave-types.service */ "ouOK");







let LeaveTypesComponent = class LeaveTypesComponent {
    constructor(_router, _route, _leaveTypes, _fb) {
        this._router = _router;
        this._route = _route;
        this._leaveTypes = _leaveTypes;
        this._fb = _fb;
        this.adding = false;
        this.addRequested = false;
        this.buildForm();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.refresh();
        });
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.valid) {
                this.adding = true;
                yield this._leaveTypes.add(this.form.value);
                this.form.reset({ code: '', description: '', isExtending: false });
                yield this.refresh();
                this.adding = false;
                this.addRequested = false;
            }
        });
    }
    delete(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._leaveTypes.delete(t);
            yield this.refresh();
        });
    }
    buildForm() {
        this.form = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', null],
            isExtending: [false, null]
        });
    }
    refresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.types = yield this._leaveTypes.getAll();
        });
    }
    toggleExtend(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._leaveTypes.toggleExtending(t);
            yield this.refresh();
        });
    }
    toggleExtendHolidays(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._leaveTypes.toggleExtendingHolidays(t);
            yield this.refresh();
        });
    }
};
LeaveTypesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_leave_types_service__WEBPACK_IMPORTED_MODULE_6__["LeaveTypesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LeaveTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'leave-types',
        template: _raw_loader_leave_types_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_types_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_leave_types_service__WEBPACK_IMPORTED_MODULE_6__["LeaveTypesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], LeaveTypesComponent);



/***/ }),

/***/ "ouOK":
/*!*************************************************!*\
  !*** ./src/app/services/leave-types.service.ts ***!
  \*************************************************/
/*! exports provided: LeaveTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypesService", function() { return LeaveTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.service */ "Ig2y");




let LeaveTypesService = class LeaveTypesService {
    constructor(_http, _date) {
        this._http = _http;
        this._date = _date;
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var values = this._http.get('/api/leavetype').toPromise();
            this._date.convertToDate(values);
            return values;
        });
    }
    add(leaveType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._http.post('/api/leavetype', leaveType).toPromise();
        });
    }
    delete(leaveType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._http.post('/api/leavetype/delete', leaveType).toPromise();
        });
    }
    toggleExtending(leaveType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._http.put('/api/leavetype/extending', leaveType).toPromise();
        });
    }
    toggleExtendingHolidays(leaveType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._http.put('/api/leavetype/extending-holiday', leaveType).toPromise();
        });
    }
};
LeaveTypesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }
];
LeaveTypesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
], LeaveTypesService);



/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let UserService = class UserService {
    constructor() {
        this.currentUser = null;
    }
};
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<simulator></simulator>");

/***/ }),

/***/ "ty2H":
/*!*************************************************!*\
  !*** ./src/app/services/translation.service.ts ***!
  \*************************************************/
/*! exports provided: TranslationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationsService", function() { return TranslationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TranslationsService = class TranslationsService {
    constructor() {
        this._translations = [{ "Key": "ng-ui-date-picker-march", "Value": "mars" }, { "Key": "ng-ui-date-picker-may", "Value": "mai" }, { "Key": "ng-ui-date-picker-monday", "Value": "lu" }, { "Key": "ng-ui-date-picker-november", "Value": "novembre" }, { "Key": "ng-ui-date-picker-october", "Value": "octobre" }, { "Key": "ng-ui-date-picker-saturday", "Value": "sa" }, { "Key": "ng-ui-date-picker-september", "Value": "septembre" }, { "Key": "ng-ui-date-picker-june", "Value": "juin" }, { "Key": "ng-ui-date-picker-sunday", "Value": "di" }, { "Key": "ng-ui-date-picker-tuesday", "Value": "ma" }, { "Key": "ng-ui-date-picker-wednesday", "Value": "me" }, { "Key": "ng-ui-form-control-optional", "Value": "Optionnel" }, { "Key": "ng-ui-date-picker-thursday", "Value": "je" }, { "Key": "ng-ui-date-picker-july", "Value": "juillet" }, { "Key": "ng-ui-date-picker-january", "Value": "janvier" }, { "Key": "ng-ui-date-picker-friday", "Value": "ve" }, { "Key": "ng-ui-date-picker-april", "Value": "avril" }, { "Key": "ng-ui-date-picker-august", "Value": "août" }, { "Key": "ng-ui-date-picker-december", "Value": "décembre" }, { "Key": "ng-ui-date-picker-february", "Value": "février" }];
    }
    translate(key, params) {
        var one = this._translations.find(t => t.Key == key);
        if (one) {
            return one.Value;
        }
        else {
            return key;
        }
    }
};
TranslationsService.ctorParameters = () => [];
TranslationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TranslationsService);



/***/ }),

/***/ "u24W":
/*!**************************************!*\
  !*** ./src/assets/img sync ^\.\/.*$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./logo.png": "T/0B"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "u24W";

/***/ }),

/***/ "uXNW":
/*!***********************************************!*\
  !*** ./src/app/services/auth-gard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "qfBg");






let AuthGuardService = class AuthGuardService {
    constructor(_authService, _router, _user) {
        this._authService = _authService;
        this._router = _router;
        this._user = _user;
    }
    canActivate(routeAc, state) {
        return this._authService.connected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            var success = this._user.currentUser != null;
            if (!success) {
                this._router.navigateByUrl("/access-denied");
            }
            else {
                return true;
            }
        }));
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], AuthGuardService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_bank_holidays_bank_holidays_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bank-holidays/bank-holidays.component */ "HsjX");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_leave_types_leave_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/leave-types/leave-types.component */ "oOLH");
/* harmony import */ var _components_open_open_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/open/open.component */ "NZIm");
/* harmony import */ var _components_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pdf/pdf.component */ "9mKg");
/* harmony import */ var _services_auth_gard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-gard.service */ "uXNW");









const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: 'bank-holidays',
        component: _components_bank_holidays_bank_holidays_component__WEBPACK_IMPORTED_MODULE_3__["BankHolidaysComponent"],
        canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: 'leave-types',
        component: _components_leave_types_leave_types_component__WEBPACK_IMPORTED_MODULE_5__["LeaveTypesComponent"],
        canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: 'open',
        component: _components_open_open_component__WEBPACK_IMPORTED_MODULE_6__["OpenComponent"],
        canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: 'pdf',
        component: _components_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_7__["PdfComponent"],
        canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yK4R":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div routeTransformer class=\"container\">\r\n    <div *ngIf=\"applicationIsReady == true\">\r\n        <div class=\"uppercase toolbar flex-row flex-aic white font-size15\">\r\n            <div class=\"flex-row flex-aic flex-grow\">\r\n                <i class=\"fas fa-calendar-alt mr1\"></i>\r\n                Calcul de prolongation de préavis\r\n            </div>\r\n            <div class=\"flex-row flex-aic font-size10\">\r\n                <div class=\"link flex-row flex-aic pointer mr2\" (click)=\"newSimulation()\">\r\n                    <i class=\"fas fa-calculator mr1\"></i>Nouvelle simulation\r\n                </div>\r\n                <div *ngIf=\"lastResultAvailable()\" class=\"link flex-row flex-aic pointer mr2\" (click)=\"reload()\">\r\n                    <i class=\"fas fa-history mr1\"></i>Revoir votre dernière simulation\r\n                </div>\r\n                <div  class=\"link flex-row flex-aic pointer mr2\" [routerLink]=\"['/open']\">\r\n                    <i class=\"fas fa-upload mr1\"></i>Ouvrir une simulation\r\n                </div>\r\n               \r\n                <div class=\"link flex-row flex-aic pointer mr2\" [routerLink]=\"['/leave-types']\">\r\n                    <i class=\"fas fa-tag mr1\"></i>Codes d'absence\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"content content-scroll\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "zPH0":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map