(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Themistoklis\Desktop\projects\Onelity-quiz-app-dev\src\main.ts */"zUnb");


/***/ }),

/***/ "4rgs":
/*!********************************************!*\
  !*** ./src/app/points/points.component.ts ***!
  \********************************************/
/*! exports provided: PointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsComponent", function() { return PointsComponent; });
/* harmony import */ var _app_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.animations */ "f3AP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_points_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/points.service */ "ACF1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PointsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r0.points, "");
} }
class PointsComponent {
    constructor(pointsService) {
        this.pointsService = pointsService;
        this.active = false;
        this.points = 0;
    }
    ngOnInit() {
        this.pointsService.currentPoints.subscribe((points) => {
            this.active = points.active;
            this.points = points.points;
        });
    }
}
PointsComponent.ɵfac = function PointsComponent_Factory(t) { return new (t || PointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_points_service__WEBPACK_IMPORTED_MODULE_2__["PointsService"])); };
PointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PointsComponent, selectors: [["app-points"]], decls: 1, vars: 1, consts: [["class", "recurringSchedule border-top py-2", "style", "z-index: 20", 4, "ngIf"], [1, "recurringSchedule", "border-top", "py-2", 2, "z-index", "20"], [1, "form-group", "flex", "items-center"], ["src", "assets/img/star.png", 1, "points-img", "mr-5"], [1, "points-value"]], template: function PointsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PointsComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.active);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 17px;\n}\n\n.recurringSchedule[_ngcontent-%COMP%] {\n  z-index: 20;\n  background: rgba(183, 171, 123, 0.6);\n  border-radius: 70px;\n  width: 300px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.recurringSchedule[_ngcontent-%COMP%]   .points-img[_ngcontent-%COMP%] {\n  max-height: 48px;\n}\n\n.recurringSchedule[_ngcontent-%COMP%]   .points-value[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n  font-weight: 700;\n}\n\n@media screen and (max-width: 767px) {\n  .recurringSchedule[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 50px;\n  }\n\n  .recurringSchedule[_ngcontent-%COMP%]   .points-img[_ngcontent-%COMP%] {\n    max-height: 30px;\n    margin-right: 10px;\n  }\n\n  .recurringSchedule[_ngcontent-%COMP%]   .points-value[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBvaW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQURGOztFQUdFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQURKOztFQUlFO0lBQ0UsZUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoicG9pbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE3cHg7XHJcbn1cclxuXHJcbi5yZWN1cnJpbmdTY2hlZHVsZSB7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE4MywgMTcxLCAxMjMsIDAuNik7XHJcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnBvaW50cy1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogNDhweDtcclxuICB9XHJcblxyXG4gIC5wb2ludHMtdmFsdWUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnJlY3VycmluZ1NjaGVkdWxlIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAucG9pbnRzLWltZyB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucG9pbnRzLXZhbHVlIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [_app_animations__WEBPACK_IMPORTED_MODULE_0__["slideInOut"]] } });


/***/ }),

/***/ "ACF1":
/*!********************************************!*\
  !*** ./src/app/services/points.service.ts ***!
  \********************************************/
/*! exports provided: PointsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsService", function() { return PointsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PointsService {
    constructor() {
        this.pointsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
            active: false,
            points: 0,
        });
        this.currentPoints = this.pointsSource.asObservable();
    }
    changePoints(points) {
        this.pointsSource.next({
            active: points.active,
            points: points.points,
        });
    }
}
PointsService.ɵfac = function PointsService_Factory(t) { return new (t || PointsService)(); };
PointsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PointsService, factory: PointsService.ɵfac, providedIn: 'root' });


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.animations */ "f3AP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _points_points_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./points/points.component */ "4rgs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _quiz_panel_quiz_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-panel/quiz-panel.component */ "T6oF");






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Are you a fit for the Tribe?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.startQuiz(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u03A3\u03C5\u03BD\u03AD\u03C7\u03B9\u03C3\u03B5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined)("@fadeOut", undefined);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-quiz-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined)("@fadeOut", undefined);
} }
class AppComponent {
    constructor() {
        this.title = 'onelity-quiz-app';
        this.startPage = false;
        this.startQuizPanel = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.startPage = true;
        }, 2000);
    }
    startQuiz() {
        this.startPage = false;
        setTimeout(() => {
            this.startQuizPanel = true;
        }, 1000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [["class", "start-page", 4, "ngIf"], ["class", "\n    md:w-6/12 md:h-4/5\n    w-full\n    h-full\n    flex flex-col\n    justify-between\n    quiz-panel\n    content-between\n  ", 4, "ngIf"], [1, "start-page"], ["src", "assets/img/onelity-logo.png", 1, "onelity-logo"], [1, "w-full", "text-center"], [1, "start-btn", "mt-6", "w-3/12", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "text-2xl", "rounded-full", 3, "click"], [1, "md:w-6/12", "md:h-4/5", "w-full", "h-full", "flex", "flex-col", "justify-between", "quiz-panel", "content-between"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-points");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 7, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.startPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.startQuizPanel);
    } }, directives: [_points_points_component__WEBPACK_IMPORTED_MODULE_2__["PointsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _quiz_panel_quiz_panel_component__WEBPACK_IMPORTED_MODULE_5__["QuizPanelComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n  margin-bottom: 70px;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 0px;\n  text-align: center;\n  margin: 0px;\n  margin-bottom: 55px;\n}\n\n.start-btn[_ngcontent-%COMP%] {\n  background: #b7ab7b;\n}\n\n.start-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 40px;\n}\n\n@media screen and (max-width: 767px) {\n  .start-page[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  .quiz-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .onelity-logo[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .start-btn[_ngcontent-%COMP%] {\n    width: 50vw;\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7RUFBRjs7RUFHQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBQUY7O0VBR0E7SUFDRSxnQkFBQTtFQUFGOztFQUdBO0lBQ0UsZUFBQTtFQUFGOztFQUdBO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbn1cclxuXHJcbi5zdGFydC1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNiN2FiN2I7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc3RhcnQtcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgLnF1aXotcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAub25lbGl0eS1sb2dvIHtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuc3RhcnQtYnRuIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [_app_animations__WEBPACK_IMPORTED_MODULE_0__["fadeIn"], _app_animations__WEBPACK_IMPORTED_MODULE_0__["fadeOut"]] } });


/***/ }),

/***/ "T6oF":
/*!****************************************************!*\
  !*** ./src/app/quiz-panel/quiz-panel.component.ts ***!
  \****************************************************/
/*! exports provided: QuizPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPanelComponent", function() { return QuizPanelComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.animations */ "f3AP");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_points_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/points.service */ "ACF1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contact/contact.component */ "bzTf");










const _c0 = function (a0) { return { "last-section": a0 }; };
function QuizPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuizPanelComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onPrevious(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r0.isMobile() && ctx_r0.counter === ctx_r0.questions.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.faChevronLeft);
} }
function QuizPanelComponent_ng_container_3_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", o_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function QuizPanelComponent_ng_container_3_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function QuizPanelComponent_ng_container_3_div_1_form_5_div_1_div_6_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function QuizPanelComponent_ng_container_3_div_1_form_5_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, QuizPanelComponent_ng_container_3_div_1_form_5_div_1_div_6_img_3_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined)("@fadeOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.tip);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r14.image);
} }
const _c1 = function (a0, a1) { return { "correct-answer": a0, "wrong-answer": a1 }; };
function QuizPanelComponent_ng_container_3_div_1_form_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function QuizPanelComponent_ng_container_3_div_1_form_5_div_1_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const item_r14 = ctx.$implicit; const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.onCheckChange(item_r14, o_r6.formName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, QuizPanelComponent_ng_container_3_div_1_form_5_div_1_div_6_Template, 4, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r13.checkIfChecked(item_r14, o_r6.formName) ? "mb-0" : "mb-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c1, ctx_r13.checkIfChecked(item_r14, o_r6.formName) && ctx_r13.isCorrectAnswer(item_r14, o_r6), ctx_r13.checkIfChecked(item_r14, o_r6.formName) && ctx_r13.isWrongAnswer(item_r14, o_r6)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", item_r14.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", o_r6.formName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r13.checkIfChecked(item_r14, o_r6.formName))("value", item_r14.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", item_r14.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.checkIfChecked(item_r14, o_r6.formName));
} }
function QuizPanelComponent_ng_container_3_div_1_form_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuizPanelComponent_ng_container_3_div_1_form_5_div_1_Template, 7, 12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r11.form)("@listAnimation", o_r6.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", o_r6.options);
} }
function QuizPanelComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, QuizPanelComponent_ng_container_3_div_1_img_3_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, QuizPanelComponent_ng_container_3_div_1_span_4_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, QuizPanelComponent_ng_container_3_div_1_form_5_Template, 2, 3, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r7 = ctx_r24.index;
    const o_r6 = ctx_r24.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", o_r6.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", o_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r8.isMobile() && o_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.showOptions);
} }
function QuizPanelComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuizPanelComponent_ng_container_3_div_1_Template, 6, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r7 === ctx_r1.counter);
} }
function QuizPanelComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03CC matching");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "circle-progress", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("percent", ctx_r2.percentMatching)("radius", 100)("outerStrokeWidth", 14)("innerStrokeWidth", 8)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 1500);
} }
function QuizPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuizPanelComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.onNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r3.faChevronRight);
} }
const _c2 = function () { return { width: "100%" }; };
const _c3 = function (a0, a1) { return { value: a0, params: a1 }; };
const _c4 = function () { return { width: "50%" }; };
class QuizPanelComponent {
    constructor(fb, pointsService, ref) {
        this.pointsService = pointsService;
        this.ref = ref;
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronRight"];
        this.numberOfCorrectAnswers = 0;
        this.numberOfWrongAnswers = 0;
        this.counter = 0;
        this.showOptions = false;
        this.percentMatching = 70;
        this.points = 0;
        this.questions = [
            {
                title: 'Τι είναι το «01» ;',
                formName: 'first',
                options: [
                    {
                        option: 'ΟΑΣΘ: Τ.Σ. ΕΥΚΑΡΠΙΑΣ - ΣΚΛΑΒΕΝΙΤΗΣ - ΝΟΣ. ΠΑΠΑΓΕΩΡΓΙΟΥ - Κ.Τ.Ε.Λ. ',
                        tip: 'Είσαι «αστικός» μύθος',
                    },
                    {
                        option: 'Dukes of Hazard, General Lee',
                        tip: 'Πόσο χρονών είσαι είπαμε;',
                    },
                    { option: 'Δυαδικός Κώδικάς', tip: 'Χμμμ… έχεις potential…' },
                ],
                answer: 2,
            },
            {
                title: 'What is QA;',
                formName: 'second',
                options: [
                    { option: 'Queen Alexandra', tip: 'Ok, είσαι για τον εξώστη' },
                    { option: 'Question and Answer', tip: 'Μήπως το πάς για influencer?' },
                    { option: 'Quality assurance', tip: 'Η φύλαρχος σε χαιρετά!' },
                ],
                answer: 2,
            },
            {
                title: ' Delivery, τι σου θυμίζει;',
                formName: 'third',
                options: [
                    { option: 'Σουβλάκια', tip: 'Χρειάζεσαι γαστρονομική φροντίδα' },
                    {
                        option: 'Φακέλους και δέματα',
                        tip: 'Η καραντίνα τελείωσε, μπορείς να βγεις…',
                    },
                    {
                        option: '«Continuous» και ο νοών νοήτω',
                        tip: 'H φυλή υποκλίνεται στο μεγαλείο σου!',
                    },
                ],
                answer: 2,
            },
            {
                title: 'What this means to you',
                formName: 'fourth',
                image: 'assets/img/java_mug_coffee.png',
                options: [
                    {
                        option: 'Θα μου πούν το φλυτζάνι',
                        tip: 'Χμμμ…',
                    },
                    {
                        option: 'Καφεεεε…απλά',
                        tip: 'Hmmm…σε έχουμε καλύψει με μια - ',
                        image: 'assets/img/coffee-maker-white.png',
                    },
                    {
                        option: 'Java challenge',
                        tip: 'Κυλά στις φλέβες σου αίμα της φυλής…',
                    },
                ],
                answer: 2,
            },
        ];
        this.form = fb.group({
            first: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            second: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            third: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            fourth: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
        });
        this.onResize();
    }
    onResize() {
        this.screenWidth = window.innerWidth;
    }
    ngOnInit() {
        setTimeout(() => {
            this.showOptions = true;
        }, 500);
    }
    ngAfterContentChecked() {
        this.ref.detectChanges();
    }
    onSwipe(evt) {
        const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
        console.log(`${x}`);
        if (x === 'left') {
            this.onNext();
        }
        else {
            this.onPrevious();
        }
    }
    calculatePoints() {
        let numberOfCorrectAnswers = 0;
        let numberOfWrongAnswersFirst = 0;
        let numberOfWrongAnswersSecond = 0;
        let numberOfWrongAnswersThird = 0;
        let numberOfWrongAnswersFourth = 0;
        let answeredCorrectlyFirst = false;
        let answeredCorrectlySecond = false;
        let answeredCorrectlyThird = false;
        let answeredCorrectlyFourth = false;
        const firstArray = this.form.get('first');
        const secondArray = this.form.get('second');
        const thirdArray = this.form.get('third');
        const fourthArray = this.form.get('fourth');
        firstArray.value.forEach((element) => {
            if (this.questions[0].options[this.questions[0].answer].option === element) {
                answeredCorrectlyFirst = true;
                numberOfCorrectAnswers++;
                numberOfWrongAnswersFirst = 0;
            }
            else {
                !answeredCorrectlyFirst &&
                    numberOfWrongAnswersFirst === 0 &&
                    numberOfWrongAnswersFirst++;
            }
        });
        secondArray.value.forEach((element) => {
            if (this.questions[1].options[this.questions[1].answer].option === element) {
                answeredCorrectlySecond = true;
                numberOfCorrectAnswers++;
                numberOfWrongAnswersSecond = 0;
            }
            else {
                !answeredCorrectlySecond &&
                    numberOfWrongAnswersSecond === 0 &&
                    numberOfWrongAnswersSecond++;
            }
        });
        thirdArray.value.forEach((element) => {
            if (this.questions[2].options[this.questions[2].answer].option === element) {
                answeredCorrectlyThird = true;
                numberOfCorrectAnswers++;
                numberOfWrongAnswersThird = 0;
            }
            else {
                !answeredCorrectlyThird &&
                    numberOfWrongAnswersThird === 0 &&
                    numberOfWrongAnswersThird++;
            }
        });
        fourthArray.value.forEach((element) => {
            if (this.questions[3].options[this.questions[3].answer].option === element) {
                answeredCorrectlyFourth = true;
                numberOfCorrectAnswers++;
                numberOfWrongAnswersFourth = 0;
            }
            else {
                !answeredCorrectlyFourth &&
                    numberOfWrongAnswersFourth === 0 &&
                    numberOfWrongAnswersFourth++;
            }
        });
        this.numberOfCorrectAnswers = numberOfCorrectAnswers;
        this.numberOfWrongAnswers =
            numberOfWrongAnswersFirst +
                numberOfWrongAnswersSecond +
                numberOfWrongAnswersThird +
                numberOfWrongAnswersFourth;
        this.points =
            this.numberOfCorrectAnswers * 10 + this.numberOfWrongAnswers * 5;
        this.pointsService.changePoints({ active: true, points: this.points });
        setTimeout(() => {
            this.pointsService.changePoints({ active: false, points: this.points });
        }, 3000);
    }
    onCheckChange(item, formName) {
        const currentFormArray = this.form.get(formName);
        currentFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](item.option));
        this.calculatePoints();
    }
    onNext() {
        if (this.counter != this.questions.length) {
            this.counter++;
            this.showOptions = false;
            setTimeout(() => {
                this.showOptions = true;
            }, 500);
        }
        if (this.counter === this.questions.length) {
            this.calculateMatching();
        }
    }
    isMobile() {
        return this.screenWidth <= 800;
    }
    calculateMatching() {
        switch (this.numberOfCorrectAnswers) {
            case 0: {
                this.percentMatching = 70;
                break;
            }
            case 1: {
                this.percentMatching = 80;
                break;
            }
            case 2: {
                this.percentMatching = 90;
                break;
            }
            case 3: {
                this.percentMatching = 95;
                break;
            }
            case 4: {
                this.percentMatching = 100;
                break;
            }
        }
    }
    isCorrectAnswer(item, question) {
        return (this.questions[this.counter].options[question.answer].option ===
            item.option);
    }
    isWrongAnswer(item, question) {
        return (this.form.get(question.formName).value &&
            this.questions[this.counter].options[question.answer].option !==
                item.option);
    }
    checkIfChecked(item, formName) {
        const formArray = this.form.get(formName);
        return formArray.value.indexOf(item.option) !== -1;
    }
    onPrevious() {
        if (this.counter > 0) {
            this.counter--;
            this.showOptions = false;
            setTimeout(() => {
                this.showOptions = true;
            }, 500);
        }
    }
}
QuizPanelComponent.ɵfac = function QuizPanelComponent_Factory(t) { return new (t || QuizPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_points_service__WEBPACK_IMPORTED_MODULE_4__["PointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
QuizPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QuizPanelComponent, selectors: [["app-quiz-panel"]], hostBindings: function QuizPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function QuizPanelComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 13, consts: [["class", "left", 3, "ngClass", "click", 4, "ngIf"], [1, "h-full", "justify-center", "items-center", 3, "swipe"], [1, "h-full", "quiz-content", "h-full", "w-full"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "right", 3, "click", 4, "ngIf"], [1, "left", 3, "ngClass", "click"], [3, "icon"], [3, "name", 4, "ngIf"], [3, "name"], [1, "flex", "main-title", "text-center", "items-center", "title-question", "justify-center"], ["class", "max-h-20 mx-5", 3, "src", 4, "ngIf"], ["class", "text-center pb-8 items", 3, "formGroup", 4, "ngIf"], [1, "max-h-20", "mx-5", 3, "src"], [1, "text-center", "pb-8", "items", 3, "formGroup"], ["class", "item-container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "item-container", 3, "ngClass"], [1, "p-5", "text-2xl", "item", 3, "ngClass"], [1, "inputGroup"], ["type", "checkbox", 3, "disabled", "id", "name", "value", "change"], [3, "for"], ["class", "flex items-center tip my-5", 4, "ngIf"], [1, "flex", "items-center", "tip", "my-5"], ["class", "tip-image", 3, "src", 4, "ngIf"], [1, "tip-image", 3, "src"], [1, "mat-app-background", "h-full", "basic-container"], [1, "flex", "flex-col", "w-full", "items-center", "justify-center"], [1, "pt-0"], [1, "md:my-5", "my-3"], [3, "percent", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "animationDuration"], [1, "right", 3, "click"]], template: function QuizPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, QuizPanelComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("swipe", function QuizPanelComponent_Template_div_swipe_1_listener($event) { return ctx.onSwipe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, QuizPanelComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, QuizPanelComponent_ng_container_4_Template, 8, 8, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, QuizPanelComponent_div_5_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.counter > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@animSlider", ctx.isMobile() ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c3, ctx.counter, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2)) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c3, ctx.counter, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c4)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.counter === ctx.questions.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.counter < ctx.questions.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["CircleProgressComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.quiz-content[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  color: white;\n  font-size: 30px;\n  top: 46.5%;\n  z-index: 9999999999999;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  font-weight: 500;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 0.375em;\n  \n  \n  \n}\n\nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -9999px;\n}\n\nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:after {\n  box-shadow: inset 0 0 0 0.4375em #b7ab7b;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 99em;\n  transition: 0.25s ease;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  display: flex;\n  right: 0;\n  flex-shrink: 0;\n  content: \"\";\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  transition: 0.25s ease;\n  margin-left: 10px;\n  box-shadow: inset 0 0 0 0.125em #b7ab7b;\n}\n\n.title-question[_ngcontent-%COMP%] {\n  margin-bottom: 19vh;\n  color: white !important;\n}\n\n.right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  color: white;\n  font-size: 30px;\n  top: 46.5%;\n  z-index: 9999999999999;\n}\n\n.tip[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  font-style: italic;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n\n.basic-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.tip-image[_ngcontent-%COMP%] {\n  color: white;\n  max-height: 50px;\n}\n\n.item[_ngcontent-%COMP%] {\n  border: 2px solid #b7ab7b;\n  border-radius: 20px;\n}\n\n.left-right[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n  color: white;\n}\n\n.left-right[_ngcontent-%COMP%]:not(.disabled):hover {\n  opacity: 0.8;\n}\n\n.correct-answer[_ngcontent-%COMP%] {\n  background: #006f00;\n  border: 2px solid #006f00;\n  transition: background-color 300ms linear;\n  -moz-transition: background-color 300ms linear;\n  -webkit-transition: background-color 300ms linear;\n  -ms-transition: background-color 300ms linear;\n}\n\n.correct-answer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  display: none;\n}\n\n.wrong-answer[_ngcontent-%COMP%] {\n  background: #c70000;\n  border: 2px solid #c70000;\n  transition: background-color 300ms linear;\n  -moz-transition: background-color 300ms linear;\n  -webkit-transition: background-color 300ms linear;\n  -ms-transition: background-color 300ms linear;\n}\n\n.wrong-answer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  display: none;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 40px;\n  color: #b7ab7b;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.title-question[_ngcontent-%COMP%] {\n  margin-bottom: 19vh;\n  color: white !important;\n}\n\n.inputGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n@media screen and (max-width: 767px) {\n  .title-question[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n\n  .basic-container[_ngcontent-%COMP%]   circle-progress[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 50% !important;\n  }\n\n  .basic-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 17px;\n    color: white;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  .items[_ngcontent-%COMP%] {\n    padding-right: 20px;\n    padding-left: 20px;\n    position: absolute;\n    left: 0%;\n    top: 40%;\n    width: 100%;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    right: 16px;\n  }\n\n  .main-title[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .left[_ngcontent-%COMP%] {\n    left: 16px;\n  }\n\n  .quiz-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: space-between;\n  }\n\n  .quiz-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .quiz-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {\n    flex: 1;\n    content: \"\";\n  }\n\n  .inputGroup[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .inputGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .item-container[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .basic-container[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n\n  .basic-container[_ngcontent-%COMP%]   circle-progress[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 50% !important;\n  }\n\n  .basic-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n\n  .tip[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .item[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n\n  .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .last-section[_ngcontent-%COMP%] {\n    top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHF1aXotcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBOzs7O0dBQUE7QUFFRjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlNO0VBQ0Usd0NBQUE7QUFGUjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFTSTtFQUNFLGFBQUE7RUFFQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBVE47O0FBY0E7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBRUEsbUJBQUE7QUFaRjs7QUFjRTtFQUNFLGVBQUE7QUFaSjs7QUFnQkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFiRjs7QUFnQkE7RUFDRSx5QkFBQTtFQUdBLG1CQUFBO0FBZkY7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWZGOztBQWtCSTtFQUNFLFlBQUE7QUFoQk47O0FBcUJBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsOENBQUE7RUFDQSxpREFBQTtFQUNBLDZDQUFBO0FBbEJGOztBQW9CRTtFQUNFLGFBQUE7QUFsQko7O0FBc0JBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsOENBQUE7RUFDQSxpREFBQTtFQUNBLDZDQUFBO0FBbkJGOztBQXFCRTtFQUNFLGFBQUE7QUFuQko7O0FBdUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0E1SWM7QUF3SGhCOztBQXVCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBcEJGOztBQXVCQTtFQUNFLGtCQUFBO0FBcEJGOztBQXVCQTtFQUNFO0lBQ0Usa0JBQUE7RUFwQkY7O0VBeUJJO0lBQ0Usc0JBQUE7RUF0Qk47O0VBK0JFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUE3Qko7O0VBaUNBO0lBQ0UsaUJBQUE7RUE5QkY7O0VBaUNBO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VBL0JGOztFQWtDQTtJQUNFLFdBQUE7RUEvQkY7O0VBa0NBO0lBQ0Usc0JBQUE7RUEvQkY7O0VBa0NBO0lBQ0UsVUFBQTtFQS9CRjs7RUFrQ0E7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0lBQ0EsOEJBQUE7RUEvQkY7O0VBaUNFO0lBQ0UsT0FBQTtFQS9CSjs7RUFrQ0U7SUFDRSxPQUFBO0lBQ0EsV0FBQTtFQWhDSjs7RUFvQ0E7SUFDRSxjQUFBO0VBakNGOztFQW9DQTs7SUFFRSxlQUFBO0VBakNGOztFQW9DQTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQWpDRjs7RUFvQ0E7SUFDRSxrQ0FBQTtFQWpDRjs7RUFtQ0k7SUFDRSxzQkFBQTtFQWpDTjs7RUFxQ0U7SUFDRSxhQUFBO0VBbkNKOztFQXVDQTtJQUNFLGVBQUE7RUFwQ0Y7O0VBdUNBO0lBQ0UsWUFBQTtFQXBDRjs7RUFzQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBcENKOztFQXdDQTtJQUNFLFNBQUE7RUFyQ0Y7QUFDRiIsImZpbGUiOiJxdWl6LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucXVpei1jb250ZW50IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogNTVweDtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdG9wOiA0Ni41JTtcclxuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5O1xyXG59XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogI2I3YWI3YjtcclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMzc1ZW07XHJcbiAgLyogQWNjZXNzaWJsZSBvdXRsaW5lICovXHJcbiAgLyogUmVtb3ZlIGNvbW1lbnQgdG8gdXNlICovXHJcbiAgLypcclxuXHRcdCY6Zm9jdXMtd2l0aGluIHtcclxuXHRcdFx0XHRvdXRsaW5lOiAuMTI1ZW0gc29saWQgJHByaW1hcnktY29sb3I7XHJcblx0XHR9XHJcblx0Ki9cclxuICBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOTk5OXB4O1xyXG4gICAgJjpjaGVja2VkICsgc3BhbiB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IG1peCgjZmZmLCAkcHJpbWFyeS1jb2xvciwgODQlKTtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMC40Mzc1ZW0gJHByaW1hcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gcGFkZGluZzogMC4zNzVlbSAwLjc1ZW0gMC4zNzVlbSAwLjM3NWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTllbTsgLy8gb3Igc29tZXRoaW5nIGhpZ2hlci4uLlxyXG4gICAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZTtcclxuICAgIC8vICY6aG92ZXIge1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBtaXgoI2ZmZiwgJHByaW1hcnktY29sb3IsIDg0JSk7XHJcbiAgICAvLyB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIHdpZHRoOiAxLjVlbTtcclxuICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMC4xMjVlbSAkcHJpbWFyeS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50aXRsZS1xdWVzdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTl2aDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0b3A6IDQ2LjUlO1xyXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk7XHJcbn1cclxuXHJcbi50aXAge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRpcC1pbWFnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYjdhYjdiO1xyXG5cclxuICAvLyAjMjY0ODY5XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmxlZnQtcmlnaHQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmOm5vdCguZGlzYWJsZWQpIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29ycmVjdC1hbnN3ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDZmMDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNmYwMDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGxpbmVhcjtcclxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgbGluZWFyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgbGluZWFyO1xyXG5cclxuICBzcGFuOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ud3JvbmctYW5zd2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzcwMDAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjNzAwMDA7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGxpbmVhcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgbGluZWFyO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGxpbmVhcjtcclxuXHJcbiAgc3BhbjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi50aXRsZS1xdWVzdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTl2aDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0R3JvdXAgbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAudGl0bGUtcXVlc3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgICBjaXJjbGUtcHJvZ3Jlc3Mge1xyXG4gICAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaXRlbXMge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmlnaHQge1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbi10aXRsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQge1xyXG4gICAgbGVmdDogMTZweDtcclxuICB9XHJcblxyXG4gIC5xdWl6LWNvbnRlbnQgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0R3JvdXAge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuaXRlbSBzcGFuLFxyXG4gIC5pbnB1dEdyb3VwIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5pdGVtLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIC5iYXNpYy1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNpcmNsZS1wcm9ncmVzcyB7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGFzdC1zZWN0aW9uIHtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [_app_animations__WEBPACK_IMPORTED_MODULE_1__["animSlider"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["listAnimation"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["fadeOut"]] } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _quiz_panel_quiz_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-panel/quiz-panel.component */ "T6oF");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _points_points_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./points/points.component */ "4rgs");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");















class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_11__["DIRECTION_ALL"] },
        };
    }
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__["NgCircleProgressModule"].forRoot({
                radius: 60,
                space: -10,
                responsive: true,
                outerStrokeWidth: 10,
                titleColor: 'white',
                unitsColor: 'white',
                innerStrokeWidth: 5,
                animateTitle: true,
                titleFontSize: '70px',
                unitsFontSize: '25px',
                animationDuration: 1500,
                showUnits: true,
                showBackground: false,
                clockwise: false,
                startFromZero: true,
                lazy: true,
                showSubtitle: false,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _quiz_panel_quiz_panel_component__WEBPACK_IMPORTED_MODULE_3__["QuizPanelComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _points_points_component__WEBPACK_IMPORTED_MODULE_9__["PointsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__["NgCircleProgressModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ContactComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_13_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.required);
} }
function ContactComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_16_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
} }
function ContactComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Comments is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_19_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.comments.errors.required);
} }
function ContactComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Thank you! Your submission has been sent.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        //onelity google form
        this.url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRtvAaMxQlozPNOnBxLl4Js8pu7XJii_Jbqlc7HZXax3F0kA/formResponse';
        this.formSubmitted = false;
        this.submitted = false;
        this.fieldMapping = {
            name: 'entry.2005620554',
            email: 'entry.1045781291',
            comments: 'entry.839337160',
        };
        this.formData = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    ngOnInit() { }
    get f() {
        return this.formData.controls;
    }
    save() {
        this.submitted = true;
        if (this.formData.invalid) {
            return;
        }
        const rawValue = this.formData.getRawValue();
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.entries(rawValue).forEach((entry) => {
            const [key, value] = entry;
            body = body.append(this.fieldMapping[key], value);
        });
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };
        this.http.post(this.url, body, httpOptions).subscribe(() => {
            this.formSubmitted = true;
            this.onReset();
        }, (err) => {
            this.formSubmitted = true;
            this.onReset();
        });
    }
    onReset() {
        this.submitted = false;
        this.formData.reset();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 26, vars: 5, consts: [[1, "background"], [1, "container"], [1, "screen"], [1, "screen-body"], [1, "screen-body-item-header", "left"], [1, "app-title"], [1, "screen-body-item"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "app-form"], [1, "app-form-group", "message"], ["formControlName", "name", "placeholder", "NAME", 1, "app-form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "app-form-group"], ["formControlName", "email", "placeholder", "EMAIL", 1, "app-form-control"], ["formControlName", "comments", "placeholder", "COMMENTS", 1, "app-form-control"], [1, "app-form-group", "buttons", "mt-5", "md:mt-0"], ["type", "reset", 1, "app-form-button", 3, "click"], ["type", "submit", 1, "app-form-button"], ["class", "form-success-submission", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-success-submission"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0398\u03AD\u03BB\u03BF\u03C5\u03BC\u03B5 \u03BD\u03B1 \u03C3\u03B5 \u03B3\u03BD\u03C9\u03C1\u03AF\u03C3\u03BF\u03C5\u03BC\u03B5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ContactComponent_div_13_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ContactComponent_div_16_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ContactComponent_div_19_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_21_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " CANCEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ContactComponent_div_25_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.comments.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formSubmitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 30px;\n  color: #b7ab7b;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #b7ab7b 0%, #b7ab7b 100%);\n  font-size: 12px;\n}\n\nbody[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 1.4px;\n}\n\n.background[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  flex: 0 1 700px;\n  padding: 10px;\n}\n\n.screen[_ngcontent-%COMP%] {\n  position: relative;\n  background: #3e3e3e;\n  border-radius: 15px;\n}\n\n.screen[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 20px;\n  right: 20px;\n  bottom: 0;\n  border-radius: 15px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n  z-index: -1;\n}\n\n.screen-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.screen-body-item[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 50px;\n  padding-top: 0px;\n}\n\n.screen-body-item-header[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 30px;\n}\n\n.screen-body-item.left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  color: #b7ab7b;\n  font-size: 26px;\n}\n\n.app-contact[_ngcontent-%COMP%] {\n  margin-top: auto;\n  font-size: 8px;\n  color: #888;\n}\n\n.app-form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.app-form-group.message[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.app-form-group.buttons[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  color: #dc3545;\n  text-align: left;\n}\n\n.app-form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 0;\n  background: none;\n  border: none;\n  border-bottom: 1px solid #666;\n  color: #ddd;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.app-form-control[_ngcontent-%COMP%]::placeholder {\n  color: #666;\n}\n\n.app-form-control[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #ddd;\n}\n\n.app-form-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #b7ab7b;\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n}\n\n.app-form-button[_ngcontent-%COMP%]:hover {\n  color: #b7ab7b;\n}\n\n.dribbble[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n}\n\n@media screen and (max-width: 767px) {\n  .screen-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .screen-body-item.left[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n\n  .screen-body[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n\n  .app-form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n\n  .app-form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .screen-body-item-header[_ngcontent-%COMP%] {\n    padding-top: 5px;\n  }\n\n  .app-form-group.message[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n\n  .screen[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n\n  .app-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .app-title[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .app-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 12px;\n  }\n\n  .app-title[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n\n.form-success-submission[_ngcontent-%COMP%] {\n  color: #00da00;\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 600px) {\n  .screen-body[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n\n  .screen-body-item[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .app-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    color: white;\n  }\n\n  .screen-body-item-header[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsK0RBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7OztFQUlFLGdCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0Usc0JBQUE7RUFBRjs7RUFHQTtJQUNFLG1CQUFBO0VBQUY7O0VBR0E7SUFDRSx3QkFBQTtFQUFGOztFQUdBO0lBQ0Usa0JBQUE7RUFBRjs7RUFFRTtJQUNFLGVBQUE7RUFBSjs7RUFJQTtJQUNFLGdCQUFBO0VBREY7O0VBSUE7SUFDRSxlQUFBO0VBREY7O0VBSUE7SUFDRSxhQUFBO0VBREY7O0VBSUE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBREY7O0VBSUE7SUFDRSxtQkFBQTtFQURGOztFQUlBO0lBQ0Usa0JBQUE7RUFERjs7RUFJQTtJQUNFLGFBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxhQUFBO0VBRkY7O0VBS0E7SUFDRSxVQUFBO0VBRkY7O0VBS0E7SUFDRSxpQkFBQTtJQUNBLFlBQUE7RUFGRjs7RUFLQTtJQUNFLGdCQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjYjdhYjdiO1xyXG59XHJcblxyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiN2FiN2IgMCUsICNiN2FiN2IgMTAwJSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5ib2R5LFxyXG5idXR0b24sXHJcbmlucHV0IHtcclxuICAvLyAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGZsZXg6IDAgMSA3MDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2NyZWVuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogIzNlM2UzZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2NyZWVuOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5zY3JlZW4tYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2NyZWVuLWJvZHktaXRlbSB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5zY3JlZW4tYm9keS1pdGVtLWhlYWRlciB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNjcmVlbi1ib2R5LWl0ZW0ubGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXBwLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjYjdhYjdiO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLmFwcC1jb250YWN0IHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4uYXBwLWZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1ncm91cC5tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uYXBwLWZvcm0tZ3JvdXAuYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uYXBwLWZvcm0tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2I3YWI3YjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjYjdhYjdiO1xyXG59XHJcblxyXG4uZHJpYmJibGUge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zY3JlZW4tYm9keSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1ib2R5LWl0ZW0ubGVmdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hcHAtZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuLWJvZHktaXRlbS1oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5hcHAtZm9ybS1ncm91cC5tZXNzYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5zY3JlZW46YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5hcHAtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFwcC10aXRsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLmFwcC10aXRsZSBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB9XHJcblxyXG4gIC5hcHAtdGl0bGU6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXN1Y2Nlc3Mtc3VibWlzc2lvbiB7XHJcbiAgY29sb3I6ICMwMGRhMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnNjcmVlbi1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuLWJvZHktaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFwcC10aXRsZSBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1ib2R5LWl0ZW0taGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "f3AP":
/*!***********************************!*\
  !*** ./src/app/app.animations.ts ***!
  \***********************************/
/*! exports provided: listAnimation, animSlider, slideInOut, showAnimation, hideAnimation, fadeIn, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAnimation", function() { return listAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animSlider", function() { return animSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOut", function() { return slideInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAnimation", function() { return showAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAnimation", function() { return hideAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const enterTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
    })),
]);
const leaveTrans = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
    })),
]);
const listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('60ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })), {
            optional: true,
        }),
    ]),
]);
const animSlider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animSlider', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':increment', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '{{width}}' }), {
            optional: true,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
            ], {
                optional: true,
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10%)', opacity: 0 })),
            ], {
                optional: true,
            }),
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':decrement', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '{{width}}' }), {
            optional: true,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
            ], {
                optional: true,
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10%)', opacity: 0 })),
            ], {
                optional: true,
            }),
        ]),
    ]),
]);
const slideInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)', zIndex: '1' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', zIndex: '1' })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ zIndex: '1' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' })),
    ]),
]);
const showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'visible', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.2)', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.6)', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: '#673ab7', offset: 1 }),
    ]))),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.arrow', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' })]))),
]);
const hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.arrow', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0.8', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', offset: 1 }),
    ]))),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('button', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.4)', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ visibility: 'hidden', offset: 1 }),
    ]))),
]);
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [enterTransition]);
const fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeOut', [leaveTrans]);


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [["href", "https://onelity.com/", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Onelity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  color: white;\n  bottom: 20px;\n  font-size: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #b7ab7b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICNiN2FiN2I7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




/**
 * Hammerjs must be imported for gestures
 */

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


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