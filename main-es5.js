(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n  <app-spinner></app-spinner>\r\n</router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/admin.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/admin.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.nextConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\r\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\r\n<div class=\"pcoded-main-container\">\r\n  <div class=\"pcoded-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\r\n    <div class=\"pcoded-content\">\r\n      <div class=\"pcoded-inner-content\">\r\n        <div class=\"main-body\">\r\n          <div class=\"page-wrapper\">\r\n\r\n            <!-- <app-card [hidHeader]=\"true\">\r\n              <ngb-tabset>\r\n                <ngb-tab title=\"HOME\">\r\n                  <ng-template ngbTabContent>\r\n                    \r\n                    <div class=\"row m-0\">\r\n                      <div class=\"col-md-3 p-0\">\r\n                        <app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.nextConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\r\n                        <app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\r\n                      </div>\r\n                      <div class=\"col-md-9 pl-2 pr-0\">\r\n                        <app-main-content></app-main-content>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </ng-template>\r\n                </ngb-tab>\r\n              </ngb-tabset>\r\n            </app-card> -->\r\n            <app-main-content></app-main-content>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-configuration></app-configuration>      \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/configuration/configuration.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/configuration/configuration.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/main-content/main-content.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/main-content/main-content.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content mb-5\">\r\n  <app-card [hidHeader]=\"true\">\r\n    <ngb-tabset [activeId]=\"activeTabUrl\"  [justify]=\"currentJustify\" class=\"nav-tabs-bottom\" (tabChange)=\"onTabChange($event)\">\r\n      <ngb-tab *ngFor=\"let tab of tabs; let index = index\" [id]=\"tab.url\">\r\n        <!-- <perfect-scrollbar [style.max-width]=\"'300px'\"> -->\r\n        <ng-template ngbTabTitle>\r\n          <span>{{tab.name}}</span>\r\n          <span class=\"text-right pl-2\" (click)=\"closeTab(index, $event)\"><i class=\"feather icon-x-circle text-danger\"></i></span>\r\n        </ng-template>\r\n        <!-- </perfect-scrollbar> -->\r\n        <ng-template ngbTabContent>\r\n            <!-- <app-breadcrumb></app-breadcrumb> -->\r\n            <router-outlet></router-outlet>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </app-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'; else mainHeader\">\r\n  <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\r\n</div>\r\n<ng-template #mainHeader>\r\n  <div class=\"m-header\">\r\n    <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\r\n    <a [routerLink]=\"['/dashboard/analytics']\" class=\"b-brand\">\r\n      <h3 class=\"text-white mt-2\">Cargo Manager</h3>\r\n      <!-- <img id=\"main-logo\" src=\"assets/images/logo.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor !== 'brand-default' || this.nextConfig.headerBackColor !== 'header-default'\">\r\n      <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor === 'brand-default' && this.nextConfig.headerBackColor === 'header-default'\">\r\n      <img src=\"assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\"> -->\r\n    </a>\r\n    <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\r\n    <!-- <app-nav-left class=\"mr-auto\"></app-nav-left> -->\r\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav mr-auto\">\r\n  <li class=\"nav-item\">\r\n    <app-nav-search></app-nav-search>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-search\" class=\"main-search open\">\r\n  <div class=\"input-group\">\r\n    <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\" [style.width]=\"'150px'\">\r\n    <span class=\"input-group-append search-btn btn btn-primary\">\r\n      <i class=\"feather icon-search input-group-text\"></i>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav ml-auto\">\r\n  <li>\r\n    <app-nav-search></app-nav-search>\r\n  </li>\r\n  <li>\r\n    <div class=\"dropdown\" ngbDropdown placement=\"auto\">\r\n      <a ngbDropdownToggle href=\"javascript:\" data-toggle=\"dropdown\"><i class=\"icon feather icon-bell\"></i></a>\r\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notification\">\r\n        <div class=\"noti-head\">\r\n          <h6 class=\"d-inline-block m-b-0\">Notifications</h6>\r\n          <div class=\"float-right\">\r\n            <a href=\"javascript:\" class=\"m-r-10\">mark as read</a>\r\n            <a href=\"javascript:\">clear all</a>\r\n          </div>\r\n        </div>\r\n        <ul class=\"noti-body\">\r\n          <li class=\"n-title\">\r\n            <p class=\"m-b-0\">NEW</p>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>John Doe</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>New ticket Added</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"n-title\">\r\n            <p class=\"m-b-0\">EARLIER</p>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>Prchace New Theme and make payment</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>Sara Soudein</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>currently login</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <div class=\"noti-footer\">\r\n          <a href=\"javascript:\">show all</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\r\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\r\n        <i class=\"icon feather icon-user\"></i>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\r\n        <div class=\"pro-head\">\r\n          <img src=\"assets/images/user/avatar-1.png\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n          <span>{{appSession.firstname}}</span>\r\n          <a href=\"javascript:\" class=\"dud-logout\" title=\"Logout\" (click)=\"logout()\">\r\n            <i class=\"feather icon-log-out\"></i>\r\n          </a>\r\n        </div>\r\n        <ul class=\"pro-body\">\r\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\r\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-mail\"></i> My Messages</a></li>\r\n          <li (click)=\"logout()\"><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-lock\"></i> Logout</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\r\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\r\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\r\n    </a>\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </li>\r\n  <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\r\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\r\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\r\n    </a>\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </li>\r\n  <ng-template #itemContent>\r\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\r\n        <i class=\"{{item.icon}}\"></i>\r\n      </span>\r\n      <span class=\"pcoded-mtext\">{{item.title}}\r\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\r\n          {{item.badge.title}}\r\n        </span>\r\n      </span>\r\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\r\n        {{item.badge.title}}\r\n      </span>\r\n  </ng-template>\r\n  <ng-template #subMenuContent>\r\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\r\n      <ng-container *ngFor=\"let item of item.children\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n  </ng-template>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<perfect-scrollbar *ngIf=\"this.nextConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\" [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-next\" ngClass=\"next-scroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'next'\" [disabled]=\"null\">\r\n  <div class=\"navbar-content\">\r\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\r\n      <ng-container *ngFor=\"let item of navigation\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n    <!-- <app-card [hidHeader]=\"true\" cardClass=\"text-center\">\r\n      <i class=\"feather icon-sunset f-40\"></i>\r\n      <h6 class=\"mt-3\">Help?</h6>\r\n      <p>Please contact us on our email for need any support</p>\r\n      <a href=\"javascript:\" target=\"_blank\" class=\"btn btn-primary btn-sm text-white m-0\">Support</a>\r\n    </app-card> -->\r\n  </div>\r\n</perfect-scrollbar>\r\n\r\n<div *ngIf=\"this.nextConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\r\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\r\n  <div  class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\r\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\r\n      <ng-container *ngFor=\"let item of navigation\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n  </div>\r\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\r\n  <ng-container *ngFor=\"let item of item.children\">\r\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n  </ng-container>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\r\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\r\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\r\n      <ng-template #directTitle>\r\n        {{item.title}}\r\n      </ng-template>\r\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\r\n    </a>\r\n  </li>\r\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\r\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\r\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\r\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\r\n      <ng-template #directTitle>\r\n        {{item.title}}\r\n      </ng-template>\r\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\r\n    </a>\r\n  </li>\r\n  <ng-template #itemIcon>\r\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\r\n  </ng-template>\r\n  <ng-template #itemBadge>\r\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\r\n      {{item.badge.title}}\r\n    </span>\r\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\r\n      {{item.badge.title}}\r\n    </span>\r\n  </ng-template>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/navigation.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/navigation.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\r\n  <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/auth/auth.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/auth/auth.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/alert/alert.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/alert/alert.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #alert class=\"alert alert-{{type}}\" role=\"alert\" [ngClass]=\"{'alert-dismissible': dismiss}\">\r\n  <ng-content></ng-content>\r\n  <button *ngIf=\"dismiss\" (click)=\"dismissAlert(alert)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"this.navigationList\">\r\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\r\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"page-header-title\">\r\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title}}</h5></ng-container>\r\n            </div>\r\n            <ul class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\">\r\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\r\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme1'\">Home</a>\r\n              </li>\r\n              <ng-container *ngFor=\"let breadcrumb of navigationList\">\r\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title}}</a></li>\r\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title}}</a></li>\r\n              </ng-container>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/card/card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/card/card.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\r\n  <div class=\"card-header header-color\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\r\n    <h5 *ngIf=\"!customHeader\">{{ cardTitle }}</h5>\r\n    <p *ngIf=\"!customHeader && cardCaption\" [ngClass]=\"captionClass\">{{cardCaption}}</p>\r\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\">\r\n      <div class=\"btn-group card-option dropdown\" ngbDropdown>\r\n        <button type=\"button\" class=\"btn btn-sm btn-icon\" (click)=\"collapsedCardToggle()\" title=\"{{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}}\">\r\n          <i class=\"feather font-weight-bolder\" [ngClass]=\"collapsedIcon\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-icon\"  (click)=\"fullCardToggle(toAnimate, '', true)\" title=\"{{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}\">\r\n          <i class=\"feather font-weight-bolder\" [ngClass]=\"fullIcon\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-icon\" title=\"Close\">\r\n          <i class=\"feather icon-x font-weight-bolder\"></i>\r\n        </button>\r\n        <!-- <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\r\n          <i class=\"feather icon-more-horizontal\"></i>\r\n        </button>\r\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\r\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}</span></a></li>\r\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle()\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}} </span>\r\n            <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span></a></li>\r\n          <li class=\"dropdown-item reload-card\" (click)=\"cardRefresh($event)\"><a href=\"javascript:\"><i class=\"feather icon-refresh-cw\"></i> Reload</a></li>\r\n          <li class=\"dropdown-item close-card\" (click)=\"cardRemoveAction()\"><a href=\"javascript:\"><i class=\"feather icon-trash\"></i> Remove</a></li>\r\n        </ul> -->\r\n      </div>\r\n    </div>\r\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\r\n  </div>\r\n  <div [@collapsedCard]=\"collapsedCard\" *ngIf=\"this.options; else subMenuContent\">\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </div>\r\n  <ng-template #subMenuContent>\r\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"isCardFooter\" class=\"card-footer\" [ngClass]=\"footerClass\">\r\n    <ng-content select=\".app-card-footer\"></ng-content>\r\n  </div>\r\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"{{this.chartID}}\"></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\r\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"(backDrop); else backDropOver\" class=\"md-overlay\"></div>\r\n<ng-template #backDropOver>\r\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div class=\"modal-dialog\" role=\"document\" [ngClass]=\"dialogClass\">\r\n    <div class=\"modal-content\">\r\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\r\n        <ng-content select=\".app-modal-header\"></ng-content>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-content select=\".app-modal-body\"></ng-content>\r\n      </div>\r\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\r\n        <ng-content select=\".app-modal-footer\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/spinner/spinner.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/shared/components/spinner/spinner.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\r\n    <div class=\"loader-bg\">\r\n        <!-- material-line -->\r\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: NextConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextConfig", function() { return NextConfig; });
var NextConfig = /** @class */ (function () {
    function NextConfig() {
    }
    NextConfig.config = {
        layout: 'vertical',
        subLayout: '',
        collapseMenu: false,
        layoutType: 'menu-dark',
        headerBackColor: 'header-blue',
        navBrandColor: 'brand-default',
        rtlLayout: false,
        navFixedLayout: true,
        headerFixedLayout: true,
        boxLayout: false,
    };
    return NextConfig;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ "./src/app/theme/layout/admin/admin.component.ts");
/* harmony import */ var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/layout/auth/auth.component */ "./src/app/theme/layout/auth/auth.component.ts");





var routes = [
    {
        path: '',
        component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard/analytics',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: function () { return __webpack_require__.e(/*! import() | demo-dashboard-dashboard-module */ "demo-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./demo/dashboard/dashboard.module */ "./src/app/demo/dashboard/dashboard.module.ts")).then(function (module) { return module.DashboardModule; }); },
            },
            {
                path: 'admin',
                loadChildren: function () { return __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(function (module) { return module.AdminModule; }); }
            },
            {
                path: 'cargo',
                loadChildren: function () { return __webpack_require__.e(/*! import() | cargo-cargo-module */ "cargo-cargo-module").then(__webpack_require__.bind(null, /*! ./cargo/cargo.module */ "./src/app/cargo/cargo.module.ts")).then(function (module) { return module.CargoModule; }); }
            },
            {
                path: 'gl',
                loadChildren: function () { return __webpack_require__.e(/*! import() | general-ledger-general-ledger-module */ "general-ledger-general-ledger-module").then(__webpack_require__.bind(null, /*! ./general-ledger/general-ledger.module */ "./src/app/general-ledger/general-ledger.module.ts")).then(function (module) { return module.GeneralLedgerModule; }); }
            },
            {
                path: 'main',
                loadChildren: function () { return __webpack_require__.e(/*! import() | main-main-module */ "main-main-module").then(__webpack_require__.bind(null, /*! ./main/main.module */ "./src/app/main/main.module.ts")).then(function (module) { return module.MainModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: function () { return __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(function (module) { return module.AuthenticationModule; }); },
            },
            {
                path: 'maintenance',
                loadChildren: function () { return __webpack_require__.e(/*! import() | maintenance-maintenance-module */ "maintenance-maintenance-module").then(__webpack_require__.bind(null, /*! ./maintenance/maintenance.module */ "./src/app/maintenance/maintenance.module.ts")).then(function (module) { return module.MaintenanceModule; }); }
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: options, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ "./src/app/theme/layout/admin/admin.component.ts");
/* harmony import */ var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/layout/auth/auth.component */ "./src/app/theme/layout/auth/auth.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/layout/admin/navigation/navigation.component */ "./src/app/theme/layout/admin/navigation/navigation.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-content.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-bar.component */ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");
/* harmony import */ var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/layout/admin/configuration/configuration.component */ "./src/app/theme/layout/admin/configuration/configuration.component.ts");
/* harmony import */ var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/shared/full-screen/toggle-full-screen */ "./src/app/theme/shared/full-screen/toggle-full-screen.ts");
/* harmony import */ var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/layout/admin/navigation/navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_layout_admin_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theme/layout/admin/main-content/main-content.component */ "./src/app/theme/layout/admin/main-content/main-content.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




















/* Menu Items */






var options = null;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__["NavContentComponent"],
                _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"],
                _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"],
                _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"],
                _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
                _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__["NavLeftComponent"],
                _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__["NavSearchComponent"],
                _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__["NavRightComponent"],
                _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_18__["ConfigurationComponent"],
                _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_19__["ToggleFullScreenDirective"],
                _theme_layout_admin_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_22__["MainContentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbDropdownModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTooltipModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTabsetModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_24__["NgxMaskModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"].forRoot()
            ],
            providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_20__["NavigationItem"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/common/app-component-base.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/common/app-component-base.ts ***!
  \*****************************************************/
/*! exports provided: AppComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentBase", function() { return AppComponentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _permissions_permission_checker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permissions/permission-checker.service */ "./src/app/shared/permissions/permission-checker.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dtos_auth_user_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dtos/auth/user-dto */ "./src/app/shared/dtos/auth/user-dto.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





//import * as jwt_decode from 'jwt-decode';





var AppComponentBase = /** @class */ (function () {
    function AppComponentBase(injector) {
        this.message = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.appSession = new _dtos_auth_user_dto__WEBPACK_IMPORTED_MODULE_7__["UserDto"]();
        this.meridian = true;
        this.dt = new Date();
        this.tableDiv = true;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        this.focus$ = [];
        this.click$ = [];
        this.typeheadlist = [];
        this.typeheadFormatter = function (format) { return format.name; };
        this.DELIMITER = '-';
        this.permission = injector.get(_permissions_permission_checker_service__WEBPACK_IMPORTED_MODULE_2__["PermissionCheckerService"]);
        this.notify = injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]);
        this.appSession = this.UserSession();
        this.calendar = injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]);
        this.currentTime = this.dt.getHours() + ":" + this.dt.getMinutes() + ":" + this.dt.getSeconds();
    }
    AppComponentBase.prototype.shTableDiv = function (div) {
        if (div == "List") {
            this.tableDiv = true;
        }
        else {
            this.tableDiv = false;
        }
        return this.tableDiv;
    };
    AppComponentBase.prototype.parseNgbDate = function (value) {
        if (value) {
            var date = value.split(this.DELIMITER);
            return {
                year: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                day: parseInt(date[2], 10)
            };
        }
        return null;
    };
    AppComponentBase.prototype.formatNgbDate = function (date) {
        return date ? date.year + this.DELIMITER + ("" + pad(date.month)) + this.DELIMITER + ("" + pad(date.day)) : '';
    };
    AppComponentBase.prototype.parseNgbTime = function (value) {
        if (!value) {
            return null;
        }
        var dte;
        if (value.match(/T/g)) {
            dte = new Date(value);
        }
        else {
            dte = new Date(new Date().toISOString().slice(0, 10) + " " + value);
        }
        return {
            hour: dte.getHours(),
            minute: dte.getMinutes(),
            second: dte.getSeconds()
        };
    };
    AppComponentBase.prototype.formatNgbTime = function (time) {
        var timeString = time != null ? pad(time.hour) + ":" + pad(time.minute) + ":" + pad(time.second) : null;
        return new Date(new Date().toISOString().slice(0, 10) + " " + timeString);
    };
    AppComponentBase.prototype.dateTimeString = function (date, time) {
        var dateString = this.formatNgbDate(date);
        var timeString = time != null ? pad(time.hour) + ":" + pad(time.minute) + ":" + pad(time.second) : null;
        return dateString + "T" + timeString;
    };
    AppComponentBase.prototype.isGranted = function (permissionName) {
        return this.permission.isGranted(permissionName);
    };
    AppComponentBase.prototype.isGrantedAny = function () {
        var e_1, _a;
        var permissions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            permissions[_i] = arguments[_i];
        }
        if (!permissions) {
            return false;
        }
        try {
            for (var permissions_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](permissions), permissions_1_1 = permissions_1.next(); !permissions_1_1.done; permissions_1_1 = permissions_1.next()) {
                var permission = permissions_1_1.value;
                if (this.isGranted(permission)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (permissions_1_1 && !permissions_1_1.done && (_a = permissions_1.return)) _a.call(permissions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    AppComponentBase.prototype.UserSession = function () {
        debugger;
        var token = localStorage.getItem("token");
        var user = localStorage.getItem("user");
        if (token) {
            this.appSession = JSON.parse(user);
        }
        return this.appSession;
    };
    AppComponentBase.prototype.searchType = function (index, instance) {
        var _this = this;
        if (this.focus$.length <= index) {
            this.focus$.push(new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]());
            this.click$.push(new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]());
        }
        return function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$[index].pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function () { return !instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$[index];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (term) {
                return (term === ""
                    ? _this.typeheadlist
                    : _this.typeheadlist.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10);
            }));
        };
    };
    AppComponentBase.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    return AppComponentBase;
}());

var pad = function (i) { return i < 10 ? "0" + i : "" + i; };


/***/ }),

/***/ "./src/app/shared/dtos/auth/user-dto.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dtos/auth/user-dto.ts ***!
  \**********************************************/
/*! exports provided: UserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return UserDto; });
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    return UserDto;
}());



/***/ }),

/***/ "./src/app/shared/main-tab.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/main-tab.service.ts ***!
  \********************************************/
/*! exports provided: MainTabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabService", function() { return MainTabService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainTabService = /** @class */ (function () {
    function MainTabService() {
        this.tabs = [];
    }
    MainTabService.prototype.addTab = function (name, url) {
        var tabObj = {
            name: name ? name : "Dashboard",
            url: url
        };
        var tab = this.getTabOptionByUrl(url);
        if (!this.tabs.includes(tab)) {
            this.tabs.push(tabObj);
        }
    };
    MainTabService.prototype.getTabOptionByUrl = function (url) {
        return this.tabs.find(function (tab) { return tab.url === url; });
    };
    MainTabService.prototype.deleteTab = function (index) {
        this.tabs.splice(index, 1);
    };
    MainTabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainTabService);
    return MainTabService;
}());



/***/ }),

/***/ "./src/app/shared/permissions/permission-checker.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/permissions/permission-checker.service.ts ***!
  \******************************************************************/
/*! exports provided: PermissionCheckerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionCheckerService", function() { return PermissionCheckerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




//import * as jwt_decode from 'jwt-decode';
var PermissionCheckerService = /** @class */ (function () {
    //securityObject: AppUserAuth;
    function PermissionCheckerService(httpClient) {
        //this.securityObject = UserClaims;
        this.httpClient = httpClient;
        // localStorage.setItem("accountingBearerToken", JSON.stringify(this.x));
        // if (localStorage.getItem("userClaims")) {
        //   this.securityObject = JSON.parse(localStorage.getItem("userClaims"));
        // } else {
        //   localStorage.setItem("userClaims", JSON.stringify(this.securityObject));
        // }
    }
    PermissionCheckerService.prototype.logIn = function (user) {
        if (user === void 0) { user = ""; }
        var currentUser;
        // if (user.toUpperCase() == "ADMIN") {
        //   currentUser = AdminClaims;
        // } else if (user.toUpperCase() == "USER") {
        //   currentUser = UserClaims;
        // } else {
        //   currentUser = JSON.parse(localStorage.getItem("userClaims"));
        // }
        // localStorage.setItem("userClaims", JSON.stringify(currentUser));
        // this.securityObject = currentUser;
        //console.log(this.securityObject);
        currentUser = this.GetUserClaims();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(currentUser);
    };
    PermissionCheckerService.prototype.isGranted = function (claimType, claimValue) {
        var ret = false;
        if (typeof claimType === "string") {
            ret = this.isClaimValid(claimType, claimValue);
        }
        else {
            var claims = claimType;
            if (claims) {
                for (var index = 0; index < claims.length; index++) {
                    ret = this.isClaimValid(claims[index]);
                    if (ret) {
                        break;
                    }
                }
            }
        }
        return ret;
    };
    PermissionCheckerService.prototype.isClaimValid = function (claimType, claimValue) {
        var ret = false;
        var auth = null;
        auth = this.GetUserClaims();
        if (auth) {
            if (claimType.indexOf(":") >= 0) {
                var words = claimType.split(":");
                claimType = words[0].toLocaleLowerCase();
                claimValue = words[1];
            }
            else {
                claimType = claimType.toLocaleLowerCase();
                claimValue = claimValue ? claimValue : "true";
            }
            var s = auth.claims.find(function (c) {
                return c.claimType.toLocaleLowerCase() === claimType &&
                    c.claimValue === claimValue;
            });
            ret =
                auth.claims.find(function (c) {
                    return c.claimType.toLocaleLowerCase() === claimType &&
                        c.claimValue === claimValue;
                }) != null;
        }
        return ret;
    };
    PermissionCheckerService.prototype.GetUserClaims = function () {
        var userClaims = localStorage.getItem("userClaims");
        var info;
        if (userClaims) {
            // info=jwt_decode(userClaims);
            info.claims = JSON.parse(info.claims);
        }
        return info;
    };
    PermissionCheckerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    PermissionCheckerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PermissionCheckerService);
    return PermissionCheckerService;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/admin.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/layout/admin/admin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(zone, location) {
        this.zone = zone;
        this.location = location;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        var currentURL = this.location.path();
        var baseHerf = this.location['_baseHref'];
        if (baseHerf) {
            currentURL = baseHerf + this.location.path();
        }
        this.windowWidth = window.innerWidth;
        if (currentURL === baseHerf + '/layout/collapse-menu'
            || currentURL === baseHerf + '/layout/box'
            || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
            this.nextConfig.collapseMenu = true;
        }
        this.navCollapsed = (this.windowWidth >= 992) ? this.nextConfig.collapseMenu : false;
        this.navCollapsedMob = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        if (this.windowWidth < 992) {
            this.nextConfig.layout = 'vertical';
            setTimeout(function () {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%'; // 100% amit
            }, 500);
        }
    };
    AdminComponent.prototype.navMobClick = function () {
        var _this = this;
        if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                this.navCollapsedMob = !this.navCollapsedMob;
                setTimeout(function () {
                    _this.navCollapsedMob = !_this.navCollapsedMob;
                }, 100);
            }
            else {
                this.navCollapsedMob = !this.navCollapsedMob;
            }
        }
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/theme/layout/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/configuration/configuration.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.next-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.next-dark .menu-styler h1,\nbody.next-dark .menu-styler h2,\nbody.next-dark .menu-styler h3,\nbody.next-dark .menu-styler h4,\nbody.next-dark .menu-styler h5,\nbody.next-dark .menu-styler p,\nbody.next-dark .menu-styler h6 {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vRTpcXEZyYW1lV29ya3NcXENhcmdvXFxDYXJnb1dlYi9zcmNcXGFwcFxcdGhlbWVcXGxheW91dFxcYWRtaW5cXGNvbmZpZ3VyYXRpb25cXGNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FETUk7RUFDRSxtQ0FBQTtBQ0hOOztBREtJOzs7Ozs7O0VBT0UsV0FBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXN0eWxlciB7XHJcbiAgLm5hdi1waWxscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuYm9keS5uZXh0LWRhcmt7XHJcbiAgLm1lbnUtc3R5bGVye1xyXG4gICAgLnRhYi1jb250ZW50e1xyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoNCwgMTY5LCAyNDUsIDAuMDMpO1xyXG4gICAgfVxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIHAsXHJcbiAgICBoNntcclxuICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5tZW51LXN0eWxlciAubmF2LXBpbGxzIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgLnRhYi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSg0LCAxNjksIDI0NSwgMC4wMyk7XG59XG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgaDEsXG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgaDIsXG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgaDMsXG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgaDQsXG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgaDUsXG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgcCxcbmJvZHkubmV4dC1kYXJrIC5tZW51LXN0eWxlciBoNiB7XG4gIGNvbG9yOiAjMjIyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/configuration/configuration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent(zone, location) {
        var _this = this;
        this.zone = zone;
        this.location = location;
        this.scroll = function () {
            if (_this.headerFixedLayout === false) {
                document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh)';
                var el = document.querySelector('.pcoded-navbar.menupos-fixed');
                var scrollPosition = window.pageYOffset;
                if (scrollPosition > 60) {
                    el.style.position = 'fixed';
                    el.style.transition = 'none';
                    el.style.marginTop = '0';
                }
                else {
                    el.style.position = 'absolute';
                    el.style.marginTop = '60px';
                }
            }
            else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
                document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            }
        };
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.setThemeLayout();
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
        this.styleSelectorToggle = false;
        this.layoutType = this.nextConfig.layoutType;
        this.setLayout(this.layoutType);
        this.headerBackgroundColor = this.nextConfig.headerBackColor;
        this.brandBackgroundColor = this.nextConfig.navBrandColor;
        this.setHeaderBackground(this.headerBackgroundColor);
        this.setBrandBackground(this.brandBackgroundColor);
        this.rtlLayout = this.nextConfig.rtlLayout;
        this.changeRtlLayout(this.rtlLayout);
        this.menuFixedLayout = this.nextConfig.navFixedLayout;
        if (this.nextConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
        }
        this.headerFixedLayout = this.nextConfig.headerFixedLayout;
        this.changeHeaderFixedLayout(this.headerFixedLayout);
        this.boxLayout = this.nextConfig.boxLayout;
        this.changeBoxLayout(this.boxLayout);
    };
    ConfigurationComponent.prototype.setThemeLayout = function () {
        var currentURL = this.location.path();
        var baseHref = this.location['_baseHref'];
        if (baseHref) {
            currentURL = baseHref + this.location.path();
        }
        switch (currentURL) {
            case baseHref + '/layout/static':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;
            case baseHref + '/layout/nav-fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/collapse-menu':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/vertical-rtl':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/horizontal':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-l2':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-rtl':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/box':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.boxLayout = true;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/light':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-default';
                break;
            case baseHref + '/layout/dark':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'dark';
                this.nextConfig.headerBackColor = 'header-blue';
                break;
            case baseHref + '/layout/nav-color':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-info';
                this.nextConfig.navBrandColor = 'brand-info';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;
            default:
                break;
        }
    };
    ConfigurationComponent.prototype.setHeaderBackColor = function (color) {
        this.headerBackColor = color;
        document.querySelector('body').style.background = color;
    };
    // change main layout
    ConfigurationComponent.prototype.setLayout = function (layout) {
        this.isConfig = true;
        this.setBrandBackground(this.nextConfig.navBrandColor);
        document.querySelector('.pcoded-navbar').classList.remove('menu-light');
        document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
        document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
        document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
        document.querySelector('body').classList.remove('next-dark');
        this.layoutType = layout;
        if (layout === 'menu-light') {
            this.setBrandBackground(this.brandBackgroundColor);
            document.querySelector('.pcoded-navbar').classList.add(layout);
        }
        if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.add('brand-dark');
            this.setBrandBackground('brand-blue');
            this.setHeaderBackground('header-blue');
            document.querySelector('body').classList.add('next-dark');
        }
        if (layout === 'reset') {
            this.reset();
        }
    };
    ConfigurationComponent.prototype.reset = function () {
        document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
        this.ngOnInit();
    };
    ConfigurationComponent.prototype.setRtlLayout = function (e) {
        var flag = !!(e.target.checked);
        this.changeRtlLayout(flag);
    };
    ConfigurationComponent.prototype.changeRtlLayout = function (flag) {
        if (flag) {
            document.querySelector('body').classList.add('next-rtl');
        }
        else {
            document.querySelector('body').classList.remove('next-rtl');
        }
    };
    ConfigurationComponent.prototype.setMenuFixedLayout = function (e) {
        var flag = !!(e.target.checked);
        this.changeMenuFixedLayout(flag);
    };
    ConfigurationComponent.prototype.changeMenuFixedLayout = function (flag) {
        var _this = this;
        setTimeout(function () {
            if (flag) {
                document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
                if (_this.nextConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
                }
                window.addEventListener('scroll', _this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
                if (_this.nextConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                }
                if (_this.nextConfig.layout === 'vertical') {
                    window.removeEventListener('scroll', _this.scroll, true);
                }
            }
        }, 100);
    };
    ConfigurationComponent.prototype.setHeaderFixedLayout = function (e) {
        var flag = !!(e.target.checked);
        this.changeHeaderFixedLayout(flag);
    };
    ConfigurationComponent.prototype.changeHeaderFixedLayout = function (flag) {
        if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
        }
        else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
            // static
            if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                window.removeEventListener('scroll', this.scroll, true);
            }
        }
    };
    ConfigurationComponent.prototype.setBoxLayout = function (e) {
        var flag = !!(e.target.checked);
        this.changeBoxLayout(flag);
    };
    ConfigurationComponent.prototype.changeBoxLayout = function (flag) {
        if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
        }
        else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
        }
    };
    ConfigurationComponent.prototype.setHeaderBackground = function (background) {
        this.headerBackgroundColor = background;
        this.nextConfig.headerBackColor = background;
        document.querySelector('.pcoded-header').classList.remove('header-blue');
        document.querySelector('.pcoded-header').classList.remove('header-red');
        document.querySelector('.pcoded-header').classList.remove('header-purple');
        document.querySelector('.pcoded-header').classList.remove('header-info');
        document.querySelector('.pcoded-header').classList.remove('header-dark');
        if (background !== 'header-default') {
            document.querySelector('.pcoded-header').classList.add(background);
        }
    };
    ConfigurationComponent.prototype.setBrandBackground = function (background) {
        this.brandBackgroundColor = background;
        this.nextConfig.navBrandColor = background;
        document.querySelector('.pcoded-header').classList.remove('brand-blue');
        document.querySelector('.pcoded-header').classList.remove('brand-red');
        document.querySelector('.pcoded-header').classList.remove('brand-purple');
        document.querySelector('.pcoded-header').classList.remove('brand-info');
        document.querySelector('.pcoded-header').classList.remove('brand-dark');
        document.querySelector('.pcoded-header').classList.remove('brand-default');
        document.querySelector('.pcoded-header').classList.add(background);
    };
    ConfigurationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/configuration/configuration.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./configuration.component.scss */ "./src/app/theme/layout/admin/configuration/configuration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/main-content/main-content.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/main-content/main-content.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/main-content/main-content.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/main-content/main-content.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_main_tab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/main-tab.service */ "./src/app/shared/main-tab.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(tabService, router) {
        this.tabService = tabService;
        this.router = router;
        this.tabs = [];
        this.currentJustify = "start";
    }
    MainContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.tabs = this.tabService.tabs;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                debugger;
                _this.activeTabUrl = event.urlAfterRedirects;
                if (_this.tabs.length === 0) {
                    _this.tabService.addTab("", _this.activeTabUrl);
                }
            }
        });
    };
    MainContentComponent.prototype.closeTab = function (index, event) {
        debugger;
        this.tabService.deleteTab(index);
        var url = this.activeTabUrl;
        var len = this.tabs.length;
        if (!this.tabs.find(function (tab) { return tab.url === url; }) && len >= 1) {
            url = this.tabs[len - 1].url;
        }
        else if (index === 0 && len === 2) {
            url = this.tabs[index + 1].url;
        }
        else if (len === 0 && !this.tabs.find(function (tab) { return tab.url === url; })) {
            url = "/dashboard/analytics";
        }
        this.router.navigateByUrl(url);
        event.preventDefault();
    };
    MainContentComponent.prototype.onTabChange = function (event) {
        debugger;
        this.router.navigateByUrl(event.nextId);
    };
    MainContentComponent.ctorParameters = function () { return [
        { type: src_app_shared_main_tab_service__WEBPACK_IMPORTED_MODULE_2__["MainTabService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! raw-loader!./main-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/theme/layout/admin/main-content/main-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_main_tab_service__WEBPACK_IMPORTED_MODULE_2__["MainTabService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
    }
    NavBarComponent.prototype.ngOnInit = function () { };
    NavBarComponent.prototype.toggleMobOption = function () {
        this.menuClass = !this.menuClass;
        this.collapseStyle = (this.menuClass) ? 'block' : 'none';
    };
    NavBarComponent.prototype.navCollapse = function () {
        if (this.windowWidth >= 992) {
            this.onNavCollapse.emit();
        }
        else {
            this.onNavHeaderMobCollapse.emit();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavBarComponent.prototype, "onNavCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavBarComponent.prototype, "onNavHeaderMobCollapse", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function() { return NavLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavLeftComponent = /** @class */ (function () {
    function NavLeftComponent() {
    }
    NavLeftComponent.prototype.ngOnInit = function () {
    };
    NavLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-left',
            template: __webpack_require__(/*! raw-loader!./nav-left.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html"),
            styles: [__webpack_require__(/*! ./nav-left.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavLeftComponent);
    return NavLeftComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NavSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function() { return NavSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavSearchComponent = /** @class */ (function () {
    function NavSearchComponent() {
    }
    NavSearchComponent.prototype.ngOnInit = function () { };
    NavSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-search',
            template: __webpack_require__(/*! raw-loader!./nav-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html"),
            styles: [__webpack_require__(/*! ./nav-search.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavSearchComponent);
    return NavSearchComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRightComponent", function() { return NavRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");





var NavRightComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavRightComponent, _super);
    function NavRightComponent(injector, _router) {
        var _this = _super.call(this, injector) || this;
        _this._router = _router;
        return _this;
    }
    NavRightComponent.prototype.ngOnInit = function () {
    };
    NavRightComponent.prototype.logout = function () {
        localStorage.clear();
        this._router.navigate(['/auth/signin']);
    };
    NavRightComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NavRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-right',
            template: __webpack_require__(/*! raw-loader!./nav-right.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownConfig"]],
            styles: [__webpack_require__(/*! ./nav-right.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavRightComponent);
    return NavRightComponent;
}(src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NavCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function() { return NavCollapseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");





var NavCollapseComponent = /** @class */ (function () {
    function NavCollapseComponent() {
        this.visible = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
        this.themeLayout = this.nextConfig.layout;
    }
    NavCollapseComponent.prototype.ngOnInit = function () {
    };
    NavCollapseComponent.prototype.navCollapse = function (e) {
        this.visible = !this.visible;
        var parent = e.target;
        if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
        }
        var sections = document.querySelectorAll('.pcoded-hasmenu');
        for (var i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
                sections[i].classList.remove('pcoded-trigger');
            }
        }
        var firstParent = parent.parentElement;
        var preParent = parent.parentElement.parentElement;
        if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
                firstParent.classList.add('pcoded-trigger');
                // firstParent.parentElement.classList.toggle('pcoded-trigger');
                firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
        }
        else if (preParent.classList.contains('pcoded-submenu')) {
            do {
                preParent.parentElement.classList.add('pcoded-trigger');
                preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
        }
        parent.classList.toggle('pcoded-trigger');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
    ], NavCollapseComponent.prototype, "item", void 0);
    NavCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-collapse',
            template: __webpack_require__(/*! raw-loader!./nav-collapse.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(-100%)', display: 'block' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(-100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./nav-collapse.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavCollapseComponent);
    return NavCollapseComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContentComponent", function() { return NavContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var NavContentComponent = /** @class */ (function () {
    function NavContentComponent(nav, zone, location) {
        this.nav = nav;
        this.zone = zone;
        this.location = location;
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
    }
    NavContentComponent.prototype.ngOnInit = function () {
        if (this.windowWidth < 992) {
            this.nextConfig['layout'] = 'vertical';
            setTimeout(function () {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%';
            }, 500);
        }
    };
    NavContentComponent.prototype.ngAfterViewInit = function () {
        if (this.nextConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
        }
    };
    NavContentComponent.prototype.scrollPlus = function () {
        this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
        if (this.scrollWidth > (this.contentWidth - this.wrapperWidth)) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
        }
        this.prevDisabled = '';
        if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    };
    NavContentComponent.prototype.scrollMinus = function () {
        this.scrollWidth = this.scrollWidth - this.wrapperWidth;
        if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
        }
        this.nextDisabled = '';
        if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    };
    NavContentComponent.prototype.fireLeave = function () {
        var sections = document.querySelectorAll('.pcoded-hasmenu');
        for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
        }
        var current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        var link = "a.nav-link[ href='" + current_url + "' ]";
        var ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            var parent_1 = ele.parentElement;
            var up_parent = parent_1.parentElement.parentElement;
            var last_parent = up_parent.parentElement;
            if (parent_1.classList.contains('pcoded-hasmenu')) {
                parent_1.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('active');
            }
        }
    };
    NavContentComponent.prototype.navMob = function () {
        if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavMobCollapse.emit();
        }
    };
    NavContentComponent.prototype.fireOutClick = function () {
        var current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        var link = "a.nav-link[ href='" + current_url + "' ]";
        var ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            var parent_2 = ele.parentElement;
            var up_parent = parent_2.parentElement.parentElement;
            var last_parent = up_parent.parentElement;
            if (parent_2.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    parent_2.classList.add('pcoded-trigger');
                }
                parent_2.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    };
    NavContentComponent.ctorParameters = function () { return [
        { type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavContentComponent.prototype, "onNavMobCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarContent', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavContentComponent.prototype, "navbarContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarWrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavContentComponent.prototype, "navbarWrapper", void 0);
    NavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-content',
            template: __webpack_require__(/*! raw-loader!./nav-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html"),
            styles: [__webpack_require__(/*! ./nav-content.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], NavContentComponent);
    return NavContentComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NavGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function() { return NavGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");





var NavGroupComponent = /** @class */ (function () {
    function NavGroupComponent(zone, location) {
        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
    }
    NavGroupComponent.prototype.ngOnInit = function () {
        // at reload time active and trigger link
        var current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        var link = "a.nav-link[ href='" + current_url + "' ]";
        var ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            var parent_1 = ele.parentElement;
            var up_parent = parent_1.parentElement.parentElement;
            var last_parent = up_parent.parentElement;
            if (parent_1.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    parent_1.classList.add('pcoded-trigger');
                }
                parent_1.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    };
    NavGroupComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
    ], NavGroupComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavGroupComponent.prototype, "layout1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavGroupComponent.prototype, "activeId", void 0);
    NavGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-group',
            template: __webpack_require__(/*! raw-loader!./nav-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html"),
            styles: [__webpack_require__(/*! ./nav-group.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], NavGroupComponent);
    return NavGroupComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_main_tab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/main-tab.service */ "./src/app/shared/main-tab.service.ts");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_6__);







var NavItemComponent = /** @class */ (function () {
    function NavItemComponent(location, tabService) {
        this.location = location;
        this.tabService = tabService;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["NextConfig"].config;
        this.themeLayout = this.nextConfig['layout'];
    }
    NavItemComponent.prototype.ngOnInit = function () {
        debugger;
        var url = this.location.path();
        if (this.item.url === url) {
            this.openTab(this.item.title, this.item.url);
        }
    };
    NavItemComponent.prototype.openTab = function (name, url) {
        debugger;
        this.tabService.addTab(name, url);
    };
    NavItemComponent.prototype.closeOtherMenu = function (event) {
        var _this = this;
        debugger;
        var ele = event.target;
        this.openTab(ele.textContent, ele.pathname);
        process__WEBPACK_IMPORTED_MODULE_6__["exit"];
        if (this.nextConfig['layout'] === 'vertical') {
            var ele_1 = event.target;
            if (ele_1 !== null && ele_1 !== undefined) {
                var parent_1 = ele_1.parentElement;
                var up_parent = parent_1.parentElement.parentElement;
                var last_parent = up_parent.parentElement;
                var sections = document.querySelectorAll('.pcoded-hasmenu');
                for (var i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                if (parent_1.classList.contains('pcoded-hasmenu')) {
                    parent_1.classList.add('pcoded-trigger');
                    parent_1.classList.add('active');
                }
                else if (up_parent.classList.contains('pcoded-hasmenu')) {
                    up_parent.classList.add('pcoded-trigger');
                    up_parent.classList.add('active');
                }
                else if (last_parent.classList.contains('pcoded-hasmenu')) {
                    last_parent.classList.add('pcoded-trigger');
                    last_parent.classList.add('active');
                }
            }
            if ((document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
        }
        else {
            setTimeout(function () {
                var sections = document.querySelectorAll('.pcoded-hasmenu');
                for (var i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                var current_url = _this.location.path();
                if (_this.location['_baseHref']) {
                    current_url = _this.location['_baseHref'] + _this.location.path();
                }
                var link = "a.nav-link[ href='" + current_url + "' ]";
                var ele = document.querySelector(link);
                if (ele !== null && ele !== undefined) {
                    var parent_2 = ele.parentElement;
                    var up_parent = parent_2.parentElement.parentElement;
                    var last_parent = up_parent.parentElement;
                    if (parent_2.classList.contains('pcoded-hasmenu')) {
                        parent_2.classList.add('active');
                    }
                    else if (up_parent.classList.contains('pcoded-hasmenu')) {
                        up_parent.classList.add('active');
                    }
                    else if (last_parent.classList.contains('pcoded-hasmenu')) {
                        last_parent.classList.add('active');
                    }
                }
            }, 500);
        }
    };
    NavItemComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: src_app_shared_main_tab_service__WEBPACK_IMPORTED_MODULE_5__["MainTabService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
    ], NavItemComponent.prototype, "item", void 0);
    NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-item',
            template: __webpack_require__(/*! raw-loader!./nav-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html"),
            styles: [__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], src_app_shared_main_tab_service__WEBPACK_IMPORTED_MODULE_5__["MainTabService"]])
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.prototype.navMobCollapse = function () {
        if (this.windowWidth < 992) {
            this.onNavMobCollapse.emit();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "onNavMobCollapse", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/theme/layout/admin/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
  \*************************************************************/
/*! exports provided: NavigationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItem", function() { return NavigationItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationItems = [
    {
        id: 'navigation',
        title: 'Navigation',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                url: '/dashboard/analytics',
                icon: 'feather icon-home'
            }
        ]
    },
    {
        id: 'cargo',
        title: 'Courier & Cargo',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'design-screens',
                title: 'Design Screens',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'ar-aging',
                        title: 'AR Aging',
                        type: 'item',
                        url: '/main/setup/ar-aging'
                    },
                    {
                        id: 'vendor',
                        title: 'Vendor',
                        type: 'item',
                        url: '/main/setup/vendor'
                    },
                    {
                        id: 'supplier',
                        title: 'Supplier',
                        type: 'item',
                        url: '/main/setup/supplier'
                    },
                    {
                        id: 'contract',
                        title: 'Contract',
                        type: 'item',
                        url: '/main/setup/contract'
                    },
                    {
                        id: 'voucher',
                        title: 'Voucher',
                        type: 'item',
                        url: '/main/setup/voucher'
                    },
                    {
                        id: 'bank',
                        title: 'Bank',
                        type: 'item',
                        url: '/main/setup/bank'
                    },
                    {
                        id: 'account-type',
                        title: 'Account Type',
                        type: 'item',
                        url: '/main/setup/account-type'
                    },
                    {
                        id: 'port',
                        title: 'Port',
                        type: 'item',
                        url: '/main/setup/port'
                    },
                    {
                        id: 'shipper',
                        title: 'Shipper',
                        type: 'item',
                        url: '/main/setup/shipper'
                    },
                    {
                        id: 'shippingline',
                        title: 'Shippingline',
                        type: 'item',
                        url: '/main/setup/shippingline'
                    },
                    {
                        id: 'transporter',
                        title: 'Transporter',
                        type: 'item',
                        url: '/main/setup/transporter'
                    },
                    {
                        id: 'bilty',
                        title: 'Bilty',
                        type: 'item',
                        url: '/main/setup/bilty'
                    },
                    {
                        id: 'bilty-expense',
                        title: 'Bilty Expense',
                        type: 'item',
                        url: '/main/setup/bilty-expense'
                    },
                    {
                        id: 'receiving-bill-to-bill',
                        title: 'Receiving Bill To Bill',
                        type: 'item',
                        url: '/main/setup/receiving-bill-to-bill'
                    },
                    {
                        id: 'invoice-opening',
                        title: 'Invoice Opening',
                        type: 'item',
                        url: '/main/setup/invoice-opening'
                    },
                    {
                        id: 'invoice',
                        title: 'Invoice',
                        type: 'item',
                        url: '/main/setup/invoice'
                    },
                    {
                        id: 'challan',
                        title: 'Challan',
                        type: 'item',
                        url: '/main/setup/challan'
                    },
                    {
                        id: 'booking-voucher',
                        title: 'Booking Voucher',
                        type: 'item',
                        url: '/main/setup/booking-voucher'
                    },
                    {
                        id: 'booking-bill-t',
                        title: 'Booking Bill',
                        type: 'item',
                        url: '/main/setup/booking-bill-t'
                    }
                ]
            }
        ]
    },
    {
        id: 'cargo',
        title: 'Cargo',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'whole-sale-account',
                title: 'Whole Sale Account',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'bill-t',
                        title: 'Bill-T',
                        type: 'item',
                        url: '/main/cargo/ws-amount/bill-t'
                    },
                    {
                        id: 'voucher',
                        title: 'Voucher',
                        type: 'item',
                        url: '/main/cargo/ws-amount/voucher'
                    },
                    {
                        id: 'invoice-opening',
                        title: 'Invoice Opening',
                        type: 'item',
                        url: '/main/cargo/ws-amount/invoice-opening'
                    },
                    {
                        id: 'invoice',
                        title: 'Invoice',
                        type: 'item',
                        url: '/main/cargo/ws-amount/invoice'
                    },
                    {
                        id: 'bill-to-bill-payment',
                        title: 'Bill to Bill Payment',
                        type: 'item',
                        url: '/main/cargo/ws-amount/bill-to-bill-payment'
                    }
                ]
            },
            {
                id: 'retail-sale-account',
                title: 'Retail Sale Account',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'bill-t-retail',
                        title: 'Bill-T',
                        type: 'item',
                        url: '/main/cargo/rs-amount/bill-t'
                    },
                    {
                        id: 'voucher-retail',
                        title: 'Voucher',
                        type: 'item',
                        url: '/main/cargo/rs-amount/voucher'
                    }
                ]
            },
            {
                id: 'identity-cargo',
                title: 'Identity',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'vehicle-data',
                        title: 'Vehicle Data',
                        type: 'item',
                        url: '/cargo/identity/vehicle'
                    },
                    {
                        id: 'customer-data',
                        title: 'Customer Data',
                        type: 'item',
                        url: '/cargo/identity/customer'
                    },
                    {
                        id: 'service-provider',
                        title: 'Service Provider',
                        type: 'item',
                        url: '/cargo/identity/services'
                    },
                    {
                        id: 'item-data',
                        title: 'Item Data',
                        type: 'item',
                        url: '/cargo/identity/item'
                    },
                    {
                        id: 'packing-data',
                        title: 'Packing',
                        type: 'item',
                        url: '/cargo/identity/packing'
                    }
                ]
            },
            {
                id: 'cargo-reports',
                title: 'Reports',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'report',
                        title: 'First Report',
                        type: 'item',
                        url: '/main/cargo/reports/first-report'
                    }
                ]
            }
        ]
    },
    {
        id: 'general-ledger',
        title: 'General Ledger',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'voucher',
                title: 'Voucher',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'journal-voucher',
                        title: 'Journal Voucher',
                        type: 'item',
                        url: '/main/gl/voucher/journal-voucher'
                    },
                    {
                        id: 'book-voucher',
                        title: 'Book Voucher',
                        type: 'item',
                        url: '/main/gl/voucher/book-voucher'
                    },
                    {
                        id: 'petty-cash',
                        title: 'Petty Cash',
                        type: 'item',
                        url: '/main/gl/voucher/petty-cash'
                    }
                ]
            },
            {
                id: 'identity',
                title: 'Identity',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'coa',
                        title: 'COA',
                        type: 'item',
                        url: '/main/gl/identity/coa'
                    }
                ]
            },
            {
                id: 'gl-reports',
                title: 'Reports',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'report',
                        title: 'First Report',
                        type: 'item',
                        url: '/main/gl/reports/first-report'
                    }
                ]
            }
        ]
    },
    {
        id: 'administration',
        title: 'Administration',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'user-management',
                title: 'User Management',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'users',
                        title: 'Users',
                        type: 'item',
                        url: '/admin/user'
                    },
                    {
                        id: 'roles',
                        title: 'Roles',
                        type: 'item',
                        url: '/admin/roles'
                    }
                ]
            },
            {
                id: 'setup',
                title: 'Setup',
                type: 'collapse',
                icon: 'feather icon-layers',
                children: [
                    {
                        id: 'location',
                        title: 'Location',
                        type: 'item',
                        url: '/admin/setup/location'
                    },
                    {
                        id: 'company',
                        title: 'Company',
                        type: 'item',
                        url: '/admin/setup/company'
                    },
                    {
                        id: 'office',
                        title: 'Office',
                        type: 'item',
                        url: '/admin/setup/office'
                    },
                    {
                        id: 'staff',
                        title: 'Staff',
                        type: 'item',
                        url: '/admin/setup/staff'
                    },
                    {
                        id: 'project',
                        title: 'Project',
                        type: 'item',
                        url: '/admin/setup/project'
                    },
                    {
                        id: 'product',
                        title: 'Product',
                        type: 'item',
                        url: '/admin/setup/product'
                    },
                    {
                        id: 'fiscal-year',
                        title: 'Fiscal Year',
                        type: 'item',
                        url: '/main/setup/fiscal-year'
                    }
                ]
            }
        ]
    }
];
var NavigationItem = /** @class */ (function () {
    function NavigationItem() {
    }
    NavigationItem.prototype.get = function () {
        return NavigationItems;
    };
    NavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NavigationItem);
    return NavigationItem;
}());



/***/ }),

/***/ "./src/app/theme/layout/auth/auth.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/auth/auth.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.ts ***!
  \*****************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/theme/layout/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.dismissAlert = function (element) {
        element.parentElement.removeChild(element);
    };
    AlertComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "dismiss", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/theme/shared/components/alert/alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.module.ts ***!
  \***************************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "./src/app/theme/shared/components/alert/alert.component.ts");




var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
        })
    ], AlertModule);
    return AlertModule;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/admin/navigation/navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(route, nav, titleService) {
        this.route = route;
        this.nav = nav;
        this.titleService = titleService;
        this.breadcrumbList = [];
        this.navigationList = [];
        this.navigation = this.nav.get();
        this.type = 'theme2';
        this.setBreadcrumb();
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var routerUrl;
        routerUrl = this.route.url;
        if (routerUrl && typeof routerUrl === 'string') {
            this.filterNavigation(routerUrl);
        }
    };
    BreadcrumbComponent.prototype.setBreadcrumb = function () {
        var _this = this;
        var routerUrl;
        this.route.events.subscribe(function (router) {
            routerUrl = router.urlAfterRedirects;
            if (routerUrl && typeof routerUrl === 'string') {
                _this.breadcrumbList.length = 0;
                var activeLink = router.url;
                _this.filterNavigation(activeLink);
            }
        });
    };
    BreadcrumbComponent.prototype.filterNavigation = function (activeLink) {
        var result = [];
        var title = 'Welcome';
        this.navigation.forEach(function (a) {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                result = [
                    {
                        url: ('url' in a) ? a.url : false,
                        title: a.title,
                        breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
                        type: a.type
                    }
                ];
                title = a.title;
            }
            else {
                if (a.type === 'group' && 'children' in a) {
                    a.children.forEach(function (b) {
                        if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                            result = [
                                {
                                    url: ('url' in b) ? b.url : false,
                                    title: b.title,
                                    breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                    type: b.type
                                }
                            ];
                            title = b.title;
                        }
                        else {
                            if (b.type === 'collapse' && 'children' in b) {
                                b.children.forEach(function (c) {
                                    if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                                        result = [
                                            {
                                                url: ('url' in b) ? b.url : false,
                                                title: b.title,
                                                breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                type: b.type
                                            },
                                            {
                                                url: ('url' in c) ? c.url : false,
                                                title: c.title,
                                                breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                type: c.type
                                            }
                                        ];
                                        title = c.title;
                                    }
                                    else {
                                        if (c.type === 'collapse' && 'children' in c) {
                                            c.children.forEach(function (d) {
                                                if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                                    result = [
                                                        {
                                                            url: ('url' in b) ? b.url : false,
                                                            title: b.title,
                                                            breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                            type: b.type
                                                        },
                                                        {
                                                            url: ('url' in c) ? c.url : false,
                                                            title: c.title,
                                                            breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                            type: c.type
                                                        },
                                                        {
                                                            url: ('url' in d) ? d.url : false,
                                                            title: d.title,
                                                            breadcrumbs: ('breadcrumbs' in c) ? d.breadcrumbs : true,
                                                            type: d.type
                                                        }
                                                    ];
                                                    title = d.title;
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
        this.navigationList = result;
        this.titleService.setTitle(title + ' | Cargo Manager');
    };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BreadcrumbComponent.prototype, "type", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]],
            exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/card/card.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important;\n}\n\n.header-color {\n  background: -webkit-gradient(linear, left top, left bottom, from(#1976D2), to(#82c6e040));\n  background: linear-gradient(#1976D2, #82c6e040);\n  padding: 10px;\n}\n\n.card .card-header .card-header-right {\n  top: 5px !important;\n}\n\n.card .card-body, .card .card-body {\n  padding: 10px 5px !important;\n}\n\n.card {\n  margin-bottom: 0px !important;\n  background-color: #eff5fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9FOlxcRnJhbWVXb3Jrc1xcQ2FyZ29cXENhcmdvV2ViL3NyY1xcYXBwXFx0aGVtZVxcc2hhcmVkXFxjb21wb25lbnRzXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5RkFBQTtFQUFBLCtDQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBQTtFQUNFLDRCQUFBO0FDR0Y7O0FEQUE7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC5mdWxsLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3KSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyLWNvbG9ye1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTk3NkQyLCAjODJjNmUwNDApO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtaGVhZGVyLXJpZ2h0IHtcclxuICB0b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJvZHksIC5jYXJkIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzVhOWVkZTMwO1xyXG59XHJcbi5jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNWZhO1xyXG59IiwiLmNhcmQuZnVsbC1jYXJkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxOTc2RDIsICM4MmM2ZTA0MCk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC1oZWFkZXItcmlnaHQge1xuICB0b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCAuY2FyZC1ib2R5LCAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCA1cHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjVmYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/shared/components/card/card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.ts ***!
  \****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var CardComponent = /** @class */ (function () {
    function CardComponent(animationService, config) {
        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.isCardFooter = false;
        this.cardTitle = '';
        this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;
        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icon-minus';
        this.loadCard = false;
        this.cardRemove = 'open';
    }
    CardComponent.prototype.ngOnInit = function () {
        if (this.hidHeader) {
            this.options = false;
        }
        if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
        }
    };
    CardComponent.prototype.fullCardToggle = function (element, animation, status) {
        var _this = this;
        animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
        this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
        // const duration = this.cardClass === 'full-card' ? 300 : 600;
        this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';
        if (status) {
            this.animation = animation;
        }
        this.isAnimating = true;
        this.animators
            .setType(this.animation)
            .setDuration(500)
            .setDirection('alternate')
            .setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)')
            .animate(element)
            .then(function () {
            _this.isAnimating = false;
        })
            .catch(function () {
            _this.isAnimating = false;
        });
        setTimeout(function () {
            _this.cardClass = animation === 'zoomOut' ? '' : _this.cardClass;
            if (_this.cardClass === 'full-card') {
                document.querySelector('body').style.overflow = 'hidden';
            }
            else {
                document.querySelector('body').removeAttribute('style');
            }
        }, 500);
    };
    CardComponent.prototype.collapsedCardToggle = function () {
        this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
        this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
    };
    CardComponent.prototype.cardRefresh = function () {
        var _this = this;
        this.loadCard = true;
        this.cardClass = 'card-load';
        setTimeout(function () {
            _this.loadCard = false;
            _this.cardClass = 'expanded';
        }, 3000);
    };
    CardComponent.prototype.cardRemoveAction = function () {
        this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
    };
    CardComponent.ctorParameters = function () { return [
        { type: css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "cardTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "cardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "blockClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "headerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardComponent.prototype, "hidHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardComponent.prototype, "customHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "cardCaption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "captionClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardComponent.prototype, "isCardFooter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "footerClass", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/card/card.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('collapsedCard', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        overflow: 'hidden',
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('collapsed <=> expanded', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('cardRemove', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0,
                        display: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms')),
                ])
            ],
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/theme/shared/components/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/card/card.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.module.ts ***!
  \*************************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.component */ "./src/app/theme/shared/components/card/card.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);






var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimatorModule"]
            ],
            declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
            exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
            providers: [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]]
        })
    ], CardModule);
    return CardModule;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ApexChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function() { return ApexChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apexcharts/dist/apexcharts.common.js */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");




var ApexChartComponent = /** @class */ (function () {
    function ApexChartComponent(apexEvent) {
        this.apexEvent = apexEvent;
    }
    ApexChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#' + _this.chartID), _this.chartConfig);
            _this.chart.render();
        });
        this.apexEvent.changeTimeRange.subscribe(function () {
            if (_this.xAxis) {
                _this.chart.updateOptions({
                    xaxis: _this.xAxis
                });
            }
        });
        this.apexEvent.changeSeriesData.subscribe(function () {
            if (_this.newData) {
                _this.chart.updateSeries([{
                        data: _this.newData
                    }]);
            }
        });
    };
    ApexChartComponent.ctorParameters = function () { return [
        { type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ApexChartComponent.prototype, "chartID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApexChartComponent.prototype, "chartConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApexChartComponent.prototype, "xAxis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ApexChartComponent.prototype, "newData", void 0);
    ApexChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apex-chart',
            template: __webpack_require__(/*! raw-loader!./apex-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html"),
            styles: [__webpack_require__(/*! ./apex-chart.component.scss */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]])
    ], ApexChartComponent);
    return ApexChartComponent;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts ***!
  \********************************************************************************/
/*! exports provided: ApexChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartService", function() { return ApexChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApexChartService = /** @class */ (function () {
    function ApexChartService() {
        this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ApexChartService.prototype.eventChangeTimeRange = function () {
        this.changeTimeRange.emit();
    };
    ApexChartService.prototype.eventChangeSeriesData = function () {
        this.changeSeriesData.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ApexChartService.prototype, "changeTimeRange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ApexChartService.prototype, "changeSeriesData", void 0);
    ApexChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApexChartService);
    return ApexChartService;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/data-table/data-filter.pipe.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/shared/components/data-table/data-filter.pipe.ts ***!
  \************************************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DataFilterPipe = /** @class */ (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    DataFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'dataFilter'
        })
    ], DataFilterPipe);
    return DataFilterPipe;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/index.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/shared/components/index.ts ***!
  \**************************************************/
/*! exports provided: AlertModule, CardModule, BreadcrumbModule, ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.module */ "./src/app/theme/shared/components/alert/alert.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.module */ "./src/app/theme/shared/components/card/card.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"]; });

/* harmony import */ var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.module */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"]; });

/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/modal.module */ "./src/app/theme/shared/components/modal/modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"]; });







/***/ }),

/***/ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-perspective {\n  height: 100%;\n  overflow: hidden;\n}\n.md-perspective body {\n  height: 100%;\n  overflow: hidden;\n  -webkit-perspective: 600px;\n  perspective: 600px;\n}\n.container {\n  min-height: 100%;\n}\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n}\n.md-show {\n  visibility: visible;\n}\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n/* Content styles */\n.md-content {\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n.md-content h3 {\n  margin: 0;\n  padding: 0.4em;\n  text-align: center;\n  opacity: 0.8;\n  color: #fff;\n  border-radius: 3px 3px 0 0;\n}\n.md-content > div {\n  padding: 15px 40px 30px;\n  margin: 0;\n}\n.md-content > div p {\n  margin: 0;\n  padding: 10px 0;\n  line-height: 1.5;\n}\n.md-content > div ul {\n  margin: 0;\n  padding: 0 0 30px 20px;\n}\n.md-content > div ul li {\n  padding: 5px 0;\n}\n.md-content button {\n  display: block;\n  margin: 0 auto;\n  font-size: 0.8em;\n}\n/* Individual modal styles with animations/transitions */\n/* Effect 1: Fade in and scale up */\n.md-effect-1 .md-content {\n  -webkit-transform: scale(0.7);\n  transform: scale(0.7);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.md-show.md-effect-1 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 2: Slide from the right */\n.md-effect-2 .md-content {\n  -webkit-transform: translateX(20%);\n  transform: translateX(20%);\n  opacity: 0;\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n.md-show.md-effect-2 .md-content {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1;\n}\n/* Effect 3: Slide from the bottom */\n.md-effect-3 .md-content {\n  -webkit-transform: translateY(20%);\n  transform: translateY(20%);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.md-show.md-effect-3 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n}\n/* Effect 4: Newspaper */\n.md-effect-4 .md-content {\n  -webkit-transform: scale(0) rotate(720deg);\n  transform: scale(0) rotate(720deg);\n  opacity: 0;\n}\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.md-show.md-effect-4 .md-content {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n  opacity: 1;\n}\n/* Effect 5: fall */\n.md-effect-5.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.md-effect-5 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(600px) rotateX(20deg);\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0;\n}\n.md-show.md-effect-5 .md-content {\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translateZ(0px) rotateX(0deg);\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 6: side fall */\n.md-effect-6.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.md-effect-6 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translate(30%) translateZ(600px) rotate(10deg);\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0;\n}\n.md-show.md-effect-6 .md-content {\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translate(0%) translateZ(0) rotate(0deg);\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1;\n}\n/* Effect 7:  slide and stick to top */\n.md-effect-7 {\n  top: 0;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.md-effect-7 .md-content {\n  -webkit-transform: translateY(-200%);\n  transform: translateY(-200%);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-7 .md-content {\n  -webkit-transform: translateY(0%);\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1;\n}\n/* Effect 8: 3D flip horizontal */\n.md-effect-8.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.md-effect-8 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateY(-70deg);\n  transform: rotateY(-70deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-8 .md-content {\n  -webkit-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n/* Effect 9: 3D flip vertical */\n.md-effect-9.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.md-effect-9 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(-70deg);\n  transform: rotateX(-70deg);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-9 .md-content {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 10: 3D sign */\n.md-effect-10.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.md-effect-10 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(-60deg);\n  transform: rotateX(-60deg);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.md-show.md-effect-10 .md-content {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 11: Super scaled */\n.md-effect-11 .md-content {\n  -webkit-transform: scale(2);\n  transform: scale(2);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.md-show.md-effect-11 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 12:  Just me */\n.md-effect-12 .md-content {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  color: #fff;\n  background: transparent;\n}\n.md-effect-12 .md-content h3 {\n  background: transparent;\n}\n.md-show.md-effect-12 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 13: 3D slit */\n.md-effect-13.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.md-effect-13 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(-3000px) rotateY(90deg);\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0;\n}\n.md-show.md-effect-13 .md-content {\n  -webkit-animation: slit 0.7s forwards ease-out;\n  animation: slit 0.7s forwards ease-out;\n}\n@-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: 0.5;\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n@keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n            transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n            transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n/* Effect 14:  3D Rotate from bottom */\n.md-effect-14.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.md-effect-14 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateY(100%) rotateX(90deg);\n  transform: translateY(100%) rotateX(90deg);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  opacity: 0;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n.md-show.md-effect-14 .md-content {\n  -webkit-transform: translateY(0%) rotateX(0deg);\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 15:  3D Rotate in from left */\n.md-effect-15.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.md-effect-15 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.md-show.md-effect-15 .md-content {\n  -webkit-transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1;\n}\n/* Effect 16:  Blur */\nbody.modal-16 > nav, body.modal-16 > header, body.modal-16 > section {\n  -webkit-filter: blur(3px);\n  filter: blur(3px);\n}\n.md-effect-16 .md-content {\n  -webkit-transform: translateY(-5%);\n  transform: translateY(-5%);\n  opacity: 0;\n}\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.md-show.md-effect-16 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n}\n/* Effect 17:  Slide in from bottom with perspective on container */\nbody.modal-17 > nav, body.modal-17 > section, body.modal-17 > .md-overlay {\n  height: 100%;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\nbody.modal-17 > header {\n  height: 70px;\n}\nbody.modal-17 > nav {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n}\nbody.modal-17 .pcoded-main-container {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n  -webkit-transform: rotateX(-2deg);\n  transform: rotateX(-2deg);\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\nbody.modal-17 > .header-chat, body.modal-17 > .header-user-list {\n  display: none;\n}\nbody.modal-17 > nav, body.modal-17 > .md-overlay, body.modal-17 > section {\n  -webkit-transform: rotateX(-2deg);\n  transform: rotateX(-2deg);\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.md-effect-17 .md-content {\n  opacity: 0;\n  -webkit-transform: translateY(200%);\n  transform: translateY(200%);\n}\n.md-show.md-effect-17 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n  -webkit-transition: all 0.3s 0.2s;\n  transition: all 0.3s 0.2s;\n}\n/* Effect 18:  Slide from right with perspective on container */\nbody.modal-18 {\n  height: 100%;\n  overflow: hidden;\n}\n.md-show.md-effect-18 ~ .md-overlay {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\nbody.modal-18 > .header-chat, body.modal-18 > .header-user-list {\n  display: none;\n}\nbody.modal-18 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\nbody.modal-18 > nav, body.modal-18 > header, body.modal-18 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n@-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(-200px);\n  }\n}\n@keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n            transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(-200px);\n            transform: translateZ(-200px);\n  }\n}\n.md-effect-18 .md-content {\n  -webkit-transform: translateX(200%);\n  transform: translateX(200%);\n  opacity: 0;\n}\n.md-show.md-effect-18 .md-content {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1;\n  -webkit-transition: all 0.5s 0.1s;\n  transition: all 0.5s 0.1s;\n}\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n.md-show.md-effect-19 ~ .md-overlay {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n/* Effect 19:  Slip in from the top with perspective on container */\nbody.modal-19 > .header-chat, body.modal-19 > .header-user-list {\n  display: none;\n}\nbody.modal-19 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\nbody.modal-19 > nav, body.modal-19 > header, body.modal-19 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n@-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n}\n@keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n            transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n}\n.md-effect-19 .md-content {\n  -webkit-transform: translateY(-200%);\n  transform: translateY(-200%);\n  opacity: 0;\n}\n.md-show.md-effect-19 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n  -webkit-transition: all 0.5s 0.1s;\n  transition: all 0.5s 0.1s;\n}\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9uLW1vZGFsL0U6XFxGcmFtZVdvcmtzXFxDYXJnb1xcQ2FyZ29XZWIvc3JjXFxhcHBcXHRoZW1lXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1vZGFsXFxhbmltYXRpb24tbW9kYWxcXGFuaW1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9uLW1vZGFsL2FuaW1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxvREFBQTtFQUNBLDRDQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0NGO0FERUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBLG1CQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUY7QURDRTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDQ0o7QURDRTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtBQ0NKO0FEQUk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRU47QURBSTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtBQ0VOO0FERE07RUFDRSxjQUFBO0FDR1I7QURDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREdBLHdEQUFBO0FBRUEsbUNBQUE7QUFFQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0ZGO0FES0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0ZGO0FES0EsbUNBQUE7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsOERBQUE7RUFDQSxzREFBQTtBQ0hGO0FETUE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQ0hGO0FETUEsb0NBQUE7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0pGO0FET0E7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQ0pGO0FET0Esd0JBQUE7QUFFQTtFQUNFLDBDQUFBO0VBR0Esa0NBQUE7RUFDQSxVQUFBO0FDTEY7QURRQTtFQUNFLDRCQUFBO0VBRUEsb0JBQUE7QUNMRjtBRFFBO0VBQ0Usd0NBQUE7RUFHQSxnQ0FBQTtFQUNBLFVBQUE7QUNMRjtBRFFBLG1CQUFBO0FBR0U7RUFDRSwyQkFBQTtFQUVBLG1CQUFBO0FDUEo7QURTRTtFQUNFLG9DQUFBO0VBRUEsNEJBQUE7RUFDQSxtREFBQTtFQUdBLDJDQUFBO0VBQ0EsVUFBQTtBQ1BKO0FEV0E7RUFDRSxvQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsZ0RBQUE7RUFHQSx3Q0FBQTtFQUNBLFVBQUE7QUNSRjtBRFdBLHdCQUFBO0FBR0U7RUFDRSwyQkFBQTtFQUVBLG1CQUFBO0FDVko7QURZRTtFQUNFLG9DQUFBO0VBRUEsNEJBQUE7RUFDQSxpRUFBQTtFQUdBLHlEQUFBO0VBQ0EsVUFBQTtBQ1ZKO0FEY0E7RUFDRSxvQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsMkRBQUE7RUFHQSxtREFBQTtFQUNBLFVBQUE7QUNYRjtBRGNBLHNDQUFBO0FBRUE7RUFDRSxNQUFBO0VBQ0EsbUNBQUE7RUFHQSwyQkFBQTtBQ1pGO0FEYUU7RUFDRSxvQ0FBQTtFQUdBLDRCQUFBO0VBQ0EsNEJBQUE7RUFFQSxvQkFBQTtFQUNBLFVBQUE7QUNYSjtBRGVBO0VBQ0UsaUNBQUE7RUFHQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQ1pGO0FEZUEsaUNBQUE7QUFHRTtFQUNFLDJCQUFBO0VBRUEsbUJBQUE7QUNkSjtBRGdCRTtFQUNFLG9DQUFBO0VBRUEsNEJBQUE7RUFDQSxrQ0FBQTtFQUdBLDBCQUFBO0VBQ0EsNEJBQUE7RUFFQSxvQkFBQTtFQUNBLFVBQUE7QUNkSjtBRGtCQTtFQUNFLGdDQUFBO0VBR0Esd0JBQUE7RUFDQSxVQUFBO0FDZkY7QURrQkEsK0JBQUE7QUFHRTtFQUNFLDJCQUFBO0VBRUEsbUJBQUE7QUNqQko7QURtQkU7RUFDRSxvQ0FBQTtFQUVBLDRCQUFBO0VBQ0Esa0NBQUE7RUFHQSwwQkFBQTtFQUNBLDRCQUFBO0VBRUEsb0JBQUE7RUFDQSxVQUFBO0FDakJKO0FEcUJBO0VBQ0UsZ0NBQUE7RUFHQSx3QkFBQTtFQUNBLFVBQUE7QUNsQkY7QURxQkEsdUJBQUE7QUFHRTtFQUNFLDJCQUFBO0VBRUEsbUJBQUE7QUNwQko7QURzQkU7RUFDRSxvQ0FBQTtFQUVBLDRCQUFBO0VBQ0Esa0NBQUE7RUFHQSwwQkFBQTtFQUNBLCtCQUFBO0VBRUEsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFFQSxvQkFBQTtBQ3BCSjtBRHdCQTtFQUNFLGdDQUFBO0VBR0Esd0JBQUE7RUFDQSxVQUFBO0FDckJGO0FEd0JBLDRCQUFBO0FBRUE7RUFDRSwyQkFBQTtFQUdBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBRUEsb0JBQUE7QUN0QkY7QUR5QkE7RUFDRSwyQkFBQTtFQUdBLG1CQUFBO0VBQ0EsVUFBQTtBQ3RCRjtBRHlCQSx3QkFBQTtBQUVBO0VBQ0UsNkJBQUE7RUFHQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUVBLG9CQUFBO0VBQ0EsV0FBQTtFQUlBLHVCQUFBO0FDMUJGO0FEdUJFO0VBQ0UsdUJBQUE7QUNyQko7QUQwQkE7RUFDRSwyQkFBQTtFQUdBLG1CQUFBO0VBQ0EsVUFBQTtBQ3ZCRjtBRDBCQSx1QkFBQTtBQUdFO0VBQ0UsMkJBQUE7RUFFQSxtQkFBQTtBQ3pCSjtBRDJCRTtFQUNFLG9DQUFBO0VBRUEsNEJBQUE7RUFDQSxxREFBQTtFQUdBLDZDQUFBO0VBQ0EsVUFBQTtBQ3pCSjtBRDZCQTtFQUNFLDhDQUFBO0VBRUEsc0NBQUE7QUMxQkY7QUQ2QkE7RUFDRTtJQUNFLG9EQUFBO0lBQ0EsWUFBQTtJQUNBLDJDQUFBO0VDMUJGO0VENkJBO0lBQ0UsOENBQUE7SUFDQSxVQUFBO0VDM0JGO0FBQ0Y7QUQ2Q0E7RUFDRTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7SUFDQSxVQUFBO0lBQ0EsMENBQUE7WUFBQSxrQ0FBQTtFQ2hDRjtFRG1DQTtJQUNFLDhDQUFBO1lBQUEsc0NBQUE7SUFDQSxVQUFBO0VDakNGO0FBQ0Y7QURxQ0Esc0NBQUE7QUFHRTtFQUNFLDJCQUFBO0VBRUEsbUJBQUE7QUNyQ0o7QUR1Q0U7RUFDRSxvQ0FBQTtFQUVBLDRCQUFBO0VBQ0Esa0RBQUE7RUFHQSwwQ0FBQTtFQUNBLGdDQUFBO0VBRUEsd0JBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFFQSw2QkFBQTtBQ3JDSjtBRHlDQTtFQUNFLCtDQUFBO0VBR0EsdUNBQUE7RUFDQSxVQUFBO0FDdENGO0FEeUNBLHVDQUFBO0FBR0U7RUFDRSwyQkFBQTtFQUVBLG1CQUFBO0FDeENKO0FEMENFO0VBQ0Usb0NBQUE7RUFFQSw0QkFBQTtFQUNBLG9FQUFBO0VBR0EsNERBQUE7RUFDQSxnQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBRUEsb0JBQUE7QUN4Q0o7QUQ0Q0E7RUFDRSwrREFBQTtFQUdBLHVEQUFBO0VBQ0EsVUFBQTtBQ3pDRjtBRDRDQSxxQkFBQTtBQUdFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQzNDSjtBRCtDQTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FDNUNGO0FEK0NBO0VBQ0UsNEJBQUE7RUFDQSxvQkFBQTtBQzVDRjtBRCtDQTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FDNUNGO0FEK0NBLG1FQUFBO0FBR0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUVBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtBQzlDSjtBRGtEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBRUEsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0FDL0NGO0FEb0RJO0VBQ0UsWUFBQTtBQ2pETjtBRG1ESTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUNqRE47QURvREU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FDbERKO0FEcURJO0VBQ0UsYUFBQTtBQ25ETjtBRHVESTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQ3JETjtBRDBEQTtFQUNFLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDdkRGO0FEMERBO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUVBLHlCQUFBO0FDdkRGO0FEMERBLCtEQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUN4REY7QUQyREE7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0FDeERGO0FENkRJO0VBQ0UsYUFBQTtBQzFETjtBRDZERTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkRBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EscURBQUE7QUMzREo7QUQ4REk7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkRBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EscURBQUE7QUM1RE47QURpRUE7RUFDRTtJQUNFLGtEQUFBO0lBQ0EsMkNBQUE7RUM5REY7RURpRUE7SUFDRSxxQ0FBQTtFQy9ERjtBQUNGO0FEbUVBO0VBQ0U7SUFDRSxrREFBQTtZQUFBLDBDQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtFQ2pFRjtFRG9FQTtJQUNFLHFDQUFBO1lBQUEsNkJBQUE7RUNsRUY7QUFDRjtBRHNFQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDcEVGO0FEd0VFO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDckVKO0FEd0VJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDdEVOO0FEd0VJO0VBQ0UsNEJBQUE7RUFFQSxvQkFBQTtBQ3RFTjtBRDJFQSxtRUFBQTtBQUlJO0VBQ0UsYUFBQTtBQzNFTjtBRDhFRTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0NBQUE7QUM1RUo7QUQrRUk7RUFDRSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0NBQUE7QUM3RU47QURrRkE7RUFDRTtJQUNFLGlDQUFBO0lBQ0EsMkNBQUE7RUMvRUY7QUFDRjtBRDJGQTtFQUNFO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLDJDQUFBO1lBQUEsbUNBQUE7RUNuRkY7QUFDRjtBRHVGQTtFQUNFLG9DQUFBO0VBR0EsNEJBQUE7RUFDQSxVQUFBO0FDckZGO0FEd0ZBO0VBQ0UsZ0NBQUE7RUFHQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUVBLHlCQUFBO0FDckZGO0FEd0ZBO0VBQ0U7SUFDRSxjQUFBO0VDckZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9hbmltYXRpb24tbW9kYWwvYW5pbWF0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLXBlcnNwZWN0aXZlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiA2MDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tZC1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1heC13aWR0aDogNjMwcHg7XHJcbiAgbWluLXdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogMjAwMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5tZC1zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubWQtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAzMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cgfiAubWQtb3ZlcmxheSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4vKiBDb250ZW50IHN0eWxlcyAqL1xyXG5cclxuLm1kLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwLjRlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgfVxyXG4gID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDE1cHggNDBweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAzMHB4IDIwcHg7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBJbmRpdmlkdWFsIG1vZGFsIHN0eWxlcyB3aXRoIGFuaW1hdGlvbnMvdHJhbnNpdGlvbnMgKi9cclxuXHJcbi8qIEVmZmVjdCAxOiBGYWRlIGluIGFuZCBzY2FsZSB1cCAqL1xyXG5cclxuLm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDI6IFNsaWRlIGZyb20gdGhlIHJpZ2h0ICovXHJcblxyXG4ubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC41LCAwLjUsIDAuOSk7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0yIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDM6IFNsaWRlIGZyb20gdGhlIGJvdHRvbSAqL1xyXG5cclxuLm1kLWVmZmVjdC0zIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNDogTmV3c3BhcGVyICovXHJcblxyXG4ubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCB+IC5tZC1vdmVybGF5LCAubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDU6IGZhbGwgKi9cclxuXHJcbi5tZC1lZmZlY3QtNSB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC01IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA2OiBzaWRlIGZhbGwgKi9cclxuXHJcbi5tZC1lZmZlY3QtNiB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNzogIHNsaWRlIGFuZCBzdGljayB0byB0b3AgKi9cclxuXHJcbi5tZC1lZmZlY3QtNyB7XHJcbiAgdG9wOiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTcgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgODogM0QgZmxpcCBob3Jpem9udGFsICovXHJcblxyXG4ubWQtZWZmZWN0LTgge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC04IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgOTogM0QgZmxpcCB2ZXJ0aWNhbCAqL1xyXG5cclxuLm1kLWVmZmVjdC05IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtOSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEwOiAzRCBzaWduICovXHJcblxyXG4ubWQtZWZmZWN0LTEwIHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEwIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTE6IFN1cGVyIHNjYWxlZCAqL1xyXG5cclxuLm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTEgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTI6ICBKdXN0IG1lICovXHJcblxyXG4ubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjb2xvcjogI2ZmZjtcclxuICBoMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMzogM0Qgc2xpdCAqL1xyXG5cclxuLm1kLWVmZmVjdC0xMyB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEzIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgLW1vei1hbmltYXRpb246IHNsaXQgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xyXG4gIGFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGl0IHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogRWZmZWN0IDE0OiAgM0QgUm90YXRlIGZyb20gYm90dG9tICovXHJcblxyXG4ubWQtZWZmZWN0LTE0IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDE1OiAgM0QgUm90YXRlIGluIGZyb20gbGVmdCAqL1xyXG5cclxuLm1kLWVmZmVjdC0xNSB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTUgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTY6ICBCbHVyICovXHJcblxyXG5ib2R5Lm1vZGFsLTE2ID4ge1xyXG4gIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE2IH4gLmNvbnRhaW5lciwgLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDE3OiAgU2xpZGUgaW4gZnJvbSBib3R0b20gd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTcgPiB7XHJcbiAgbmF2LCBzZWN0aW9uLCAubWQtb3ZlcmxheSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTcgfiAuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG59XHJcblxyXG5ib2R5Lm1vZGFsLTE3IHtcclxuICA+IHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgfVxyXG4gID4ge1xyXG4gICAgLmhlYWRlci1jaGF0LCAuaGVhZGVyLXVzZXItbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gID4ge1xyXG4gICAgbmF2LCAubWQtb3ZlcmxheSwgc2VjdGlvbiB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTg6ICBTbGlkZSBmcm9tIHJpZ2h0IHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXHJcblxyXG5ib2R5Lm1vZGFsLTE4IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLm1kLW92ZXJsYXkge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtMTgge1xyXG4gID4ge1xyXG4gICAgLmhlYWRlci1jaGF0LCAuaGVhZGVyLXVzZXItbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gIH1cclxuICA+IHtcclxuICAgIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICBhbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdyB7XHJcbiAgJi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICB9XHJcbiAgJi5tZC1lZmZlY3QtMTkgfiB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLm1kLW92ZXJsYXkge1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxOTogIFNsaXAgaW4gZnJvbSB0aGUgdG9wIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXHJcblxyXG5ib2R5Lm1vZGFsLTE5IHtcclxuICA+IHtcclxuICAgIC5oZWFkZXItY2hhdCwgLmhlYWRlci11c2VyLWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICB9XHJcbiAgPiB7XHJcbiAgICBuYXYsIGhlYWRlciwgc2VjdGlvbiB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAgIGFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIE9wZW5Ub3Age1xyXG4gIDUwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XHJcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xyXG4gIGJvZHkge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgfVxyXG59XHJcbiIsIi5tZC1wZXJzcGVjdGl2ZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tZC1wZXJzcGVjdGl2ZSBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA2MDBweDtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm1kLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDYzMHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDIwMDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5tZC1zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm1kLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cgfiAubWQtb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIENvbnRlbnQgc3R5bGVzICovXG4ubWQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tZC1jb250ZW50IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbn1cbi5tZC1jb250ZW50ID4gZGl2IHtcbiAgcGFkZGluZzogMTVweCA0MHB4IDMwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5tZC1jb250ZW50ID4gZGl2IHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5tZC1jb250ZW50ID4gZGl2IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMzBweCAyMHB4O1xufVxuLm1kLWNvbnRlbnQgPiBkaXYgdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbi5tZC1jb250ZW50IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLyogSW5kaXZpZHVhbCBtb2RhbCBzdHlsZXMgd2l0aCBhbmltYXRpb25zL3RyYW5zaXRpb25zICovXG4vKiBFZmZlY3QgMTogRmFkZSBpbiBhbmQgc2NhbGUgdXAgKi9cbi5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDI6IFNsaWRlIGZyb20gdGhlIHJpZ2h0ICovXG4ubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC41LCAwLjUsIDAuOSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0zIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDQ6IE5ld3NwYXBlciAqL1xuLm1kLWVmZmVjdC00IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCB+IC5tZC1vdmVybGF5LCAubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xuLm1kLWVmZmVjdC01Lm1kLW1vZGFsIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG4ubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA2OiBzaWRlIGZhbGwgKi9cbi5tZC1lZmZlY3QtNi5tZC1tb2RhbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuLm1kLWVmZmVjdC02IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDc6ICBzbGlkZSBhbmQgc3RpY2sgdG8gdG9wICovXG4ubWQtZWZmZWN0LTcge1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLm1kLWVmZmVjdC03IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTcgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgODogM0QgZmxpcCBob3Jpem9udGFsICovXG4ubWQtZWZmZWN0LTgubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtOCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDk6IDNEIGZsaXAgdmVydGljYWwgKi9cbi5tZC1lZmZlY3QtOS5tZC1tb2RhbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuLm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtOSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cbi5tZC1lZmZlY3QtMTAubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDExOiBTdXBlciBzY2FsZWQgKi9cbi5tZC1lZmZlY3QtMTEgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTEgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQgaDMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTM6IDNEIHNsaXQgKi9cbi5tZC1lZmZlY3QtMTMubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGl0IDAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBzbGl0IDAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogc2xpdCAwLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpdCB7XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzbGl0IHtcbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGl0IHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogRWZmZWN0IDE0OiAgM0QgUm90YXRlIGZyb20gYm90dG9tICovXG4ubWQtZWZmZWN0LTE0Lm1kLW1vZGFsIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG4ubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTU6ICAzRCBSb3RhdGUgaW4gZnJvbSBsZWZ0ICovXG4ubWQtZWZmZWN0LTE1Lm1kLW1vZGFsIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG4ubWQtZWZmZWN0LTE1IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDE2OiAgQmx1ciAqL1xuYm9keS5tb2RhbC0xNiA+IG5hdiwgYm9keS5tb2RhbC0xNiA+IGhlYWRlciwgYm9keS5tb2RhbC0xNiA+IHNlY3Rpb24ge1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigzcHgpO1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAuY29udGFpbmVyLCAubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxNzogIFNsaWRlIGluIGZyb20gYm90dG9tIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG5ib2R5Lm1vZGFsLTE3ID4gbmF2LCBib2R5Lm1vZGFsLTE3ID4gc2VjdGlvbiwgYm9keS5tb2RhbC0xNyA+IC5tZC1vdmVybGF5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuYm9keS5tb2RhbC0xNyA+IGhlYWRlciB7XG4gIGhlaWdodDogNzBweDtcbn1cbmJvZHkubW9kYWwtMTcgPiBuYXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbn1cbmJvZHkubW9kYWwtMTcgLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbmJvZHkubW9kYWwtMTcgPiAuaGVhZGVyLWNoYXQsIGJvZHkubW9kYWwtMTcgPiAuaGVhZGVyLXVzZXItbGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5ib2R5Lm1vZGFsLTE3ID4gbmF2LCBib2R5Lm1vZGFsLTE3ID4gLm1kLW92ZXJsYXksIGJvZHkubW9kYWwtMTcgPiBzZWN0aW9uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5tZC1lZmZlY3QtMTcgLm1kLWNvbnRlbnQge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTcgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcbn1cblxuLyogRWZmZWN0IDE4OiAgU2xpZGUgZnJvbSByaWdodCB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xuYm9keS5tb2RhbC0xOCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLm1kLW92ZXJsYXkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuYm9keS5tb2RhbC0xOCA+IC5oZWFkZXItY2hhdCwgYm9keS5tb2RhbC0xOCA+IC5oZWFkZXItdXNlci1saXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHkubW9kYWwtMTggLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xufVxuYm9keS5tb2RhbC0xOCA+IG5hdiwgYm9keS5tb2RhbC0xOCA+IGhlYWRlciwgYm9keS5tb2RhbC0xOCA+IHNlY3Rpb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xuICB9XG59XG4ubWQtZWZmZWN0LTE4IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE4IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xufVxuLm1kLXNob3cubWQtZWZmZWN0LTE5IH4gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tZC1zaG93Lm1kLWVmZmVjdC0xOSB+IC5tZC1vdmVybGF5IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi8qIEVmZmVjdCAxOTogIFNsaXAgaW4gZnJvbSB0aGUgdG9wIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG5ib2R5Lm1vZGFsLTE5ID4gLmhlYWRlci1jaGF0LCBib2R5Lm1vZGFsLTE5ID4gLmhlYWRlci11c2VyLWxpc3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keS5tb2RhbC0xOSAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC1tb3otYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIGFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG59XG5ib2R5Lm1vZGFsLTE5ID4gbmF2LCBib2R5Lm1vZGFsLTE5ID4gaGVhZGVyLCBib2R5Lm1vZGFsLTE5ID4gc2VjdGlvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC1tb3otYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIGFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBPcGVuVG9wIHtcbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIE9wZW5Ub3Age1xuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG59XG5Aa2V5ZnJhbWVzIE9wZW5Ub3Age1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cbi5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xOSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AnimationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationModalComponent", function() { return AnimationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimationModalComponent = /** @class */ (function () {
    function AnimationModalComponent() {
        this.backDrop = false;
    }
    AnimationModalComponent.prototype.close = function (event) {
        document.querySelector('#' + event).classList.remove('md-show');
    };
    AnimationModalComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnimationModalComponent.prototype, "modalClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnimationModalComponent.prototype, "contentClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnimationModalComponent.prototype, "modalID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AnimationModalComponent.prototype, "backDrop", void 0);
    AnimationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animation-modal',
            template: __webpack_require__(/*! raw-loader!./animation-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./animation-modal.component.scss */ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimationModalComponent);
    return AnimationModalComponent;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/modal/modal.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/modal.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-modal/ui-modal.component */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
/* harmony import */ var _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-modal/animation-modal.component */ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts");





var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__["AnimationModalComponent"]],
            exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__["AnimationModalComponent"]]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n}\n.basic.modal.fade.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvRTpcXEZyYW1lV29ya3NcXENhcmdvXFxDYXJnb1dlYi9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcbW9kYWxcXHVpLW1vZGFsXFx1aS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvdWktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQ0FKO0FERUU7RUFDRSxVQUFBO0VBQ0Esd0NBQUE7RUFFQSxnQ0FBQTtBQ0FKO0FEQ0k7RUFDRSxVQUFBO0FDQ047QURHSTtFQUNFLGtDQUFBO0VBR0EsMEJBQUE7QUNETjtBREdJO0VBQ0UscUNBQUE7RUFFQSw2QkFBQTtFQUNBLHFDQUFBO0VBR0EsNkJBQUE7QUNETjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FESUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvdWktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMge1xyXG4gICYubW9kYWwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA1MDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gICYuZmFkZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAmLmluIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5tb2RhbC5mYWRlIHtcclxuICAgICYuaW4gLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iYXNpYy1jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMXB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIuYmFzaWMubW9kYWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICBkaXNwbGF5OiBub25lO1xuICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdXRsaW5lOiAwO1xufVxuLmJhc2ljLmZhZGUge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG59XG4uYmFzaWMuZmFkZS5pbiB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYmFzaWMubW9kYWwuZmFkZS5pbiAubW9kYWwtZGlhbG9nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG59XG4uYmFzaWMubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbn1cbi5iYXNpYyAuYmFzaWMtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG59XG4uYmFzaWMgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzFweDtcbiAgcmlnaHQ6IC0yMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: UiModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModalComponent", function() { return UiModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiModalComponent = /** @class */ (function () {
    function UiModalComponent() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.containerClick = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    UiModalComponent.prototype.ngOnInit = function () {
    };
    UiModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
        document.querySelector('body').classList.add('modal-open');
    };
    UiModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        document.querySelector('body').classList.remove('modal-open');
    };
    UiModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal') && this.containerClick === true) {
            this.hide();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiModalComponent.prototype, "dialogClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiModalComponent.prototype, "hideHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiModalComponent.prototype, "hideFooter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiModalComponent.prototype, "containerClick", void 0);
    UiModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui-modal',
            template: __webpack_require__(/*! raw-loader!./ui-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./ui-modal.component.scss */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiModalComponent);
    return UiModalComponent;
}());



/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9FOlxcRnJhbWVXb3Jrc1xcQ2FyZ29cXENhcmdvV2ViL3NyY1xcYXBwXFx0aGVtZVxcc2hhcmVkXFxjb21wb25lbnRzXFxzcGlubmVyXFxzcGlua2l0LWNzc1xcc2stbGluZS1tYXRlcmlhbC5zY3NzIiwic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1FQUFBO0VBQ0EsMkRBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxvQkFBQTtFQ0NOO0VEQ0U7SUFDSSw0QkFBQTtJQUNBLG9CQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxvQkFBQTtFQ0FOO0VERUU7SUFDSSw0QkFBQTtJQUNBLG9CQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDREo7O0FESUE7RUFDSSx5Q0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICB0b3A6IDAgIDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNodHRwLWxvYWRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubG9hZGVyLWJnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG59XHJcblxyXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgwKTtcclxufVxyXG4iLCIuc2stbGluZS1tYXRlcmlhbCB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuI2h0dHAtbG9hZGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxODgsIDE1NiwgMC44KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinkits.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
  \*************************************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
var Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinner.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9FOlxcRnJhbWVXb3Jrc1xcQ2FyZ29cXENhcmdvV2ViL3NyY1xcYXBwXFx0aGVtZVxcc2hhcmVkXFxjb21wb25lbnRzXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwLWxvYWRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubG9hZGVyLWJnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcbiIsIiNodHRwLWxvYWRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGVyLWJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinner.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
  \**********************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinkits */ "./src/app/theme/shared/components/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
        this.backgroundColor = '#2196f3';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"].skLine;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/shared/components/spinner/spinner.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/theme/shared/components/spinner/spinner.component.scss"), __webpack_require__(/*! ./spinkit-css/sk-line-material.scss */ "./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/theme/shared/full-screen/toggle-full-screen.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
  \****************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullScreenDirective = /** @class */ (function () {
    function ToggleFullScreenDirective(elements) {
        this.elements = elements;
    }
    ToggleFullScreenDirective.prototype.onClick = function () {
        /*if (screenfull.enabled) {
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
          screenfull.toggle();
        }*/
        if (isScreenFull(screenfull__WEBPACK_IMPORTED_MODULE_2__)) {
            if (screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"]) {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["exit"]();
            }
            else {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["request"]();
            }
        }
    };
    ToggleFullScreenDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullScreenDirective.prototype, "onClick", null);
    ToggleFullScreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullScreen]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ToggleFullScreenDirective);
    return ToggleFullScreenDirective;
}());

function isScreenFull(sf) {
    return sf.isFullscreen;
}


/***/ }),

/***/ "./src/app/theme/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/theme/shared/components/index.ts");
/* harmony import */ var _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/data-table/data-filter.pipe */ "./src/app/theme/shared/components/data-table/data-filter.pipe.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/theme/shared/components/spinner/spinner.component.ts");
/* harmony import */ var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.component */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");
/* harmony import */ var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/utils.module */ "./src/app/theme/shared/utils/utils.module.ts");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["AlertModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__["UtilsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["AlertModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbModule"],
                _components__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["DataFilterPipe"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"],
                _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__["UtilsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadModule"],
            ],
            declarations: [
                _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["DataFilterPipe"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"],
                _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_10__["ApexChartComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_11__["ApexChartService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/theme/shared/utils/array-to-tree-converter.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/shared/utils/array-to-tree-converter.service.ts ***!
  \***********************************************************************/
/*! exports provided: ArrayToTreeConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayToTreeConverterService", function() { return ArrayToTreeConverterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var ArrayToTreeConverterService = /** @class */ (function () {
    function ArrayToTreeConverterService() {
    }
    ArrayToTreeConverterService.prototype.createTree = function (array, parentIdProperty, idProperty, parentIdValue, childrenProperty, fieldMappings) {
        var _this = this;
        var tree = [];
        var nodes = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](array, [parentIdProperty, parentIdValue]);
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](nodes, function (node) {
            var newNode = {
                data: node
            };
            _this.mapFields(node, newNode, fieldMappings);
            newNode[childrenProperty] = _this.createTree(array, parentIdProperty, idProperty, node[idProperty], childrenProperty, fieldMappings);
            tree.push(newNode);
        });
        return tree;
    };
    ArrayToTreeConverterService.prototype.mapFields = function (node, newNode, fieldMappings) {
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](fieldMappings, function (fieldMapping) {
            if (!fieldMapping['target']) {
                return;
            }
            if (fieldMapping.hasOwnProperty('value')) {
                newNode[fieldMapping['target']] = fieldMapping['value'];
            }
            else if (fieldMapping['source']) {
                newNode[fieldMapping['target']] = node[fieldMapping['source']];
            }
            else if (fieldMapping['targetFunction']) {
                newNode[fieldMapping['target']] = fieldMapping['targetFunction'](node);
            }
        });
    };
    ArrayToTreeConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ArrayToTreeConverterService);
    return ArrayToTreeConverterService;
}());



/***/ }),

/***/ "./src/app/theme/shared/utils/auto-focus.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/shared/utils/auto-focus.directive.ts ***!
  \************************************************************/
/*! exports provided: AutoFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function() { return AutoFocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(_element) {
        this._element = _element;
    }
    AutoFocusDirective.prototype.ngAfterViewInit = function () {
        this._element.nativeElement.focus();
    };
    AutoFocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AutoFocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[autoFocus]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());



/***/ }),

/***/ "./src/app/theme/shared/utils/button-busy.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/utils/button-busy.directive.ts ***!
  \*************************************************************/
/*! exports provided: ButtonBusyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBusyDirective", function() { return ButtonBusyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonBusyDirective = /** @class */ (function () {
    function ButtonBusyDirective(_element) {
        this._element = _element;
    }
    Object.defineProperty(ButtonBusyDirective.prototype, "buttonBusy", {
        set: function (isBusy) {
            this.refreshState(isBusy);
        },
        enumerable: true,
        configurable: true
    });
    ButtonBusyDirective.prototype.ngOnInit = function () {
        this._button = this._element.nativeElement;
    };
    ButtonBusyDirective.prototype.ngAfterViewInit = function () {
        this._originalButtonInnerHtml = this._button.innerHTML;
    };
    ButtonBusyDirective.prototype.refreshState = function (isBusy) {
        if (!this._button) {
            return;
        }
        if (isBusy) {
            // disable button
            this._button.setAttribute('disabled', 'disabled');
            this._button.innerHTML = '<i class="fa fa-spin fa-spinner"></i>' +
                '<span>' + (this.busyText ? this.busyText : ' Processing...</span>');
            this._button.setAttribute('_disabledBefore', true);
        }
        else {
            if (!this._button.getAttribute('_disabledBefore')) {
                return;
            }
            // enable button
            this._button.removeAttribute('disabled');
            this._button.innerHTML = this._originalButtonInnerHtml;
        }
    };
    ButtonBusyDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], ButtonBusyDirective.prototype, "buttonBusy", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonBusyDirective.prototype, "busyText", void 0);
    ButtonBusyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[buttonBusy]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ButtonBusyDirective);
    return ButtonBusyDirective;
}());



/***/ }),

/***/ "./src/app/theme/shared/utils/camel-case-to-word.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/utils/camel-case-to-word.pipe.ts ***!
  \***************************************************************/
/*! exports provided: CamelCaseToWordPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelCaseToWordPipe", function() { return CamelCaseToWordPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CamelCaseToWordPipe = /** @class */ (function () {
    function CamelCaseToWordPipe() {
    }
    CamelCaseToWordPipe.prototype.transform = function (value) {
        var result = value.replace(/([A-Z])/g, " $1");
        var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        return finalResult;
    };
    CamelCaseToWordPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'camelCaseToWord'
        })
    ], CamelCaseToWordPipe);
    return CamelCaseToWordPipe;
}());



/***/ }),

/***/ "./src/app/theme/shared/utils/local-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/utils/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);



var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getItem = function (key, callback) {
        if (!localforage__WEBPACK_IMPORTED_MODULE_2__) {
            return;
        }
        localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"](key, callback);
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        if (!localforage__WEBPACK_IMPORTED_MODULE_2__) {
            return;
        }
        if (value === null) {
            value = undefined;
        }
        localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"](key, value);
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/theme/shared/utils/tree-data-helper.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/utils/tree-data-helper.service.ts ***!
  \****************************************************************/
/*! exports provided: TreeDataHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDataHelperService", function() { return TreeDataHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var TreeDataHelperService = /** @class */ (function () {
    function TreeDataHelperService() {
    }
    TreeDataHelperService.prototype.findNode = function (data, selector) {
        var _this = this;
        var nodes = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](data, selector);
        if (nodes && nodes.length === 1) {
            return nodes[0];
        }
        var foundNode = null;
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](data, function (d) {
            if (!foundNode) {
                foundNode = _this.findNode(d.children, selector);
            }
        });
        return foundNode;
    };
    TreeDataHelperService.prototype.findParent = function (data, nodeSelector) {
        var node = this.findNode(data, nodeSelector);
        if (!node) {
            return null;
        }
        return node.parent;
    };
    TreeDataHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TreeDataHelperService);
    return TreeDataHelperService;
}());



/***/ }),

/***/ "./src/app/theme/shared/utils/utils.module.ts":
/*!****************************************************!*\
  !*** ./src/app/theme/shared/utils/utils.module.ts ***!
  \****************************************************/
/*! exports provided: UtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsModule", function() { return UtilsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_busy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-busy.directive */ "./src/app/theme/shared/utils/button-busy.directive.ts");
/* harmony import */ var _auto_focus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auto-focus.directive */ "./src/app/theme/shared/utils/auto-focus.directive.ts");
/* harmony import */ var _array_to_tree_converter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array-to-tree-converter.service */ "./src/app/theme/shared/utils/array-to-tree-converter.service.ts");
/* harmony import */ var _tree_data_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-data-helper.service */ "./src/app/theme/shared/utils/tree-data-helper.service.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/theme/shared/utils/local-storage.service.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _camel_case_to_word_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./camel-case-to-word.pipe */ "./src/app/theme/shared/utils/camel-case-to-word.pipe.ts");










var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    UtilsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _array_to_tree_converter_service__WEBPACK_IMPORTED_MODULE_5__["ArrayToTreeConverterService"],
                _tree_data_helper_service__WEBPACK_IMPORTED_MODULE_6__["TreeDataHelperService"],
                _local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
            ],
            declarations: [
                _button_busy_directive__WEBPACK_IMPORTED_MODULE_3__["ButtonBusyDirective"],
                _auto_focus_directive__WEBPACK_IMPORTED_MODULE_4__["AutoFocusDirective"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeAgoPipe"],
                _camel_case_to_word_pipe__WEBPACK_IMPORTED_MODULE_9__["CamelCaseToWordPipe"]
            ],
            exports: [
                _button_busy_directive__WEBPACK_IMPORTED_MODULE_3__["ButtonBusyDirective"],
                _auto_focus_directive__WEBPACK_IMPORTED_MODULE_4__["AutoFocusDirective"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeAgoPipe"],
                _camel_case_to_word_pipe__WEBPACK_IMPORTED_MODULE_9__["CamelCaseToWordPipe"]
            ]
        })
    ], UtilsModule);
    return UtilsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    baseUrl: 'http://182.191.118.28:8585'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\FrameWorks\Cargo\CargoWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map