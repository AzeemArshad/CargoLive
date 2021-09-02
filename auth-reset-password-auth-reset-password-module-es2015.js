(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-reset-password-auth-reset-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/auth-reset-password/auth-reset-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/auth-reset-password/auth-reset-password.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\r\n  <!-- [ reset-password ] start -->\r\n  <div class=\"auth-content\">\r\n    <div class=\"card\">\r\n      <div class=\"row align-items-center text-center\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card-body\">\r\n            <!-- <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\"> -->\r\n            <h3 class=\"text-primary mb-4\">Cargo Manager</h3>\r\n            <h4 class=\"mb-3 f-w-400\">Reset your password</h4>\r\n            <div class=\"input-group mb-4\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\r\n              </div>\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email address\">\r\n            </div>\r\n            <button class=\"btn btn-block btn-primary mb-4\">Reset password</button>\r\n            <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\" class=\"f-w-400\">Signup</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- [ reset-password ] end -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/auth-reset-password/auth-reset-password-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/authentication/auth-reset-password/auth-reset-password-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AuthResetPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResetPasswordRoutingModule", function() { return AuthResetPasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-reset-password.component */ "./src/app/authentication/auth-reset-password/auth-reset-password.component.ts");




const routes = [
    {
        path: '',
        component: _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["AuthResetPasswordComponent"]
    }
];
let AuthResetPasswordRoutingModule = class AuthResetPasswordRoutingModule {
};
AuthResetPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthResetPasswordRoutingModule);



/***/ }),

/***/ "./src/app/authentication/auth-reset-password/auth-reset-password.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/authentication/auth-reset-password/auth-reset-password.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGgtcmVzZXQtcGFzc3dvcmQvYXV0aC1yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/authentication/auth-reset-password/auth-reset-password.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/authentication/auth-reset-password/auth-reset-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResetPasswordComponent", function() { return AuthResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthResetPasswordComponent = class AuthResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-reset-password',
        template: __webpack_require__(/*! raw-loader!./auth-reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/auth-reset-password/auth-reset-password.component.html"),
        styles: [__webpack_require__(/*! ./auth-reset-password.component.scss */ "./src/app/authentication/auth-reset-password/auth-reset-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthResetPasswordComponent);



/***/ }),

/***/ "./src/app/authentication/auth-reset-password/auth-reset-password.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/authentication/auth-reset-password/auth-reset-password.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AuthResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResetPasswordModule", function() { return AuthResetPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-reset-password-routing.module */ "./src/app/authentication/auth-reset-password/auth-reset-password-routing.module.ts");
/* harmony import */ var _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-reset-password.component */ "./src/app/authentication/auth-reset-password/auth-reset-password.component.ts");





let AuthResetPasswordModule = class AuthResetPasswordModule {
};
AuthResetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthResetPasswordRoutingModule"]
        ],
        declarations: [_auth_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["AuthResetPasswordComponent"]]
    })
], AuthResetPasswordModule);



/***/ })

}]);
//# sourceMappingURL=auth-reset-password-auth-reset-password-module-es2015.js.map