(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-management-user-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/roles/roles.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/user-management/roles/roles.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>roles works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/user/user.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/user-management/user/user.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card cardTitle=\"Create Sec User\" [options]=\"true\">\r\n        <hr>\r\n\r\n        <form action=\"javascript:\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"user_employee\">Employee</label>\r\n                    <select id=\"user_employee\" name=\"user_employee\" class=\"form-control\">\r\n                        <option selected>Choose Employee</option>\r\n                        <option value=\"1\">Azeem</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"user_name\">User Full Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"user_name\" name=\"user_name\" placeholder=\"User Full Name\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"user_login\">User Login</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"user_login\" name=\"user_login\" placeholder=\"User Login\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"user_password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"user_password\" name=\"user_password\" placeholder=\"Password\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"user_type\">User Type</label>\r\n                    <select id=\"user_type\" name=\"user_type\" class=\"form-control\">\r\n                      <option selected>Choose User Type</option>\r\n                      <option value=\"1\">Admin</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-md-6 mt-4\">\r\n                    <div class=\"custom-control custom-checkbox mt-2\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"user_active\" name=\"user_active\">\r\n                        <label class=\"custom-control-label\" for=\"user_active\">Active</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n            <button type=\"submit\" class=\"btn btn-success ml-2\">Edit</button>\r\n            <button type=\"reset\" class=\"btn btn-danger ml-2\">New</button>\r\n          </form>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-12\">\r\n      <app-card cardTitle=\"Sec User Info\" blockClass=\"table-border-style\">\r\n        <div class=\"input-group mb-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Sec User\">\r\n          <div class=\"input-group-append\">\r\n            <span class=\"btn btn-primary\" id=\"basic-addon2\">Search</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>First Name</th>\r\n              <th>Last Name</th>\r\n              <th>Username</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>1</td>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td>Larry</td>\r\n              <td>the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/user-management/roles/roles.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/user-management/roles/roles.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/user-management/roles/roles.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-management/roles/roles.component.ts ***!
  \****************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RolesComponent = /** @class */ (function () {
    function RolesComponent() {
    }
    RolesComponent.prototype.ngOnInit = function () {
    };
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.scss */ "./src/app/admin/user-management/roles/roles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-management/user-management-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/user-management/user-management-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/admin/user-management/roles/roles.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/admin/user-management/user/user.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: 'user',
                component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
            },
            {
                path: 'roles',
                component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"]
            }
        ]
    }
];
var UserManagementRoutingModule = /** @class */ (function () {
    function UserManagementRoutingModule() {
    }
    UserManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserManagementRoutingModule);
    return UserManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/user-management/user-management.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management-routing.module */ "./src/app/admin/user-management/user-management-routing.module.ts");




var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserManagementRoutingModule"]
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "./src/app/admin/user-management/user/user.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/user-management/user/user.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/user-management/user/user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/user-management/user/user.component.ts ***!
  \**************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/admin/user-management/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-management-user-management-module-es5.js.map