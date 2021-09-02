(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'signup',
                loadChildren: function () { return Promise.all(/*! import() | auth-signup-auth-signup-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-signup-auth-signup-module")]).then(__webpack_require__.bind(null, /*! ./auth-signup/auth-signup.module */ "./src/app/authentication/auth-signup/auth-signup.module.ts")).then(function (module) { return module.AuthSignupModule; }); }
            },
            {
                path: 'signin',
                loadChildren: function () { return Promise.all(/*! import() | auth-signin-auth-signin-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-signin-auth-signin-module")]).then(__webpack_require__.bind(null, /*! ./auth-signin/auth-signin.module */ "./src/app/authentication/auth-signin/auth-signin.module.ts")).then(function (module) { return module.AuthSigninModule; }); }
            },
            {
                path: 'reset-password',
                loadChildren: function () { return __webpack_require__.e(/*! import() | auth-reset-password-auth-reset-password-module */ "auth-reset-password-auth-reset-password-module").then(__webpack_require__.bind(null, /*! ./auth-reset-password/auth-reset-password.module */ "./src/app/authentication/auth-reset-password/auth-reset-password.module.ts")).then(function (module) { return module.AuthResetPasswordModule; }); }
            },
            {
                path: 'change-password',
                loadChildren: function () { return __webpack_require__.e(/*! import() | auth-change-password-auth-change-password-module */ "auth-change-password-auth-change-password-module").then(__webpack_require__.bind(null, /*! ./auth-change-password/auth-change-password.module */ "./src/app/authentication/auth-change-password/auth-change-password.module.ts")).then(function (module) { return module.AuthChangePasswordModule; }); }
            }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: []
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module-es5.js.map