(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cargo-cargo-module"],{

/***/ "./src/app/cargo/cargo-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cargo/cargo-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CargoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoRoutingModule", function() { return CargoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'identity',
                loadChildren: function () { return Promise.all(/*! import() | identity-identity-module */[__webpack_require__.e("default~identity-identity-module~setup-setup-module"), __webpack_require__.e("identity-identity-module")]).then(__webpack_require__.bind(null, /*! ./identity/identity.module */ "./src/app/cargo/identity/identity.module.ts")).then(function (module) { return module.IdentityModule; }); },
            }
        ]
    }
];
var CargoRoutingModule = /** @class */ (function () {
    function CargoRoutingModule() {
    }
    CargoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CargoRoutingModule);
    return CargoRoutingModule;
}());



/***/ }),

/***/ "./src/app/cargo/cargo.module.ts":
/*!***************************************!*\
  !*** ./src/app/cargo/cargo.module.ts ***!
  \***************************************/
/*! exports provided: CargoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoModule", function() { return CargoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cargo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargo-routing.module */ "./src/app/cargo/cargo-routing.module.ts");




var CargoModule = /** @class */ (function () {
    function CargoModule() {
    }
    CargoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cargo_routing_module__WEBPACK_IMPORTED_MODULE_3__["CargoRoutingModule"]
            ]
        })
    ], CargoModule);
    return CargoModule;
}());



/***/ })

}]);
//# sourceMappingURL=cargo-cargo-module-es5.js.map