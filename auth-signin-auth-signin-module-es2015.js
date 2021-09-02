(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signin-auth-signin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/auth-signin/auth-signin.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/auth-signin/auth-signin.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\r\n  <div class=\"auth-content\">\r\n    <div class=\"card\">\r\n      <div class=\"row align-items-center text-center\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card-body\">\r\n            <!-- <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\"> -->\r\n            <h3 class=\"text-primary mb-4\">Cargo Manager</h3>\r\n            <h4 class=\"mb-3 f-w-400\">Signin</h4>\r\n            <form #signForm=\"ngForm\" novalidate (ngSubmit)=\"signin()\" autocomplete=\"off\">\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"feather icon-user\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter email\" name=\"userName\" id=\"userName\" [(ngModel)]=\"user.email\" required>\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\r\n                </div>\r\n                <input type=\"{{showPassword?'text':'password'}}\" class=\"form-control\" placeholder=\"Password\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\r\n                <div class=\"input-group-prepend\" *ngIf=\"user.password\"> \r\n                  <span class=\"input-group-text bg-white border-left-0\" title=\"{{showPassword?'Hide Password':'Show Password'}}\" (click)=\"showPassword=!showPassword\"><i class=\"feather {{showPassword?'icon-eye-off':'icon-eye'}}\" ></i></span>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"form-group text-left mt-2\">\r\n                <div class=\"checkbox checkbox-primary d-inline\">\r\n                  <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-a1\" checked=\"\">\r\n                  <label for=\"checkbox-fill-a1\" class=\"cr\"> Save credentials</label>\r\n                </div>\r\n              </div> -->\r\n              <button type=\"submit\" class=\"btn btn-block btn-primary mb-4\" [disabled]=\"!signForm.form.valid\" [buttonBusy]=\"saving\" >Signin</button>\r\n            </form>\r\n            <p class=\"mb-2 text-muted\">Forgot password? <a [routerLink]=\"['/auth/reset-password']\" class=\"f-w-400\">Reset</a></p>\r\n            <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\" class=\"f-w-400\">Signup</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/auth-signin/auth-signin-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/auth-signin/auth-signin-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AuthSigninRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninRoutingModule", function() { return AuthSigninRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signin.component */ "./src/app/authentication/auth-signin/auth-signin.component.ts");




const routes = [
    {
        path: '',
        component: _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"]
    }
];
let AuthSigninRoutingModule = class AuthSigninRoutingModule {
};
AuthSigninRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthSigninRoutingModule);



/***/ }),

/***/ "./src/app/authentication/auth-signin/auth-signin.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/authentication/auth-signin/auth-signin.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGgtc2lnbmluL2F1dGgtc2lnbmluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/auth-signin/auth-signin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authentication/auth-signin/auth-signin.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function() { return AuthSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_dtos_auth_signin_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/auth/signin-dto */ "./src/app/shared/dtos/auth/signin-dto.ts");
/* harmony import */ var src_app_shared_services_signin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/signin.service */ "./src/app/shared/services/signin.service.ts");







let AuthSigninComponent = class AuthSigninComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"] {
    constructor(injector, _router, _userSigninService) {
        super(injector);
        this._router = _router;
        this._userSigninService = _userSigninService;
        this.user = new src_app_shared_dtos_auth_signin_dto__WEBPACK_IMPORTED_MODULE_5__["SigninDto"]();
        this.saving = false;
    }
    ngOnInit() {
        this.showPassword = false;
    }
    signin() {
        debugger;
        this.saving = true;
        this._userSigninService.SigninUser("/auth/signin", this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                let result = response.data;
                localStorage.clear();
                localStorage.setItem("token", result.accessToken);
                localStorage.setItem("user", JSON.stringify(result.user));
                this._router.navigate(['/']);
            }
            else {
                this.notify.error("UserName or Password Incorrect", "Error");
            }
        });
    }
};
AuthSigninComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_signin_service__WEBPACK_IMPORTED_MODULE_6__["UserSigninService"] }
];
AuthSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-signin',
        template: __webpack_require__(/*! raw-loader!./auth-signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/auth-signin/auth-signin.component.html"),
        styles: [__webpack_require__(/*! ./auth-signin.component.scss */ "./src/app/authentication/auth-signin/auth-signin.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_signin_service__WEBPACK_IMPORTED_MODULE_6__["UserSigninService"]])
], AuthSigninComponent);



/***/ }),

/***/ "./src/app/authentication/auth-signin/auth-signin.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/authentication/auth-signin/auth-signin.module.ts ***!
  \******************************************************************/
/*! exports provided: AuthSigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninModule", function() { return AuthSigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signin-routing.module */ "./src/app/authentication/auth-signin/auth-signin-routing.module.ts");
/* harmony import */ var _auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-signin.component */ "./src/app/authentication/auth-signin/auth-signin.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






let AuthSigninModule = class AuthSigninModule {
};
AuthSigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSigninRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]]
    })
], AuthSigninModule);



/***/ })

}]);
//# sourceMappingURL=auth-signin-auth-signin-module-es2015.js.map