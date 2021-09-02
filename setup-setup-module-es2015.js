(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup-setup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/setup/company/create-edit-company.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/setup/company/create-edit-company.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo? (_id ? 'Update Company':'New Company') : 'Company'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"comp_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"comp_id\" name=\"ID\"  [disabled]=\"isNo\"  (focusout)=\"getDataByNo()\" [(ngModel)]=\"company.comp_no\" required placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\"><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"comp_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"comp_title\" name=\"Title\" placeholder=\"\"  [(ngModel)]=\"company.comp_title\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"comp_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"comp_short_title\" name=\"ShortTitle\" placeholder=\"\" [(ngModel)]=\"company.comp_short\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"comp_active\" name=\"Active\" [(ngModel)]=\"company.comp_active\">\r\n                <label class=\"custom-control-label\" for=\"comp_active\">Active</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12\">\r\n              <app-contact-detail #contactDetail></app-contact-detail>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit company\" modalSubtitle= \"Please Select company For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/setup/location/location.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/setup/location/location.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo ? (_id?'Update Location':'New Location') : 'Location'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autocomplete=\"off\">\r\n        \r\n          <div class=\"form-group row\">\r\n            <label for=\"location_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n              </div>\r\n              <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" name=\"loc_no\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"location.loc_no\" placeholder=\"\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n              </div>\r\n          </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"location_locType\" class=\"col-lg-2 col-form-label text-right\">Location Type:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"vh_type\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('type');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\" (selectItem)=\"getLocation($event.item)\"  [(ngModel)]=\"location.loc_type\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"this.showCountry\">\r\n            <label for=\"location_locType\" class=\"col-lg-2 col-form-label text-right\">Country:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"country\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(1,instance)\" [inputFormatter]=\"this.typeheadFormatter\" [resultFormatter]=\"this.typeheadFormatter\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('country');focus$[1].next($any($event).target.value)\" (click)=\"click$[1].next($any($event).target.value)\" [(ngModel)]=\"country\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"this.showState\">\r\n            <label for=\"location_locType\" class=\"col-lg-2 col-form-label text-right\">State:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"state\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(2,instance)\" [inputFormatter]=\"this.typeheadFormatter\" [resultFormatter]=\"this.typeheadFormatter\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('state');focus$[2].next($any($event).target.value)\" (click)=\"click$[2].next($any($event).target.value)\" [(ngModel)]=\"state\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"location_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"location_title\" name=\"Title\" placeholder=\"\" [(ngModel)]=\"location.loc_title\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"location_disabled\" name=\"Disabled\" [(ngModel)]=\"location.loc_active\">\r\n                <label class=\"custom-control-label\" for=\"location_disabled\">Active</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\"><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit LOCATION\" modalSubtitle= \"Please Select LOCATION For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/setup/office/create-edit-office.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/setup/office/create-edit-office.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card  cardTitle=\"{{isNo? (_id ? 'Update Office':'New Office') : 'Office'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autoofflete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"off_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\"><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"off_id\" name=\"ID\" [disabled]=\"isNo\" (focusout)=\"getDataByNo()\" [(ngModel)]=\"office.off_no\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"off_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"off_title\" name=\"Title\" placeholder=\"\"  [(ngModel)]=\"office.off_title\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"location_locType\" class=\"col-lg-2 col-form-label text-right\">Location Type:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"vh_type\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" [inputFormatter]=\"this.typeheadFormatter\" [resultFormatter]=\"this.typeheadFormatter\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('city');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\" [(ngModel)]=\"city\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"off_Address\" class=\"col-lg-2 col-form-label text-right\">Address</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"off_Address\" name=\"officeAddress\" placeholder=\"\" [(ngModel)]=\"office.off_addr\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"off_disabled\" name=\"Disabled\" [(ngModel)]=\"office.off_active\">\r\n                <label class=\"custom-control-label\" for=\"off_disabled\">Active</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12\">\r\n            <app-contact-detail #contactDetail></app-contact-detail>\r\n        </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit office\" modalSubtitle= \"Please Select office For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/setup/staff/create-edit-staff.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/setup/staff/create-edit-staff.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo ? (_id?'Update Staff':'New Staff') : 'Staff'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autostafflete=\"staff\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"staff_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\"  [disabled]=\"isNo\" id=\"staff_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"staff.stf_no\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\"><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"staff_title\" class=\"col-lg-2 col-form-label text-right\">Name</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"staff_title\" name=\"stf_name\" placeholder=\"\"  [(ngModel)]=\"staff.stf_name\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"staff_title\" class=\"col-lg-2 col-form-label text-right\">Nick</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"staff_title\" name=\"stf_nick\" placeholder=\"\"  [(ngModel)]=\"staff.stf_nick\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"staff_title\" class=\"col-lg-2 col-form-label text-right\">Desigination</label>\r\n            <div class=\"col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"staff_title\" name=\"stf_desig\" placeholder=\"\"  [(ngModel)]=\"staff.stf_desig\" required>\r\n              </div>\r\n              <label for=\"stf_cnic\" class=\"col-lg-1 col-form-label text-right\">CNIC</label>\r\n              <div class=\"col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"stf_cnic\" name=\"stf_cnic\" placeholder=\"\"  [(ngModel)]=\"staff.stf_cnic\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"staff_Address\" class=\"col-lg-2 col-form-label text-right\">Address</label>\r\n            <div class=\"col-lg-7\">\r\n                <input type=\"text\" class=\"form-control\" id=\"staff_Address\" name=\"stf_addr\" placeholder=\"\" [(ngModel)]=\"staff.stf_addr\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"staff_disabled\" name=\"Disabled\" [(ngModel)]=\"staff.stf_active\">\r\n                <label class=\"custom-control-label\" for=\"staff_disabled\">Active</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12\">\r\n            <app-contact-detail #contactDetail></app-contact-detail>\r\n        </div>\r\n          <div class=\"row p-2 float-right\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit staff\" modalSubtitle= \"Please Select staff For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/account-type/create-edit-account-type.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/account-type/create-edit-account-type.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Account Type ID\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"account_type_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"account_type_id\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"account_type_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"account_type_title\" name=\"Title\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"account_type_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"account_type_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"account_type_ordering\" class=\"col-lg-2 col-form-label text-right\">Ordering:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"account_type_ordering\" name=\"Ordering\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Account Nature:</label>\r\n            <div class=\"col-lg-8 mt-1\">\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" checked id=\"account_nature_bs\" name=\"account_nature\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"account_nature_bs\">Balance Sheet</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" id=\"account_nature_rev\" name=\"account_nature\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"account_nature_rev\">Revenue</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Naturl Balance Side:</label>\r\n            <div class=\"col-lg-8 mt-1\">\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" checked id=\"natural_bal_dr\" name=\"natural_bal\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"natural_bal_dr\">Debit</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" id=\"natural_bal_cr\" name=\"natural_bal\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"natural_bal_cr\">Credit</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"account_type_disabled\" name=\"Disabled\">\r\n                <label class=\"custom-control-label\" for=\"account_type_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"account_type_default\" name=\"Default\">\r\n                <label class=\"custom-control-label\" for=\"account_type_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/ar-aging/ar-aging.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/ar-aging/ar-aging.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"AR Aging Parameters\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                        <th>Sr#</th>\r\n                        <th>Period</th>\r\n                        <th>Title-1</th>\r\n                        <th>Title-2</th>\r\n                        <th>From</th>\r\n                        <th>To</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                        <td>1</td>\r\n                        <td>30</td>\r\n                        <td>0-30 Days</td>\r\n                        <td>30 Days</td>\r\n                        <td>0</td>\r\n                        <td>30</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>2</td>\r\n                        <td>30</td>\r\n                        <td>0-30 Days</td>\r\n                        <td>30 Days</td>\r\n                        <td>0</td>\r\n                        <td>30</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>3</td>\r\n                        <td>30</td>\r\n                        <td>0-30 Days</td>\r\n                        <td>30 Days</td>\r\n                        <td>0</td>\r\n                        <td>30</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>4</td>\r\n                        <td>30</td>\r\n                        <td>0-30 Days</td>\r\n                        <td>30 Days</td>\r\n                        <td>0</td>\r\n                        <td>30</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"row p-2 float-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n                <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n                <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n                <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/bank/create-edit-bank.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/bank/create-edit-bank.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Bank ID\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"bank_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"bank_id\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"bank_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bank_title\" name=\"Title\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"bank_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bank_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"bank_ordering\" class=\"col-lg-2 col-form-label text-right\">Ordering:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bank_ordering\" name=\"Ordering\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"bank_disabled\" name=\"Disabled\">\r\n                <label class=\"custom-control-label\" for=\"bank_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"bank_default\" name=\"Default\">\r\n                <label class=\"custom-control-label\" for=\"bank_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Bilty Expense\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"bilty_id\" class=\"col-lg-1 col-form-label text-right\">Doc ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_date\" name=\"Date\" placeholder=\"dd/mm/yyyy\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-calendar\"></i></span>\r\n                </div>\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Doc Ref#:</label>\r\n            <div class=\"col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"Ref\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"bilty_short_title\" class=\"col-lg-1 col-form-label text-right\">A/C ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Total Amount:</label>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"number\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"bilty_ordering\" class=\"col-lg-2 col-form-label text-right\">Booking Center:</label>\r\n            <div class=\"col-lg-3\">\r\n                <select name=\"\" id=\"\" class=\"form-control\">\r\n                    <option value=\"\">Multan Road Lahore</option>\r\n                </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"bilty_short_title\" class=\"col-lg-1 col-form-label text-right\">Bilty ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Customer:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Sender:</label>\r\n            <div class=\"col-lg-5\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Receiver:</label>\r\n            <div class=\"col-lg-5\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Date:</label>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Amount:</label>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Ref#:</label>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\">\r\n              <ngb-tab title=\"Expense List\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <tr>\r\n                                <th>Sr#</th>\r\n                                <th>Expense Head</th>\r\n                                <th>Amount</th>\r\n                                <th>Tran. Remarks</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>FREIGHT LOCAL LHR COS</td>\r\n                                <td>65656</td>\r\n                                <td>TEST DATA TRANSACTION</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>2</td>\r\n                              <td>FREIGHT LOCAL LHR COS</td>\r\n                              <td>65656</td>\r\n                              <td>TEST DATA TRANSACTION</td>\r\n                          </tr>\r\n                          </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Expense Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"col-md-12\">\r\n                      <p>Expense List </p>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/bilty/create-edit-bilty.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/bilty/create-edit-bilty.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo ? (_id?'Update Bilty':'New Bilty') : 'Bilty'}}\" [options]=\"true\">\r\n        <form  #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autoofflete=\"off\">\r\n        <div class=\"form-group row\">\r\n          \r\n          <div class=\"col-md-9\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"bt_no\" class=\"col-lg-2 col-form-label text-right\">Bilty No:</label>\r\n                <div class=\"input-group col-lg-4\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                  </div>\r\n                  <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" id=\"item_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"this.billtiesDto.bt_no\" placeholder=\"\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n                  </div>\r\n              </div>\r\n                <label for=\"bt_model\" class=\"col-lg-2 col-form-label text-right\">Builty model:</label>\r\n                <div class=\"col-lg-4\">\r\n                  <input type=\"text\" class=\"form-control\"  name=\"bt_model\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('btModel');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"this.billtiesDto.bt_model\" required>\r\n              </div>\r\n              </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"bt_mode\" class=\"col-lg-2 col-form-label text-right\">Builty mode:</label>\r\n              <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\"  name=\"bt_mode\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(1,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('btmode');focus$[1].next($any($event).target.value)\" (click)=\"click$[1].next($any($event).target.value)\"  [(ngModel)]=\"this.billtiesDto.bt_mode\" required>\r\n              </div>\r\n              <label for=\"bt_city_fr\" class=\"col-lg-2 col-form-label text-right\">Builty type:</label>\r\n              <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\"  name=\"bt_type\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(2,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('btType');focus$[2].next($any($event).target.value)\" (click)=\"click$[2].next($any($event).target.value)\"  [(ngModel)]=\"this.billtiesDto.bt_type\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"bt_customer\" class=\"col-lg-2 col-form-label text-right\">Customer ID:</label>\r\n              <div class=\"input-group col-lg-4\">\r\n                  <input type=\"number\" class=\"form-control\" id=\"bt_customer\" name=\"bt_customer\" [(ngModel)]=\"this.billtiesDto.bt_customer\" placeholder=\"\" required>  \r\n              </div>\r\n              <label for=\"bt_paymode\" class=\"col-lg-2 col-form-label text-right\">Pay Mode:</label>\r\n              <div class=\"input-group col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\"  name=\"bt_paymode\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(3,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('btPaymode');focus$[3].next($any($event).target.value)\" (click)=\"click$[3].next($any($event).target.value)\"  [(ngModel)]=\"this.billtiesDto.bt_paymode\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"bt_sender\" class=\"col-lg-2 col-form-label text-right\">Sender Name:</label>\r\n                <div class=\"col-lg-4\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"bt_sender\" name=\"bt_sender\" [(ngModel)]=\"this.billtiesDto.bt_sender\" placeholder=\"\" required>\r\n                </div>\r\n                <label for=\"bt_recver\" class=\"col-lg-2 col-form-label text-right\">Receiver Name:</label>\r\n                <div class=\"col-lg-4\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"bt_recver\" name=\"bt_recver\" [(ngModel)]=\"this.billtiesDto.bt_recver\" placeholder=\"\" required>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group row\">\r\n              <label for=\"bt_office\" class=\"col-lg-2 col-form-label text-right\">Booking Center:</label>\r\n              <div class=\"col-lg-4\">\r\n                  <select name=\"\" id=\"\" class=\"form-control\"  id=\"bt_office\" name=\"bt_office\" [(ngModel)]=\"this.billtiesDto.bt_office\" required>\r\n                      <option value=\"Multan Road Lahore\">Multan Road Lahore</option>\r\n                  </select>\r\n              </div>\r\n              <label for=\"bt_city_fr\" class=\"col-lg-1 col-form-label text-right\">From:</label>\r\n              <div class=\"col-lg-2\">\r\n                  <select class=\"form-control\" id=\"bt_city_fr\" name=\"bt_city_fr\"  [(ngModel)]=\"this.billtiesDto.bt_city_fr\" required>\r\n                      <option value=\"Lahore\">Lahore</option>\r\n                  </select>\r\n              </div>\r\n              <label for=\"bt_city_to\" class=\"col-lg-1 col-form-label text-right\">To:</label>\r\n              <div class=\"col-lg-2\">\r\n                  <select name=\"\" id=\"\" class=\"form-control\" id=\"bt_city_to\" name=\"bt_city_to\"  [(ngModel)]=\"this.billtiesDto.bt_city_to\" required>\r\n                      <option value=\"Karachi\">Karachi</option>\r\n                  </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group row mr-1\">\r\n              <label for=\"bt_qty\" class=\"col-lg-5 col-form-label text-right\">Total Qty:</label>\r\n              <div class=\"col-lg-7\">\r\n                <input type=\"number\" class=\"form-control\" id=\"bt_qty\" name=\"bt_qty\" [(ngModel)]=\"this.billtiesDto.bt_qty\" readonly>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row mr-1\">\r\n              <label for=\"bt_wgt\" class=\"col-lg-5 col-form-label text-right\">Total Weight:</label>\r\n              <div class=\"col-lg-7\">\r\n                <input type=\"number\" class=\"form-control\" id=\"bt_wgt\" name=\"bt_wgt\" [(ngModel)]=\"this.billtiesDto.bt_wgt\" readonly>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row mr-1\">\r\n              <label for=\"bt_cbm\" class=\"col-lg-5 col-form-label text-right\">Total CBM:</label>\r\n              <div class=\"col-lg-7\">\r\n                <input type=\"number\" class=\"form-control\" id=\"bt_cbm\" name=\"bt_cbm\" [(ngModel)]=\"this.billtiesDto.bt_cbm\" readonly>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row mr-1\">\r\n              <label for=\"bt_tot\" class=\"col-lg-5 col-form-label text-right\">Total Amount:</label>\r\n              <div class=\"col-lg-7\">\r\n                <input type=\"number\" class=\"form-control\"  id=\"bt_tot\" name=\"bt_tot\" [(ngModel)]=\"this.billtiesDto.bt_tot\" readonly>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row mr-1\">\r\n              <label for=\"bt_bill\" class=\"col-lg-5 col-form-label text-right\">bilty bill:</label>\r\n              <div class=\"col-lg-7\">\r\n                <input type=\"number\" class=\"form-control\"  id=\"bt_bill\" name=\"bt_bill\" [(ngModel)]=\"this.billtiesDto.bt_bill\" readonly>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n          \r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\">\r\n              <ngb-tab title=\"Item\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped mb-1\">\r\n                          <thead class=\"custom-table-header\">\r\n                            <tr>\r\n                                <th class=\"p-1\">Sr#</th>\r\n                                <th class=\"p-1\">Item</th>\r\n                                <th class=\"p-1\">UOM</th>\r\n                                <th class=\"p-1\">Pack</th>\r\n                                <th class=\"p-1\">Quantity</th>\r\n                                <th class=\"p-1\">Weight</th>\r\n                                <th class=\"p-1\">CBM</th>\r\n                                <th class=\"p-1\">Action</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of itemPackListDto;let i=index\">\r\n                                <td class=\"pt-2 text-center\">{{i+1}}</td>\r\n                                <td><input type=\"text\" class=\"form-control\" id=\"id-item{{i}}\" name=\"item{{i}}\" [(ngModel)]=\"item.itempack.item\"></td>\r\n                                <td><input type=\"text\" class=\"form-control\" id=\"id-uom{{i}}\" name=\"uom{{i}}\" [(ngModel)]=\"item.itempack.pack\"></td>\r\n                                <td><input type=\"text\" class=\"form-control\" id=\"id-pack{{i}}\" name=\"pack{{i}}\" [(ngModel)]=\"item.itempack.pack\"></td>\r\n                                <td><input type=\"text\" class=\"form-control\" id=\"id-qty{{i}}\" name=\"qty{{i}}\" [(ngModel)]=\"item.itempack.qty\"></td>\r\n                                <td><input type=\"text\" class=\"form-control\" id=\"id-wgt{{i}}\" name=\"wgt{{i}}\" [(ngModel)]=\"item.itempack.wgt\"></td>\r\n                                <td><input type=\"text\" class=\"form-control\" id=\"id-cbm{{i}}\" name=\"cbm{{i}}\" [(ngModel)]=\"item.itempack.cbm\"></td>\r\n                                <td class=\"mr-0\"><button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"margin-top: 2px;\" (click)=\"this.deleteBiltyItem(i)\"><i class=\"feather icon-minus\"></i></button></td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"form-group col-12\">\r\n                      <button type=\"button\" class=\"btn btn-success btn-sm float-right\" (click)=\"this.insertBiltyItem()\"><i class=\"feather icon-plus\"></i> Add Row</button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Bilty Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <div class=\"col-lg-8\">\r\n                        <div class=\"form-group row\">\r\n                          <label for=\"bt_cntnr_sz\" class=\"col-lg-3 col-form-label text-right\">Container Size:</label>\r\n                          <div class=\"col-lg-4\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"bt_cntnr_sz\" name=\"bt_cntnr_sz\" [(ngModel)]=\"this.billtiesDto.bt_cntnr_sz\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                          <label for=\"number\" class=\"col-lg-3 col-form-label text-right\">Fair Amount:</label>\r\n                          <div class=\"col-lg-4\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"bt_fare\" name=\"bt_fare\" [(ngModel)]=\"this.billtiesDto.bt_fare\">\r\n                          </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"form-group row\">\r\n                          <label for=\"bt_tax\" class=\"col-lg-3 col-form-label text-right\">Tax:</label>\r\n                          <div class=\"col-lg-4\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"bt_tax\" name=\"bt_tax\" [(ngModel)]=\"this.billtiesDto.bt_tax\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                          <label for=\"bt_labor\" class=\"col-lg-3 col-form-label text-right\">Labor:</label>\r\n                          <div class=\"col-lg-4\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"bt_labor\" name=\"bt_labor\" [(ngModel)]=\"this.billtiesDto.bt_labor\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                          <label for=\"bt_admn\" class=\"col-lg-3 col-form-label text-right\">Admin:</label>\r\n                          <div class=\"col-lg-4\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"bt_admn\" name=\"bt_admn\" [(ngModel)]=\"this.billtiesDto.bt_admn\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"bt_qty\" class=\"col-lg-5 col-form-label text-right\">Total Qty:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"bt_qty\" name=\"bt_qty\" [(ngModel)]=\"this.billtiesDto.bt_qty\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"bt_wgt\" class=\"col-lg-5 col-form-label text-right\">Total Weight:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"bt_wgt\" name=\"bt_wgt\" [(ngModel)]=\"this.billtiesDto.bt_wgt\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"bt_cbm\" class=\"col-lg-5 col-form-label text-right\">Total CBM:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\" id=\"bt_cbm\" name=\"bt_cbm\" [(ngModel)]=\"this.billtiesDto.bt_cbm\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"bt_tot\" class=\"col-lg-5 col-form-label text-right\">Total Amount:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\"  id=\"bt_tot\" name=\"bt_tot\" [(ngModel)]=\"this.billtiesDto.bt_tot\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"bt_bill\" class=\"col-lg-5 col-form-label text-right\">bilty bill:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\"  id=\"bt_bill\" name=\"bt_bill\" [(ngModel)]=\"this.billtiesDto.bt_bill\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              \r\n              <ngb-tab title=\"Post Bilty Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"bt_broker\" class=\"col-lg-2 col-form-label text-right\">Broker:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"bt_broker\" name=\"bt_broker\" [(ngModel)]=\"this.billtiesDto.bt_broker\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"bt_invoice\" class=\"col-lg-1 col-form-label text-right\" >Invoice#:</label>\r\n                      <div class=\"col-lg-2\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"bt_invoice\" name=\"bt_invoice\" [(ngModel)]=\"this.billtiesDto.bt_invoice\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"bt_po_no\" class=\"col-lg-1 col-form-label text-right\">PO#:</label>\r\n                      <div class=\"col-lg-2\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"bt_po_no\" name=\"bt_po_no\"  [(ngModel)]=\"this.billtiesDto.bt_po_no\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"bt_cntnr_no\" class=\"col-lg-2 col-form-label text-right\">Container#:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"bt_cntnr_no\" name=\"bt_cntnr_no\" [(ngModel)]=\"this.billtiesDto.bt_cntnr_no\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"bt_shp_line\" class=\"col-lg-2 col-form-label text-right\">Shipping Line:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"bt_shp_line\" name=\"bt_shp_line\" [(ngModel)]=\"this.billtiesDto.bt_shp_line\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"bt_voucher\" class=\"col-lg-2 col-form-label text-right\">Voucher#:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"bt_voucher\" name=\"bt_voucher\" [(ngModel)]=\"this.billtiesDto.bt_voucher\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"bt_port\" class=\"col-lg-2 col-form-label text-right\">Bilty Port:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"bt_port\" name=\"bt_port\" [(ngModel)]=\"this.billtiesDto.bt_port\"  placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"bt_comment\" class=\"col-lg-2 col-form-label text-right\">Remarks:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <textarea rows=\"2\" class=\"form-control\"  id=\"bt_comment\" name=\"bt_comment\" [(ngModel)]=\"this.billtiesDto.bt_comment\"></textarea>\r\n                      </div>\r\n                      <label for=\"bt_gds_cmnt\" class=\"col-lg-1 col-form-label text-right\">Goods Summary:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <textarea name=\"bt_gds_cmnt\" id=\"bt_gds_cmnt\" rows=\"2\" class=\"form-control\" [(ngModel)]=\"this.billtiesDto.bt_gds_cmnt\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  \r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit Bilty\" modalSubtitle= \"Please Select Bilty For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <app-card cardTitle=\"Booking Bill T\" [options]=\"true\">\r\n      <form action=\"javascript:\">\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"date_id\" class=\"col-lg-2 col-form-label text-right\">Opertator ID:</label>\r\n          <div class=\"input-group col-lg-3\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"0\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Entered By:</label>\r\n          <div class=\"col-lg-5\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Date:</label>\r\n          <div class=\"input-group col-lg-3\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"dd/mm/yyyy\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Mode:</label>\r\n          <div class=\"col-lg-5\">\r\n            <select name=\"\" id=\"\" class=\"form-control\">\r\n              <option value=\"\">Booking Bill T</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Number:</label>\r\n          <div class=\"input-group col-lg-3\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Sender Name:</label>\r\n          <div class=\"input-group col-lg-5\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Type:</label>\r\n          <div class=\"input-group col-lg-3\">\r\n            <select name=\"\" id=\"\" class=\"form-control\">\r\n              <option value=\"\">A</option>\r\n              <option value=\"\">B</option>\r\n            </select>\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Reviever Name:</label>\r\n          <div class=\"input-group col-lg-5\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\" \" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">City ID:</label>\r\n          <div class=\"input-group col-lg-3\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-2 col-form-label text-right\">City Name:</label>\r\n          <div class=\"input-group col-lg-5\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <label for=\"\" class=\" col-form-label text-right\">Goods Info</label>\r\n            <app-card cardTitle=\"Goods Info\" [hidHeader]=\"true\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Item Code</th>\r\n                      <th>Item Description</th>\r\n                      <th>Quantity</th>\r\n                      <th>Weight(Kgs)</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n\r\n                      <td>K-2511</td>\r\n                      <td>Plastic Sheets</td>\r\n                      <td>200</td>\r\n                      <td>15</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>K-2654</td>\r\n                      <td>Sheets</td>\r\n                      <td>500</td>\r\n                      <td>35</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n        </div>\r\n \r\n        \r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Fare Charges:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n              <input type=\"text\" class=\"form-control\" id=\"\" name=\"date\" placeholder=\"0\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Labour Charges:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n              <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"0\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Bill-T Charges:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n              <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Advance Charges:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n              <input type=\"text\" class=\"form-control\" id=\"\" name=\"date\" placeholder=\"0\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Zilla Tax:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n              <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"0\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Bill-T Total:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n              <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"0\">\r\n            </div>\r\n          </div>\r\n         \r\n\r\n        <div class=\"row p-2 float-right\">\r\n          <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n          <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n          <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <app-card cardTitle=\"Booking Voucher\" [options]=\"true\">\r\n      <form action=\"javascript:\">\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"date_id\" class=\"col-lg-1 col-form-label text-right\">Date:</label>\r\n          <div class=\"input-group col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"bilty_date\" name=\"Date\" placeholder=\"dd/mm/yyyy\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Number:</label>\r\n          <div class=\"col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"number\" placeholder=\"\">\r\n          </div>\r\n\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Munshiana:</label>\r\n          <div class=\"col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"munsh\" placeholder=\"\">\r\n          </div>\r\n\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Amount:</label>\r\n          <div class=\"col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"amount\" placeholder=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Vehicle No:</label>\r\n          <div class=\"input-group col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Mtr Reading:</label>\r\n          <div class=\"input-group col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Vehicle Type:</label>\r\n          <div class=\"col-lg-2\">\r\n            <select name=\"\" id=\"\" class=\"form-control\">\r\n              <option value=\"\">Van</option>\r\n              <option value=\"\">Jeep</option>\r\n            </select>\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Destination:</label>\r\n          <div class=\"col-lg-2\">\r\n            <select name=\"\" id=\"\" class=\"form-control\">\r\n              <option value=\"\">Lahore</option>\r\n              <option value=\"\">Islamabad</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Contractor ID:</label>\r\n          <div class=\"input-group col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n          </div>\r\n          <div class=\"input-group col-lg-3\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Transcat:</label>\r\n          <div class=\"col-lg-2\">\r\n            <select name=\"\" id=\"\" class=\"form-control\">\r\n              <option value=\"\">Com</option>\r\n            </select>\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Net Amt:</label>\r\n          <div class=\"col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"Net\" placeholder=\"\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <label for=\"\" class=\" col-form-label text-right\">Staff Info</label>\r\n            <app-card cardTitle=\"Router Info\" [hidHeader]=\"true\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Staff ID</th>\r\n                      <th>Name</th>\r\n                      <th>Role</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n\r\n                      <td>1</td>\r\n                      <td>ALi</td>\r\n                      <td>Booker</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>2</td>\r\n                      <td>Imran</td>\r\n                      <td>Booker</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <label for=\"\" class=\" col-form-label text-right\">Router Info</label>\r\n            <app-card cardTitle=\"Staff Info\" [hidHeader]=\"true\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>From City</th>\r\n                      <th>To City</th>\r\n                      <th>KM</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n\r\n                      <td>Islamabad</td>\r\n                      <td>Faislabad</td>\r\n                      <td>330</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Islamabad</td>\r\n                      <td>Krachi</td>\r\n                      <td>1500</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row mr-1\">\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Date:</label>\r\n          <div class=\"input-group col-lg-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"date\" placeholder=\"\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">No:</label>\r\n          <div class=\"input-group col-lg-1\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"0\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Type:</label>\r\n          <div class=\"col-lg-2\">\r\n            <select name=\"\" id=\"\" class=\"form-control\">\r\n              <option value=\"\">Van</option>\r\n              <option value=\"\">Jeep</option>\r\n            </select>\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Last No:</label>\r\n          <div class=\"col-lg-1\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"0\">\r\n          </div>\r\n          <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Total:</label>\r\n          <div class=\"col-lg-1\">\r\n            <input type=\"text\" class=\"form-control\" id=\"\" name=\"reading\" placeholder=\"0\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <app-card cardTitle=\"Goods Info\" [hidHeader]=\"true\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>City</th>\r\n                      <th>Date</th>\r\n                      <th>Number</th>\r\n                      <th>Charges</th>\r\n                      <th>Item Description</th>\r\n                      <th>Quantity</th>\r\n                      <th>Weight</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>Gujranwala</td>\r\n                      <td>23/09/2020</td>\r\n                      <td>770AM</td>\r\n                      <td>610</td>\r\n                      <td>Sports Goods Boray Carton</td>\r\n                      <td>3</td>\r\n                      <td>90</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Gujranwala</td>\r\n                      <td>23/09/2020</td>\r\n                      <td>770AM</td>\r\n                      <td>610</td>\r\n                      <td>Sports Goods Boray Carton</td>\r\n                      <td>3</td>\r\n                      <td>90</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </app-card>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row p-2 float-right\">\r\n          <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n          <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n          <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/challan/create-edit-challan.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/challan/create-edit-challan.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Challan\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"bilty_id\" class=\"col-lg-2 col-form-label text-right\">Doc ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_date\" name=\"Date\" placeholder=\"dd/mm/yyyy\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-calendar\"></i></span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Manual / Ref:</label>\r\n            <div class=\"col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"Ref\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"form-group row\">\r\n                <label for=\"bilty_id\" class=\"col-lg-4 col-form-label text-right\">Company:</label>\r\n                <div class=\"col-lg-8\">\r\n                  <select class=\"form-control\" name=\"\" id=\"\">\r\n                    <option value=\"\">New Ways Logistics</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"bilty_id\" class=\"col-lg-4 col-form-label text-right\">Booking Center:</label>\r\n                <div class=\"col-lg-8\">\r\n                  <select class=\"form-control\" name=\"\" id=\"\">\r\n                    <option value=\"\">Multan Road Lahore</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"bilty_id\" class=\"col-lg-4 col-form-label text-right\">From:</label>\r\n                <div class=\"col-lg-8\">\r\n                  <select class=\"form-control\" name=\"\" id=\"\">\r\n                    <option value=\"\">Lahore</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"bilty_id\" class=\"col-lg-4 col-form-label text-right\">To:</label>\r\n                <div class=\"col-lg-8\">\r\n                  <select class=\"form-control\" name=\"\" id=\"\">\r\n                    <option value=\"\">Karachi</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5\">\r\n                <div class=\"form-group row\">\r\n                  <label for=\"bilty_id\" class=\"col-lg-3 col-form-label text-right\">Vehicle#:</label>\r\n                  <div class=\"col-lg-9\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"bilty_id\" class=\"col-lg-3 col-form-label text-right\">Driver Name:</label>\r\n                    <div class=\"col-lg-9\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"bilty_id\" class=\"col-lg-3 col-form-label text-right\">Contact:</label>\r\n                    <div class=\"col-lg-9\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"bilty_id\" class=\"col-lg-3 col-form-label text-right\">Driver NIC:</label>\r\n                    <div class=\"col-lg-9\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n              <div class=\"form-group row mr-1\">\r\n                <label for=\"bilty_id\" class=\"col-lg-5 col-form-label text-right\">Total Qty:</label>\r\n                <div class=\"col-lg-7\">\r\n                  <input type=\"number\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row mr-1\">\r\n                <label for=\"bilty_id\" class=\"col-lg-5 col-form-label text-right\">Total Weight:</label>\r\n                <div class=\"col-lg-7\">\r\n                  <input type=\"number\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row mr-1\">\r\n                <label for=\"bilty_id\" class=\"col-lg-5 col-form-label text-right\">Total CBM:</label>\r\n                <div class=\"col-lg-7\">\r\n                  <input type=\"number\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row mr-1\">\r\n                <label for=\"bilty_id\" class=\"col-lg-5 col-form-label text-right\">Total Amount:</label>\r\n                <div class=\"col-lg-7\">\r\n                  <input type=\"number\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\">\r\n              <ngb-tab title=\"Bilty List\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <tr>\r\n                                <th>Sr#</th>\r\n                                <th>Bilty#</th>\r\n                                <th>Manual#</th>\r\n                                <th>Date</th>\r\n                                <th>Sender Name</th>\r\n                                <th>Reciver Name</th>\r\n                                <th>Goods Details</th>\r\n                                <th>Qty</th>\r\n                                <th>Waight</th>\r\n                                <th>CBM</th>\r\n                                <th>Amount</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>555</td>\r\n                                <td>6-555</td>\r\n                                <td>06/06/2020</td>\r\n                                <td>Asad</td>\r\n                                <td>Ali</td>\r\n                                <td>-</td>\r\n                                <td>5</td>\r\n                                <td>5</td>\r\n                                <td>0</td>\r\n                                <td>55</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>555</td>\r\n                                <td>6-555</td>\r\n                                <td>06/06/2020</td>\r\n                                <td>Asad</td>\r\n                                <td>Ali</td>\r\n                                <td>-</td>\r\n                                <td>5</td>\r\n                                <td>5</td>\r\n                                <td>0</td>\r\n                                <td>55</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>555</td>\r\n                                <td>6-555</td>\r\n                                <td>06/06/2020</td>\r\n                                <td>Asad</td>\r\n                                <td>Ali</td>\r\n                                <td>-</td>\r\n                                <td>5</td>\r\n                                <td>5</td>\r\n                                <td>0</td>\r\n                                <td>55</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </ng-template> \r\n              </ngb-tab>\r\n              <ngb-tab title=\"Expense List\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <tr>\r\n                                <th>Sr#</th>\r\n                                <th>Expense Head</th>\r\n                                <th>Amount</th>\r\n                                <th>Tran. Remarks</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>Labour for loading</td>\r\n                                <td>555</td>\r\n                                <td>test--test</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>2</td>\r\n                              <td>Labour for loading</td>\r\n                              <td>555</td>\r\n                              <td>test--test</td>\r\n                          </tr>\r\n                          </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Challan Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"row ml-3\">\r\n                          <div class=\"col-lg-12\">\r\n                            <label for=\"\" class=\"mb-0\">Remarks/Voucher Narration</label>\r\n                            <textarea name=\"\" id=\"\" rows=\"2\" class=\"form-control\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mt-1\">\r\n                          <label for=\"\" class=\"col-lg-4 col-form-label text-right\">Freight Payable:</label>\r\n                          <div class=\"col-lg-8\">\r\n                            <input type=\"date\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                          <label for=\"\" class=\"col-lg-4 col-form-label text-right\">Freight Payable:</label>\r\n                          <div class=\"col-lg-5\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                          <span class=\"text-primary col-form-label col-lg-3\">Hours</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"row ml-3\">\r\n                          <div class=\"form-group col-lg-12\">\r\n                            <label for=\"\" class=\"mb-0\">Transporter (Ac Payable)</label>\r\n                            <select name=\"\" id=\"\" class=\"form-control\">\r\n                              <option value=\"\">TLK 655 FREIGHT ACCOUNT</option>\r\n                            </select>\r\n                          </div>\r\n                          <div class=\"form-group col-lg-12\">\r\n                            <label for=\"\" class=\"mb-0\">Freight (Expense Ac)</label>\r\n                            <select name=\"\" id=\"\" class=\"form-control\">\r\n                              <option value=\"\">FREIGHT LHR TO KHI ACCOUNT</option>\r\n                            </select>\r\n                          </div>\r\n                          <div class=\"form-group col-lg-12\">\r\n                            <label for=\"\" class=\"mb-0\">Labour Provider (Ac Payable Contra=Grid)</label>\r\n                            <select name=\"\" id=\"\" class=\"form-control\">\r\n                              <option value=\"\">LABOUR PAYABLE LHR</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">Freight Payable:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">Advance Paid:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">Balance Payable:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">Total Expense:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Selection\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-10\">\r\n                        <app-card cardTitle=\"\" [hidHeader]=\"true\">\r\n                          <div class=\"table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>Sr#</th>\r\n                                  <th>Sel.</th>\r\n                                  <th>Bilty#</th>\r\n                                  <th>Manual#</th>\r\n                                  <th>Date</th>\r\n                                  <th>Sender Name</th>\r\n                                  <th>Receiver Name</th>\r\n                                  <th>Goods Details</th>\r\n                                  <th>Qty</th>\r\n                                  <th>Weight</th>\r\n                                  <th>CBM</th>\r\n                                  <th>Bilty Amt</th>\r\n                                  <th>Local#</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr>\r\n                                  <td>1</td>\r\n                                  <td>15</td>\r\n                                  <td>1</td>\r\n                                  <td>1</td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td>15</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td>1</td>\r\n                                  <td>15</td>\r\n                                  <td>1</td>\r\n                                  <td>1</td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td>15</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td>1</td>\r\n                                  <td>15</td>\r\n                                  <td>1</td>\r\n                                  <td>1</td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td>15</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td>1</td>\r\n                                  <td>15</td>\r\n                                  <td>1</td>\r\n                                  <td>1</td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td>15</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </app-card>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"row mr-1\">\r\n                          <div class=\"col-lg-12\">\r\n                            <label for=\"\" class=\"mb-0\">Date From</label>\r\n                            <input type=\"date\" class=\"form-control form-control-sm\">\r\n                          </div>\r\n                          <div class=\"col-lg-12\">\r\n                            <label for=\"\" class=\"mb-0\">Date To</label>\r\n                            <input type=\"date\" class=\"form-control form-control-sm\">\r\n                          </div>\r\n                          <div class=\"col-lg-12\">\r\n                            <label for=\"\" class=\"mb-0\">Bilty From</label>\r\n                            <input type=\"text\" class=\"form-control form-control-sm\">\r\n                          </div>\r\n                          <div class=\"col-lg-12\">\r\n                            <label for=\"\" class=\"mb-0\">Bilty To</label>\r\n                            <input type=\"text\" class=\"form-control form-control-sm\">\r\n                          </div>\r\n                          <div class=\"col-lg-12 text-right mt-2\">\r\n                            <button type=\"reset\" class=\"btn btn-outline-danger mr-2 btn-sm\"><i class=\"feather icon-x\"></i> Clear</button>\r\n                            <button type=\"button\" class=\"btn btn-warning mr-2 btn-sm\"><i class=\"fa fa-binoculars\"></i> View</button>\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2 btn-sm\"><i class=\"feather icon-move\"></i> Move</button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-sm\"><i class=\"feather icon-check\"></i> Mark All</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/contract/create-edit-contract.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/contract/create-edit-contract.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{_id?'Update Contract':'New Contract'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"item_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" id=\"item_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"Contract.cn_no\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"cn_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"cn_title\" name=\"cn_title\" placeholder=\"\"  [(ngModel)]=\"Contract.cn_title\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"cn_short\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"cn_short\" name=\"cn_short\" placeholder=\"\" [(ngModel)]=\"Contract.cn_short\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"cn_customer\" class=\"col-lg-2 col-form-label text-right\">Customer:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"cn_customer\" name=\"cn_customer\" placeholder=\"\" [(ngModel)]=\"Contract.cn_customer\">\r\n            </div>\r\n            <label for=\"cn_mode\" class=\"col-lg-1 col-form-label text-right\">Mode:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\"  name=\"cn_mode\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(1,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('cnType');focus$[1].next($any($event).target.value)\" (click)=\"click$[1].next($any($event).target.value)\"  [(ngModel)]=\"Contract.cn_mode\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"cn_uom\" class=\"col-lg-2 col-form-label text-right\">UOM</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"item_uom\" name=\"item_uom\" placeholder=\"Type..\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"Contract.cn_uom\" required>\r\n            </div>\r\n            <label for=\"cn_rate\" class=\"col-lg-1 col-form-label text-right\">Rate:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"cn_rate\" name=\"cn_rate\" [(ngModel)]=\"Contract.cn_rate\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"cn_valid_fr\" class=\"col-lg-2 col-form-label text-right\">Valid For:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"cn_valid_fr\" name=\"cn_valid_fr\" [(ngModel)]=\"Contract.cn_valid_fr\" required>\r\n            </div>\r\n            <label for=\"cn_valid_to\" class=\"col-lg-1 col-form-label text-right\">Valid To:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"cn_valid_to\" name=\"cn_valid_to\" [(ngModel)]=\"Contract.cn_valid_to\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"cn_limit\" class=\"col-lg-2 col-form-label text-right\">Limit:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"cn_limit\" name=\"cn_limit\" [(ngModel)]=\"Contract.cn_limit\" required>\r\n            </div>\r\n            <label for=\"cn_remarks\" class=\"col-lg-1 col-form-label text-right\">Remarks:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"cn_remarks\" name=\"cn_remarks\" [(ngModel)]=\"Contract.cn_remarks\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-md-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2 pl-1\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"item_default\" name=\"Default\" [(checked)]=\"this.Contract.cn_cbm\">\r\n                <label class=\"custom-control-label\" for=\"item_disabled\">CBM</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped mb-1\">\r\n              <thead>\r\n                <tr>\r\n                    <th class=\"p-1\">Sr#</th>\r\n                    <th class=\"p-1\">Title</th>\r\n                    <th class=\"p-1\">Type</th>\r\n                    <th class=\"p-1\">Charges</th>\r\n                    <th class=\"p-1\">Port</th>\r\n                    <th class=\"p-1\">Remarks</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of rateListDto;let i=index\">\r\n                    <td class=\"pt-2 text-center\">{{i+1}}</td>\r\n                    <td class=\"p-1\"> <input type=\"text\" class=\"form-control\" id=\"id-title{{i}}\" name=\"title{{i}}\" [(ngModel)]=\"item.rate.title\"></td>\r\n                    <td class=\"p-1\"><input type=\"text\" class=\"form-control\" id=\"id-type{{i}}\" name=\"type{{i}}\" [(ngModel)]=\"item.rate.type\"></td>\r\n                    <td class=\"p-1\"><input type=\"text\" class=\"form-control\" id=\"id-charges{{i}}\" name=\"charges{{i}}\" [(ngModel)]=\"item.rate.charges\"></td>\r\n                    <td class=\"p-1\"><input type=\"text\" class=\"form-control\" id=\"id-port{{i}}\" name=\"port{{i}}\" [(ngModel)]=\"item.rate.port\"></td>\r\n                    <td class=\"p-1\"><input type=\"text\" class=\"form-control\" id=\"id-remarks{{i}}\" name=\"remarks{{i}}\" [(ngModel)]=\"item.rate.remarks\"></td>\r\n                    <td class=\"p-1 mr-0\"><button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"margin-top: 2px;\" (click)=\"this.deleteRateItem(i)\"><i class=\"feather icon-minus\"></i></button></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n        <div class=\"form-group col-12\">\r\n          <button type=\"button\" class=\"btn btn-success btn-sm float-right\" (click)=\"this.insertRateItem()\"><i class=\"feather icon-plus\"></i> Add Row</button>\r\n        </div>\r\n      </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <!-- <button type=\"button\" class=\"btn btn-success mr-2\" (click)=\"getData();\"><i class=\"feather icon-edit\"></i> Edit</button> -->\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit Contract\" modalSubtitle= \"Please Select Contract For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Invoice Opening\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Doc ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_date\" name=\"Date\" placeholder=\"dd/mm/yyyy\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-calendar\"></i></span>\r\n                </div>\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Service:</label>\r\n            <div class=\"col-lg-3\">\r\n                <select name=\"\" id=\"\" class=\"form-control\">\r\n                    <option value=\"\">Agency Commission</option>\r\n                </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Manual / Ref:</label>\r\n            <div class=\"col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"Ref\" placeholder=\"\">\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <select name=\"\" id=\"\" class=\"form-control\">\r\n                    <option value=\"\">New Ways Logistics</option>\r\n                </select>\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Bilty:</label>\r\n            <div class=\"col-lg-1\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n            </div>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"bilty_short_title\" class=\"col-lg-2 col-form-label text-right\">Customer ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"bilty_ordering\" class=\"col-lg-2 col-form-label text-right\">Booking Center:</label>\r\n            <div class=\"col-lg-3\">\r\n                <select name=\"\" id=\"\" class=\"form-control\">\r\n                    <option value=\"\">Multan Road Lahore</option>\r\n                </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\">\r\n              <ngb-tab title=\"Bilty Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Vehicle#:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Sender Name:</label>\r\n                      <div class=\"col-lg-6\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Receiver Name:</label>\r\n                      <div class=\"col-lg-6\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <div class=\"col-lg-8\">\r\n                        <div class=\"form-group row\">\r\n                          <label for=\"\" class=\"col-md-3 col-form-label text-right\"></label>\r\n                          <div class=\"col-md-9 pl-2\">\r\n                            <textarea name=\"\" id=\"\" cols=\"5\" rows=\"5\" class=\"form-control\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">Weight:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">CBM:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">Amount:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Contact\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Contact Person:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"col-lg-6\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Phone:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Ext:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Cell/Mobile:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Fax:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Email:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Web/Url:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Address\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Address1:</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Address2:</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Postal Code:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">State/Provinse:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">City:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Country:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Destination\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Destination Port:</label>\r\n                      <div class=\"col-lg-7\">\r\n                        <select class=\"form-control\" name=\"\" id=\"\">\r\n                          <option value=\"\">KPT KARACHI</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Destination Remarks/Location:</label>\r\n                      <div class=\"col-lg-7\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Order/ Contact Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Contact#:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Invoice#:</label>\r\n                      <div class=\"col-lg-2\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">PO#:</label>\r\n                      <div class=\"col-lg-2\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Container#:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Shipping Line:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <select class=\"form-control\" name=\"\" id=\"\">\r\n                          <option value=\"\">MSC</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Remarks:</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <textarea name=\"\" id=\"\" rows=\"2\" class=\"form-control\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/invoice/create-edit-invoice.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/invoice/create-edit-invoice.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Invoice\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Doc ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"Date\" placeholder=\"dd/mm/yyyy\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-calendar\"></i></span>\r\n                </div>\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Service:</label>\r\n            <div class=\"col-lg-3\">\r\n                <select name=\"\" id=\"\" class=\"form-control\">\r\n                    <option value=\"\">Agency Commission</option>\r\n                </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Manual / Ref:</label>\r\n            <div class=\"col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"Ref\" placeholder=\"\">\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <select name=\"\" id=\"\" class=\"form-control\">\r\n                    <option value=\"\">New Ways Logistics</option>\r\n                </select>\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Bilty:</label>\r\n            <div class=\"col-lg-1\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n            </div>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"bilty_short_title\" class=\"col-lg-2 col-form-label text-right\">Customer ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row mr-1\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Booking Center:</label>\r\n            <div class=\"col-lg-3\">\r\n                <select name=\"\" id=\"\" class=\"form-control\">\r\n                    <option value=\"\">Multan Road Lahore</option>\r\n                </select>\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Bilty Amount:</label>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\">\r\n            </div>\r\n            <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Amount:</label>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\">\r\n              <ngb-tab title=\"Bilty Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Vehicle#:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Sender Name:</label>\r\n                      <div class=\"col-lg-6\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Receiver Name:</label>\r\n                      <div class=\"col-lg-6\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <div class=\"col-lg-8\">\r\n                        <div class=\"form-group row\">\r\n                          <label for=\"\" class=\"col-md-3 col-form-label text-right\"></label>\r\n                          <div class=\"col-md-9 pl-2\">\r\n                            <textarea name=\"\" id=\"\" cols=\"5\" rows=\"5\" class=\"form-control\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">Weight:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">CBM:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group row mr-1\">\r\n                          <label for=\"\" class=\"col-lg-5 col-form-label text-right\">Amount:</label>\r\n                          <div class=\"col-lg-7\">\r\n                            <input type=\"number\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Bilty List\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <tr>\r\n                                <th>Sr#</th>\r\n                                <th>Bilty#</th>\r\n                                <th>Manual#</th>\r\n                                <th>Date</th>\r\n                                <th>Local</th>\r\n                                <th>Cont</th>\r\n                                <th>Freight</th>\r\n                                <th>Detention</th>\r\n                                <th>Labour</th>\r\n                                <th>Total</th>\r\n                                <th>Tran Remarks</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>555</td>\r\n                                <td>6-555</td>\r\n                                <td>06/06/2020</td>\r\n                                <td>Asad</td>\r\n                                <td>Ali</td>\r\n                                <td>-</td>\r\n                                <td>5</td>\r\n                                <td>5</td>\r\n                                <td>0</td>\r\n                                <td>55</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>555</td>\r\n                                <td>6-555</td>\r\n                                <td>06/06/2020</td>\r\n                                <td>Asad</td>\r\n                                <td>Ali</td>\r\n                                <td>-</td> \r\n                                <td>5</td>\r\n                                <td>5</td> \r\n                                <td>0</td>\r\n                                <td>55</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>555</td>\r\n                                <td>6-555</td>\r\n                                <td>06/06/2020</td>\r\n                                <td>Asad</td>\r\n                                <td>Ali</td>\r\n                                <td>-</td>\r\n                                <td>5</td>\r\n                                <td>5</td>\r\n                                <td>0</td>\r\n                                <td>55</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Bilty Tran\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <tr>\r\n                                <th>Sr#</th>\r\n                                <th>Service Head</th>\r\n                                <th>Amount</th>\r\n                                <th>Tran Remarks</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>Service Head</td>\r\n                                <td>Amount</td>\r\n                                <td>Tran Remarks</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>2</td>\r\n                              <td>Service Head</td>\r\n                              <td>Amount</td>\r\n                              <td>Tran Remarks</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Contact\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Contact Person:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"col-lg-6\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Phone:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Ext:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Cell/Mobile:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Fax:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Email:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Web/Url:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Address\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Address1:</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Address2:</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Postal Code:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">State/Provinse:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">City:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Country:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Destination\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Destination Port:</label>\r\n                      <div class=\"col-lg-7\">\r\n                        <select class=\"form-control\" name=\"\" id=\"\">\r\n                          <option value=\"\">KPT KARACHI</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Destination Remarks/Location:</label>\r\n                      <div class=\"col-lg-7\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Order/ Contact Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Contact#:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Invoice#:</label>\r\n                      <div class=\"col-lg-2\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">PO#:</label>\r\n                      <div class=\"col-lg-2\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Container#:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Shipping Line:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <select class=\"form-control\" name=\"\" id=\"\">\r\n                          <option value=\"\">MSC</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Remarks:</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <textarea name=\"\" id=\"\" rows=\"2\" class=\"form-control\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/port/create-edit-port.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/port/create-edit-port.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Port ID\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"port_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"port_id\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"port_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"port_title\" name=\"Title\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"port_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"port_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"port_ordering\" class=\"col-lg-2 col-form-label text-right\">Ordering:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"port_ordering\" name=\"Ordering\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"port_Alternatetitle\" class=\"col-lg-2 col-form-label text-right\">Alternate Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"port_Alternatetitle\" name=\"AlternateTitle\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"port_disabled\" name=\"Disabled\">\r\n                <label class=\"custom-control-label\" for=\"port_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"port_default\" name=\"Default\">\r\n                <label class=\"custom-control-label\" for=\"port_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Receiving Bill To Bill\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row mr-1\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Doc ID:</label>\r\n                    <div class=\"input-group col-lg-5\">\r\n                        <div class=\"input-group-append\">\r\n                          <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                        <div class=\"input-group-append\">\r\n                          <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-group col-lg-5\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"bilty_date\" name=\"Date\" placeholder=\"dd/mm/yyyy\">\r\n                        <div class=\"input-group-append\">\r\n                          <span class=\"btn btn-primary\"><i class=\"feather icon-calendar\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Manual#:</label>\r\n                <div class=\"col-lg-4\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                </div>\r\n                <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Company:</label>\r\n                <div class=\"col-lg-4\">\r\n                  <select class=\"form-control\" name=\"\" id=\"\">\r\n                    <option value=\"\">New Ways Logistics</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Bank ID:</label>\r\n                <div class=\"input-group col-lg-6\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n                <div class=\"col-lg-10\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Customer:</label>\r\n                <div class=\"input-group col-lg-5\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                    </div>\r\n                </div>\r\n                <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Tax %Age:</label>\r\n                <div class=\"col-lg-3\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n                <div class=\"col-lg-10\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Remarks:</label>\r\n                <div class=\"col-lg-10\">\r\n                  <textarea class=\"form-control\" name=\"\" id=\"\" rows=\"3\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-lg-4 mt-1 text-right\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"isCash\" name=\"isCash\">\r\n                          <label class=\"custom-control-label\" for=\"isCash\">Is Cash</label>\r\n                        </div>\r\n                    </div>\r\n                    <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Bank:</label>\r\n                    <div class=\"col-lg-6\">\r\n                        <select name=\"\" id=\"\" class=\"form-control\">\r\n                            <option value=\"\">CASH</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Cheque Date:</label>\r\n                  <div class=\"col-lg-5\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Cheque No:</label>\r\n                    <div class=\"col-lg-3\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Invoice/Bill:</label>\r\n                    <div class=\"col-lg-2\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                       <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Recvd Amt:</label>\r\n                    <div class=\"col-lg-3\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Received:</label>\r\n                    <div class=\"col-lg-2\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                       <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Adj.Tax Ded.Amt:</label>\r\n                    <div class=\"col-lg-3\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Tax Ded.:</label>\r\n                    <div class=\"col-lg-2\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                       <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Adj.Other Ded.Amt:</label>\r\n                    <div class=\"col-lg-3\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Other Ded:</label>\r\n                    <div class=\"col-lg-2\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                       <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Total Recvd & Adj:</label>\r\n                    <div class=\"col-lg-3\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Recvd & Adj:</label>\r\n                    <div class=\"col-lg-2\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                       <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Balance Available:</label>\r\n                    <div class=\"col-lg-3\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Balance Amt:</label>\r\n                    <div class=\"col-lg-2\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                       <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\">\r\n              <ngb-tab title=\"Invoice/Bill List\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped\">\r\n                          <thead>\r\n                            <tr>\r\n                                <th>Sr#</th>\r\n                                <th>Invoice</th>\r\n                                <th>P.Year</th>\r\n                                <th>Year</th>\r\n                                <th>Manual</th>\r\n                                <th>Date</th>\r\n                                <th>Invoice</th>\r\n                                <th>P-Rcvd</th>\r\n                                <th>P-Tax</th>\r\n                                <th>P-Othor</th>\r\n                                <th>P-Total</th>\r\n                                <th>Invoice Bal.</th>\r\n                                <th>C-Rcvd</th>\r\n                                <th>C-Tax</th>\r\n                                <th>C-Other</th>\r\n                                <th>C-Total</th>\r\n                                <th>Net Amt</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>5</td>\r\n                                <td>6</td>\r\n                                <td>2020</td>\r\n                                <td>0</td>\r\n                                <td></td>\r\n                                <td></td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                                <td>0</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>2</td>\r\n                              <td>5</td>\r\n                              <td>6</td>\r\n                              <td>2020</td>\r\n                              <td>0</td>\r\n                              <td></td>\r\n                              <td></td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                              <td>0</td>\r\n                          </tr>\r\n                          </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Selection\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-8\">\r\n                        <app-card cardTitle=\"\" [hidHeader]=\"true\">\r\n                          <div class=\"table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>Sr#</th>\r\n                                  <th>Sel.</th>\r\n                                  <th>Invoice#</th>\r\n                                  <th>Manual#</th>\r\n                                  <th>Year</th>\r\n                                  <th>Date</th>\r\n                                  <th>Bilty#</th>\r\n                                  <th>Bilty Date</th>\r\n                                  <th>Amount</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr>\r\n                                  <td>1</td>\r\n                                  <td>15</td>\r\n                                  <td>1</td>\r\n                                  <td>1</td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td>15</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td>2</td>\r\n                                  <td>15</td>\r\n                                  <td>1</td>\r\n                                  <td>1</td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td></td>\r\n                                  <td>15</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </app-card>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"row mr-1\">\r\n                          <div class=\"col-lg-6\">\r\n                            <label for=\"\" class=\"mb-0\">Date From</label>\r\n                            <input type=\"date\" class=\"form-control form-control-sm\">\r\n                          </div>\r\n                          <div class=\"col-lg-6\">\r\n                            <label for=\"\" class=\"mb-0\">Date To</label>\r\n                            <input type=\"date\" class=\"form-control form-control-sm\">\r\n                          </div>\r\n                          <div class=\"col-lg-6\">\r\n                            <label for=\"\" class=\"mb-0\">Bilty From</label>\r\n                            <input type=\"text\" class=\"form-control form-control-sm\">\r\n                          </div>\r\n                          <div class=\"col-lg-6\">\r\n                            <label for=\"\" class=\"mb-0\">Bilty To</label>\r\n                            <input type=\"text\" class=\"form-control form-control-sm\">\r\n                          </div>\r\n                          <div class=\"col-lg-12 text-right mt-2\">\r\n                            <button type=\"reset\" class=\"btn btn-outline-danger mr-2 btn-sm\"><i class=\"feather icon-x\"></i> Clear</button>\r\n                            <button type=\"button\" class=\"btn btn-warning mr-2 btn-sm\"><i class=\"fa fa-binoculars\"></i> View</button>\r\n                            <button type=\"button\" class=\"btn btn-primary mr-2 btn-sm\"><i class=\"feather icon-move\"></i> Move</button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-sm\"><i class=\"feather icon-check\"></i> Mark All</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/shipper/create-edit-shipper.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/shipper/create-edit-shipper.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Shipper ID\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"shipper_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"shipper_id\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shipper_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"shipper_title\" name=\"Title\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shipper_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"shipper_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shipper_ordering\" class=\"col-lg-2 col-form-label text-right\">Ordering:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"shipper_ordering\" name=\"Ordering\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"shipper_disabled\" name=\"Disabled\">\r\n                <label class=\"custom-control-label\" for=\"shipper_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"shipper_default\" name=\"Default\">\r\n                <label class=\"custom-control-label\" for=\"shipper_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/shippingline/create-edit-shippingline.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/shippingline/create-edit-shippingline.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Shippingline ID\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"shipping_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"shipping_id\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shipping_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"shipping_title\" name=\"Title\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shipping_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"shipping_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shipping_ordering\" class=\"col-lg-2 col-form-label text-right\">Ordering:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"shipping_ordering\" name=\"Ordering\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"shipping_disabled\" name=\"Disabled\">\r\n                <label class=\"custom-control-label\" for=\"shipping_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"shipping_default\" name=\"Default\">\r\n                <label class=\"custom-control-label\" for=\"shipping_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/supplier/supplier.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/supplier/supplier.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Supplier/Vendor ID\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"bilty_short_title\" class=\"col-lg-2 col-form-label text-right\">Account ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n                <input type=\"text\" class=\"form-control\" id=\"\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\">\r\n              <ngb-tab title=\"Contact\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Contact Person:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"col-lg-6\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Phone:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Ext:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Cell/Mobile:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Fax:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Email:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Web/Url:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Address\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Address1:</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Address2:</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Postal Code:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">State/Provinse:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">City:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Country:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Tax Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Tax Info\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Limit & Discount\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-lg-7\">\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Credit Limit:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1 text-right\">\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"crlimitActivate\" name=\"\">\r\n                                    <label class=\"custom-control-label\" for=\"crlimitActivate\">Activate</label>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Credit Terms:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Late Charges %:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1\">\r\n                                <span>(If any)</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Discount %:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1 text-right\">\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"latechrgActivate\" name=\"\">\r\n                                        <label class=\"custom-control-label\" for=\"latechrgActivate\">Activate</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-5\">\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"pid\" name=\"\">\r\n                                        <label class=\"custom-control-label\" for=\"pid\">Per Item Discount</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"btb\" name=\"\">\r\n                                        <label class=\"custom-control-label\" for=\"btb\">Bill to Bill (Open Entry Aging Method)</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"isdisable\" name=\"\">\r\n                                        <label class=\"custom-control-label\" for=\"isdisable\">Disabled</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Other Info\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Tax Info\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Alert\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Alert\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Image\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Image\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/transporter/create-edit-transporter.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/transporter/create-edit-transporter.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Transporter ID\" [options]=\"true\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"transporter_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-success\"><i class=\"feather icon-plus\"></i></span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"transporter_id\" name=\"ID\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"btn btn-primary\"><i class=\"feather icon-search\"></i></span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"transporter_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"transporter_title\" name=\"Title\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"transporter_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"transporter_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"transporter_ordering\" class=\"col-lg-2 col-form-label text-right\">Ordering:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"transporter_ordering\" name=\"Ordering\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"transporter_disabled\" name=\"Disabled\">\r\n                <label class=\"custom-control-label\" for=\"transporter_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"transporter_default\" name=\"Default\">\r\n                <label class=\"custom-control-label\" for=\"transporter_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\"><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\"><i class=\"feather icon-x\"></i> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-success mr-2\"><i class=\"feather icon-edit\"></i> Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-3\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/uom/create-edit-uom.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/uom/create-edit-uom.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo ? (_id?'Update UOM ID':'New UOM ID') : 'UOM ID'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"uom_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"uom_id\" name=\"ID\" placeholder=\"\"  (focusout)=\"getDataByNo()\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"uom_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"uom_title\" name=\"Title\" placeholder=\"\" [(ngModel)]=\"Uom.UomTitle\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"uom_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"uom_short_title\" name=\"ShortTitle\" placeholder=\"\" [(ngModel)]=\"Uom.UomShort\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"uom_ordering\" class=\"col-lg-2 col-form-label text-right\">Ordering:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"uom_ordering\" name=\"Ordering\" placeholder=\"\" [(ngModel)]=\"Uom.UomOrdering\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"uom_disabled\" name=\"Disabled\" [(ngModel)]=\"Uom.UomIsActive\">\r\n                <label class=\"custom-control-label\" for=\"uom_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"uom_default\" name=\"Default\" [(ngModel)]=\"Uom.UomIsDefault\">\r\n                <label class=\"custom-control-label\" for=\"uom_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\"><i class=\"feather icon-x\"></i> Clear</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit UOM\" modalSubtitle= \"Please Select UOM For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/vendor/create-edit-vendor.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/vendor/create-edit-vendor.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo ? (_id?'Update Vendor':'New Vendor') : 'Vendor'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autoofflete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"customer_cust_no\" class=\"col-lg-2 col-form-label text-right\">Vendor ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n              </div>\r\n              <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" id=\"item_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"vendor.vend_no\" placeholder=\"\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n              </div>\r\n          </div>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\">\r\n              <ngb-tab title=\"Vandor\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    \r\n                    <div class=\"form-group row\">\r\n                      <label for=\"vend_title\" class=\"col-lg-2 col-form-label text-right\">Vandor</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"vend_title\" name=\"vend_title\" [(ngModel)]=\"vendor.vend_title\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"vend_short\" class=\"col-lg-1 col-form-label text-right\">Short:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"vend_short\" name=\"vend_short\" [(ngModel)]=\"vendor.vend_short\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"vend_Type\" class=\"col-lg-2 col-form-label text-right\">Vandor type:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"vend_type\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('type');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"vendor.vend_type\" required>\r\n                      </div>\r\n                      <label for=\"vend_term\" class=\"col-lg-1 col-form-label text-right\">Vandor term:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"vend_term\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(1,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('term');focus$[1].next($any($event).target.value)\" (click)=\"click$[1].next($any($event).target.value)\"  [(ngModel)]=\"vendor.vend_term\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"vend_term\" class=\"col-lg-2 col-form-label text-right\">Vandor Service:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"vend_service\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(2,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('service');focus$[2].next($any($event).target.value)\" (click)=\"click$[2].next($any($event).target.value)\"  [(ngModel)]=\"vendor.vend_service\" required>\r\n                      </div>\r\n                      <label for=\"vendor_vend_addr\" class=\"col-lg-1 col-form-label text-right\">Address:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"vendor_vend_addr\" name=\"vendor_vend_addr\" placeholder=\"\" [(ngModel)]=\"vendor.vend_addr\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"staff_disabled\" name=\"Disabled\" [(ngModel)]=\"vendor.vend_active\">\r\n                          <label class=\"custom-control-label\" for=\"staff_disabled\">Active</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <app-contact-detail #vandorContactDetail></app-contact-detail>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Contact\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"contactDetail_name\" class=\"col-lg-2 col-form-label text-right\">Contact Person:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"contactDetail_name\" name=\"contactDetail_name\" [(ngModel)]=\"contactDetail.name\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"contactDetail_nick\" class=\"col-lg-1 col-form-label text-right\">Nick:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"contactDetail_nick\" name=\"contactDetail_nick\" [(ngModel)]=\"contactDetail.nick\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  \r\n                    <div class=\"form-group row\">\r\n                      <label for=\"contactDetail_desig\" class=\"col-lg-2 col-form-label text-right\">Designation:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"vend_term\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(3,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('desig');focus$[3].next($any($event).target.value)\" (click)=\"click$[3].next($any($event).target.value)\"  [(ngModel)]=\"vendor.vend_term\" required>\r\n                      </div>\r\n                      <label for=\"off_phoneValue\" class=\"col-lg-1 col-form-label text-right\">Address:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"off_phoneValue\" name=\"phoneValue\" placeholder=\"\" [(ngModel)]=\"contactDetail.address\">\r\n                      </div>\r\n                     \r\n                    </div>\r\n                    <app-contact-detail #vandorContactDetail2></app-contact-detail>\r\n                    <app-contact-detail #vandorContactDetail3></app-contact-detail>\r\n              \r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Office\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    \r\n                    <div class=\"form-group row\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Office Title:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"officeDetail_title\" [(ngModel)]=\"officeDetail.title\" placeholder=\"\">\r\n                      </div>\r\n                    \r\n                      <label for=\"officeDetail_addr\" class=\"col-lg-1 col-form-label text-right\">Address:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"officeDetail_addr\" name=\"officeDetail_addr\" [(ngModel)]=\"officeDetail.addr\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"officeDetail_manager\" class=\"col-lg-2 col-form-label text-right\">Manager:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"officeDetail_manager\" name=\"officeDetail_manager\" [(ngModel)]=\"officeDetail.manager\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <app-contact-detail #vandorContactDetail4></app-contact-detail>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Address\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Address :</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Postal Code:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">State/Provinse:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">City:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Country:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Tax Info\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Tax Info\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Limit & Discount\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-lg-7\">\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Credit Limit:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1 text-right\">\r\n                                    <div class=\"vendom-control vendom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"vendom-control-input\" id=\"crlimitActivate\" name=\"\">\r\n                                    <label class=\"vendom-control-label\" for=\"crlimitActivate\">Activate</label>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Credit Terms:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Late Charges %:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1\">\r\n                                <span>(If any)</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Discount %:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1 text-right\">\r\n                                    <div class=\"vendom-control vendom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"vendom-control-input\" id=\"latechrgActivate\" name=\"\">\r\n                                        <label class=\"vendom-control-label\" for=\"latechrgActivate\">Activate</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-5\">\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"vendom-control vendom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"vendom-control-input\" id=\"pid\" name=\"\">\r\n                                        <label class=\"vendom-control-label\" for=\"pid\">Per Item Discount</label>\r\n                                    </div>\r\n                                    <div class=\"vendom-control vendom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"vendom-control-input\" id=\"btb\" name=\"\">\r\n                                        <label class=\"vendom-control-label\" for=\"btb\">Bill to Bill (Open Entry Aging Method)</label>\r\n                                    </div>\r\n                                    <div class=\"vendom-control vendom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"vendom-control-input\" id=\"isdisable\" name=\"\">\r\n                                        <label class=\"vendom-control-label\" for=\"isdisable\">Disabled</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Other Info\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Tax Info\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Alert\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Alert\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Image\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Image\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/voucher/create-edit-voucher.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/voucher/create-edit-voucher.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{_id?'Update Voucher':'New Voucher'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"voucher_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" id=\"voucher_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"Voucher.vc_no\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"vc_model\" class=\"col-lg-2 col-form-label text-right\">Voucher Model:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\"  name=\"vc_model\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('vcModel');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"Voucher.vc_model\" required>\r\n            </div>\r\n            <label for=\"vc_office\" class=\"col-lg-1 col-form-label text-right\">Voucher Type:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\"  name=\"vc_type\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(1,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('vcType');focus$[1].next($any($event).target.value)\" (click)=\"click$[1].next($any($event).target.value)\"  [(ngModel)]=\"Voucher.vc_type\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"vc_paymode\" class=\"col-lg-2 col-form-label text-right\">Payment Mode:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\"  name=\"vc_paymode\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(2,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('vcPay');focus$[2].next($any($event).target.value)\" (click)=\"click$[2].next($any($event).target.value)\"  [(ngModel)]=\"Voucher.vc_paymode\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"voucher_ordering\" class=\"col-lg-2 col-form-label text-right\">Date:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"voucher_ordering\" name=\"Ordering\" placeholder=\"\" [(ngModel)]=\"Voucher.vc_date\">\r\n            </div>\r\n            <label for=\"vc_office\" class=\"col-lg-1 col-form-label text-right\">Office:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"vc_office\" name=\"vc_office\" placeholder=\"\" [(ngModel)]=\"Voucher.vc_office\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"vehicle\" class=\"col-lg-2 col-form-label text-right\">Vehicle:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"vehicle\" name=\"vehicle\" placeholder=\"\" [(ngModel)]=\"vehicleInfoDto.vehicle\">\r\n            </div>\r\n            <label for=\"regno\" class=\"col-lg-1 col-form-label text-right\">Registration No:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"regno\" name=\"regno\" placeholder=\"\" [(ngModel)]=\"vehicleInfoDto.regno\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"driver\" class=\"col-lg-2 col-form-label text-right\">Driver:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"driver\" name=\"driver\" placeholder=\"\" [(ngModel)]=\"vehicleInfoDto.driver\">\r\n            </div>\r\n            <label for=\"dcnic\" class=\"col-lg-1 col-form-label text-right\">Driver cnic:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"dcnic\" name=\"dcnic\" placeholder=\"\" [(ngModel)]=\"vehicleInfoDto.dcnic\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"dphone\" class=\"col-lg-2 col-form-label text-right\">Driver phone:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"dphone\" name=\"dphone\" placeholder=\"\" [(ngModel)]=\"vehicleInfoDto.dphone\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"dcnic\" class=\"col-lg-2 col-form-label text-right\">Helper:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"dcnic\" name=\"dcnic\" placeholder=\"\" [(ngModel)]=\"vehicleInfoDto.helper\">\r\n            </div>\r\n            <label for=\"dcnic\" class=\"col-lg-1 col-form-label text-right\">Helper cnic:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"dcnic\" name=\"dcnic\" placeholder=\"\" [(ngModel)]=\"vehicleInfoDto.hcnic\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"dcnic\" class=\"col-lg-2 col-form-label text-right\">Helper phone:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"dcnic\" name=\"dcnic\" placeholder=\"\" [(ngModel)]=\"vehicleInfoDto.hphone\">\r\n            </div>\r\n            <label for=\"dcnic\" class=\"col-lg-1 col-form-label text-right\">Loader Name:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"dcnic\" name=\"dcnic\" placeholder=\"\" [(ngModel)]=\"loaderInfoDto.name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"dcnic\" class=\"col-lg-2 col-form-label text-right\">Loader Phone:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"dcnic\" name=\"dcnic\" placeholder=\"\" [(ngModel)]=\"loaderInfoDto.phone\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"dcnic\" class=\"col-lg-2 col-form-label text-right\">Load Time:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"dcnic\" name=\"dcnic\" placeholder=\"\" [(ngModel)]=\"Voucher.vc_load_time\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox pl-3 pt-1\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"voucher_disabled\" name=\"Disabled\" [(ngModel)]=\"Voucher.vc_track\">\r\n                <label class=\"custom-control-label pt-1\" for=\"voucher_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <!-- <button type=\"button\" class=\"btn btn-success mr-2\" (click)=\"getData();\"><i class=\"feather icon-edit\"></i> Edit</button> -->\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit Voucher\" modalSubtitle= \"Please Select Voucher For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n  "

/***/ }),

/***/ "./src/app/admin/setup/company/create-edit-company.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/setup/company/create-edit-company.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHVwL2NvbXBhbnkvY3JlYXRlLWVkaXQtY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/setup/company/create-edit-company.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/setup/company/create-edit-company.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateEditCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditCompanyComponent", function() { return CreateEditCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_company_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/company-dto */ "./src/app/shared/dtos/identity/company-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/contact-detail/contact-detail.component */ "./src/app/shared/components/contact-detail/contact-detail.component.ts");










let CreateEditCompanyComponent = class CreateEditCompanyComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.company = new src_app_shared_dtos_identity_company_dto__WEBPACK_IMPORTED_MODULE_5__["CompanyDto"]();
        this.phone = {};
        this.saving = false;
        this.itemList = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Company No", "field": "comp_no" },
            { "title": "Title", "field": "comp_title" },
            { "title": "Short", "field": "comp_short" }
        ];
    }
    ngOnInit() {
        this.phone.type = 'Email';
        this.company.comp_phones = [];
    }
    getData() {
        this.itemList = [];
        this._processDataService.getData("/api/companies").subscribe(response => {
            if (response.status === 1) {
                debugger;
                this.itemList = response.data;
                this.showDataModal.show(this.tableHeaders, this.itemList);
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/companies/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.company = response.data;
                this.company.comp_phones = response.data.comp_phones;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/companies/" + this.company.comp_no).subscribe(response => {
            if (response.status === 1) {
                this.company = response.data;
                this.company.comp_phones = response.data.comp_phones;
            }
            else {
                this.notify.error('Search item not found', 'Not Found');
                this.reset();
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/company").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.company.comp_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(saveForm) {
        debugger;
        this.saving = true;
        let url_ = "/api/companies/";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/companies/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this.company.comp_phones = this.contactDetail.contacts;
        this.company.comp_city = "609a786c944ebf09cc34c8f9";
        this.company.comp_owner = "609bc492577f0418f8c37d34";
        this.company.comp_manager = "609bc492577f0418f8c37d34";
        this.company.comp_ho = "609a7fa71737dc36d8be4664";
        this._processDataService.create(url_, this.company).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status == 1) {
                this.company.comp_no = response.data.item_no + 1;
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.company).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status == 1) {
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/companies/" + this._id).subscribe(result => {
                    this.notify.success('Deleted Successfully.', 'Deleted!');
                    this.reset();
                });
            }
        });
    }
    reset() {
        this.company = new src_app_shared_dtos_identity_company_dto__WEBPACK_IMPORTED_MODULE_5__["CompanyDto"]();
        this._id = null;
        this.isNo = false;
    }
};
CreateEditCompanyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditCompanyComponent.prototype, "showDataModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactDetail', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailComponent"])
], CreateEditCompanyComponent.prototype, "contactDetail", void 0);
CreateEditCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-company',
        template: __webpack_require__(/*! raw-loader!./create-edit-company.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/setup/company/create-edit-company.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-company.component.scss */ "./src/app/admin/setup/company/create-edit-company.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditCompanyComponent);



/***/ }),

/***/ "./src/app/admin/setup/location/location.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/setup/location/location.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHVwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/setup/location/location.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/setup/location/location.component.ts ***!
  \************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_setup_location_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/setup/location-dto */ "./src/app/shared/dtos/setup/location-dto.ts");
/* harmony import */ var src_app_shared_services_setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/setup.service */ "./src/app/shared/services/setup.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let LocationComponent = class LocationComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.typeList = ['Country', 'State', 'City'];
        this.countries = [];
        this.states = [];
        this.location = new src_app_shared_dtos_setup_location_dto__WEBPACK_IMPORTED_MODULE_5__["LocationDto"]();
        this.saving = false;
        this.locationList = [];
        this.showState = false;
        this.showCountry = false;
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Location No", "field": "loc_no" },
            { "title": "Location Title", "field": "loc_title" },
            { "title": "Location Type", "field": "loc_type" }
        ];
        this.location.loc_active = true;
    }
    getData() {
        this.locationList = [];
        this._processDataService.getData("/api/locations").subscribe(response => {
            if (response.status === 1) {
                this.locationList = response.data;
                this.showDataModal.show(this.tableHeaders, this.locationList);
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/locations/id/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.location = response.data;
                this._id = event._id;
                this.isNo = true;
                this.getLocation(this.location.loc_type);
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/locations/no/" + this.location.loc_no).subscribe(response => {
            if (response.status === 1) {
                this.location = response.data;
                this._id = response.data._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
                this.reset();
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/Location").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.location.loc_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(saveForm) {
        debugger;
        switch (this.location.loc_type) {
            case 'State':
                this.location.loc_parent = this.country.id;
                break;
            case 'City':
                this.location.loc_parent = this.state.id;
                break;
        }
        this.location.loc_geo = { lat: 0, long: 0 };
        this.saving = true;
        let url_ = "/api/locations";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/locations/id/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this._processDataService.create(url_, this.location).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            debugger;
            if (response.status == 1) {
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.location).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                this.notify.success("Update Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/locations/" + this._id).subscribe(result => {
                    if (result.status === 1) {
                        this.notify.success('Deleted Successfully.', 'Deleted!');
                        this.reset();
                    }
                    else {
                        this.message.fire("Error", result.message, "error");
                    }
                });
            }
        });
    }
    reset() {
        this.location = new src_app_shared_dtos_setup_location_dto__WEBPACK_IMPORTED_MODULE_5__["LocationDto"]();
        this._id = null;
        this.isNo = false;
        this.location.loc_active = true;
        this.saving = false;
    }
    setTypeheadList(param) {
        switch (param) {
            case 'type':
                this.typeheadlist = this.typeList;
                break;
            case 'country':
                this.typeheadlist = this.countries;
                break;
            case 'state':
                this.typeheadlist = this.states;
                break;
        }
    }
    getLocation(param) {
        switch (param) {
            case 'State':
                this.showState = false;
                this.getLocationData('country');
                break;
            case 'City':
                this.showCountry = false;
                this.getLocationData('state');
                break;
            default:
                this.showState = false;
                this.showCountry = false;
                break;
        }
    }
    getLocationData(param) {
        debugger;
        this._processDataService.getData("/api/locations/" + param).subscribe(response => {
            debugger;
            if (response.status === 1) {
                this.states = [];
                this.countries = [];
                var itemList = [];
                response.data.forEach(loc => {
                    var item = { id: loc._id, name: loc.loc_title };
                    itemList.push(item);
                });
                switch (param) {
                    case 'country':
                        this.countries = itemList;
                        this.showCountry = true;
                        break;
                    case 'state':
                        this.states = itemList;
                        this.showState = true;
                        break;
                }
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
};
LocationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_setup_service__WEBPACK_IMPORTED_MODULE_6__["SetupService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], LocationComponent.prototype, "showDataModal", void 0);
LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: __webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/setup/location/location.component.html"),
        styles: [__webpack_require__(/*! ./location.component.scss */ "./src/app/admin/setup/location/location.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_setup_service__WEBPACK_IMPORTED_MODULE_6__["SetupService"]])
], LocationComponent);



/***/ }),

/***/ "./src/app/admin/setup/office/create-edit-office.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/setup/office/create-edit-office.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHVwL29mZmljZS9jcmVhdGUtZWRpdC1vZmZpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/setup/office/create-edit-office.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/setup/office/create-edit-office.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateEditOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditOfficeComponent", function() { return CreateEditOfficeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_office_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/office-dto */ "./src/app/shared/dtos/identity/office-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/contact-detail/contact-detail.component */ "./src/app/shared/components/contact-detail/contact-detail.component.ts");










let CreateEditOfficeComponent = class CreateEditOfficeComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.office = new src_app_shared_dtos_identity_office_dto__WEBPACK_IMPORTED_MODULE_5__["OfficeDto"]();
        this.phone = {};
        this.saving = false;
        this.itemList = [];
        this._id = null;
        this.isNo = false;
        this.cities = [];
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Office No", "field": "off_no" },
            { "title": "Title", "field": "off_title" },
            { "title": "City", "field": "off_city" }
        ];
    }
    ngOnInit() {
        this.getLocationData();
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/office").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.office.off_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getData() {
        debugger;
        this.itemList = [];
        this._processDataService.getData("/api/offices").subscribe(response => {
            if (response.status === 1) {
                this.itemList = response.data;
                this.showDataModal.show(this.tableHeaders, this.itemList);
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/offices/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.office = response.data;
                this.contactDetail.contacts = response.data.off_phones;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/offices/" + this.office.off_no).subscribe(response => {
            if (response.status === 1) {
                this.office = response.data;
                this.contactDetail.contacts = response.data.off_phones;
            }
            else {
                this.notify.error('Search item not found', 'Not Found');
                this.reset();
            }
        });
    }
    save(saveForm) {
        debugger;
        this.office.off_city = this.city.id;
        this.office.off_phones = this.contactDetail.contacts;
        this.saving = true;
        let url_ = "/api/offices/";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/offices/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this.office.off_company = "609a786c944ebf09cc34c8f9";
        this.office.off_manager = "609a7fa71737dc36d8be4664";
        this.office.off_company = "609c01f4c645ce303c655ad2";
        this._processDataService.create(url_, this.office).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status == 1) {
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.office).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                this.notify.success("Update Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/offices/" + this._id).subscribe(response => {
                    if (response.status === 1) {
                        this.notify.success('Deleted Successfully.', 'Deleted!');
                        this.reset();
                    }
                    else {
                        this.message.fire("Error", response.message, "error");
                    }
                });
            }
        });
    }
    reset() {
        this.office = new src_app_shared_dtos_identity_office_dto__WEBPACK_IMPORTED_MODULE_5__["OfficeDto"]();
        this._id = null;
        this.isNo = false;
    }
    setTypeheadList(param) {
        switch (param) {
            case 'city':
                this.typeheadlist = this.cities;
                break;
        }
    }
    getLocationData() {
        this._processDataService.getData("/api/locations/city").subscribe(response => {
            debugger;
            this.cities = [];
            if (response.status === 1) {
                response.data.forEach(loc => {
                    var item = { id: loc._id, name: loc.loc_title };
                    this.cities.push(item);
                });
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
};
CreateEditOfficeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditOfficeComponent.prototype, "showDataModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactDetail', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailComponent"])
], CreateEditOfficeComponent.prototype, "contactDetail", void 0);
CreateEditOfficeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-company',
        template: __webpack_require__(/*! raw-loader!./create-edit-office.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/setup/office/create-edit-office.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-office.component.scss */ "./src/app/admin/setup/office/create-edit-office.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditOfficeComponent);



/***/ }),

/***/ "./src/app/admin/setup/setup-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/setup/setup-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupRoutingModule", function() { return SetupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location/location.component */ "./src/app/admin/setup/location/location.component.ts");
/* harmony import */ var _company_create_edit_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company/create-edit-company.component */ "./src/app/admin/setup/company/create-edit-company.component.ts");
/* harmony import */ var _office_create_edit_office_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./office/create-edit-office.component */ "./src/app/admin/setup/office/create-edit-office.component.ts");
/* harmony import */ var _staff_create_edit_staff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff/create-edit-staff.component */ "./src/app/admin/setup/staff/create-edit-staff.component.ts");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'location',
                component: _location_location_component__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"]
            },
            {
                path: 'company',
                component: _company_create_edit_company_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditCompanyComponent"]
            },
            {
                path: 'office',
                component: _office_create_edit_office_component__WEBPACK_IMPORTED_MODULE_5__["CreateEditOfficeComponent"]
            },
            {
                path: 'staff',
                component: _staff_create_edit_staff_component__WEBPACK_IMPORTED_MODULE_6__["CreateEditStaffComponent"]
            }
        ]
    }
];
let SetupRoutingModule = class SetupRoutingModule {
};
SetupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SetupRoutingModule);



/***/ }),

/***/ "./src/app/admin/setup/setup.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/setup/setup.module.ts ***!
  \*********************************************/
/*! exports provided: SetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-routing.module */ "./src/app/admin/setup/setup-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var src_app_shared_components_cargo_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/cargo-shared.module */ "./src/app/shared/components/cargo-shared.module.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location/location.component */ "./src/app/admin/setup/location/location.component.ts");
/* harmony import */ var _company_create_edit_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/create-edit-company.component */ "./src/app/admin/setup/company/create-edit-company.component.ts");
/* harmony import */ var _office_create_edit_office_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./office/create-edit-office.component */ "./src/app/admin/setup/office/create-edit-office.component.ts");
/* harmony import */ var _staff_create_edit_staff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./staff/create-edit-staff.component */ "./src/app/admin/setup/staff/create-edit-staff.component.ts");












let SetupModule = class SetupModule {
};
SetupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _location_location_component__WEBPACK_IMPORTED_MODULE_8__["LocationComponent"],
            _company_create_edit_company_component__WEBPACK_IMPORTED_MODULE_9__["CreateEditCompanyComponent"],
            _office_create_edit_office_component__WEBPACK_IMPORTED_MODULE_10__["CreateEditOfficeComponent"],
            _staff_create_edit_staff_component__WEBPACK_IMPORTED_MODULE_11__["CreateEditStaffComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SetupRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_components_cargo_shared_module__WEBPACK_IMPORTED_MODULE_7__["CargoSharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot()
        ]
    })
], SetupModule);



/***/ }),

/***/ "./src/app/admin/setup/staff/create-edit-staff.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/setup/staff/create-edit-staff.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHVwL3N0YWZmL2NyZWF0ZS1lZGl0LXN0YWZmLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/setup/staff/create-edit-staff.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/setup/staff/create-edit-staff.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateEditStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditStaffComponent", function() { return CreateEditStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_staff_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/staff-dto */ "./src/app/shared/dtos/identity/staff-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/contact-detail/contact-detail.component */ "./src/app/shared/components/contact-detail/contact-detail.component.ts");










let CreateEditStaffComponent = class CreateEditStaffComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.staff = new src_app_shared_dtos_identity_staff_dto__WEBPACK_IMPORTED_MODULE_5__["StaffDto"]();
        this.phone = {};
        this.saving = false;
        this.itemList = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Staff No", "field": "stf_no" },
            { "title": "Staff Name", "field": "stf_name" },
            { "title": "nick", "field": "stf_nick" }
        ];
    }
    ngOnInit() {
        this.phone.type = 'Email';
        this.staff.stf_contacts = [];
    }
    getData() {
        debugger;
        this.itemList = [];
        this._processDataService.getData("/api/staffs").subscribe(response => {
            if (response.status === 1) {
                this.itemList = response.data;
                this.showDataModal.show(this.tableHeaders, this.itemList);
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/staffs/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.staff = response.data;
                this.contactDetail.contacts = response.data.stf_contacts;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/staff").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.staff.stf_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/staffs/" + this.staff.stf_no).subscribe(response => {
            if (response.status === 1) {
                this.staff = response.data;
                this.contactDetail.contacts = response.data.stf_contacts;
            }
            else {
                this.notify.error('Search item not found', 'Not Found');
            }
        });
    }
    save(saveForm) {
        debugger;
        this.saving = true;
        this.staff.stf_contacts = this.contactDetail.contacts;
        let url_ = "/api/staffs/";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/staffs/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this._processDataService.create(url_, this.staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status == 1) {
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                this.notify.success("Update Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/staffs/" + this._id).subscribe(result => {
                    if (result.status === 1) {
                        this.notify.success('Deleted Successfully.', 'Deleted!');
                        this.reset();
                    }
                    else {
                        this.message.fire("Error", result.message, "error");
                    }
                });
            }
        });
    }
    reset() {
        this.staff = new src_app_shared_dtos_identity_staff_dto__WEBPACK_IMPORTED_MODULE_5__["StaffDto"]();
        this._id = null;
        this.isNo = false;
        this.contactDetail.contacts = [];
        this.contactDetail.contacts.push(this.phone);
    }
};
CreateEditStaffComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditStaffComponent.prototype, "showDataModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactDetail', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailComponent"])
], CreateEditStaffComponent.prototype, "contactDetail", void 0);
CreateEditStaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-company',
        template: __webpack_require__(/*! raw-loader!./create-edit-staff.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/setup/staff/create-edit-staff.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-staff.component.scss */ "./src/app/admin/setup/staff/create-edit-staff.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditStaffComponent);



/***/ }),

/***/ "./src/app/main/setup/account-type/create-edit-account-type.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/setup/account-type/create-edit-account-type.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvYWNjb3VudC10eXBlL2NyZWF0ZS1lZGl0LWFjY291bnQtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/setup/account-type/create-edit-account-type.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/setup/account-type/create-edit-account-type.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateEditAccountTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditAccountTypeComponent", function() { return CreateEditAccountTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditAccountTypeComponent = class CreateEditAccountTypeComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditAccountTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-account-type',
        template: __webpack_require__(/*! raw-loader!./create-edit-account-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/account-type/create-edit-account-type.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-account-type.component.scss */ "./src/app/main/setup/account-type/create-edit-account-type.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditAccountTypeComponent);



/***/ }),

/***/ "./src/app/main/setup/ar-aging/ar-aging.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/setup/ar-aging/ar-aging.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvYXItYWdpbmcvYXItYWdpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/setup/ar-aging/ar-aging.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/setup/ar-aging/ar-aging.component.ts ***!
  \***********************************************************/
/*! exports provided: ARAgingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARAgingComponent", function() { return ARAgingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ARAgingComponent = class ARAgingComponent {
    constructor() { }
    ngOnInit() {
    }
};
ARAgingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ar-aging',
        template: __webpack_require__(/*! raw-loader!./ar-aging.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/ar-aging/ar-aging.component.html"),
        styles: [__webpack_require__(/*! ./ar-aging.component.scss */ "./src/app/main/setup/ar-aging/ar-aging.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ARAgingComponent);



/***/ }),

/***/ "./src/app/main/setup/bank/create-edit-bank.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/setup/bank/create-edit-bank.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvYmFuay9jcmVhdGUtZWRpdC1iYW5rLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/bank/create-edit-bank.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/setup/bank/create-edit-bank.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateEditBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditBankComponent", function() { return CreateEditBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditBankComponent = class CreateEditBankComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-bank',
        template: __webpack_require__(/*! raw-loader!./create-edit-bank.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/bank/create-edit-bank.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-bank.component.scss */ "./src/app/main/setup/bank/create-edit-bank.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditBankComponent);



/***/ }),

/***/ "./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvYmlsdHktZXhwZW5zZS9jcmVhdGUtZWRpdC1iaWx0eS1leHBlbnNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateEditBiltyExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditBiltyExpenseComponent", function() { return CreateEditBiltyExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditBiltyExpenseComponent = class CreateEditBiltyExpenseComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditBiltyExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-bilty-expense',
        template: __webpack_require__(/*! raw-loader!./create-edit-bilty-expense.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-bilty-expense.component.scss */ "./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditBiltyExpenseComponent);



/***/ }),

/***/ "./src/app/main/setup/bilty/create-edit-bilty.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/setup/bilty/create-edit-bilty.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvYmlsdHkvY3JlYXRlLWVkaXQtYmlsdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/setup/bilty/create-edit-bilty.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/setup/bilty/create-edit-bilty.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateEditBiltyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditBiltyComponent", function() { return CreateEditBiltyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_bilities_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/bilities-dto */ "./src/app/shared/dtos/identity/bilities-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let CreateEditBiltyComponent = class CreateEditBiltyComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.btModelList = ['Retail', 'LCL', 'FCL'];
        this.btModeList = ['Regular', 'Godown'];
        this.btTypeList = ['Book', 'Deliver', 'Return'];
        this.btPaymodeList = ['To-Pay', 'Paid'];
        this.billtiesDtoList = [];
        this.billtiesDto = new src_app_shared_dtos_identity_bilities_dto__WEBPACK_IMPORTED_MODULE_5__["BilltiesDto"]();
        this.itemPackListDto = [];
        this.itemPackDto = {};
        this.saving = false;
        this.itemList = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Doc No", "field": "bt_no" },
            { "title": "Model", "field": "bt_model" },
            { "title": "Mode", "field": "bt_mode" }
        ];
    }
    ngOnInit() {
        this.insertBiltyItem();
    }
    getData() {
        this.billtiesDtoList = [];
        this._processDataService.getData("/api/billties").subscribe(response => {
            if (response.status === 1) {
                this.billtiesDtoList = response.data;
                this.showDataModal.show(this.tableHeaders, this.itemList);
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/billties/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.billtiesDto = response.data;
                this.itemPackListDto = this.billtiesDto.bt_items;
                this._id = event._id;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/billties/" + this.billtiesDto.bt_no).subscribe(response => {
            if (response.status === 1) {
                this.billtiesDto = response.data;
                this.isNo = true;
                this.itemPackListDto = this.billtiesDto.bt_items;
                //this._id=event._id;
            }
            else {
                this.message.fire("Error", response.message, "error");
                this.reset();
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/bilty").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.billtiesDto.bt_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(saveForm) {
        debugger;
        this.saving = true;
        let url_ = "/api/billties/";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/billties/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this.billtiesDto.bt_items = this.itemPackListDto;
        this._processDataService.create(url_, this.billtiesDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.billtiesDto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                this.notify.success("Update Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    //Add dynamic grid row
    insertBiltyItem() {
        var itempack = {};
        this.itemPackListDto.push({
            itempack: itempack
        });
        console.log(this.itemPackListDto);
    }
    //Delete dynamic grid row
    deleteBiltyItem(index) {
        this.itemPackListDto.splice(index, 1);
    }
    setTypeheadList(param) {
        switch (param) {
            case 'btModel':
                this.typeheadlist = this.btModelList;
                break;
            case 'btmode':
                this.typeheadlist = this.btModeList;
                break;
            case 'btType':
                this.typeheadlist = this.btTypeList;
                break;
            case 'btPaymode':
                this.typeheadlist = this.btPaymodeList;
                break;
        }
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/bilty/" + this._id).subscribe(result => {
                    if (result.status === 1) {
                        this.notify.success('Deleted Successfully.', 'Deleted!');
                        this.reset();
                    }
                    else {
                        this.message.fire("Error", result.message, "error");
                    }
                });
            }
        });
    }
    reset() {
        this.billtiesDto = new src_app_shared_dtos_identity_bilities_dto__WEBPACK_IMPORTED_MODULE_5__["BilltiesDto"]();
        this._id = null;
        this.isNo = false;
    }
};
CreateEditBiltyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditBiltyComponent.prototype, "showDataModal", void 0);
CreateEditBiltyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-bilty',
        template: __webpack_require__(/*! raw-loader!./create-edit-bilty.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/bilty/create-edit-bilty.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-bilty.component.scss */ "./src/app/main/setup/bilty/create-edit-bilty.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditBiltyComponent);



/***/ }),

/***/ "./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvYm9va2luZy1iaWxsLXQvY3JlYXRlLWVkaXQtYm9va2luZy1iaWxsLVQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateEditBookingBillTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditBookingBillTComponent", function() { return CreateEditBookingBillTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditBookingBillTComponent = class CreateEditBookingBillTComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditBookingBillTComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-bill-T',
        template: __webpack_require__(/*! raw-loader!./create-edit-booking-bill-T.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-booking-bill-T.component.scss */ "./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditBookingBillTComponent);



/***/ }),

/***/ "./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvYm9va2luZy12b3VjaGVyL2NyZWF0ZS1lZGl0LWJvb2tpbmctdm91Y2hlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateEditBookingVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditBookingVoucherComponent", function() { return CreateEditBookingVoucherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditBookingVoucherComponent = class CreateEditBookingVoucherComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditBookingVoucherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-voucher',
        template: __webpack_require__(/*! raw-loader!./create-edit-booking-voucher.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-booking-voucher.component.scss */ "./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditBookingVoucherComponent);



/***/ }),

/***/ "./src/app/main/setup/challan/create-edit-challan.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/setup/challan/create-edit-challan.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvY2hhbGxhbi9jcmVhdGUtZWRpdC1jaGFsbGFuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/challan/create-edit-challan.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup/challan/create-edit-challan.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateEditChallanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditChallanComponent", function() { return CreateEditChallanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditChallanComponent = class CreateEditChallanComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditChallanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-challan',
        template: __webpack_require__(/*! raw-loader!./create-edit-challan.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/challan/create-edit-challan.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-challan.component.scss */ "./src/app/main/setup/challan/create-edit-challan.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditChallanComponent);



/***/ }),

/***/ "./src/app/main/setup/contract/create-edit-contract.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/setup/contract/create-edit-contract.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvY29udHJhY3QvY3JlYXRlLWVkaXQtY29udHJhY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/setup/contract/create-edit-contract.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/setup/contract/create-edit-contract.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateEditContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditContractComponent", function() { return CreateEditContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_contract_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/contract-dto */ "./src/app/shared/dtos/identity/contract-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);









let CreateEditContractComponent = class CreateEditContractComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.cnModeList = ['None', 'All', 'LCL', 'FCL'];
        this.Contract = new src_app_shared_dtos_identity_contract_dto__WEBPACK_IMPORTED_MODULE_5__["ContractDto"]();
        this.rateListDto = [];
        this.saving = false;
        this.contractList = [];
        this.uoms = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "cn_no", "hide": true },
            { "title": "Title", "field": "cn_title" },
            { "title": "Short title", "field": "cn_short" },
            { "title": "Customer", "field": "cn_customer" }
        ];
        this.Contract.cn_cbm = false;
    }
    ngOnInit() {
        this.Contract.cn_cbm = false;
        this.insertRateItem();
        this.getUOM();
    }
    insertRateItem() {
        var itempack = {};
        this.rateListDto.push({
            rate: itempack
        });
        console.log(this.rateListDto);
    }
    //Delete dynamic grid row
    deleteRateItem(index) {
        this.rateListDto.splice(index, 1);
    }
    getUOM() {
        debugger;
        this._processDataService.getData("/api/uoms").subscribe(response => {
            if (response.status === 1) {
                this.uoms = response.data;
                this.typeheadlist = this.uoms;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getData() {
        this.contractList = [];
        this._processDataService.getData("/api/contracts").subscribe(response => {
            if (response.status === 1) {
                this.contractList = response.data;
                this.showDataModal.show(this.tableHeaders, this.contractList);
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/contracts/id/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.Contract = response.data;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/contracts/no/" + this.Contract.cn_no).subscribe(response => {
            if (response.status === 1) {
                this.Contract = response.data;
                this._id = response.data._id;
                this.isNo = true;
            }
            else {
                this.reset();
                this.getNextNo();
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/contract").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.Contract.cn_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(saveForm) {
        this.Contract.cn_intra_ct = this.rateListDto;
        this.saving = true;
        console.log(this.Contract);
        let url_ = "/api/contracts";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/contracts/id/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
        this.getUOM();
    }
    create(url_, saveForm) {
        this._processDataService.create(url_, this.Contract).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            debugger;
            if (response.status == 1) {
                this.Contract.cn_no = response.data.cn_no + 1;
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.Contract).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                this.notify.success("Update Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/contracts/" + this._id).subscribe(result => {
                    if (result.status === 1) {
                        this.notify.success('Deleted Successfully.', 'Deleted!');
                        this.reset();
                    }
                    else {
                        this.message.fire("Error", result.message, "error");
                    }
                });
            }
        });
    }
    reset() {
        this.Contract = new src_app_shared_dtos_identity_contract_dto__WEBPACK_IMPORTED_MODULE_5__["ContractDto"]();
        this._id = null;
        this.isNo = false;
    }
    setTypeheadList(param) {
        switch (param) {
            case 'cnType':
                this.typeheadlist = this.cnModeList;
                break;
        }
    }
};
CreateEditContractComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditContractComponent.prototype, "showDataModal", void 0);
CreateEditContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-contract',
        template: __webpack_require__(/*! raw-loader!./create-edit-contract.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/contract/create-edit-contract.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-contract.component.scss */ "./src/app/main/setup/contract/create-edit-contract.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditContractComponent);



/***/ }),

/***/ "./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvaW52b2ljZS1vcGVuaW5nL2NyZWF0ZS1lZGl0LWludm9pY2Utb3BlbmluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateEditInvoiceOpeningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditInvoiceOpeningComponent", function() { return CreateEditInvoiceOpeningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditInvoiceOpeningComponent = class CreateEditInvoiceOpeningComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditInvoiceOpeningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-invoice-opening',
        template: __webpack_require__(/*! raw-loader!./create-edit-invoice-opening.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-invoice-opening.component.scss */ "./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditInvoiceOpeningComponent);



/***/ }),

/***/ "./src/app/main/setup/invoice/create-edit-invoice.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/setup/invoice/create-edit-invoice.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvaW52b2ljZS9jcmVhdGUtZWRpdC1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/invoice/create-edit-invoice.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup/invoice/create-edit-invoice.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateEditInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditInvoiceComponent", function() { return CreateEditInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditInvoiceComponent = class CreateEditInvoiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-invoice',
        template: __webpack_require__(/*! raw-loader!./create-edit-invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/invoice/create-edit-invoice.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-invoice.component.scss */ "./src/app/main/setup/invoice/create-edit-invoice.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditInvoiceComponent);



/***/ }),

/***/ "./src/app/main/setup/port/create-edit-port.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/setup/port/create-edit-port.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvcG9ydC9jcmVhdGUtZWRpdC1wb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/port/create-edit-port.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/setup/port/create-edit-port.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateEditPortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditPortComponent", function() { return CreateEditPortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditPortComponent = class CreateEditPortComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditPortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-port',
        template: __webpack_require__(/*! raw-loader!./create-edit-port.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/port/create-edit-port.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-port.component.scss */ "./src/app/main/setup/port/create-edit-port.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditPortComponent);



/***/ }),

/***/ "./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvcmVjZWl2aW5nLWJpbGwtdG8tYmlsbC9jcmVhdGUtZWRpdC1yZWNlaXZpbmctYmlsbC10by1iaWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateEditReceivingBillToBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditReceivingBillToBillComponent", function() { return CreateEditReceivingBillToBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditReceivingBillToBillComponent = class CreateEditReceivingBillToBillComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditReceivingBillToBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-receiving-bill-to-bill',
        template: __webpack_require__(/*! raw-loader!./create-edit-receiving-bill-to-bill.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-receiving-bill-to-bill.component.scss */ "./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditReceivingBillToBillComponent);



/***/ }),

/***/ "./src/app/main/setup/setup-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/setup/setup-routing.module.ts ***!
  \****************************************************/
/*! exports provided: SetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupRoutingModule", function() { return SetupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _contract_create_edit_contract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract/create-edit-contract.component */ "./src/app/main/setup/contract/create-edit-contract.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _uom_create_edit_uom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uom/create-edit-uom.component */ "./src/app/main/setup/uom/create-edit-uom.component.ts");
/* harmony import */ var _shippingline_create_edit_shippingline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shippingline/create-edit-shippingline.component */ "./src/app/main/setup/shippingline/create-edit-shippingline.component.ts");
/* harmony import */ var _transporter_create_edit_transporter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transporter/create-edit-transporter.component */ "./src/app/main/setup/transporter/create-edit-transporter.component.ts");
/* harmony import */ var _bilty_create_edit_bilty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bilty/create-edit-bilty.component */ "./src/app/main/setup/bilty/create-edit-bilty.component.ts");
/* harmony import */ var _invoice_opening_create_edit_invoice_opening_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoice-opening/create-edit-invoice-opening.component */ "./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.ts");
/* harmony import */ var _challan_create_edit_challan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./challan/create-edit-challan.component */ "./src/app/main/setup/challan/create-edit-challan.component.ts");
/* harmony import */ var _bilty_expense_create_edit_bilty_expense_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bilty-expense/create-edit-bilty-expense.component */ "./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.ts");
/* harmony import */ var _receiving_bill_to_bill_create_edit_receiving_bill_to_bill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component */ "./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.ts");
/* harmony import */ var _port_create_edit_port_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./port/create-edit-port.component */ "./src/app/main/setup/port/create-edit-port.component.ts");
/* harmony import */ var _shipper_create_edit_shipper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shipper/create-edit-shipper.component */ "./src/app/main/setup/shipper/create-edit-shipper.component.ts");
/* harmony import */ var _bank_create_edit_bank_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bank/create-edit-bank.component */ "./src/app/main/setup/bank/create-edit-bank.component.ts");
/* harmony import */ var _account_type_create_edit_account_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./account-type/create-edit-account-type.component */ "./src/app/main/setup/account-type/create-edit-account-type.component.ts");
/* harmony import */ var _invoice_create_edit_invoice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./invoice/create-edit-invoice.component */ "./src/app/main/setup/invoice/create-edit-invoice.component.ts");
/* harmony import */ var _ar_aging_ar_aging_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ar-aging/ar-aging.component */ "./src/app/main/setup/ar-aging/ar-aging.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/main/setup/supplier/supplier.component.ts");
/* harmony import */ var _booking_voucher_create_edit_booking_voucher_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./booking-voucher/create-edit-booking-voucher.component */ "./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.ts");
/* harmony import */ var _booking_bill_t_create_edit_booking_bill_T_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./booking-bill-t/create-edit-booking-bill-T.component */ "./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.ts");
/* harmony import */ var _vendor_create_edit_vendor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vendor/create-edit-vendor.component */ "./src/app/main/setup/vendor/create-edit-vendor.component.ts");
/* harmony import */ var _voucher_create_edit_voucher_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./voucher/create-edit-voucher.component */ "./src/app/main/setup/voucher/create-edit-voucher.component.ts");























const routes = [
    {
        path: '',
        children: [
            {
                path: 'uoms',
                component: _uom_create_edit_uom_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditUOMComponent"]
            },
            {
                path: 'ar-aging',
                component: _ar_aging_ar_aging_component__WEBPACK_IMPORTED_MODULE_17__["ARAgingComponent"]
            },
            {
                path: 'vendor',
                component: _vendor_create_edit_vendor_component__WEBPACK_IMPORTED_MODULE_21__["CreateEditVendorComponent"]
            },
            {
                path: 'supplier',
                component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_18__["SupplierComponent"]
            },
            {
                path: 'contract',
                component: _contract_create_edit_contract_component__WEBPACK_IMPORTED_MODULE_1__["CreateEditContractComponent"]
            },
            {
                path: 'voucher',
                component: _voucher_create_edit_voucher_component__WEBPACK_IMPORTED_MODULE_22__["CreateEditVoucherComponent"]
            },
            {
                path: 'bank',
                component: _bank_create_edit_bank_component__WEBPACK_IMPORTED_MODULE_14__["CreateEditBankComponent"]
            },
            {
                path: 'account-type',
                component: _account_type_create_edit_account_type_component__WEBPACK_IMPORTED_MODULE_15__["CreateEditAccountTypeComponent"]
            },
            {
                path: 'port',
                component: _port_create_edit_port_component__WEBPACK_IMPORTED_MODULE_12__["CreateEditPortComponent"]
            },
            {
                path: 'shipper',
                component: _shipper_create_edit_shipper_component__WEBPACK_IMPORTED_MODULE_13__["CreateEditShipperComponent"]
            },
            {
                path: 'shippingline',
                component: _shippingline_create_edit_shippingline_component__WEBPACK_IMPORTED_MODULE_5__["CreateEditShippinglineComponent"]
            },
            {
                path: 'transporter',
                component: _transporter_create_edit_transporter_component__WEBPACK_IMPORTED_MODULE_6__["CreateEditTransporterComponent"]
            },
            {
                path: 'bilty',
                component: _bilty_create_edit_bilty_component__WEBPACK_IMPORTED_MODULE_7__["CreateEditBiltyComponent"]
            },
            {
                path: 'bilty-expense',
                component: _bilty_expense_create_edit_bilty_expense_component__WEBPACK_IMPORTED_MODULE_10__["CreateEditBiltyExpenseComponent"]
            },
            {
                path: 'receiving-bill-to-bill',
                component: _receiving_bill_to_bill_create_edit_receiving_bill_to_bill_component__WEBPACK_IMPORTED_MODULE_11__["CreateEditReceivingBillToBillComponent"]
            },
            {
                path: 'invoice-opening',
                component: _invoice_opening_create_edit_invoice_opening_component__WEBPACK_IMPORTED_MODULE_8__["CreateEditInvoiceOpeningComponent"]
            },
            {
                path: 'invoice',
                component: _invoice_create_edit_invoice_component__WEBPACK_IMPORTED_MODULE_16__["CreateEditInvoiceComponent"]
            },
            {
                path: 'challan',
                component: _challan_create_edit_challan_component__WEBPACK_IMPORTED_MODULE_9__["CreateEditChallanComponent"]
            },
            {
                path: 'booking-voucher',
                component: _booking_voucher_create_edit_booking_voucher_component__WEBPACK_IMPORTED_MODULE_19__["CreateEditBookingVoucherComponent"]
            },
            {
                path: 'booking-bill-t',
                component: _booking_bill_t_create_edit_booking_bill_T_component__WEBPACK_IMPORTED_MODULE_20__["CreateEditBookingBillTComponent"]
            }
        ]
    }
];
let SetupRoutingModule = class SetupRoutingModule {
};
SetupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SetupRoutingModule);



/***/ }),

/***/ "./src/app/main/setup/setup.module.ts":
/*!********************************************!*\
  !*** ./src/app/main/setup/setup.module.ts ***!
  \********************************************/
/*! exports provided: SetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-routing.module */ "./src/app/main/setup/setup-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _shippingline_create_edit_shippingline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shippingline/create-edit-shippingline.component */ "./src/app/main/setup/shippingline/create-edit-shippingline.component.ts");
/* harmony import */ var _transporter_create_edit_transporter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transporter/create-edit-transporter.component */ "./src/app/main/setup/transporter/create-edit-transporter.component.ts");
/* harmony import */ var _uom_create_edit_uom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uom/create-edit-uom.component */ "./src/app/main/setup/uom/create-edit-uom.component.ts");
/* harmony import */ var _bilty_create_edit_bilty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bilty/create-edit-bilty.component */ "./src/app/main/setup/bilty/create-edit-bilty.component.ts");
/* harmony import */ var _invoice_opening_create_edit_invoice_opening_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./invoice-opening/create-edit-invoice-opening.component */ "./src/app/main/setup/invoice-opening/create-edit-invoice-opening.component.ts");
/* harmony import */ var _challan_create_edit_challan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./challan/create-edit-challan.component */ "./src/app/main/setup/challan/create-edit-challan.component.ts");
/* harmony import */ var _bilty_expense_create_edit_bilty_expense_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bilty-expense/create-edit-bilty-expense.component */ "./src/app/main/setup/bilty-expense/create-edit-bilty-expense.component.ts");
/* harmony import */ var _receiving_bill_to_bill_create_edit_receiving_bill_to_bill_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component */ "./src/app/main/setup/receiving-bill-to-bill/create-edit-receiving-bill-to-bill.component.ts");
/* harmony import */ var _port_create_edit_port_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./port/create-edit-port.component */ "./src/app/main/setup/port/create-edit-port.component.ts");
/* harmony import */ var _shipper_create_edit_shipper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shipper/create-edit-shipper.component */ "./src/app/main/setup/shipper/create-edit-shipper.component.ts");
/* harmony import */ var _bank_create_edit_bank_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bank/create-edit-bank.component */ "./src/app/main/setup/bank/create-edit-bank.component.ts");
/* harmony import */ var _account_type_create_edit_account_type_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account-type/create-edit-account-type.component */ "./src/app/main/setup/account-type/create-edit-account-type.component.ts");
/* harmony import */ var _invoice_create_edit_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./invoice/create-edit-invoice.component */ "./src/app/main/setup/invoice/create-edit-invoice.component.ts");
/* harmony import */ var _ar_aging_ar_aging_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ar-aging/ar-aging.component */ "./src/app/main/setup/ar-aging/ar-aging.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/main/setup/supplier/supplier.component.ts");
/* harmony import */ var _booking_bill_t_create_edit_booking_bill_T_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./booking-bill-t/create-edit-booking-bill-T.component */ "./src/app/main/setup/booking-bill-t/create-edit-booking-bill-T.component.ts");
/* harmony import */ var _booking_voucher_create_edit_booking_voucher_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./booking-voucher/create-edit-booking-voucher.component */ "./src/app/main/setup/booking-voucher/create-edit-booking-voucher.component.ts");
/* harmony import */ var src_app_shared_components_cargo_shared_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/components/cargo-shared.module */ "./src/app/shared/components/cargo-shared.module.ts");
/* harmony import */ var _vendor_create_edit_vendor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./vendor/create-edit-vendor.component */ "./src/app/main/setup/vendor/create-edit-vendor.component.ts");
/* harmony import */ var _contract_create_edit_contract_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contract/create-edit-contract.component */ "./src/app/main/setup/contract/create-edit-contract.component.ts");
/* harmony import */ var _voucher_create_edit_voucher_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./voucher/create-edit-voucher.component */ "./src/app/main/setup/voucher/create-edit-voucher.component.ts");




























let SetupModule = class SetupModule {
};
SetupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _uom_create_edit_uom_component__WEBPACK_IMPORTED_MODULE_9__["CreateEditUOMComponent"],
            _shippingline_create_edit_shippingline_component__WEBPACK_IMPORTED_MODULE_7__["CreateEditShippinglineComponent"],
            _transporter_create_edit_transporter_component__WEBPACK_IMPORTED_MODULE_8__["CreateEditTransporterComponent"],
            _bilty_create_edit_bilty_component__WEBPACK_IMPORTED_MODULE_10__["CreateEditBiltyComponent"],
            _invoice_opening_create_edit_invoice_opening_component__WEBPACK_IMPORTED_MODULE_11__["CreateEditInvoiceOpeningComponent"],
            _challan_create_edit_challan_component__WEBPACK_IMPORTED_MODULE_12__["CreateEditChallanComponent"],
            _bilty_expense_create_edit_bilty_expense_component__WEBPACK_IMPORTED_MODULE_13__["CreateEditBiltyExpenseComponent"],
            _receiving_bill_to_bill_create_edit_receiving_bill_to_bill_component__WEBPACK_IMPORTED_MODULE_14__["CreateEditReceivingBillToBillComponent"],
            _port_create_edit_port_component__WEBPACK_IMPORTED_MODULE_15__["CreateEditPortComponent"],
            _shipper_create_edit_shipper_component__WEBPACK_IMPORTED_MODULE_16__["CreateEditShipperComponent"],
            _bank_create_edit_bank_component__WEBPACK_IMPORTED_MODULE_17__["CreateEditBankComponent"],
            _account_type_create_edit_account_type_component__WEBPACK_IMPORTED_MODULE_18__["CreateEditAccountTypeComponent"],
            _invoice_create_edit_invoice_component__WEBPACK_IMPORTED_MODULE_19__["CreateEditInvoiceComponent"],
            _ar_aging_ar_aging_component__WEBPACK_IMPORTED_MODULE_20__["ARAgingComponent"],
            _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_21__["SupplierComponent"],
            _booking_bill_t_create_edit_booking_bill_T_component__WEBPACK_IMPORTED_MODULE_22__["CreateEditBookingBillTComponent"],
            _booking_voucher_create_edit_booking_voucher_component__WEBPACK_IMPORTED_MODULE_23__["CreateEditBookingVoucherComponent"],
            _vendor_create_edit_vendor_component__WEBPACK_IMPORTED_MODULE_25__["CreateEditVendorComponent"],
            _contract_create_edit_contract_component__WEBPACK_IMPORTED_MODULE_26__["CreateEditContractComponent"],
            _voucher_create_edit_voucher_component__WEBPACK_IMPORTED_MODULE_27__["CreateEditVoucherComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SetupRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_components_cargo_shared_module__WEBPACK_IMPORTED_MODULE_24__["CargoSharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot()
        ]
    })
], SetupModule);



/***/ }),

/***/ "./src/app/main/setup/shipper/create-edit-shipper.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/setup/shipper/create-edit-shipper.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvc2hpcHBlci9jcmVhdGUtZWRpdC1zaGlwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/shipper/create-edit-shipper.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup/shipper/create-edit-shipper.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateEditShipperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditShipperComponent", function() { return CreateEditShipperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditShipperComponent = class CreateEditShipperComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditShipperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-shipper',
        template: __webpack_require__(/*! raw-loader!./create-edit-shipper.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/shipper/create-edit-shipper.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-shipper.component.scss */ "./src/app/main/setup/shipper/create-edit-shipper.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditShipperComponent);



/***/ }),

/***/ "./src/app/main/setup/shippingline/create-edit-shippingline.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/setup/shippingline/create-edit-shippingline.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvc2hpcHBpbmdsaW5lL2NyZWF0ZS1lZGl0LXNoaXBwaW5nbGluZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/setup/shippingline/create-edit-shippingline.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/setup/shippingline/create-edit-shippingline.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateEditShippinglineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditShippinglineComponent", function() { return CreateEditShippinglineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditShippinglineComponent = class CreateEditShippinglineComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditShippinglineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-shippingline',
        template: __webpack_require__(/*! raw-loader!./create-edit-shippingline.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/shippingline/create-edit-shippingline.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-shippingline.component.scss */ "./src/app/main/setup/shippingline/create-edit-shippingline.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditShippinglineComponent);



/***/ }),

/***/ "./src/app/main/setup/supplier/supplier.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/setup/supplier/supplier.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvc3VwcGxpZXIvc3VwcGxpZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/setup/supplier/supplier.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/setup/supplier/supplier.component.ts ***!
  \***********************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SupplierComponent = class SupplierComponent {
    constructor() { }
    ngOnInit() {
    }
};
SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supplier',
        template: __webpack_require__(/*! raw-loader!./supplier.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/supplier/supplier.component.html"),
        styles: [__webpack_require__(/*! ./supplier.component.scss */ "./src/app/main/setup/supplier/supplier.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SupplierComponent);



/***/ }),

/***/ "./src/app/main/setup/transporter/create-edit-transporter.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/setup/transporter/create-edit-transporter.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvdHJhbnNwb3J0ZXIvY3JlYXRlLWVkaXQtdHJhbnNwb3J0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/setup/transporter/create-edit-transporter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/setup/transporter/create-edit-transporter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateEditTransporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditTransporterComponent", function() { return CreateEditTransporterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateEditTransporterComponent = class CreateEditTransporterComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateEditTransporterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-transporter',
        template: __webpack_require__(/*! raw-loader!./create-edit-transporter.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/transporter/create-edit-transporter.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-transporter.component.scss */ "./src/app/main/setup/transporter/create-edit-transporter.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateEditTransporterComponent);



/***/ }),

/***/ "./src/app/main/setup/uom/create-edit-uom.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/main/setup/uom/create-edit-uom.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvdW9tL2NyZWF0ZS1lZGl0LXVvbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/setup/uom/create-edit-uom.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/setup/uom/create-edit-uom.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateEditUOMComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditUOMComponent", function() { return CreateEditUOMComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_uom_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/uom-dto */ "./src/app/shared/dtos/identity/uom-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let CreateEditUOMComponent = class CreateEditUOMComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.Uom = new src_app_shared_dtos_identity_uom_dto__WEBPACK_IMPORTED_MODULE_5__["UOMDto"]();
        this.saving = false;
        this.uomList = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Uom Title", "field": "UomTitle" },
            { "title": "Uom Short", "field": "UomShort" }
        ];
    }
    ngOnInit() {
    }
    getData() {
        debugger;
        this.uomList = [];
        this._processDataService.getData("/api/uoms").subscribe(response => {
            if (response.status === 1) {
                this.uomList = response.data;
                this.showDataModal.show(this.tableHeaders, this.uomList);
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataById(event) {
        debugger;
        this._processDataService.getDataById("/api/getUom/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.Uom = response.data;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(CreateEditForm) {
        debugger;
        this.saving = true;
        let url_ = "/api/createUom";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/updateUom/" + this._id;
        }
        this._processDataService.create(url_, this.Uom).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            this.notify.success("Saved Successfully", "Success");
            CreateEditForm.resetForm();
            this._id = null;
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/Uom/no/" + this.Uom.UomOrdering).subscribe(response => {
            if (response.status === 1) {
                this.Uom = response.data;
                this._id = response.data._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
                this.reset();
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/Uom").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.Uom.UomOrdering = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/deleteUom/" + this._id).subscribe(result => {
                    this.notify.success('Deleted Successfully.', 'Deleted!');
                    this.Uom = new src_app_shared_dtos_identity_uom_dto__WEBPACK_IMPORTED_MODULE_5__["UOMDto"]();
                    this._id = null;
                });
            }
        });
    }
    reset() {
        this.Uom = new src_app_shared_dtos_identity_uom_dto__WEBPACK_IMPORTED_MODULE_5__["UOMDto"]();
        this._id = null;
        this.isNo = false;
    }
};
CreateEditUOMComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditUOMComponent.prototype, "showDataModal", void 0);
CreateEditUOMComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-uom',
        template: __webpack_require__(/*! raw-loader!./create-edit-uom.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/uom/create-edit-uom.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-uom.component.scss */ "./src/app/main/setup/uom/create-edit-uom.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditUOMComponent);



/***/ }),

/***/ "./src/app/main/setup/vendor/create-edit-vendor.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup/vendor/create-edit-vendor.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvdmVuZG9yL2NyZWF0ZS1lZGl0LXZlbmRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/setup/vendor/create-edit-vendor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/setup/vendor/create-edit-vendor.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateEditVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditVendorComponent", function() { return CreateEditVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_vendor_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/vendor-dto */ "./src/app/shared/dtos/identity/vendor-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let CreateEditVendorComponent = class CreateEditVendorComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.vendorTypeList = ['Individual', 'Company', 'Open-Market'];
        this.vendorTermList = ['No-Contract', 'On-Contract'];
        this.vendorserviceList = ['Labor', 'Transport', 'Forwarding', 'Booking-Agent', 'Port', 'Shipping-Line', 'Media', 'Food',
            'Import', 'Export', 'Maintenance', 'Media', 'Marketing'];
        this.vendorDesignation = ['Owner', 'Chairman', 'MD', 'President', 'EVP', 'SVP', 'VP', 'GM', 'Director', 'Senior Manager', 'Manager', 'Executive', 'Accountant', 'Clerk', 'Driver', 'Assistant', 'Loader', 'Labor'];
        this.vendor = new src_app_shared_dtos_identity_vendor_dto__WEBPACK_IMPORTED_MODULE_5__["VendorDto"]();
        this.contactDetail = {};
        this.officeDetail = {};
        this.vendorContact = {};
        this.vendorOffice = {};
        this.phone = {};
        this.vend_phone = {};
        this.vend_contact = {};
        this.off_contact = {};
        this.VendorList = [];
        this.saving = false;
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "vend_no", "hide": true },
            { "title": "Title", "field": "vend_title" },
            { "title": "Vendor short", "field": "vend_short" },
            { "title": "Type", "field": "vend_type" }
        ];
    }
    ngOnInit() {
        this.vendor.vend_phones = [];
        this.contactDetail.cust_phones = [];
        this.contactDetail.contacts = [];
        this.officeDetail.phones = [];
        this.vendor.vend_contacts = [];
        this.vendor.vend_offices = [];
        this.vendorContact.contact = {};
        this.vendorOffice.office = {};
    }
    getData() {
        this.VendorList = [];
        this._processDataService.getData("/api/vendors").subscribe(response => {
            debugger;
            if (response.message = "Success") {
                this.VendorList = response.data;
                this.showDataModal.show(this.tableHeaders, this.VendorList);
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/vendors/" + event._id).subscribe(response => {
            this.vendor = response.data;
            this._id = event._id;
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/vendor/no/" + this.vendor.vend_no).subscribe(response => {
            if (response.status === 1) {
                this.vendor = response.data;
                this._id = response.data._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
                this.reset();
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/vendor").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.vendor.vend_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(saveForm) {
        this.saving = true;
        debugger;
        this.vendor.vend_phones.push(this.phone);
        this.contactDetail.cust_phones.push(this.vend_phone);
        this.contactDetail.contacts.push(this.vend_contact);
        this.officeDetail.phones.push(this.off_contact);
        this.vendorContact.contact = this.contactDetail;
        this.contactDetail.city = "609a786c944ebf09cc34c8f9";
        this.vendor.vend_contacts.push(this.vendorContact);
        this.vendorOffice.office = this.officeDetail;
        this.vendorOffice.office.city = "609a786c944ebf09cc34c8f9";
        this.vendor.vend_offices.push(this.vendorOffice);
        this.vendor.vend_city = "609a786c944ebf09cc34c8f9";
        this.vendor.vend_comp = "609c01f4c645ce303c655ad2";
        this.vendor.vend_ud = true;
        //this.vendor.vend_offices.push();
        let url_ = "/api/vendors/";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/vendors//id/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this._processDataService.create(url_, this.vendor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            debugger;
            if (response.status == 1) {
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.vendor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                this.notify.success("Update Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/vendors/" + this._id).subscribe(result => {
                    this.notify.success('Deleted Successfully.', 'Deleted!');
                    this.vendor = new src_app_shared_dtos_identity_vendor_dto__WEBPACK_IMPORTED_MODULE_5__["VendorDto"]();
                    this._id = null;
                });
            }
        });
    }
    setTypeheadList(param) {
        switch (param) {
            case 'type':
                this.typeheadlist = this.vendorTypeList;
                break;
            case 'term':
                this.typeheadlist = this.vendorTermList;
                break;
            case 'service':
                this.typeheadlist = this.vendorserviceList;
                break;
            case 'desig':
                this.typeheadlist = this.vendorDesignation;
                break;
        }
    }
    reset() {
        this.vendor = new src_app_shared_dtos_identity_vendor_dto__WEBPACK_IMPORTED_MODULE_5__["VendorDto"]();
        this._id = null;
        this.isNo = false;
    }
};
CreateEditVendorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditVendorComponent.prototype, "showDataModal", void 0);
CreateEditVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor',
        template: __webpack_require__(/*! raw-loader!./create-edit-vendor.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/vendor/create-edit-vendor.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-vendor.component.scss */ "./src/app/main/setup/vendor/create-edit-vendor.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditVendorComponent);



/***/ }),

/***/ "./src/app/main/setup/voucher/create-edit-voucher.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/setup/voucher/create-edit-voucher.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvdm91Y2hlci9jcmVhdGUtZWRpdC12b3VjaGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/voucher/create-edit-voucher.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup/voucher/create-edit-voucher.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateEditVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditVoucherComponent", function() { return CreateEditVoucherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_voucher_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/voucher-dto */ "./src/app/shared/dtos/identity/voucher-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);









let CreateEditVoucherComponent = class CreateEditVoucherComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.vcModelList = ['Retail', 'LCL', 'FCL'];
        this.vcTypeList = ['Book', 'Deliver', 'Return'];
        this.vcPaymode = ['To-Pay', 'Paid'];
        this.Voucher = new src_app_shared_dtos_identity_voucher_dto__WEBPACK_IMPORTED_MODULE_5__["VoucherDto"]();
        this.vehicleInfoListDto = {};
        this.vehicleInfoDto = {};
        this.vehicleLoaderListDto = {};
        this.loaderInfoDto = {};
        this.saving = false;
        this.voucherList = [];
        this.uoms = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Voucher No", "field": "voucher_no" },
            { "title": "Voucher Title", "field": "voucher_title" },
            { "title": "UOM", "field": "voucher_uom" }
        ];
    }
    ngOnInit() {
        this.getUOM();
    }
    getUOM() {
        this._processDataService.getData("/api/uoms").subscribe(response => {
            if (response.status === 1) {
                this.uoms = response.data;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getData() {
        this.voucherList = [];
        this._processDataService.getData("/api/vouchers").subscribe(response => {
            if (response.status === 1) {
                this.voucherList = response.data;
                this.showDataModal.show(this.tableHeaders, this.voucherList);
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/vouchers/id/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.Voucher = response.data;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/vouchers/no/" + this.Voucher.vc_no).subscribe(response => {
            if (response.status === 1) {
                this.Voucher = response.data;
                this._id = response.data._id;
                this.isNo = true;
            }
            else {
                this.reset();
                this.getNextNo();
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/voucher").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.Voucher.vc_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(saveForm) {
        debugger;
        this.vehicleInfoListDto.info = this.vehicleInfoDto;
        this.vehicleLoaderListDto.info = this.loaderInfoDto;
        this.saving = true;
        let url_ = "/api/vouchers";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/vouchers/id/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
        this.getUOM();
    }
    create(url_, saveForm) {
        this._processDataService.create(url_, this.Voucher).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            debugger;
            if (response.status == 1) {
                this.Voucher.vc_no = response.data.voucher_no + 1;
                this.notify.success("Saved Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.Voucher).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            if (response.status === 1) {
                this.notify.success("Update Successfully", "Success");
                saveForm.resetForm();
                this.reset();
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    delete() {
        this.message.fire({
            title: 'Are you sure?',
            html: 'You are about to delete 1 record permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                this._processDataService.delete("/api/vouchers/" + this._id).subscribe(result => {
                    if (result.status === 1) {
                        this.notify.success('Deleted Successfully.', 'Deleted!');
                        this.reset();
                    }
                    else {
                        this.message.fire("Error", result.message, "error");
                    }
                });
            }
        });
    }
    reset() {
        this.Voucher = new src_app_shared_dtos_identity_voucher_dto__WEBPACK_IMPORTED_MODULE_5__["VoucherDto"]();
        this._id = null;
        this.isNo = false;
    }
    setTypeheadList(param) {
        switch (param) {
            case 'vcModel':
                this.typeheadlist = this.vcModelList;
                break;
            case 'vcType':
                this.typeheadlist = this.vcTypeList;
                break;
            case 'vcPay':
                this.typeheadlist = this.vcPaymode;
                break;
        }
    }
};
CreateEditVoucherComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditVoucherComponent.prototype, "showDataModal", void 0);
CreateEditVoucherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-voucher',
        template: __webpack_require__(/*! raw-loader!./create-edit-voucher.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/voucher/create-edit-voucher.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-voucher.component.scss */ "./src/app/main/setup/voucher/create-edit-voucher.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditVoucherComponent);



/***/ }),

/***/ "./src/app/shared/dtos/identity/bilities-dto.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/dtos/identity/bilities-dto.ts ***!
  \******************************************************/
/*! exports provided: BilltiesDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilltiesDto", function() { return BilltiesDto; });
class BilltiesDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/company-dto.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/dtos/identity/company-dto.ts ***!
  \*****************************************************/
/*! exports provided: CompanyDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDto", function() { return CompanyDto; });
class CompanyDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/contract-dto.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/dtos/identity/contract-dto.ts ***!
  \******************************************************/
/*! exports provided: ContractDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDto", function() { return ContractDto; });
class ContractDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/office-dto.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/dtos/identity/office-dto.ts ***!
  \****************************************************/
/*! exports provided: OfficeDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeDto", function() { return OfficeDto; });
class OfficeDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/staff-dto.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/dtos/identity/staff-dto.ts ***!
  \***************************************************/
/*! exports provided: StaffDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDto", function() { return StaffDto; });
class StaffDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/uom-dto.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/dtos/identity/uom-dto.ts ***!
  \*************************************************/
/*! exports provided: UOMDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UOMDto", function() { return UOMDto; });
class UOMDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/vendor-dto.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/dtos/identity/vendor-dto.ts ***!
  \****************************************************/
/*! exports provided: VendorDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorDto", function() { return VendorDto; });
class VendorDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/voucher-dto.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/dtos/identity/voucher-dto.ts ***!
  \*****************************************************/
/*! exports provided: VoucherDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherDto", function() { return VoucherDto; });
class VoucherDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/setup/location-dto.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/dtos/setup/location-dto.ts ***!
  \***************************************************/
/*! exports provided: LocationDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDto", function() { return LocationDto; });
class LocationDto {
}


/***/ }),

/***/ "./src/app/shared/services/setup.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/setup.service.ts ***!
  \**************************************************/
/*! exports provided: SetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupService", function() { return SetupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let SetupService = class SetupService {
    constructor(_router, http) {
        this._router = _router;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        this.token = localStorage.getItem("token");
    }
    getData(endPoint) {
        let url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json",
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((response_) => {
            debugger;
            return this.processGetData(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return this.processGetData(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    }
    getDataById(endPoint) {
        let url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json",
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((response_) => {
            debugger;
            return this.processGetData(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return this.processGetData(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    }
    processGetData(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200 || status === 201) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            this.sessionExpired();
        }
        else if (status !== 200 && status !== 204) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(_responseText => {
                return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    /**
     * @param id (optional)
     * @return Success
     */
    delete(endPoint) {
        let url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((response_) => {
            return this.processCreateOrEdit(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return this.processCreateOrEdit(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    }
    processDelete(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200 || status === 201) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(_responseText => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status === 401) {
            this.sessionExpired();
        }
        else if (status !== 201 && status !== 204) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(_responseText => {
                return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    /**
    * @param input (optional)
    * @return Success
    */
    create(endPoint, input) {
        debugger;
        let url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(input);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("POST", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((response_) => {
            return this.processCreateOrEdit(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return this.processCreateOrEdit(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    }
    /**
     * @param input (optional)
     * @return Success
     */
    patch(endPoint, input) {
        debugger;
        let url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(input);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("PATCH", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((response_) => {
            return this.processCreateOrEdit(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return this.processCreateOrEdit(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    }
    processCreateOrEdit(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200 || status === 201) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            this.sessionExpired();
        }
        else if (status !== 201 && status !== 204) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(_responseText => {
                return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    /**
     * @param input (optional)
     * @return Success
     */
    uploadFile(endPoint, input) {
        let url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('POST', url_, input, {
            reportProgress: true,
            responseType: 'json',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token
            })
        });
        return this.http.request(req);
    }
    sessionExpired() {
        localStorage.clear();
        this._router.navigate(["/auth/signin"]);
        localStorage.setItem("expiryMsg", "Session expired please signin again, Thank you.");
    }
    throwException(message, status, response, headers, result) {
        if (result !== null && result !== undefined)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(result);
    }
    blobToText(blob) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            if (!blob) {
                observer.next("");
                observer.complete();
            }
            else {
                let reader = new FileReader();
                reader.onload = event => {
                    observer.next(event.target.result);
                    observer.complete();
                };
                reader.readAsText(blob);
            }
        });
    }
};
SetupService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],] }] }
];
SetupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], SetupService);



/***/ })

}]);
//# sourceMappingURL=setup-setup-module-es2015.js.map