(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3se":
/*!***************************************!*\
  !*** ./src/app/shared/utils/utils.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
    static points(firstArray, secondArray, thirdArray, fourthArray, questions) {
        let numberOfCorrectAnswers = 0;
        let numberOfWrongAnswersFirst = 0;
        let numberOfWrongAnswersSecond = 0;
        let numberOfWrongAnswersThird = 0;
        let numberOfWrongAnswersFourth = 0;
        let answeredCorrectlyFirst = false;
        let answeredCorrectlySecond = false;
        let answeredCorrectlyThird = false;
        let answeredCorrectlyFourth = false;
        firstArray.value.forEach((element) => {
            if (questions[0].options[questions[0].answer].option === element) {
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
            if (questions[1].options[questions[1].answer].option === element) {
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
            if (questions[2].options[questions[2].answer].option === element) {
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
            if (questions[3].options[questions[3].answer].option === element) {
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
        let numberOfWrongAnswers = numberOfWrongAnswersFirst +
            numberOfWrongAnswersSecond +
            numberOfWrongAnswersThird +
            numberOfWrongAnswersFourth;
        let points = numberOfCorrectAnswers * 10 + numberOfWrongAnswers * 5;
        return { numberOfCorrectAnswers, numberOfWrongAnswers, points };
    }
}


/***/ }),

/***/ "+nbM":
/*!***********************************************!*\
  !*** ./src/app/shared/constants/constants.ts ***!
  \***********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.QUESTIONS = [
    {
        title: 'What is ??01?? ;',
        formName: 'first',
        options: [
            {
                option: 'Season of a series',
                tip: 'Life after Netflix is quite interesting',
            },
            {
                option: 'Dukes of Hazard, General Lee',
                tip: 'How old did we say you are?',
            },
            { option: '??inary code', tip: 'Hmmm???you got potential' },
        ],
        answer: 2,
    },
    {
        title: 'What is QA',
        formName: 'second',
        options: [
            {
                option: 'Queen Alexandra',
                tip: 'It seems you got royalty in your DNA',
            },
            { option: 'Question and Answer', tip: 'Are you an influencer?' },
            { option: 'Quality assurance', tip: 'The Tribe leader sees you!' },
        ],
        answer: 2,
    },
    {
        title: 'What is ???Delivery??? for you?',
        formName: 'third',
        options: [
            { option: 'Mac & cheese', tip: 'You urgently need gastronomic care' },
            {
                option: 'Parcel',
                tip: 'Lock down is over, you can come out???',
            },
            {
                option: '??Continuous??',
                tip: 'The Tribe bows to your greatness!',
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
                option: 'Fortune teller',
                tip: 'Hmm???',
            },
            {
                option: 'Just???coffeee',
                tip: 'Hmmm???we got you covered with a - ',
                image: 'assets/img/coffee-maker-white.png',
            },
            {
                option: 'Java challenge',
                tip: 'Tribe blood flows to your veins???',
            },
        ],
        answer: 2,
    },
];


/***/ }),

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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@slideInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("+", ctx_r0.points, "");
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
PointsComponent.??fac = function PointsComponent_Factory(t) { return new (t || PointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_points_service__WEBPACK_IMPORTED_MODULE_2__["PointsService"])); };
PointsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PointsComponent, selectors: [["app-points"]], decls: 1, vars: 1, consts: [["class", "recurringSchedule border-top py-2", "style", "z-index: 20", 4, "ngIf"], [1, "recurringSchedule", "border-top", "py-2", 2, "z-index", "20"], [1, "form-group", "flex", "items-center"], ["src", "assets/img/star.png", 1, "points-img", "mr-5"], [1, "points-value"]], template: function PointsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, PointsComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.active);
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
        if (this.pointsSource.value.active) {
            clearTimeout(this.timeout);
            this.pointsSource.next({
                active: true,
                points,
            });
        }
        else {
            this.pointsSource.next({
                active: true,
                points,
            });
        }
        this.timeout = setTimeout(() => {
            this.pointsSource.next({
                active: false,
                points,
            });
        }, 3000);
    }
}
PointsService.??fac = function PointsService_Factory(t) { return new (t || PointsService)(); };
PointsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: PointsService, factory: PointsService.??fac, providedIn: 'root' });


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

/***/ "DZui":
/*!************************************************!*\
  !*** ./src/app/shared/enums/languages.enum.ts ***!
  \************************************************/
/*! exports provided: Languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return Languages; });
var Languages;
(function (Languages) {
    Languages["el"] = "el";
    Languages["en"] = "en";
})(Languages || (Languages = {}));


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
/* harmony import */ var _shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/enums/languages.enum */ "DZui");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _points_points_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./points/points.component */ "4rgs");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _quiz_panel_quiz_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quiz-panel/quiz-panel.component */ "T6oF");












function AppComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AppComponent_mat_option_9_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r5); const lang_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r4.useLanguage(lang_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", lang_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("svgIcon", lang_r3);
} }
function AppComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Are you a fit for the Tribe?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AppComponent_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r6.startQuiz(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("@fadeIn", undefined)("@fadeOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](7, 3, "Continue"), " ");
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "app-quiz-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("@fadeIn", undefined)("@fadeOut", undefined);
} }
class AppComponent {
    constructor(domSanitizer, matIconRegistry, translate) {
        this.domSanitizer = domSanitizer;
        this.matIconRegistry = matIconRegistry;
        this.translate = translate;
        this.title = 'onelity-quiz-app';
        this.startPage = false;
        this.startQuizPanel = false;
        this.language = 'el';
        this.setFlagIcons();
    }
    useLanguage(language) {
        this.translate.use(language);
    }
    goToCareer() {
        window.location.href = 'https://onelity.com/career';
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
    setFlagIcons() {
        let listOfIcons = [];
        listOfIcons = [_shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_1__["Languages"].el, _shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_1__["Languages"].en];
        listOfIcons.forEach((icon) => {
            this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/flags/${icon}.svg`));
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 5, consts: [[1, "back-to", 3, "click"], [1, "language-switcher"], ["panelClass", "flags-overlay", 3, "value"], [1, "language-icon", 3, "svgIcon"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "start-page", 4, "ngIf"], ["class", "\n    md:w-6/12 md:h-4/5\n    w-full\n    h-full\n    flex flex-col\n    justify-between\n    quiz-panel\n    content-between\n  ", 4, "ngIf"], [3, "value", "click"], [1, "start-page"], ["src", "assets/img/onelity-logo.png", 1, "onelity-logo"], [1, "w-full", "text-center"], [1, "start-btn", "mt-6", "w-3/12", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "text-2xl", "rounded-full", 3, "click"], [1, "md:w-6/12", "md:h-4/5", "w-full", "h-full", "flex", "flex-col", "justify-between", "quiz-panel", "content-between"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-points");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.goToCareer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " Back to career");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, AppComponent_mat_option_9_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, AppComponent_div_10_Template, 8, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, AppComponent_div_11_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx.translate.currentLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("svgIcon", ctx.translate.currentLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.translate.getLangs());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.startPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.startQuizPanel);
    } }, directives: [_points_points_component__WEBPACK_IMPORTED_MODULE_6__["PointsComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _quiz_panel_quiz_panel_component__WEBPACK_IMPORTED_MODULE_11__["QuizPanelComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n  margin-bottom: 70px;\n}\n\n  .language-switcher .mat-icon {\n  height: 35px;\n  width: 35px;\n}\n\n  .mat-select-arrow {\n  border: none !important;\n}\n\n  .mat-option-text {\n  text-align: center;\n}\n\n  .mat-option-text .mat-icon {\n  margin-right: 0px !important;\n  height: 35px;\n  width: 35px;\n}\n\n.back-to[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  cursor: pointer;\n}\n\n.back-to[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n  .mat-select {\n  margin-right: 0px !important;\n}\n\n  .flags-overlay {\n  background: transparent;\n  position: relative;\n  top: 43px;\n  left: 24px;\n  margin-right: 0px !important;\n}\n\n  .flags-overlay .mat-selected .mat-icon {\n  border: 2px solid #b7ab7b;\n  border-radius: 50%;\n}\n\n.language-switcher[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  top: 10px;\n  background: white;\n  background: transparent;\n}\n\n.language-switcher[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-right: 10px;\n}\n\n.language-switcher[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  fill: black;\n  position: relative;\n  top: 3px;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 0px;\n  text-align: center;\n  margin: 0px;\n  margin-bottom: 55px;\n}\n\n.start-btn[_ngcontent-%COMP%] {\n  background: #b7ab7b;\n}\n\n.start-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0px;\n  text-align: center;\n  font-weight: 300;\n  font-size: 40px;\n}\n\n@media screen and (max-width: 767px) {\n  .start-page[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  .quiz-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .onelity-logo[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .start-btn[_ngcontent-%COMP%] {\n    width: 50vw;\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBS0E7RUFDRSx1QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFJRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGSjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUhGOztBQUtFO0VBQ0UsMEJBQUE7QUFISjs7QUFPQTtFQUNFLDRCQUFBO0FBSkY7O0FBT0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQUpGOztBQU9JO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUxOOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQVBGOztBQVNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBUko7O0FBWUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0FBVEY7O0FBV0U7RUFDRSxZQUFBO0FBVEo7O0FBYUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFWRjs7QUFhQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0VBVkY7O0VBYUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQVZGOztFQWFBO0lBQ0UsZ0JBQUE7RUFWRjs7RUFhQTtJQUNFLGVBQUE7RUFWRjs7RUFhQTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtFQVZGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmxhbmd1YWdlLXN3aXRjaGVyIHtcclxuICAvLyBkaXNwbGF5OiBub25lO1xyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW9wdGlvbi10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFjay10byB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Qge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZmxhZ3Mtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNDNweDtcclxuICBsZWZ0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5tYXQtc2VsZWN0ZWQge1xyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2I3YWI3YjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxhbmd1YWdlLXN3aXRjaGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIC5tYXQtc2VsZWN0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIGZpbGw6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG59XHJcblxyXG4uc3RhcnQtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjYjdhYjdiO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW46IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnN0YXJ0LXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIC5xdWl6LXBhbmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm9uZWxpdHktbG9nbyB7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0LWJ0biB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [_app_animations__WEBPACK_IMPORTED_MODULE_0__["fadeIn"], _app_animations__WEBPACK_IMPORTED_MODULE_0__["fadeOut"]] } });


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
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/utils */ "+3se");
/* harmony import */ var _shared_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/constants */ "+nbM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_points_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/points.service */ "ACF1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contact/contact.component */ "bzTf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













const _c0 = function (a0) { return { "last-section": a0 }; };
function QuizPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function QuizPanelComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r4.onPrevious(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction1"](2, _c0, ctx_r0.isMobile() && ctx_r0.counter === ctx_r0.questions.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("icon", ctx_r0.faChevronLeft);
} }
function QuizPanelComponent_ng_container_3_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 14);
} if (rf & 2) {
    const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("src", o_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????sanitizeUrl"]);
} }
function QuizPanelComponent_ng_container_3_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function QuizPanelComponent_ng_container_3_div_1_form_7_div_1_div_7_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 25);
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("src", item_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????sanitizeUrl"]);
} }
function QuizPanelComponent_ng_container_3_div_1_form_7_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, QuizPanelComponent_ng_container_3_div_1_form_7_div_1_div_7_img_4_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("@fadeIn", undefined)("@fadeOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](3, 4, item_r14.tip));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", item_r14.image);
} }
const _c1 = function (a0, a1) { return { "correct-answer": a0, "wrong-answer": a1 }; };
function QuizPanelComponent_ng_container_3_div_1_form_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function QuizPanelComponent_ng_container_3_div_1_form_7_div_1_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r21); const item_r14 = ctx.$implicit; const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r19.onCheckChange(item_r14, o_r6.formName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, QuizPanelComponent_ng_container_3_div_1_form_7_div_1_div_7_Template, 5, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", ctx_r13.checkIfChecked(item_r14, o_r6.formName) ? "mb-0" : "mb-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction2"](11, _c1, ctx_r13.checkIfChecked(item_r14, o_r6.formName) && ctx_r13.isCorrectAnswer(item_r14, o_r6), ctx_r13.checkIfChecked(item_r14, o_r6.formName) && ctx_r13.isWrongAnswer(item_r14, o_r6)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("id", item_r14.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("name", o_r6.formName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r13.checkIfChecked(item_r14, o_r6.formName))("value", item_r14.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("for", item_r14.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](6, 9, item_r14.option));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r13.checkIfChecked(item_r14, o_r6.formName));
} }
function QuizPanelComponent_ng_container_3_div_1_form_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, QuizPanelComponent_ng_container_3_div_1_form_7_div_1_Template, 8, 14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r11.form)("@listAnimation", o_r6.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", o_r6.options);
} }
function QuizPanelComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, QuizPanelComponent_ng_container_3_div_1_img_4_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, QuizPanelComponent_ng_container_3_div_1_span_5_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, QuizPanelComponent_ng_container_3_div_1_form_7_Template, 2, 3, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    const i_r7 = ctx_r24.index;
    const o_r6 = ctx_r24.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("name", i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](3, 5, o_r6.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", o_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx_r8.isMobile() && o_r6.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r8.showOptions);
} }
function QuizPanelComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, QuizPanelComponent_ng_container_3_div_1_Template, 8, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", i_r7 === ctx_r1.counter);
} }
function QuizPanelComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "circle-progress", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](8, "app-contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](5, 9, "Percentage matching"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("percent", ctx_r2.percentMatching)("radius", 100)("outerStrokeWidth", 14)("innerStrokeWidth", 8)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 1500);
} }
function QuizPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function QuizPanelComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r25.onNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("icon", ctx_r3.faChevronRight);
} }
const _c2 = function () { return { width: "100%" }; };
const _c3 = function (a0, a1) { return { value: a0, params: a1 }; };
const _c4 = function () { return { width: "50%" }; };
class QuizPanelComponent {
    constructor(fb, pointsService) {
        this.pointsService = pointsService;
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronRight"];
        this.numberOfCorrectAnswers = 0;
        this.numberOfWrongAnswers = 0;
        this.counter = 0;
        this.showOptions = false;
        this.percentMatching = 70;
        this.points = 0;
        this.questions = _shared_constants_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].QUESTIONS;
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
    onSwipe(evt) {
        const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
        x === 'left' ? this.onNext() : this.onPrevious();
    }
    calculatePoints() {
        const firstArray = this.form.get('first');
        const secondArray = this.form.get('second');
        const thirdArray = this.form.get('third');
        const fourthArray = this.form.get('fourth');
        const { numberOfCorrectAnswers, numberOfWrongAnswers, points } = _shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].points(firstArray, secondArray, thirdArray, fourthArray, this.questions);
        this.numberOfCorrectAnswers = numberOfCorrectAnswers;
        this.numberOfWrongAnswers = numberOfWrongAnswers;
        this.pointsService.changePoints(points);
    }
    onCheckChange(item, formName) {
        const currentFormArray = this.form.get(formName);
        currentFormArray.reset();
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
QuizPanelComponent.??fac = function QuizPanelComponent_Factory(t) { return new (t || QuizPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_services_points_service__WEBPACK_IMPORTED_MODULE_6__["PointsService"])); };
QuizPanelComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: QuizPanelComponent, selectors: [["app-quiz-panel"]], hostBindings: function QuizPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("resize", function QuizPanelComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????resolveWindow"]);
    } }, decls: 6, vars: 13, consts: [["class", "left", 3, "ngClass", "click", 4, "ngIf"], [1, "h-full", "justify-center", "items-center", 3, "swipe"], [1, "h-full", "quiz-content", "h-full", "w-full"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "right", 3, "click", 4, "ngIf"], [1, "left", 3, "ngClass", "click"], [3, "icon"], [3, "name", 4, "ngIf"], [3, "name"], [1, "flex", "main-title", "text-center", "items-center", "title-question", "justify-center"], ["class", "max-h-20 mx-5", 3, "src", 4, "ngIf"], [1, "form-wrapper"], ["class", "text-center pb-8 items", 3, "formGroup", 4, "ngIf"], [1, "max-h-20", "mx-5", 3, "src"], [1, "text-center", "pb-8", "items", 3, "formGroup"], ["class", "item-container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "item-container", 3, "ngClass"], [1, "p-5", "text-2xl", "item", 3, "ngClass"], [1, "inputGroup"], ["type", "checkbox", 3, "disabled", "id", "name", "value", "change"], [3, "for"], ["class", "flex items-center tip my-5", 4, "ngIf"], [1, "flex", "items-center", "tip", "my-5"], ["class", "tip-image", 3, "src", 4, "ngIf"], [1, "tip-image", 3, "src"], [1, "mat-app-background", "h-full", "basic-container"], [1, "flex", "flex-col", "w-full", "items-center", "justify-center"], [1, "pt-0"], [1, "md:my-5", "my-3"], [3, "percent", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "animationDuration"], [1, "right", 3, "click"]], template: function QuizPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, QuizPanelComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("swipe", function QuizPanelComponent_Template_div_swipe_1_listener($event) { return ctx.onSwipe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, QuizPanelComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, QuizPanelComponent_ng_container_4_Template, 9, 11, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, QuizPanelComponent_div_5_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.counter > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("@animSlider", ctx.isMobile() ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction2"](6, _c3, ctx.counter, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](5, _c2)) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction2"](10, _c3, ctx.counter, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](9, _c4)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.counter === ctx.questions.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.counter < ctx.questions.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__["CircleProgressComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.quiz-content[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  color: white;\n  font-size: 30px;\n  top: 46.5%;\n  z-index: 9999999999999;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  font-weight: 500;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 0.375em;\n  \n  \n  \n}\n\nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -9999px;\n}\n\nlabel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:after {\n  box-shadow: inset 0 0 0 0.4375em #b7ab7b;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 99em;\n  transition: 0.25s ease;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  display: flex;\n  right: 0;\n  flex-shrink: 0;\n  content: \"\";\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  transition: 0.25s ease;\n  margin-left: 10px;\n  box-shadow: inset 0 0 0 0.125em #b7ab7b;\n}\n\n.title-question[_ngcontent-%COMP%] {\n  margin-bottom: 19vh;\n  color: white !important;\n}\n\n.right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  color: white;\n  font-size: 30px;\n  top: 46.5%;\n  z-index: 9999999999999;\n}\n\n.tip[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  font-style: italic;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  background: transparent;\n  text-align: center;\n  align-items: center;\n}\n\n.basic-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.tip-image[_ngcontent-%COMP%] {\n  color: white;\n  max-height: 50px;\n}\n\n.item[_ngcontent-%COMP%] {\n  border: 2px solid #b7ab7b;\n  border-radius: 20px;\n}\n\n.left-right[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n  color: white;\n}\n\n.left-right[_ngcontent-%COMP%]:not(.disabled):hover {\n  opacity: 0.8;\n}\n\n.correct-answer[_ngcontent-%COMP%] {\n  background: #006f00;\n  border: 2px solid #006f00;\n  transition: background-color 300ms linear;\n  -moz-transition: background-color 300ms linear;\n  -webkit-transition: background-color 300ms linear;\n  -ms-transition: background-color 300ms linear;\n}\n\n.correct-answer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  display: none;\n}\n\n.wrong-answer[_ngcontent-%COMP%] {\n  background: #c70000;\n  border: 2px solid #c70000;\n  transition: background-color 300ms linear;\n  -moz-transition: background-color 300ms linear;\n  -webkit-transition: background-color 300ms linear;\n  -ms-transition: background-color 300ms linear;\n}\n\n.wrong-answer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  display: none;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 40px;\n  color: #b7ab7b;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.title-question[_ngcontent-%COMP%] {\n  margin-bottom: 19vh;\n  color: white !important;\n}\n\n.inputGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n@media screen and (max-width: 767px) {\n  .title-question[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n\n  .basic-container[_ngcontent-%COMP%]   circle-progress[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 50% !important;\n  }\n\n  .basic-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 17px;\n    color: white;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 50px !important;\n  }\n\n  .items[_ngcontent-%COMP%] {\n    padding-right: 20px;\n    padding-left: 20px;\n    min-height: 282px;\n    left: 0%;\n    top: 40%;\n    width: 100%;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    right: 16px;\n  }\n\n  .main-title[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .left[_ngcontent-%COMP%] {\n    left: 16px;\n  }\n\n  .form-wrapper[_ngcontent-%COMP%] {\n    min-height: 285px;\n  }\n\n  .quiz-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n  }\n\n  .inputGroup[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .inputGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .item-container[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .basic-container[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n\n  .basic-container[_ngcontent-%COMP%]   circle-progress[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 50% !important;\n  }\n\n  .basic-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n\n  .tip[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .item[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n\n  .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .last-section[_ngcontent-%COMP%] {\n    top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHF1aXotcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBOzs7O0dBQUE7QUFFRjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlNO0VBQ0Usd0NBQUE7QUFGUjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFTSTtFQUNFLGFBQUE7RUFFQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBVE47O0FBY0E7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQVpGOztBQWNFO0VBQ0UsZUFBQTtBQVpKOztBQWdCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQWJGOztBQWdCQTtFQUNFLHlCQUFBO0VBR0EsbUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBZkY7O0FBa0JJO0VBQ0UsWUFBQTtBQWhCTjs7QUFxQkE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsNkNBQUE7QUFsQkY7O0FBb0JFO0VBQ0UsYUFBQTtBQWxCSjs7QUFzQkE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsNkNBQUE7QUFuQkY7O0FBcUJFO0VBQ0UsYUFBQTtBQW5CSjs7QUF1QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQTdJYztBQXlIaEI7O0FBdUJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBcEJGOztBQXVCQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usa0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0U7SUFDRSxrQkFBQTtFQXBCRjs7RUF5Qkk7SUFDRSxzQkFBQTtFQXRCTjs7RUErQkU7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQTdCSjs7RUFpQ0E7SUFDRSxpQkFBQTtJQUNBLDhCQUFBO0VBOUJGOztFQWlDQTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFFQSxpQkFBQTtJQUVBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtFQWhDRjs7RUFtQ0E7SUFDRSxXQUFBO0VBaENGOztFQW1DQTtJQUNFLHNCQUFBO0VBaENGOztFQW1DQTtJQUNFLFVBQUE7RUFoQ0Y7O0VBbUNBO0lBQ0UsaUJBQUE7RUFoQ0Y7O0VBbUNBO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VBaENGOztFQTRDQTtJQUNFLGNBQUE7RUExQ0Y7O0VBNkNBOztJQUVFLGVBQUE7RUExQ0Y7O0VBNkNBO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBMUNGOztFQTZDQTtJQUNFLGtDQUFBO0VBMUNGOztFQTRDSTtJQUNFLHNCQUFBO0VBMUNOOztFQThDRTtJQUNFLGFBQUE7RUE1Q0o7O0VBZ0RBO0lBQ0UsZUFBQTtFQTdDRjs7RUFnREE7SUFDRSxZQUFBO0VBN0NGOztFQStDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUE3Q0o7O0VBaURBO0lBQ0UsU0FBQTtFQTlDRjtBQUNGIiwiZmlsZSI6InF1aXotcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5xdWl6LWNvbnRlbnQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvLyBtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0b3A6IDQ2LjUlO1xyXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk7XHJcbn1cclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjYjdhYjdiO1xyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zNzVlbTtcclxuICAvKiBBY2Nlc3NpYmxlIG91dGxpbmUgKi9cclxuICAvKiBSZW1vdmUgY29tbWVudCB0byB1c2UgKi9cclxuICAvKlxyXG5cdFx0Jjpmb2N1cy13aXRoaW4ge1xyXG5cdFx0XHRcdG91dGxpbmU6IC4xMjVlbSBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuXHRcdH1cclxuXHQqL1xyXG4gIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC05OTk5cHg7XHJcbiAgICAmOmNoZWNrZWQgKyBzcGFuIHtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbWl4KCNmZmYsICRwcmltYXJ5LWNvbG9yLCA4NCUpO1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwLjQzNzVlbSAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbSAwLjM3NWVtIDAuMzc1ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OWVtOyAvLyBvciBzb21ldGhpbmcgaGlnaGVyLi4uXHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlO1xyXG4gICAgLy8gJjpob3ZlciB7XHJcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IG1peCgjZmZmLCAkcHJpbWFyeS1jb2xvciwgODQlKTtcclxuICAgIC8vIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgd2lkdGg6IDEuNWVtO1xyXG4gICAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMjVzIGVhc2U7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwLjEyNWVtICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlLXF1ZXN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxOXZoO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRvcDogNDYuNSU7XHJcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5OTtcclxufVxyXG5cclxuLnRpcCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGlwLWltYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiN2FiN2I7XHJcblxyXG4gIC8vICMyNjQ4NjlcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubGVmdC1yaWdodCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICY6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb3JyZWN0LWFuc3dlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwNmYwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA2ZjAwO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgbGluZWFyO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGxpbmVhcjtcclxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7XHJcblxyXG4gIHNwYW46YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi53cm9uZy1hbnN3ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjNzAwMDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2M3MDAwMDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGxpbmVhcjtcclxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgbGluZWFyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgbGluZWFyO1xyXG5cclxuICBzcGFuOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLnRpdGxlLXF1ZXN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxOXZoO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXRHcm91cCBsYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC50aXRsZS1xdWVzdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFzaWMtY29udGFpbmVyIHtcclxuICAgIGNpcmNsZS1wcm9ncmVzcyB7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pdGVtcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDI4MnB4O1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0IHtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tdGl0bGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5sZWZ0IHtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS13cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI4NXB4O1xyXG4gIH1cclxuXHJcbiAgLnF1aXotY29udGVudCA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgLy8gZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgLy8gZmxleDogMTtcclxuICAgICAgLy8gY29udGVudDogXCJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnB1dEdyb3VwIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0gc3BhbixcclxuICAuaW5wdXRHcm91cCBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuaXRlbS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFzaWMtY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjaXJjbGUtcHJvZ3Jlc3Mge1xyXG4gICAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxhc3Qtc2VjdGlvbiB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [_app_animations__WEBPACK_IMPORTED_MODULE_1__["animSlider"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["listAnimation"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["fadeOut"]] } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_locales_el__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/el */ "yh7E");
/* harmony import */ var _angular_common_locales_el__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_el__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-translate-multi-http-loader */ "qEH2");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/enums/languages.enum */ "DZui");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_11__["DIRECTION_ALL"] },
        };
    }
}
Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_14___default.a);
Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["registerLocaleData"])(_angular_common_locales_el__WEBPACK_IMPORTED_MODULE_13___default.a);
function HttpLoaderFactory(http) {
    return new ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_16__["MultiTranslateHttpLoader"](http, [
        { prefix: 'assets/i18n/', suffix: '.json' },
    ]);
}
class AppModule {
    constructor(translate) {
        this.translate = translate;
        translate.addLangs([_shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_19__["Languages"].el, _shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_19__["Languages"].en]);
        this.translate.use(_shared_enums_languages_enum__WEBPACK_IMPORTED_MODULE_19__["Languages"].en);
    }
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["????inject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"])); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["????defineInjector"]({ providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig,
        },
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _quiz_panel_quiz_panel_component__WEBPACK_IMPORTED_MODULE_3__["QuizPanelComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _points_points_component__WEBPACK_IMPORTED_MODULE_9__["PointsComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__["NgCircleProgressModule"]] }); })();


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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function ContactComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, "Name is required"), " ");
} }
function ContactComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, ContactComponent_div_15_div_1_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.f.name.errors.required);
} }
function ContactComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, "Email is required"), " ");
} }
function ContactComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, ContactComponent_div_18_div_1_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.f.email.errors.required);
} }
function ContactComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, "Comments is required"), " ");
} }
function ContactComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, ContactComponent_div_22_div_1_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.f.comments.errors.required);
} }
function ContactComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](3, 1, "Thank you! Your submission has been sent."));
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
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 31, vars: 20, consts: [[1, "background"], [1, "container"], [1, "screen"], [1, "screen-body"], [1, "screen-body-item-header", "left"], [1, "app-title"], [1, "screen-body-item"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "app-form"], [1, "app-form-group", "message"], ["formControlName", "name", 1, "app-form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "app-form-group"], ["formControlName", "email", "placeholder", "EMAIL", 1, "app-form-control"], ["formControlName", "comments", 1, "app-form-control", 3, "placeholder"], [1, "app-form-group", "buttons", "mt-5", "md:mt-0"], ["type", "reset", 1, "app-form-button", 3, "click"], ["type", "submit", 1, "app-form-button"], ["class", "form-success-submission", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-success-submission"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_10_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, ContactComponent_div_15_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, ContactComponent_div_18_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, ContactComponent_div_22_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ContactComponent_Template_button_click_24_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](30, ContactComponent_div_30_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](8, 10, "We want to meet you"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](14, 12, "NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.submitted && ctx.f.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](21, 14, "COMMENTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.submitted && ctx.f.comments.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](26, 16, "CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](29, 18, "SEND"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.formSubmitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 30px;\n  color: #b7ab7b;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #b7ab7b 0%, #b7ab7b 100%);\n  font-size: 12px;\n}\n\nbody[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 1.4px;\n}\n\n.background[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  flex: 0 1 700px;\n  padding: 10px;\n}\n\n.screen[_ngcontent-%COMP%] {\n  position: relative;\n  background: #3e3e3e;\n  border-radius: 15px;\n}\n\n.screen[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 20px;\n  right: 20px;\n  bottom: 0;\n  border-radius: 15px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n  z-index: -1;\n}\n\n.screen-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.screen-body-item[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 50px;\n  padding-top: 0px;\n}\n\n.screen-body-item-header[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 30px;\n}\n\n.screen-body-item.left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  color: #b7ab7b;\n  font-size: 26px;\n}\n\n.app-contact[_ngcontent-%COMP%] {\n  margin-top: auto;\n  font-size: 8px;\n  color: #888;\n}\n\n.app-form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.app-form-group.message[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.app-form-group.buttons[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  color: #dc3545;\n  text-align: left;\n}\n\n.app-form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 0;\n  background: none;\n  border: none;\n  border-bottom: 1px solid #666;\n  color: #ddd;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.app-form-control[_ngcontent-%COMP%]::placeholder {\n  color: #666;\n}\n\n.app-form-control[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #ddd;\n}\n\n.app-form-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #b7ab7b;\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n}\n\n.app-form-button[_ngcontent-%COMP%]:hover {\n  color: #b7ab7b;\n}\n\n.dribbble[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n}\n\n@media screen and (max-width: 767px) {\n  .screen-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .screen-body-item.left[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n\n  .screen-body[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n\n  .app-form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n\n  .app-form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .screen-body-item-header[_ngcontent-%COMP%] {\n    padding-top: 5px;\n  }\n\n  .app-form-group.message[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n\n  .screen[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n\n  .app-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .app-title[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .app-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 12px;\n  }\n\n  .app-title[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n\n.form-success-submission[_ngcontent-%COMP%] {\n  color: #00da00;\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 600px) {\n  .screen-body[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n\n  .screen-body-item[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .app-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    color: white;\n  }\n\n  .screen-body-item-header[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsK0RBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7OztFQUlFLGdCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0Usc0JBQUE7RUFBRjs7RUFHQTtJQUNFLG1CQUFBO0VBQUY7O0VBR0E7SUFDRSx3QkFBQTtFQUFGOztFQUdBO0lBQ0Usa0JBQUE7RUFBRjs7RUFFRTtJQUNFLGVBQUE7RUFBSjs7RUFJQTtJQUNFLGdCQUFBO0VBREY7O0VBSUE7SUFDRSxlQUFBO0VBREY7O0VBSUE7SUFDRSxhQUFBO0VBREY7O0VBSUE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBREY7O0VBSUE7SUFDRSxtQkFBQTtFQURGOztFQUlBO0lBQ0Usa0JBQUE7RUFERjs7RUFJQTtJQUNFLGFBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxhQUFBO0VBRkY7O0VBS0E7SUFDRSxVQUFBO0VBRkY7O0VBS0E7SUFDRSxpQkFBQTtJQUNBLFlBQUE7RUFGRjs7RUFLQTtJQUNFLGdCQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjYjdhYjdiO1xyXG59XHJcblxyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiN2FiN2IgMCUsICNiN2FiN2IgMTAwJSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5ib2R5LFxyXG5idXR0b24sXHJcbmlucHV0IHtcclxuICAvLyAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGZsZXg6IDAgMSA3MDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2NyZWVuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogIzNlM2UzZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2NyZWVuOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5zY3JlZW4tYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2NyZWVuLWJvZHktaXRlbSB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5zY3JlZW4tYm9keS1pdGVtLWhlYWRlciB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNjcmVlbi1ib2R5LWl0ZW0ubGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXBwLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjYjdhYjdiO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLmFwcC1jb250YWN0IHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4uYXBwLWZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1ncm91cC5tZXNzYWdlIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uYXBwLWZvcm0tZ3JvdXAuYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uYXBwLWZvcm0tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2I3YWI3YjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5hcHAtZm9ybS1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjYjdhYjdiO1xyXG59XHJcblxyXG4uZHJpYmJibGUge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zY3JlZW4tYm9keSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1ib2R5LWl0ZW0ubGVmdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hcHAtZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuLWJvZHktaXRlbS1oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5hcHAtZm9ybS1ncm91cC5tZXNzYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5zY3JlZW46YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5hcHAtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFwcC10aXRsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLmFwcC10aXRsZSBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB9XHJcblxyXG4gIC5hcHAtdGl0bGU6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXN1Y2Nlc3Mtc3VibWlzc2lvbiB7XHJcbiAgY29sb3I6ICMwMGRhMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnNjcmVlbi1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuLWJvZHktaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFwcC10aXRsZSBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbi1ib2R5LWl0ZW0taGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [["href", "https://onelity.com/career", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Onelity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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