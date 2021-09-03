(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-auth-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/auth-signup/auth-signup.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/auth-signup/auth-signup.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\r\n  <div class=\"auth-content\">\r\n    <div class=\"card\">\r\n      <div class=\"row align-items-center text-center\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card-body\">\r\n            <!-- <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\"> -->\r\n            <h3 class=\"text-primary mb-4\">Cargo Manager</h3>\r\n            <h4 class=\"mb-3 f-w-400\">Sign up</h4>\r\n            <form #signForm=\"ngForm\" novalidate (ngSubmit)=\"signup(signForm)\" autocomplete=\"off\">\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"feather icon-user\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"Username\" [(ngModel)]=\"user.name\" required>\r\n              </div>\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\r\n                </div>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" name=\"email\" [(ngModel)]=\"user.email\" required>\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\r\n                </div>\r\n                <input type=\"{{showPassword?'text':'password'}}\" class=\"form-control\" placeholder=\"Password\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\r\n                <div class=\"input-group-prepend\" *ngIf=\"user.password\"> \r\n                  <span class=\"input-group-text bg-white border-left-0\" title=\"{{showPassword?'Hide Password':'Show Password'}}\" (click)=\"showPassword=!showPassword\"><i class=\"feather {{showPassword?'icon-eye-off':'icon-eye'}}\" ></i></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\r\n                </div>\r\n                <input type=\"{{showCPassword?'text':'password'}}\" class=\"form-control\" placeholder=\"Confirm Password\" id=\"confirm_password\" name=\"password_confirmation\" [(ngModel)]=\"user.password_confirmation\" required>\r\n                <div class=\"input-group-prepend\" *ngIf=\"user.password_confirmation\"> \r\n                  <span class=\"input-group-text bg-white border-left-0\" title=\"{{showCPassword?'Hide Password':'Show Password'}}\" (click)=\"showCPassword=!showCPassword\"><i class=\"feather {{showCPassword?'icon-eye-off':'icon-eye'}}\" ></i></span>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"form-group text-left mt-2\">\r\n                <div class=\"checkbox checkbox-primary d-inline\">\r\n                  <input type=\"checkbox\" name=\"checkbox-fill-2\" id=\"checkbox-fill-2\">\r\n                  <label for=\"checkbox-fill-2\" class=\"cr\">Send me the <a href=\"javascript:\"> Newsletter</a> weekly.</label>\r\n                </div>\r\n              </div> -->\r\n              <button type=\"submit\" class=\"btn btn-primary btn-block mb-4\" [disabled]=\"!signForm.form.valid\" [buttonBusy]=\"saving\">Sign up</button>\r\n              <p class=\"mb-2\">Already have an account? <a [routerLink]=\"['/auth/signin']\" class=\"f-w-400\">Signin</a></p>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/auth-signup/auth-signup-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/auth-signup/auth-signup-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AuthSignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupRoutingModule", function() { return AuthSignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup.component */ "./src/app/authentication/auth-signup/auth-signup.component.ts");




var routes = [
    {
        path: '',
        component: _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupComponent"]
    }
];
var AuthSignupRoutingModule = /** @class */ (function () {
    function AuthSignupRoutingModule() {
    }
    AuthSignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthSignupRoutingModule);
    return AuthSignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/auth-signup/auth-signup.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/authentication/auth-signup/auth-signup.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGgtc2lnbnVwL2F1dGgtc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/auth-signup/auth-signup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authentication/auth-signup/auth-signup.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupComponent", function() { return AuthSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_dtos_auth_signin_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dtos/auth/signin-dto */ "./src/app/shared/dtos/auth/signin-dto.ts");
/* harmony import */ var src_app_shared_services_signin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/signin.service */ "./src/app/shared/services/signin.service.ts");






var AuthSignupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthSignupComponent, _super);
    function AuthSignupComponent(injector, _userSigninService) {
        var _this = _super.call(this, injector) || this;
        _this._userSigninService = _userSigninService;
        _this.user = new src_app_shared_dtos_auth_signin_dto__WEBPACK_IMPORTED_MODULE_4__["SigninDto"]();
        _this.saving = false;
        return _this;
    }
    AuthSignupComponent.prototype.ngOnInit = function () {
        this.showPassword = false;
        this.showCPassword = false;
    };
    AuthSignupComponent.prototype.signup = function (signForm) {
        var _this = this;
        if (this.user.password !== this.user.password_confirmation) {
            this.notify.error("Password not matched", "Error");
            return;
        }
        this.saving = true;
        this._userSigninService.SigninUser("/api/register", this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return (_this.saving = false); })).subscribe(function (response) {
            _this.notify.success("User registered successfully", "Success");
            signForm.resetForm();
        });
    };
    AuthSignupComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_shared_services_signin_service__WEBPACK_IMPORTED_MODULE_5__["UserSigninService"] }
    ]; };
    AuthSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-signup',
            template: __webpack_require__(/*! raw-loader!./auth-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/auth-signup/auth-signup.component.html"),
            styles: [__webpack_require__(/*! ./auth-signup.component.scss */ "./src/app/authentication/auth-signup/auth-signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_shared_services_signin_service__WEBPACK_IMPORTED_MODULE_5__["UserSigninService"]])
    ], AuthSignupComponent);
    return AuthSignupComponent;
}(src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/authentication/auth-signup/auth-signup.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/authentication/auth-signup/auth-signup.module.ts ***!
  \******************************************************************/
/*! exports provided: AuthSignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupModule", function() { return AuthSignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup-routing.module */ "./src/app/authentication/auth-signup/auth-signup-routing.module.ts");
/* harmony import */ var _auth_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-signup.component */ "./src/app/authentication/auth-signup/auth-signup.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






var AuthSignupModule = /** @class */ (function () {
    function AuthSignupModule() {
    }
    AuthSignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSignupRoutingModule"],
                src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_auth_signup_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignupComponent"]]
        })
    ], AuthSignupModule);
    return AuthSignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-signup-auth-signup-module-es5.js.map