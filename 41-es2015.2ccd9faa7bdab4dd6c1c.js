(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{faFu:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class a{}var t=u("pMnS"),i=u("mRr9"),d=u("G0yt"),r=u("/n7v"),o=u("U2d/"),c=u("SVse"),s=u("iInd"),p=u("S8Sc");class g{constructor(l,n,u){this.route=l,this.nav=n,this.titleService=u,this.breadcrumbList=[],this.navigationList=[],this.navigation=this.nav.get(),this.type="theme2",this.setBreadcrumb()}ngOnInit(){let l;l=this.route.url,l&&"string"==typeof l&&this.filterNavigation(l)}setBreadcrumb(){let l;this.route.events.subscribe(n=>{l=n.urlAfterRedirects,l&&"string"==typeof l&&(this.breadcrumbList.length=0,this.filterNavigation(n.url))})}filterNavigation(l){let n=[],u="Welcome";this.navigation.forEach(e=>{"item"===e.type&&"url"in e&&e.url===l?(n=[{url:"url"in e&&e.url,title:e.title,breadcrumbs:!("breadcrumbs"in e)||e.breadcrumbs,type:e.type}],u=e.title):"group"===e.type&&"children"in e&&e.children.forEach(e=>{"item"===e.type&&"url"in e&&e.url===l?(n=[{url:"url"in e&&e.url,title:e.title,breadcrumbs:!("breadcrumbs"in e)||e.breadcrumbs,type:e.type}],u=e.title):"collapse"===e.type&&"children"in e&&e.children.forEach(a=>{"item"===a.type&&"url"in a&&a.url===l?(n=[{url:"url"in e&&e.url,title:e.title,breadcrumbs:!("breadcrumbs"in e)||e.breadcrumbs,type:e.type},{url:"url"in a&&a.url,title:a.title,breadcrumbs:!("breadcrumbs"in a)||a.breadcrumbs,type:a.type}],u=a.title):"collapse"===a.type&&"children"in a&&a.children.forEach(t=>{"item"===t.type&&"url"in t&&t.url===l&&(n=[{url:"url"in e&&e.url,title:e.title,breadcrumbs:!("breadcrumbs"in e)||e.breadcrumbs,type:e.type},{url:"url"in a&&a.url,title:a.title,breadcrumbs:!("breadcrumbs"in a)||a.breadcrumbs,type:a.type},{url:"url"in t&&t.url,title:t.title,breadcrumbs:!("breadcrumbs"in a)||t.breadcrumbs,type:t.type}],u=t.title)})})})}),this.navigationList=n,this.titleService.setTitle(u+" | Cargo Manager")}}var m=u("cUpR"),b=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h5",[["class","m-b-10"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.title)}))}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](2,16384,null,0,c.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,n.context.last)}),null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a}),null,null)),e["\u0275did"](1,671744,null,0,s.r,[s.o,s.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,1),(l()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","feather icon-home"]],null,null,null,null,null))],(function(l,n){var u=l(n,2,0,"/dashboard/analytics/");l(n,1,0,u)}),(function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href)}))}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a}),null,null)),e["\u0275did"](1,671744,null,0,s.r,[s.o,s.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,1),(l()(),e["\u0275ted"](-1,null,["Home"]))],(function(l,n){var u=l(n,2,0,"/dashboard/analytics/");l(n,1,0,u)}),(function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href)}))}function q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e["\u0275nov"](l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a}),null,null)),e["\u0275did"](2,671744,null,0,s.r,[s.o,s.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](3,null,["",""]))],(function(l,n){l(n,2,0,n.parent.context.$implicit.url)}),(function(l,n){l(n,1,0,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,3,0,n.parent.context.$implicit.title)}))}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""]))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.title)}))}function z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](2,16384,null,0,c.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](4,16384,null,0,c.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,!1!==n.context.$implicit.url),l(n,4,0,!1===n.context.$implicit.url)}),null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[["class","page-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","page-block"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,12,"div",[["class","row align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,11,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","page-header-title"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](6,278528,null,0,c.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](7,0,null,null,7,"ul",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,4,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](10,16384,null,0,c.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](12,16384,null,0,c.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,z)),e["\u0275did"](14,278528,null,0,c.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,6,0,u.navigationList),l(n,10,0,"theme2"===u.type),l(n,12,0,"theme1"===u.type),l(n,14,0,u.navigationList)}),null)}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](2,16384,null,0,c.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,n.context.last&&!1!==n.context.$implicit.breadcrumbs)}),null)}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](2,278528,null,0,c.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275and"](0,null,null,0))],(function(l,n){l(n,2,0,n.component.navigationList)}),null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](1,16384,null,0,c.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.navigationList)}),null)}var N=u("s7LF"),F=u("9AJC");class T{constructor(){this.breadcrumbTheme="theme1",this.defaultPage=5,this.noDirectionPage=4,this.boundaryPage=3,this.advancePage=5,this.sizePage=3,this.alignmentPage=3,this.disablePage=3,this.isDisabled=!0}ngOnInit(){}}var k=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,252,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,24,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,23,"app-card",[["cardTitle","Breadcrumb"]],null,null,null,i.b,i.a)),e["\u0275prd"](512,null,d.w,d.w,[]),e["\u0275did"](4,114688,null,0,r.a,[o.AnimationService,d.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](5,0,null,1,3,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,2,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](9,0,null,1,6,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,5,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](14,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Library"])),(l()(),e["\u0275eld"](16,0,null,1,9,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,8,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,1,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Home"])),(l()(),e["\u0275eld"](21,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Library"])),(l()(),e["\u0275eld"](24,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Data"])),(l()(),e["\u0275eld"](26,0,null,null,24,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,23,"app-card",[["cardTitle","Breadcrumb Icon"]],null,null,null,i.b,i.a)),e["\u0275prd"](512,null,d.w,d.w,[]),e["\u0275did"](29,114688,null,0,r.a,[o.AnimationService,d.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](30,0,null,1,3,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,2,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,0,"i",[["class","feather icon-home"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,1,6,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,5,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,1,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,0,"i",[["class","feather icon-home"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Library"])),(l()(),e["\u0275eld"](41,0,null,1,9,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,8,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,1,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,0,"i",[["class","feather icon-home"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,2,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,1,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Library"])),(l()(),e["\u0275eld"](49,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Data"])),(l()(),e["\u0275eld"](51,0,null,null,29,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,28,"app-card",[["cardTitle","Breadcrumb Live"]],null,null,null,i.b,i.a)),e["\u0275prd"](512,null,d.w,d.w,[]),e["\u0275did"](54,114688,null,0,r.a,[o.AnimationService,d.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](55,0,null,1,7,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["use "])),(l()(),e["\u0275eld"](57,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["[type]"])),(l()(),e["\u0275ted"](-1,null,[" input parameter with "])),(l()(),e["\u0275eld"](60,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["app-breadcrumb"])),(l()(),e["\u0275ted"](-1,null,[" tag to set breadcrumb theme."])),(l()(),e["\u0275eld"](63,0,null,1,1,"app-breadcrumb",[],null,null,null,w,b)),e["\u0275did"](64,114688,null,0,g,[s.o,p.a,m.Title],{type:[0,"type"]},null),(l()(),e["\u0275eld"](65,0,null,1,15,"div",[["class","btn-group btn-group-toggle"],["ngbRadioGroup",""],["role","radiogroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.breadcrumbTheme=u)&&e),e}),null,null)),e["\u0275did"](66,16384,null,0,d.U,[],null,null),e["\u0275prd"](1024,null,N.h,(function(l){return[l]}),[d.U]),e["\u0275did"](68,671744,null,0,N.m,[[8,null],[8,null],[8,null],[6,N.h]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,N.i,null,[N.m]),e["\u0275did"](70,16384,null,0,N.j,[[4,N.i]],null,null),(l()(),e["\u0275eld"](71,0,null,null,4,"label",[["class","btn btn-primary"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),e["\u0275did"](72,16384,null,0,d.g,[],null,null),(l()(),e["\u0275eld"](73,0,null,null,1,"input",[["id","theme1"],["name","theme"],["ngbButton",""],["type","radio"],["value","theme1"]],[[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"change"],[null,"focus"],[null,"blur"]],(function(l,n,u){var a=!0;return"change"===n&&(a=!1!==e["\u0275nov"](l,74).onChange()&&a),"focus"===n&&(a=0!=(e["\u0275nov"](l,74).focused=!0)&&a),"blur"===n&&(a=0!=(e["\u0275nov"](l,74).focused=!1)&&a),a}),null,null)),e["\u0275did"](74,147456,null,0,d.T,[d.U,d.g,e.Renderer2,e.ElementRef,e.ChangeDetectorRef],{name:[0,"name"],value:[1,"value"]},null),(l()(),e["\u0275ted"](-1,null,[" Simple"])),(l()(),e["\u0275eld"](76,0,null,null,4,"label",[["class","btn btn-primary"],["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),e["\u0275did"](77,16384,null,0,d.g,[],null,null),(l()(),e["\u0275eld"](78,0,null,null,1,"input",[["id","theme2"],["name","theme"],["ngbButton",""],["type","radio"],["value","theme2"]],[[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"change"],[null,"focus"],[null,"blur"]],(function(l,n,u){var a=!0;return"change"===n&&(a=!1!==e["\u0275nov"](l,79).onChange()&&a),"focus"===n&&(a=0!=(e["\u0275nov"](l,79).focused=!0)&&a),"blur"===n&&(a=0!=(e["\u0275nov"](l,79).focused=!1)&&a),a}),null,null)),e["\u0275did"](79,147456,null,0,d.T,[d.U,d.g,e.Renderer2,e.ElementRef,e.ChangeDetectorRef],{name:[0,"name"],value:[1,"value"]},null),(l()(),e["\u0275ted"](-1,null,[" Icon"])),(l()(),e["\u0275eld"](81,0,null,null,42,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](82,0,null,null,41,"app-card",[["cardTitle","Basic Pagination"]],null,null,null,i.b,i.a)),e["\u0275prd"](512,null,d.w,d.w,[]),e["\u0275did"](84,114688,null,0,r.a,[o.AnimationService,d.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](85,0,null,1,4,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["click "])),(l()(),e["\u0275eld"](87,0,null,null,1,"a",[["class","badge badge-primary"],["href","https://ng-bootstrap.github.io/#/components/pagination/examples"],["target","_blank"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["ng-bootstrap"])),(l()(),e["\u0275ted"](-1,null,[" for pagination guide."])),(l()(),e["\u0275eld"](90,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Default pagination:"])),(l()(),e["\u0275eld"](92,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](93,0,null,1,7,"ngb-pagination",[["aria-label","Default pagination"],["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.defaultPage=u)&&e),e}),F.h,F.c)),e["\u0275did"](94,573440,null,6,d.F,[d.G],{collectionSize:[0,"collectionSize"],page:[1,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,1,{tplEllipsis:0}),e["\u0275qud"](335544320,2,{tplFirst:0}),e["\u0275qud"](335544320,3,{tplLast:0}),e["\u0275qud"](335544320,4,{tplNext:0}),e["\u0275qud"](335544320,5,{tplNumber:0}),e["\u0275qud"](335544320,6,{tplPrevious:0}),(l()(),e["\u0275eld"](101,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No direction links:"])),(l()(),e["\u0275eld"](103,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](104,0,null,1,7,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.noDirectionPage=u)&&e),e}),F.h,F.c)),e["\u0275did"](105,573440,null,6,d.F,[d.G],{directionLinks:[0,"directionLinks"],collectionSize:[1,"collectionSize"],page:[2,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,7,{tplEllipsis:0}),e["\u0275qud"](335544320,8,{tplFirst:0}),e["\u0275qud"](335544320,9,{tplLast:0}),e["\u0275qud"](335544320,10,{tplNext:0}),e["\u0275qud"](335544320,11,{tplNumber:0}),e["\u0275qud"](335544320,12,{tplPrevious:0}),(l()(),e["\u0275eld"](112,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["With boundary links:"])),(l()(),e["\u0275eld"](114,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](115,0,null,1,8,"div",[["class","horizontal-scroll"]],null,null,null,null,null)),(l()(),e["\u0275eld"](116,0,null,null,7,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.boundaryPage=u)&&e),e}),F.h,F.c)),e["\u0275did"](117,573440,null,6,d.F,[d.G],{boundaryLinks:[0,"boundaryLinks"],collectionSize:[1,"collectionSize"],page:[2,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,13,{tplEllipsis:0}),e["\u0275qud"](335544320,14,{tplFirst:0}),e["\u0275qud"](335544320,15,{tplLast:0}),e["\u0275qud"](335544320,16,{tplNext:0}),e["\u0275qud"](335544320,17,{tplNumber:0}),e["\u0275qud"](335544320,18,{tplPrevious:0}),(l()(),e["\u0275eld"](124,0,null,null,39,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](125,0,null,null,38,"app-card",[["cardTitle","Advanced Pagination"]],null,null,null,i.b,i.a)),e["\u0275prd"](512,null,d.w,d.w,[]),e["\u0275did"](127,114688,null,0,r.a,[o.AnimationService,d.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](128,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Restricted size, no rotation:"])),(l()(),e["\u0275eld"](130,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](131,0,null,1,8,"div",[["class","horizontal-scroll"]],null,null,null,null,null)),(l()(),e["\u0275eld"](132,0,null,null,7,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.advancePage=u)&&e),e}),F.h,F.c)),e["\u0275did"](133,573440,null,6,d.F,[d.G],{boundaryLinks:[0,"boundaryLinks"],collectionSize:[1,"collectionSize"],maxSize:[2,"maxSize"],page:[3,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,19,{tplEllipsis:0}),e["\u0275qud"](335544320,20,{tplFirst:0}),e["\u0275qud"](335544320,21,{tplLast:0}),e["\u0275qud"](335544320,22,{tplNext:0}),e["\u0275qud"](335544320,23,{tplNumber:0}),e["\u0275qud"](335544320,24,{tplPrevious:0}),(l()(),e["\u0275eld"](140,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Restricted size with rotation:"])),(l()(),e["\u0275eld"](142,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](143,0,null,1,8,"div",[["class","horizontal-scroll"]],null,null,null,null,null)),(l()(),e["\u0275eld"](144,0,null,null,7,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.advancePage=u)&&e),e}),F.h,F.c)),e["\u0275did"](145,573440,null,6,d.F,[d.G],{boundaryLinks:[0,"boundaryLinks"],rotate:[1,"rotate"],collectionSize:[2,"collectionSize"],maxSize:[3,"maxSize"],page:[4,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,25,{tplEllipsis:0}),e["\u0275qud"](335544320,26,{tplFirst:0}),e["\u0275qud"](335544320,27,{tplLast:0}),e["\u0275qud"](335544320,28,{tplNext:0}),e["\u0275qud"](335544320,29,{tplNumber:0}),e["\u0275qud"](335544320,30,{tplPrevious:0}),(l()(),e["\u0275eld"](152,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Restricted size with rotation and no ellipses:"])),(l()(),e["\u0275eld"](154,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](155,0,null,1,8,"div",[["class","horizontal-scroll"]],null,null,null,null,null)),(l()(),e["\u0275eld"](156,0,null,null,7,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.advancePage=u)&&e),e}),F.h,F.c)),e["\u0275did"](157,573440,null,6,d.F,[d.G],{boundaryLinks:[0,"boundaryLinks"],ellipses:[1,"ellipses"],rotate:[2,"rotate"],collectionSize:[3,"collectionSize"],maxSize:[4,"maxSize"],page:[5,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,31,{tplEllipsis:0}),e["\u0275qud"](335544320,32,{tplFirst:0}),e["\u0275qud"](335544320,33,{tplLast:0}),e["\u0275qud"](335544320,34,{tplNext:0}),e["\u0275qud"](335544320,35,{tplNumber:0}),e["\u0275qud"](335544320,36,{tplPrevious:0}),(l()(),e["\u0275eld"](164,0,null,null,37,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](165,0,null,null,36,"app-card",[["cardTitle","Pagination Size"]],null,null,null,i.b,i.a)),e["\u0275prd"](512,null,d.w,d.w,[]),e["\u0275did"](167,114688,null,0,r.a,[o.AnimationService,d.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](168,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Large Size:"])),(l()(),e["\u0275eld"](170,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](171,0,null,1,8,"div",[["class","horizontal-scroll"]],null,null,null,null,null)),(l()(),e["\u0275eld"](172,0,null,null,7,"ngb-pagination",[["role","navigation"],["size","lg"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.sizePage=u)&&e),e}),F.h,F.c)),e["\u0275did"](173,573440,null,6,d.F,[d.G],{collectionSize:[0,"collectionSize"],page:[1,"page"],size:[2,"size"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,37,{tplEllipsis:0}),e["\u0275qud"](335544320,38,{tplFirst:0}),e["\u0275qud"](335544320,39,{tplLast:0}),e["\u0275qud"](335544320,40,{tplNext:0}),e["\u0275qud"](335544320,41,{tplNumber:0}),e["\u0275qud"](335544320,42,{tplPrevious:0}),(l()(),e["\u0275eld"](180,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Medium Size (Default):"])),(l()(),e["\u0275eld"](182,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](183,0,null,1,7,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.sizePage=u)&&e),e}),F.h,F.c)),e["\u0275did"](184,573440,null,6,d.F,[d.G],{collectionSize:[0,"collectionSize"],page:[1,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,43,{tplEllipsis:0}),e["\u0275qud"](335544320,44,{tplFirst:0}),e["\u0275qud"](335544320,45,{tplLast:0}),e["\u0275qud"](335544320,46,{tplNext:0}),e["\u0275qud"](335544320,47,{tplNumber:0}),e["\u0275qud"](335544320,48,{tplPrevious:0}),(l()(),e["\u0275eld"](191,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Small Size:"])),(l()(),e["\u0275eld"](193,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](194,0,null,1,7,"ngb-pagination",[["role","navigation"],["size","sm"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.sizePage=u)&&e),e}),F.h,F.c)),e["\u0275did"](195,573440,null,6,d.F,[d.G],{collectionSize:[0,"collectionSize"],page:[1,"page"],size:[2,"size"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,49,{tplEllipsis:0}),e["\u0275qud"](335544320,50,{tplFirst:0}),e["\u0275qud"](335544320,51,{tplLast:0}),e["\u0275qud"](335544320,52,{tplNext:0}),e["\u0275qud"](335544320,53,{tplNumber:0}),e["\u0275qud"](335544320,54,{tplPrevious:0}),(l()(),e["\u0275eld"](202,0,null,null,36,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](203,0,null,null,35,"app-card",[["cardTitle","Pagination Alignment"]],null,null,null,i.b,i.a)),e["\u0275prd"](512,null,d.w,d.w,[]),e["\u0275did"](205,114688,null,0,r.a,[o.AnimationService,d.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](206,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Left:"])),(l()(),e["\u0275eld"](208,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](209,0,null,1,7,"ngb-pagination",[["class","d-flex justify-content-start"],["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.alignmentPage=u)&&e),e}),F.h,F.c)),e["\u0275did"](210,573440,null,6,d.F,[d.G],{collectionSize:[0,"collectionSize"],page:[1,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,55,{tplEllipsis:0}),e["\u0275qud"](335544320,56,{tplFirst:0}),e["\u0275qud"](335544320,57,{tplLast:0}),e["\u0275qud"](335544320,58,{tplNext:0}),e["\u0275qud"](335544320,59,{tplNumber:0}),e["\u0275qud"](335544320,60,{tplPrevious:0}),(l()(),e["\u0275eld"](217,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Center:"])),(l()(),e["\u0275eld"](219,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](220,0,null,1,7,"ngb-pagination",[["class","d-flex justify-content-center"],["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.alignmentPage=u)&&e),e}),F.h,F.c)),e["\u0275did"](221,573440,null,6,d.F,[d.G],{collectionSize:[0,"collectionSize"],page:[1,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,61,{tplEllipsis:0}),e["\u0275qud"](335544320,62,{tplFirst:0}),e["\u0275qud"](335544320,63,{tplLast:0}),e["\u0275qud"](335544320,64,{tplNext:0}),e["\u0275qud"](335544320,65,{tplNumber:0}),e["\u0275qud"](335544320,66,{tplPrevious:0}),(l()(),e["\u0275eld"](228,0,null,1,1,"h5",[["class","mt-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Right:"])),(l()(),e["\u0275eld"](230,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](231,0,null,1,7,"ngb-pagination",[["class","d-flex justify-content-end"],["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.alignmentPage=u)&&e),e}),F.h,F.c)),e["\u0275did"](232,573440,null,6,d.F,[d.G],{collectionSize:[0,"collectionSize"],page:[1,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,67,{tplEllipsis:0}),e["\u0275qud"](335544320,68,{tplFirst:0}),e["\u0275qud"](335544320,69,{tplLast:0}),e["\u0275qud"](335544320,70,{tplNext:0}),e["\u0275qud"](335544320,71,{tplNumber:0}),e["\u0275qud"](335544320,72,{tplPrevious:0}),(l()(),e["\u0275eld"](239,0,null,null,13,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](240,0,null,null,12,"app-card",[["cardTitle","Disabled Pagination"]],null,null,null,i.b,i.a)),e["\u0275prd"](512,null,d.w,d.w,[]),e["\u0275did"](242,114688,null,0,r.a,[o.AnimationService,d.w],{cardTitle:[0,"cardTitle"],options:[1,"options"]},null),(l()(),e["\u0275eld"](243,0,null,1,7,"ngb-pagination",[["role","navigation"]],null,[[null,"pageChange"]],(function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==(l.component.disablePage=u)&&e),e}),F.h,F.c)),e["\u0275did"](244,573440,null,6,d.F,[d.G],{disabled:[0,"disabled"],collectionSize:[1,"collectionSize"],page:[2,"page"]},{pageChange:"pageChange"}),e["\u0275qud"](335544320,73,{tplEllipsis:0}),e["\u0275qud"](335544320,74,{tplFirst:0}),e["\u0275qud"](335544320,75,{tplLast:0}),e["\u0275qud"](335544320,76,{tplNext:0}),e["\u0275qud"](335544320,77,{tplNumber:0}),e["\u0275qud"](335544320,78,{tplPrevious:0}),(l()(),e["\u0275eld"](251,0,null,1,1,"button",[["class","btn btn-sm btn-outline-primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0,a=l.component;return"click"===n&&(e=0!=(a.isDisabled=!a.isDisabled)&&e),e}),null,null)),(l()(),e["\u0275ted"](252,null,["",""]))],(function(l,n){var u=n.component;l(n,4,0,"Breadcrumb",!1),l(n,29,0,"Breadcrumb Icon",!1),l(n,54,0,"Breadcrumb Live",!1),l(n,64,0,u.breadcrumbTheme),l(n,68,0,u.breadcrumbTheme),l(n,74,0,"theme","theme1"),l(n,79,0,"theme","theme2"),l(n,84,0,"Basic Pagination",!1),l(n,94,0,70,u.defaultPage),l(n,105,0,!1,70,u.noDirectionPage),l(n,117,0,!0,70,u.boundaryPage),l(n,127,0,"Advanced Pagination",!1),l(n,133,0,!0,120,5,u.advancePage),l(n,145,0,!0,!0,120,5,u.advancePage),l(n,157,0,!0,!1,!0,120,5,u.advancePage),l(n,167,0,"Pagination Size",!1),l(n,173,0,50,u.sizePage,"lg"),l(n,184,0,50,u.sizePage),l(n,195,0,50,u.sizePage,"sm"),l(n,205,0,"Pagination Alignment",!1),l(n,210,0,70,u.alignmentPage),l(n,221,0,70,u.alignmentPage),l(n,232,0,70,u.alignmentPage),l(n,242,0,"Disabled Pagination",!1),l(n,244,0,u.isDisabled,70,u.disablePage)}),(function(l,n){var u=n.component;l(n,65,0,e["\u0275nov"](n,70).ngClassUntouched,e["\u0275nov"](n,70).ngClassTouched,e["\u0275nov"](n,70).ngClassPristine,e["\u0275nov"](n,70).ngClassDirty,e["\u0275nov"](n,70).ngClassValid,e["\u0275nov"](n,70).ngClassInvalid,e["\u0275nov"](n,70).ngClassPending),l(n,71,0,!0,e["\u0275nov"](n,72).active,e["\u0275nov"](n,72).disabled,e["\u0275nov"](n,72).focused),l(n,73,0,e["\u0275nov"](n,74).checked,e["\u0275nov"](n,74).disabled,e["\u0275nov"](n,74).nameAttr),l(n,76,0,!0,e["\u0275nov"](n,77).active,e["\u0275nov"](n,77).disabled,e["\u0275nov"](n,77).focused),l(n,78,0,e["\u0275nov"](n,79).checked,e["\u0275nov"](n,79).disabled,e["\u0275nov"](n,79).nameAttr),l(n,252,0,!1===u.isDisabled?"Disable":"Enable")}))}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-breadcrumb-paging",[],null,null,null,R,k)),e["\u0275did"](1,114688,null,0,T,[],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e["\u0275ccf"]("app-breadcrumb-paging",T,I,{},{},[]),D=u("sNsg"),A=u("lID6"),E=u("78jF"),O=u("9OXH");class B{}var G=u("bse0"),M=u("N4L5"),j=u("IcD6"),V=u("wcvO"),K=u("z0HF"),H=u("sIwa"),U=u("22Na"),$=u("tgxt"),_=u("ebz3");u.d(n,"BreadcrumbPagingModuleNgFactory",(function(){return J}));var J=e["\u0275cmf"](a,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,x]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[e.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,N.r,N.r,[]),e["\u0275mpd"](4608,N.e,N.e,[]),e["\u0275mpd"](4608,o.AnimationService,o.AnimationService,[]),e["\u0275mpd"](4608,D.a,D.a,[]),e["\u0275mpd"](4608,A.a,A.a,[]),e["\u0275mpd"](4608,E.a,E.a,[]),e["\u0275mpd"](4608,O.a,O.a,[]),e["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),e["\u0275mpd"](1073742336,s.s,s.s,[[2,s.x],[2,s.o]]),e["\u0275mpd"](1073742336,B,B,[]),e["\u0275mpd"](1073742336,G.d,G.d,[]),e["\u0275mpd"](1073742336,N.q,N.q,[]),e["\u0275mpd"](1073742336,N.f,N.f,[]),e["\u0275mpd"](1073742336,N.o,N.o,[]),e["\u0275mpd"](1073742336,M.a,M.a,[]),e["\u0275mpd"](1073742336,d.y,d.y,[]),e["\u0275mpd"](1073742336,j.AnimatorModule,j.AnimatorModule,[]),e["\u0275mpd"](1073742336,V.a,V.a,[]),e["\u0275mpd"](1073742336,K.a,K.a,[]),e["\u0275mpd"](1073742336,H.a,H.a,[]),e["\u0275mpd"](1073742336,U.ClickOutsideModule,U.ClickOutsideModule,[]),e["\u0275mpd"](1073742336,$.a,$.a,[]),e["\u0275mpd"](1073742336,_.a,_.a,[]),e["\u0275mpd"](1073742336,d.h,d.h,[]),e["\u0275mpd"](1073742336,d.H,d.H,[]),e["\u0275mpd"](1073742336,a,a,[]),e["\u0275mpd"](1024,s.m,(function(){return[[{path:"",component:T}]]}),[]),e["\u0275mpd"](256,G.a,_.b,[])])}))}}]);