(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["identity-identity-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/customer/create-edit-customer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/customer/create-edit-customer.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo ? (_id?'Update Customer':'New Customer') : 'customer'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autoofflete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"customer_cust_no\" class=\"col-lg-2 col-form-label text-right\">Customer ID:</label>\r\n            <div class=\"input-group col-lg-3\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n              </div>\r\n              <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" id=\"item_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"customer.cust_no\" placeholder=\"\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n              </div>\r\n          </div>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"bilty_short_title\" name=\"ShortTitle\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <ngb-tabset class=\"nav-tabs-top col-lg-12\" [destroyOnHide]=\"false\">\r\n              <ngb-tab title=\"Customer\" >\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"cust_title\" class=\"col-lg-2 col-form-label text-right\">Customer</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"cust_title\" name=\"cust_title\" [(ngModel)]=\"customer.cust_title\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"cust_short\" class=\"col-lg-1 col-form-label text-right\">Short:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"cust_short\" name=\"cust_short\" [(ngModel)]=\"customer.cust_short\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"cust_Type\" class=\"col-lg-2 col-form-label text-right\">Customer type:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"isrv_doc\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('type');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"customer.cust_type\" required>\r\n                      </div>\r\n                      <label for=\"cust_term\" class=\"col-lg-1 col-form-label text-right\">Customer term:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"isrv_doc\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(1,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('term');focus$[1].next($any($event).target.value)\" (click)=\"click$[1].next($any($event).target.value)\"  [(ngModel)]=\"customer.cust_term\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row \">\r\n                      <label for=\"customer_cust_addr\" class=\"col-lg-2 col-form-label text-right\">Address:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"customer_cust_addr\" name=\"customer_cust_addr\" placeholder=\"\" [(ngModel)]=\"customer.cust_addr\">\r\n                      </div>\r\n                      <label for=\"cust_city\" class=\"col-lg-1 col-form-label text-right\">Customer City:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"state\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(2,instance)\" [inputFormatter]=\"this.typeheadFormatter\" [resultFormatter]=\"this.typeheadFormatter\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('city');focus$[2].next($any($event).target.value)\" (click)=\"click$[2].next($any($event).target.value)\" [(ngModel)]=\"customerCity\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"staff_disabled\" name=\"Disabled\" [(ngModel)]=\"customer.cust_active\">\r\n                          <label class=\"custom-control-label\" for=\"staff_disabled\">Active</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <app-contact-detail #cust_Contact1></app-contact-detail>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Contact\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"contactDetail_name\" class=\"col-lg-2 col-form-label text-right\">Contact Person:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"contactDetail_name\" name=\"contactDetail_name\" [(ngModel)]=\"contactDetail.name\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"contactDetail_nick\" class=\"col-lg-1 col-form-label text-right\">Nick:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"contactDetail_nick\" name=\"contactDetail_nick\" [(ngModel)]=\"contactDetail.nick\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  \r\n                    <div class=\"form-group row\">\r\n                      <label for=\"desig\" class=\"col-lg-2 col-form-label text-right\">Designation:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"desig\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(3,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('desig');focus$[3].next($any($event).target.value)\" (click)=\"click$[3].next($any($event).target.value)\"  [(ngModel)]=\"contactDetail.desig\" required>\r\n                      </div>\r\n                      <label for=\"cust_city\" class=\"col-lg-1 col-form-label text-right\">Contact City:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"state\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(4,instance)\" [inputFormatter]=\"this.typeheadFormatter\" [resultFormatter]=\"this.typeheadFormatter\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('city');focus$[4].next($any($event).target.value)\" (click)=\"click$[4].next($any($event).target.value)\" [(ngModel)]=\"contactCity\" required>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"off_phoneValue\" class=\"col-lg-2 col-form-label text-right\">Address:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"off_phoneValue\" name=\"phoneValue\" placeholder=\"\" [(ngModel)]=\"contactDetail.address\">\r\n                      </div>\r\n                    </div>\r\n                    <app-contact-detail #customer_phoneList></app-contact-detail>\r\n                    <app-contact-detail #customer_contactsList></app-contact-detail>\r\n\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Office\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    \r\n                    <div class=\"form-group row\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Office Title:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"officeDetail_title\" [(ngModel)]=\"officeDetail.title\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"officeDetail_manager\" class=\"col-lg-1 col-form-label text-right\">Manager:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"officeDetail_manager\" name=\"officeDetail_manager\" [(ngModel)]=\"officeDetail.manager\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label for=\"officeDetail_addr\" class=\"col-lg-2 col-form-label text-right\">Address:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"officeDetail_addr\" name=\"officeDetail_addr\" [(ngModel)]=\"officeDetail.addr\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"cust_city\" class=\"col-lg-1 col-form-label text-right\">Office City:</label>\r\n                      <div class=\"col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"state\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(5,instance)\" [inputFormatter]=\"this.typeheadFormatter\" [resultFormatter]=\"this.typeheadFormatter\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('city');focus$[5].next($any($event).target.value)\" (click)=\"click$[5].next($any($event).target.value)\" [(ngModel)]=\"officeCity\" required>\r\n                      </div>\r\n                    </div>\r\n                    <app-contact-detail #office_contactsList></app-contact-detail>\r\n                    \r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Address\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Address :</label>\r\n                      <div class=\"col-lg-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">Postal Code:</label>\r\n                      <div class=\"col-lg-3\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">State/Provinse:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row mr-1\">\r\n                      <label for=\"\" class=\"col-lg-2 col-form-label text-right\">City:</label>\r\n                      <div class=\"col-lg-4\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"state\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(6,instance)\" [inputFormatter]=\"this.typeheadFormatter\" [resultFormatter]=\"this.typeheadFormatter\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('company');focus$[6].next($any($event).target.value)\" (click)=\"click$[6].next($any($event).target.value)\" [(ngModel)]=\"company\" required>\r\n                      </div>\r\n                      <label for=\"\" class=\"col-lg-1 col-form-label text-right\">Country:</label>\r\n                      <div class=\"col-lg-4\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Tax Info\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Tax Info\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Limit & Discount\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-lg-7\">\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Credit Limit:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1 text-right\">\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"crlimitActivate\" name=\"\">\r\n                                    <label class=\"custom-control-label\" for=\"crlimitActivate\">Activate</label>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Credit Terms:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Late Charges %:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1\">\r\n                                <span>(If any)</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row mr-1\">\r\n                                <label for=\"\" class=\"col-lg-3 col-form-label text-right\">Discount %:</label>\r\n                                <div class=\"col-lg-6\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"\" placeholder=\"\">\r\n                                </div>\r\n                                <div class=\"col-lg-2 mt-1 text-right\">\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"latechrgActivate\" name=\"\">\r\n                                        <label class=\"custom-control-label\" for=\"latechrgActivate\">Activate</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-5\">\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"pid\" name=\"\">\r\n                                        <label class=\"custom-control-label\" for=\"pid\">Per Item Discount</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"btb\" name=\"\">\r\n                                        <label class=\"custom-control-label\" for=\"btb\">Bill to Bill (Open Entry Aging Method)</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-checkbox\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"isdisable\" name=\"\">\r\n                                        <label class=\"custom-control-label\" for=\"isdisable\">Disabled</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Other Info\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Tax Info\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Alert\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Alert\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Image\" *ngIf=\"false\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"top-tab-content\">\r\n                    Image\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/iservices/create-edit-iservices.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/iservices/create-edit-iservices.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"Service\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autoiServiceslete=\"iServices\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"iServices_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n              </div>\r\n              <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" id=\"item_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"iServices.isrv_no\" placeholder=\"\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n              </div>\r\n          </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"isrv_title\" class=\"col-lg-2 col-form-label text-right\">Service Title</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"iServices_title\" name=\"isrv_title\" placeholder=\"\"  [(ngModel)]=\"iServices.isrv_title\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"isrv_inv_mode\" class=\"col-lg-2 col-form-label text-right\">Inovice Mode:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"isrv_inv_mode\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(3,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('invoiceType');focus$[3].next($any($event).target.value)\" (click)=\"click$[3].next($any($event).target.value)\"  [(ngModel)]=\"iServices.isrv_inv_mode\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"isrv_short\" class=\"col-lg-2 col-form-label text-right\">Short</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"isrv_short\" name=\"isrv_short\" placeholder=\"\"  [(ngModel)]=\"iServices.isrv_short\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"isrv_doc\" class=\"col-lg-2 col-form-label text-right\">Documentation</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"isrv_doc\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('doc');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"iServices.isrv_doc\" required>\r\n            </div>\r\n          </div> \r\n          <div class=\"form-group row\">\r\n            <label for=\"isrv_auto_type\" class=\"col-lg-2 col-form-label text-right\">Auto Type</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"isrv_auto_type\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(1,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('autotype');focus$[1].next($any($event).target.value)\" (click)=\"click$[1].next($any($event).target.value)\"  [(ngModel)]=\"iServices.isrv_auto_type\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"isrv_doc_event\" class=\"col-lg-2 col-form-label text-right\">Doc Event</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\"  name=\"isrv_doc_event\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(2,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('DocEvent');focus$[2].next($any($event).target.value)\" (click)=\"click$[2].next($any($event).target.value)\"  [(ngModel)]=\"iServices.isrv_doc_event\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shead_doc_line\" class=\"col-lg-2 col-form-label text-right\">Doc Line</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"shead_doc_line\" name=\"shead_doc_line\" placeholder=\"\"  [(ngModel)]=\"service.shead_doc_line\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shead_doc_rule\" class=\"col-lg-2 col-form-label text-right\">Doc Rule</label>\r\n            <div class=\"col-lg-6\">\r\n              <input type=\"text\" class=\"form-control\"  name=\"isrv_doc_event\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(4,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('docRule');focus$[4].next($any($event).target.value)\" (click)=\"click$[4].next($any($event).target.value)\"  [(ngModel)]=\"service.shead_doc_rule\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"shead_auto_mode\" class=\"col-lg-2 col-form-label text-right\">Head mode</label>\r\n            <div class=\"col-lg-6\">\r\n              <input type=\"text\" class=\"form-control\"  name=\"isrv_doc_event\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(5,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('automode');focus$[5].next($any($event).target.value)\" (click)=\"click$[5].next($any($event).target.value)\"  [(ngModel)]=\"service.shead_doc_rule\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit iServices\" modalSubtitle= \"Please Select iServices For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/item/create-edit-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/item/create-edit-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo ? (_id?'Update Item':'New Item') : 'Item'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"item_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" id=\"item_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"Item.item_no\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"item_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"item_title\" name=\"Title\" placeholder=\"\"  [(ngModel)]=\"Item.item_title\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"item_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"item_short_title\" name=\"ShortTitle\" placeholder=\"\" [(ngModel)]=\"Item.item_short\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"item_ordering\" class=\"col-lg-2 col-form-label text-right\">Ordering:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"item_ordering\" name=\"Ordering\" placeholder=\"\" [(ngModel)]=\"Item.item_order\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"item_carton\" class=\"col-lg-2 col-form-label text-right\">UOM</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"item_uom\" name=\"item_uom\" placeholder=\"Type..\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"Item.item_uom\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"item_active\" name=\"item_active\" [(ngModel)]=\"Item.item_active\">\r\n                <label class=\"custom-control-label\" for=\"item_active\">Active</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"item_default\" name=\"Default\" [(ngModel)]=\"Item.item_default\">\r\n                <label class=\"custom-control-label\" for=\"item_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit Item\" modalSubtitle= \"Please Select Item For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/packing/create-edit-packing.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/packing/create-edit-packing.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{isNo ? (_id?'Update Packing':'New Packing') : 'Packing'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"pck_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"pck_id\" name=\"ID\" [disabled]=\"isNo\" (focusout)=\"getDataByNo()\" placeholder=\"\" [(ngModel)]=\"packing.pck_no\" required>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"pck_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-6\">\r\n                <input type=\"text\" class=\"form-control\" id=\"pck_title\" name=\"Title\" placeholder=\"\"  [(ngModel)]=\"packing.pck_title\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"pck_short_title\" class=\"col-lg-2 col-form-label text-right\">Short Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"pck_short_title\" name=\"ShortTitle\" placeholder=\"\" [(ngModel)]=\"packing.pck_short\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"pck_active\" name=\"pck_active\" [(ngModel)]=\"packing.pck_active\">\r\n                <label class=\"custom-control-label\" for=\"pck_active\">Active</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"pck_default\" name=\"Default\" [(ngModel)]=\"packing.pck_default\">\r\n                <label class=\"custom-control-label\" for=\"pck_default\">Default</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit packing\" modalSubtitle= \"Please Select packing For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/setup/vehicle/create-edit-vehicle.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/setup/vehicle/create-edit-vehicle.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-card cardTitle=\"{{_id?'Update Vehicle':'New Vehicle'}}\" [options]=\"true\">\r\n        <form #CreateEditForm=\"ngForm\" (ngSubmit)=\"save(CreateEditForm)\" novalidate  autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"vehicle_id\" class=\"col-lg-2 col-form-label text-right\">ID:</label>\r\n            <div class=\"input-group col-lg-4\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"getNextNo()\" [disabled]=\"isNo\" ><i class=\"feather icon-plus\"></i></button>\r\n                </div>\r\n                <input type=\"number\" class=\"form-control\" [disabled]=\"isNo\" id=\"vehicle_id\" (focusout)=\"getDataByNo()\" name=\"ID\" [(ngModel)]=\"Vehicle.vh_no\" placeholder=\"\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"getData()\" ><i class=\"feather icon-search\"></i></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"vehicle_title\" class=\"col-lg-2 col-form-label text-right\">Title:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"vehicle_title\" name=\"Title\" placeholder=\"\"  [(ngModel)]=\"Vehicle.vh_title\" required>\r\n              </div>\r\n              <label for=\"vh_regno\" class=\"col-lg-1 col-form-label text-right\">Registration #:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"vh_regno\" name=\"vh_regno\" placeholder=\"\" [(ngModel)]=\"Vehicle.vh_regno\" required>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"vh_chesisno\" class=\"col-lg-2 col-form-label text-right\">Chesis #:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"vh_chesisno\" name=\"vh_chesisno\" placeholder=\"\" [(ngModel)]=\"Vehicle.vh_chesisno\">\r\n            </div>\r\n            <label for=\"vh_engno\" class=\"col-lg-1 col-form-label text-right\">Engine #:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"vh_engno\" name=\"vh_engno\" placeholder=\"\" [(ngModel)]=\"Vehicle.vh_engno\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"vh_type\" class=\"col-lg-2 col-form-label text-right\">Vehicle Type:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"vh_type\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('type');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"Vehicle.vh_type\" required>\r\n            </div>\r\n            <label for=\"vh_regname\" class=\"col-lg-1 col-form-label text-right\">Owner Name:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"vh_regname\" name=\"vh_regname\" placeholder=\"\" [(ngModel)]=\"Vehicle.vh_regname\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"name\" class=\"col-lg-2 col-form-label text-right\">Driver Name:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"\" [(ngModel)]=\"VehicleStaffDto.name\">\r\n            </div>\r\n            <label for=\"nick\" class=\"col-lg-1 col-form-label text-right\">Nick Name:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"nick\" name=\"nick\" placeholder=\"\" [(ngModel)]=\"VehicleStaffDto.nick\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"desig\" class=\"col-lg-2 col-form-label text-right\">Designation:</label>\r\n            <div class=\"col-lg-4\">\r\n              <input type=\"text\" class=\"form-control\" name=\"desig\" placeholder=\"Type...\" [ngbTypeahead]=\"searchType(0,instance)\" #instance=\"ngbTypeahead\" (focus)=\"setTypeheadList('desig');focus$[0].next($any($event).target.value)\" (click)=\"click$[0].next($any($event).target.value)\"  [(ngModel)]=\"VehicleStaffDto.desig\" required>\r\n            </div>\r\n            <label for=\"cnic\" class=\"col-lg-1 col-form-label text-right\">CNIC:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"cnic\" name=\"cnic\" placeholder=\"\" [(ngModel)]=\"VehicleStaffDto.cnic\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"address\" class=\"col-lg-2 col-form-label text-right\">Driver Address:</label>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"\" [(ngModel)]=\"VehicleStaffDto.address\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"\" class=\"col-lg-2 col-form-label text-right\">&nbsp;</label>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"custom-control custom-checkbox pl-3 pt-1\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"vehicle_disabled\" name=\"Disabled\" [(ngModel)]=\"Vehicle.vh_active\">\r\n                <label class=\"custom-control-label pt-1\" for=\"vehicle_disabled\">Disabled</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12\">\r\n            <app-contact-detail #contactDetail></app-contact-detail>\r\n          </div>\r\n          <div class=\"row p-2 float-right\">\r\n            <!-- <button type=\"button\" class=\"btn btn-success mr-2\" (click)=\"getData();\"><i class=\"feather icon-edit\"></i> Edit</button> -->\r\n            <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"!CreateEditForm.form.valid\"  [buttonBusy]=\"saving\" ><i class=\"feather icon-save\"></i> Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mr-2\" *ngIf=\"_id\" (click)=\"delete()\"><i class=\"feather icon-trash-2\"></i> Delete</button>\r\n            <button type=\"reset\" class=\"btn btn-outline-danger mr-2\" (click)=\"reset()\" ><i class=\"feather icon-x\"></i> Cancel</button>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n</div>\r\n\r\n<app-lookup-table-modal #showDataModal modalTitle= \"Edit Vehicle\" modalSubtitle= \"Please Select Vehicle For Edit\" (modalSelect)=\"getDataById($event)\"></app-lookup-table-modal>\r\n  "

/***/ }),

/***/ "./src/app/cargo/identity/identity-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/cargo/identity/identity-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: IdentityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityRoutingModule", function() { return IdentityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_main_setup_customer_create_edit_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/main/setup/customer/create-edit-customer.component */ "./src/app/main/setup/customer/create-edit-customer.component.ts");
/* harmony import */ var src_app_main_setup_iservices_create_edit_iservices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/main/setup/iservices/create-edit-iservices.component */ "./src/app/main/setup/iservices/create-edit-iservices.component.ts");
/* harmony import */ var src_app_main_setup_item_create_edit_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/main/setup/item/create-edit-item.component */ "./src/app/main/setup/item/create-edit-item.component.ts");
/* harmony import */ var src_app_main_setup_packing_create_edit_packing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/setup/packing/create-edit-packing.component */ "./src/app/main/setup/packing/create-edit-packing.component.ts");
/* harmony import */ var src_app_main_setup_vehicle_create_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/main/setup/vehicle/create-edit-vehicle.component */ "./src/app/main/setup/vehicle/create-edit-vehicle.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'item',
                component: src_app_main_setup_item_create_edit_item_component__WEBPACK_IMPORTED_MODULE_5__["CreateEditItemComponent"]
            },
            {
                path: 'packing',
                component: src_app_main_setup_packing_create_edit_packing_component__WEBPACK_IMPORTED_MODULE_6__["CreateEditPackingComponent"]
            },
            {
                path: 'services',
                component: src_app_main_setup_iservices_create_edit_iservices_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditIServicesComponent"]
            },
            {
                path: 'customer',
                component: src_app_main_setup_customer_create_edit_customer_component__WEBPACK_IMPORTED_MODULE_3__["CreateEditCustomerComponent"]
            },
            {
                path: 'vehicle',
                component: src_app_main_setup_vehicle_create_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["CreateEditVehicleComponent"]
            }
        ]
    }
];
let IdentityRoutingModule = class IdentityRoutingModule {
};
IdentityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IdentityRoutingModule);



/***/ }),

/***/ "./src/app/cargo/identity/identity.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cargo/identity/identity.module.ts ***!
  \***************************************************/
/*! exports provided: IdentityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return IdentityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _identity_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity-routing.module */ "./src/app/cargo/identity/identity-routing.module.ts");
/* harmony import */ var src_app_main_setup_customer_create_edit_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/main/setup/customer/create-edit-customer.component */ "./src/app/main/setup/customer/create-edit-customer.component.ts");
/* harmony import */ var src_app_main_setup_iservices_create_edit_iservices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/main/setup/iservices/create-edit-iservices.component */ "./src/app/main/setup/iservices/create-edit-iservices.component.ts");
/* harmony import */ var src_app_main_setup_item_create_edit_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/setup/item/create-edit-item.component */ "./src/app/main/setup/item/create-edit-item.component.ts");
/* harmony import */ var src_app_main_setup_packing_create_edit_packing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/main/setup/packing/create-edit-packing.component */ "./src/app/main/setup/packing/create-edit-packing.component.ts");
/* harmony import */ var src_app_main_setup_vehicle_create_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/main/setup/vehicle/create-edit-vehicle.component */ "./src/app/main/setup/vehicle/create-edit-vehicle.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var src_app_shared_components_cargo_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/components/cargo-shared.module */ "./src/app/shared/components/cargo-shared.module.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");













let IdentityModule = class IdentityModule {
};
IdentityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_main_setup_item_create_edit_item_component__WEBPACK_IMPORTED_MODULE_6__["CreateEditItemComponent"],
            src_app_main_setup_packing_create_edit_packing_component__WEBPACK_IMPORTED_MODULE_7__["CreateEditPackingComponent"],
            src_app_main_setup_iservices_create_edit_iservices_component__WEBPACK_IMPORTED_MODULE_5__["CreateEditIServicesComponent"],
            src_app_main_setup_customer_create_edit_customer_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditCustomerComponent"],
            src_app_main_setup_vehicle_create_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_8__["CreateEditVehicleComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _identity_routing_module__WEBPACK_IMPORTED_MODULE_3__["IdentityRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabsetModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            src_app_shared_components_cargo_shared_module__WEBPACK_IMPORTED_MODULE_11__["CargoSharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"].forRoot()
        ]
    })
], IdentityModule);



/***/ }),

/***/ "./src/app/main/setup/customer/create-edit-customer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/setup/customer/create-edit-customer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvY3VzdG9tZXIvY3JlYXRlLWVkaXQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/setup/customer/create-edit-customer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/setup/customer/create-edit-customer.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateEditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditCustomerComponent", function() { return CreateEditCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_customer_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/customer-dto */ "./src/app/shared/dtos/identity/customer-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/contact-detail/contact-detail.component */ "./src/app/shared/components/contact-detail/contact-detail.component.ts");









let CreateEditCustomerComponent = class CreateEditCustomerComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService, ref) {
        super(injector);
        this._processDataService = _processDataService;
        this.ref = ref;
        this.customerTypeList = ["Open-Market", "Individual", "Company"];
        this.customerTermList = ['Walk-In', 'No-Contract', 'On-Contract'];
        this.designationList = ['Owner', 'Chairman', 'MD', 'President', 'EVP', 'SVP', 'VP', 'GM', 'Director', 'Senior Manager', 'Manager', 'Executive', 'Accountant', 'Clerk', 'Driver', 'Assistant', 'Loader', 'Labor'];
        this.customer = new src_app_shared_dtos_identity_customer_dto__WEBPACK_IMPORTED_MODULE_5__["CustomerDto"]();
        this.contactDetail = {};
        this.officeDetail = {};
        this.customerContact = {};
        this.customerOffice = {};
        this.phone = {};
        this.cust_phone = {};
        this.cust_contact = {};
        this.off_contact = {};
        this.CustomerList = [];
        this.cityList = [];
        this.companyList = [];
        this.saving = false;
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "cust_no", "hide": true },
            { "title": "Title", "field": "cust_title" },
            { "title": "Customer short", "field": "cust_short" },
            { "title": "Type", "field": "cust_type" }
        ];
    }
    ngOnInit() {
        this.getLocationList();
        this.getCompanyList();
        this.customer.cust_phones = [];
        this.contactDetail.cust_phones = [];
        this.contactDetail.contacts = [];
        this.officeDetail.phones = [];
        this.customer.cust_contacts = [];
        this.customer.cust_offices = [];
        this.customerContact.contact = {};
        this.customerOffice.office = {};
    }
    getData() {
        this.CustomerList = [];
        this._processDataService.getData("/api/customers").subscribe(response => {
            debugger;
            if (response.message = "Success") {
                this.CustomerList = response.data;
                this.showDataModal.show(this.tableHeaders, this.CustomerList);
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/customers/" + event._id).subscribe(response => {
            this.customer = response.data;
            this._id = event._id;
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/customer/no/" + this.customer.cust_no).subscribe(response => {
            if (response.status === 1) {
                this.customer = response.data;
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
        this._processDataService.getData("/api/nextNumber/customer").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.customer.cust_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(saveForm) {
        this.saving = true;
        // let url_ = "/api/customers/";
        // if (!isNullOrUndefined(this._id)) {
        //   url_ = "/api/customers/" + this._id;
        // }
        debugger;
        this.customer.cust_phones = this.customer_ContactList.contacts;
        this.contactDetail.cust_phones = this.customer_phoneList.contacts;
        this.contactDetail.contacts = this.customer_contactsList.contacts;
        this.officeDetail.phones = this.office_contactsList.contacts;
        this.customerContact.contact = this.contactDetail;
        this.contactDetail.city = this.contactCity._id;
        this.customer.cust_contacts.push(this.customerContact);
        this.customerOffice.office = this.officeDetail;
        this.customerOffice.office.city = this.officeCity._id;
        this.customer.cust_offices.push(this.customerOffice);
        this.customer.cust_city = this.customerCity._id;
        this.customer.cust_comp = this.company._id;
        this.customer.cust_ud = true;
        this.saving = true;
        let url_ = "/api/customers";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/customers/id/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this._processDataService.create(url_, this.customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
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
        this._processDataService.patch(url_, this.customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
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
                this._processDataService.delete("/api/customers/" + this._id).subscribe(result => {
                    this.notify.success('Deleted Successfully.', 'Deleted!');
                    this.customer = new src_app_shared_dtos_identity_customer_dto__WEBPACK_IMPORTED_MODULE_5__["CustomerDto"]();
                    this._id = null;
                });
            }
        });
    }
    getLocationList() {
        debugger;
        this._processDataService.getData("/api/locations/city/list").subscribe(response => {
            debugger;
            if (response.status === 1) {
                response.data.forEach(loc => {
                    var item = { id: loc._id, name: loc.loc_title };
                    this.cityList.push(item);
                });
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getCompanyList() {
        debugger;
        this._processDataService.getData("/api/companies/list").subscribe(response => {
            debugger;
            if (response.status === 1) {
                response.data.forEach(com => {
                    var item = { id: com._id, name: com.comp_title };
                    this.companyList.push(item);
                });
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    setTypeheadList(param) {
        debugger;
        switch (param) {
            case 'type':
                this.typeheadlist = this.customerTypeList;
                break;
            case 'term':
                this.typeheadlist = this.customerTermList;
                break;
            case 'desig':
                this.typeheadlist = this.designationList;
                break;
            case 'city':
                this.typeheadlist = this.cityList;
                break;
            case 'company':
                this.typeheadlist = this.companyList;
                break;
        }
    }
    reset() {
        this.customer = new src_app_shared_dtos_identity_customer_dto__WEBPACK_IMPORTED_MODULE_5__["CustomerDto"]();
        this._id = null;
        this.isNo = false;
    }
};
CreateEditCustomerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditCustomerComponent.prototype, "showDataModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cust_Contact1', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailComponent"])
], CreateEditCustomerComponent.prototype, "customer_ContactList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customer_phoneList', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailComponent"])
], CreateEditCustomerComponent.prototype, "customer_phoneList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customer_contactsList', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailComponent"])
], CreateEditCustomerComponent.prototype, "customer_contactsList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('office_contactsList', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailComponent"])
], CreateEditCustomerComponent.prototype, "office_contactsList", void 0);
CreateEditCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__(/*! raw-loader!./create-edit-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/customer/create-edit-customer.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-customer.component.scss */ "./src/app/main/setup/customer/create-edit-customer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CreateEditCustomerComponent);



/***/ }),

/***/ "./src/app/main/setup/iservices/create-edit-iservices.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/setup/iservices/create-edit-iservices.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvaXNlcnZpY2VzL2NyZWF0ZS1lZGl0LWlzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/setup/iservices/create-edit-iservices.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/setup/iservices/create-edit-iservices.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateEditIServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditIServicesComponent", function() { return CreateEditIServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_dtos_identity_iservices_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dtos/identity/iservices-dto */ "./src/app/shared/dtos/identity/iservices-dto.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");










let CreateEditIServicesComponent = class CreateEditIServicesComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.invoiceType = ['None', 'All', 'LCL', 'FCL', 'Book', 'Delivery', 'Return'];
        this.item = ["None", "New", "Edit", "Post", "Un-Post"];
        this.autotype = ["Auto", "Manual"];
        this.docEvent = ["New", "Edit", "Post"];
        this.docRule = ['None', 'Inter-City-Fare', 'Intra-City-Fare', 'Labor', 'Other'];
        this.autoMode = ['None', 'Auto', 'Manual'];
        this.iServices = new src_app_shared_dtos_identity_iservices_dto__WEBPACK_IMPORTED_MODULE_7__["iServicesDto"]();
        this.service = {};
        this.saving = false;
        this.itemList = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "IServices No", "field": "stf_no" },
            { "title": "IServices Name", "field": "stf_name" },
            { "title": "nick", "field": "stf_nick" }
        ];
    }
    ngOnInit() {
        this.iServices.isrv_auto_type = 'Auto';
        this.iServices.isrv_doc_event = 'New';
        this.iServices.isrv_heads = [];
        this.typeheadlist = this.item;
    }
    getData() {
        debugger;
        this.itemList = [];
        this._processDataService.getData("/api/iservices").subscribe(response => {
            if (response.status === 1) {
                this.itemList = response.data;
                this.showDataModal.show(this.tableHeaders, this.itemList);
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/iservices/" + event._id).subscribe(response => {
            this.iServices = response.data;
            this.iServices.isrv_heads.forEach(element => {
                this.service = element;
            });
            this._id = event._id;
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/iServices/" + this.iServices.isrv_no).subscribe(response => {
            if (response.status === 1) {
                this.iServices = response.data;
                this.iServices.isrv_heads.forEach(element => {
                    this.service = element;
                });
            }
            else {
                this.notify.error('Search item not found', 'Not Found');
            }
        });
    }
    getNextNo() {
        this._processDataService.getData("/api/nextNumber/iservice").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.iServices.isrv_no = response.data.value;
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
        let url_ = "/api/iservices/";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/iservices/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this.service.shead_gl = '609919427664d43524e9520c';
        this.iServices.isrv_heads.push(this.service);
        this.iServices.isrv_comp = '609c01f4c645ce303c655ad2';
        this._processDataService.create(url_, this.iServices).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            debugger;
            console.log(response);
            this.notify.success("Saved Successfully", "Success");
            saveForm.resetForm();
            this._id = null;
        });
    }
    patch(url_, saveForm) {
        this._processDataService.patch(url_, this.iServices).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            debugger;
            console.log(response);
            this.notify.success("Update Successfully", "Success");
            saveForm.resetForm();
            this._id = null;
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
                this._processDataService.delete("/api/iservices/" + this._id).subscribe(result => {
                    this.notify.success('Deleted Successfully.', 'Deleted!');
                    this.reset();
                });
            }
        });
    }
    reset() {
        this.iServices = new src_app_shared_dtos_identity_iservices_dto__WEBPACK_IMPORTED_MODULE_7__["iServicesDto"]();
        this._id = null;
    }
    setTypeheadList(param) {
        switch (param) {
            case 'doc':
                this.typeheadlist = this.item;
                break;
            case 'autotype':
                this.typeheadlist = this.autotype;
                break;
            case 'DocEvent':
                this.typeheadlist = this.docEvent;
                break;
            case 'invoiceType':
                this.typeheadlist = this.invoiceType;
                break;
            case 'docRule':
                this.typeheadlist = this.docRule;
                break;
            case 'automode':
                this.typeheadlist = this.autoMode;
                break;
        }
    }
};
CreateEditIServicesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditIServicesComponent.prototype, "showDataModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instance', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeahead"])
], CreateEditIServicesComponent.prototype, "instance", void 0);
CreateEditIServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-company',
        template: __webpack_require__(/*! raw-loader!./create-edit-iservices.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/iservices/create-edit-iservices.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-iservices.component.scss */ "./src/app/main/setup/iservices/create-edit-iservices.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_5__["IdentityService"]])
], CreateEditIServicesComponent);



/***/ }),

/***/ "./src/app/main/setup/item/create-edit-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/setup/item/create-edit-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvaXRlbS9jcmVhdGUtZWRpdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/item/create-edit-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/setup/item/create-edit-item.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateEditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditItemComponent", function() { return CreateEditItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_item_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dtos/identity/item-dto */ "./src/app/shared/dtos/identity/item-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);










let CreateEditItemComponent = class CreateEditItemComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.Item = new src_app_shared_dtos_identity_item_dto__WEBPACK_IMPORTED_MODULE_6__["ItemDto"]();
        this.saving = false;
        this.itemList = [];
        this.uoms = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Item No", "field": "item_no" },
            { "title": "Item Title", "field": "item_title" },
            { "title": "UOM", "field": "item_uom" }
        ];
    }
    ngOnInit() {
        this.getUOM();
    }
    getUOM() {
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
        this.itemList = [];
        this._processDataService.getData("/api/items").subscribe(response => {
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
        this._processDataService.getDataById("/api/items/id/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.Item = response.data;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/items/no/" + this.Item.item_no).subscribe(response => {
            if (response.status === 1) {
                this.Item = response.data;
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
        this._processDataService.getData("/api/nextNumber/item").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.Item.item_no = response.data.value;
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
        let url_ = "/api/items";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/items/id/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this._processDataService.create(url_, this.Item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => (this.saving = false))).subscribe(response => {
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
        this._processDataService.patch(url_, this.Item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => (this.saving = false))).subscribe(response => {
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
                this._processDataService.delete("/api/items/" + this._id).subscribe(result => {
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
        this.Item = new src_app_shared_dtos_identity_item_dto__WEBPACK_IMPORTED_MODULE_6__["ItemDto"]();
        this._id = null;
        this.isNo = false;
        this.getUOM();
    }
};
CreateEditItemComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_5__["LookupTableModalComponent"])
], CreateEditItemComponent.prototype, "showDataModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instance', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
], CreateEditItemComponent.prototype, "instance", void 0);
CreateEditItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-item',
        template: __webpack_require__(/*! raw-loader!./create-edit-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/item/create-edit-item.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-item.component.scss */ "./src/app/main/setup/item/create-edit-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"]])
], CreateEditItemComponent);



/***/ }),

/***/ "./src/app/main/setup/packing/create-edit-packing.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/setup/packing/create-edit-packing.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvcGFja2luZy9jcmVhdGUtZWRpdC1wYWNraW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/packing/create-edit-packing.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup/packing/create-edit-packing.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateEditPackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditPackingComponent", function() { return CreateEditPackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_packing_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dtos/identity/packing-dto */ "./src/app/shared/dtos/identity/packing-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);









let CreateEditPackingComponent = class CreateEditPackingComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.packing = new src_app_shared_dtos_identity_packing_dto__WEBPACK_IMPORTED_MODULE_5__["PackingDto"]();
        this.saving = false;
        this.itemList = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Packing No", "field": "pck_no" },
            { "title": "Packing Title", "field": "pck_title" },
        ];
    }
    ngOnInit() {
    }
    getData() {
        this.itemList = [];
        this._processDataService.getData("/api/packs").subscribe(response => {
            if (response.status === 1) {
                this.itemList = response.data;
                this.showDataModal.show(this.tableHeaders, this.itemList);
            }
        });
    }
    getDataById(event) {
        this._processDataService.getDataById("/api/packs/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.packing = response.data;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/packs/no/" + this.packing.pck_no).subscribe(response => {
            if (response.status === 1) {
                this.packing = response.data;
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
        this._processDataService.getData("/api/nextNumber/packing").subscribe(response => {
            if (response.status === 1) {
                this.reset();
                this.packing.pck_no = response.data.value;
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
        let url_ = "/api/packs";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/packs/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
    }
    create(url_, saveForm) {
        this._processDataService.create(url_, this.packing).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
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
        debugger;
        this._processDataService.patch(url_, this.packing).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
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
                this._processDataService.delete("/api/packs/" + this._id).subscribe(result => {
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
        this.packing = new src_app_shared_dtos_identity_packing_dto__WEBPACK_IMPORTED_MODULE_5__["PackingDto"]();
        this._id = null;
        this.isNo = false;
    }
};
CreateEditPackingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"])
], CreateEditPackingComponent.prototype, "showDataModal", void 0);
CreateEditPackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-packing',
        template: __webpack_require__(/*! raw-loader!./create-edit-packing.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/packing/create-edit-packing.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-packing.component.scss */ "./src/app/main/setup/packing/create-edit-packing.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_6__["IdentityService"]])
], CreateEditPackingComponent);



/***/ }),

/***/ "./src/app/main/setup/vehicle/create-edit-vehicle.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/setup/vehicle/create-edit-vehicle.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dXAvdmVoaWNsZS9jcmVhdGUtZWRpdC12ZWhpY2xlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/setup/vehicle/create-edit-vehicle.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/setup/vehicle/create-edit-vehicle.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateEditVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditVehicleComponent", function() { return CreateEditVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common/app-component-base */ "./src/app/shared/common/app-component-base.ts");
/* harmony import */ var src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/contact-detail/contact-detail.component */ "./src/app/shared/components/contact-detail/contact-detail.component.ts");
/* harmony import */ var src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_shared_dtos_identity_vehicle_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dtos/identity/vehicle-dto */ "./src/app/shared/dtos/identity/vehicle-dto.ts");
/* harmony import */ var src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/identity.service */ "./src/app/shared/services/identity.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);










let CreateEditVehicleComponent = class CreateEditVehicleComponent extends src_app_shared_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, _processDataService) {
        super(injector);
        this._processDataService = _processDataService;
        this.Vehicle = new src_app_shared_dtos_identity_vehicle_dto__WEBPACK_IMPORTED_MODULE_6__["VehicleDto"]();
        this.typeList = ['Own', 'Rental'];
        this.designationList = ['Driver', 'Helper'];
        this.VehicleStaffListDto = {};
        this.VehicleStaffDto = {};
        this.saving = false;
        this.voucherList = [];
        this.uoms = [];
        this._id = null;
        this.isNo = false;
        this.tableHeaders = [
            { "title": "Id", "field": "_id", "hide": true },
            { "title": "Vehicle No", "field": "voucher_no" },
            { "title": "Vehicle Title", "field": "voucher_title" },
            { "title": "UOM", "field": "voucher_uom" }
        ];
    }
    ngOnInit() {
        this.getUOM();
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
        this.voucherList = [];
        this._processDataService.getData("/api/vehicles").subscribe(response => {
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
        this._processDataService.getDataById("/api/vehicles/id/" + event._id).subscribe(response => {
            if (response.status === 1) {
                this.Vehicle = response.data;
                this._id = event._id;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    getDataByNo() {
        this._processDataService.getDataById("/api/vehicles/no/" + this.Vehicle.vh_no).subscribe(response => {
            if (response.status === 1) {
                this.Vehicle = response.data;
                this.contactDetail.contacts = response.data.phones;
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
                this.Vehicle.vh_no = response.data.value;
                this.isNo = true;
            }
            else {
                this.message.fire("Error", response.message, "error");
            }
        });
    }
    save(saveForm) {
        debugger;
        this.VehicleStaffDto.phones = this.contactDetail.contacts;
        this.VehicleStaffListDto.staff = this.VehicleStaffDto;
        this.Vehicle.vh_staffs = this.VehicleStaffListDto;
        this.saving = true;
        let url_ = "/api/vehicles";
        if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(this._id)) {
            url_ = "/api/vehicles/id/" + this._id;
            this.patch(url_, saveForm);
        }
        else {
            this.create(url_, saveForm);
        }
        this.getUOM();
    }
    create(url_, saveForm) {
        this.contactDetail.contacts;
        this._processDataService.create(url_, this.Vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
            debugger;
            if (response.status == 1) {
                this.Vehicle.vh_no = response.data.vh_no + 1;
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
        this._processDataService.patch(url_, this.Vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => (this.saving = false))).subscribe(response => {
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
                this._processDataService.delete("/api/vehicles/" + this._id).subscribe(result => {
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
        this.Vehicle = new src_app_shared_dtos_identity_vehicle_dto__WEBPACK_IMPORTED_MODULE_6__["VehicleDto"]();
        this._id = null;
        this.isNo = false;
    }
    setTypeheadList(param) {
        switch (param) {
            case 'type':
                this.typeheadlist = this.typeList;
                break;
            case 'desig':
                this.typeheadlist = this.designationList;
                break;
        }
    }
};
CreateEditVehicleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showDataModal', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_5__["LookupTableModalComponent"])
], CreateEditVehicleComponent.prototype, "showDataModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactDetail', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"])
], CreateEditVehicleComponent.prototype, "contactDetail", void 0);
CreateEditVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-edit-voucher',
        template: __webpack_require__(/*! raw-loader!./create-edit-vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/setup/vehicle/create-edit-vehicle.component.html"),
        styles: [__webpack_require__(/*! ./create-edit-vehicle.component.scss */ "./src/app/main/setup/vehicle/create-edit-vehicle.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_identity_service__WEBPACK_IMPORTED_MODULE_7__["IdentityService"]])
], CreateEditVehicleComponent);



/***/ }),

/***/ "./src/app/shared/dtos/identity/customer-dto.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/dtos/identity/customer-dto.ts ***!
  \******************************************************/
/*! exports provided: CustomerDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDto", function() { return CustomerDto; });
class CustomerDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/iservices-dto.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/dtos/identity/iservices-dto.ts ***!
  \*******************************************************/
/*! exports provided: iServicesDto, iServiceHeadDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iServicesDto", function() { return iServicesDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iServiceHeadDto", function() { return iServiceHeadDto; });
class iServicesDto {
}
class iServiceHeadDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/item-dto.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/dtos/identity/item-dto.ts ***!
  \**************************************************/
/*! exports provided: ItemDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDto", function() { return ItemDto; });
class ItemDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/packing-dto.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/dtos/identity/packing-dto.ts ***!
  \*****************************************************/
/*! exports provided: PackingDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingDto", function() { return PackingDto; });
class PackingDto {
}


/***/ }),

/***/ "./src/app/shared/dtos/identity/vehicle-dto.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/dtos/identity/vehicle-dto.ts ***!
  \*****************************************************/
/*! exports provided: VehicleDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDto", function() { return VehicleDto; });
class VehicleDto {
}


/***/ })

}]);
//# sourceMappingURL=identity-identity-module-es2015.js.map