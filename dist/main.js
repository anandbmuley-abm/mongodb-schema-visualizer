(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _mongodb_schema_visualizer_mongodb_schema_visualizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mongodb-schema-visualizer/mongodb-schema-visualizer.component */ "./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.ts");





var routes = [
    {
        path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'mongodb-schema-visualizer', component: _mongodb_schema_visualizer_mongodb_schema_visualizer_component__WEBPACK_IMPORTED_MODULE_4__["MongodbSchemaVisualizerComponent"]
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #ffb8ff;\n}\n\n.site-header {\n  border: solid 1px #945494;\n  padding-bottom: 10px;\n  background-color: #945494;\n  cursor: pointer;\n}\n\n.subtitle {\n  font-size: 11px;\n  color: #ffb8ff;\n  font-weight: 600;\n  margin-top: -12px;\n}\n\n.developer-details {\n  float: right;\n  margin-top: -37px;\n  margin-right: 29px;\n  color: #ffb8ff;\n}\n\n.pointer {\n  font-size: 12px;\n}\n\n.name {\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIGNvbG9yOiAjZmZiOGZmO1xufVxuXG4uc2l0ZS1oZWFkZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjOTQ1NDk0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0NTQ5NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmZiOGZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbn1cblxuLmRldmVsb3Blci1kZXRhaWxzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMzdweDtcbiAgbWFyZ2luLXJpZ2h0OiAyOXB4O1xuICBjb2xvcjogI2ZmYjhmZjtcbn1cblxuLnBvaW50ZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"showHome()\" class=\"site-header\" align=\"center\">\n  <h2>Smart Products</h2>\n  <div class=\"subtitle\">\n    Improving Developer Productivity\n  </div>\n  <div class=\"developer-details\">\n    <div class=\"pointer\">\n      Developed By\n    </div>\n    <div class=\"name\">\n      Anand Muley\n    </div>\n  </div>\n</div>\n<div align=\"center\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Smart Products';
    }
    AppComponent.prototype.showHome = function () {
        this.router.navigate(['/']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _mongodb_schema_visualizer_mongodb_schema_visualizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mongodb-schema-visualizer/mongodb-schema-visualizer.component */ "./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.ts");
/* harmony import */ var _mongodb_schema_visualizer_collection_collection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mongodb-schema-visualizer/collection/collection.component */ "./src/app/mongodb-schema-visualizer/collection/collection.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _mongodb_schema_visualizer_create_new_schema_create_new_schema_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mongodb-schema-visualizer/create-new-schema/create-new-schema.component */ "./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _mongodb_schema_visualizer_mongodb_schema_visualizer_component__WEBPACK_IMPORTED_MODULE_10__["MongodbSchemaVisualizerComponent"],
                _mongodb_schema_visualizer_collection_collection_component__WEBPACK_IMPORTED_MODULE_11__["CollectionComponent"],
                _mongodb_schema_visualizer_create_new_schema_create_new_schema_component__WEBPACK_IMPORTED_MODULE_15__["CreateNewSchemaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>MongoDB Schema Visualizer</mat-card-title>\n    <mat-card-subtitle>Picture is worth a thousand words</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image style=\"width: 280px\" src=\"assets/SchemaVisualization.png\" alt=\"Basic Schema Example Photo\">\n  <mat-card-content>\n    <p>\n      The product helps development teams to share visualized MongoDB schema in a meaningful format.\n      This will make the understanding easy and clear communication of the intent.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-button routerLink=\"/mongodb-schema-visualizer\">TRY OUT</a>\n    <!-- <button mat-button>SHARE</button> -->\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/collection/collection.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/collection/collection.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n  display: flex;\n  justify-content: left;\n  font-size: 20px;\n  font-weight: 600;\n  color: white;\n}\n\n.example-box {\n  /* width: 200px; */\n  max-width: 400px;\n  padding: 15px;\n  margin: 10px;\n  border: solid 1px orange;\n  background-color: orange;\n  /* color: rgba(0, 0, 0, 0.87); */\n  cursor: move;\n  display: inline-block;\n  justify-content: left;\n  align-items: left;\n  text-align: left;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  /* transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1); */\n  /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12); */\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uZ29kYi1zY2hlbWEtdmlzdWFsaXplci9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw2REFBNkQ7RUFDN0Q7O3NDQUVvQztBQUN0Qzs7QUFFQTtFQUNFOztzQ0FFb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9tb25nb2RiLXNjaGVtYS12aXN1YWxpemVyL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICAvKiB3aWR0aDogMjAwcHg7ICovXG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggb3JhbmdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIC8qIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyAqL1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIC8qIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7ICovXG4gIC8qIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7ICovXG59XG5cbi5leGFtcGxlLWJveDphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/collection/collection.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/collection/collection.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"editSchema()\" class=\"mongo-collection example-box\" cdkDrag>\n  <div class=\"heading\">{{collection.name}}</div>\n  <pre [innerHtml]=\"collection.data | json\"></pre>\n</div>"

/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/collection/collection.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/collection/collection.component.ts ***!
  \******************************************************************************/
/*! exports provided: MongoCollection, CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MongoCollection", function() { return MongoCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MongoCollection = /** @class */ (function () {
    function MongoCollection(name, data) {
        this.name = name;
        this.data = data;
    }
    MongoCollection.prototype.getName = function () {
        return this.name;
    };
    MongoCollection.prototype.getContent = function () {
        return this.data;
    };
    return MongoCollection;
}());

var CollectionComponent = /** @class */ (function () {
    function CollectionComponent() {
        this.onSelectingSchema = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CollectionComponent.prototype.ngOnInit = function () {
    };
    CollectionComponent.prototype.editSchema = function () {
        // var parsedJSON = JSON.parse(this.schema.definition.toString());
        // this.schema.definition = JSON.stringify(parsedJSON, null, "\t");
        this.onSelectingSchema.emit({
            name: this.collection.name,
            definition: JSON.stringify(this.collection.data, null, "\t")
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", MongoCollection)
    ], CollectionComponent.prototype, "collection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CollectionComponent.prototype, "onSelectingSchema", void 0);
    CollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mongo-collection',
            template: __webpack_require__(/*! ./collection.component.html */ "./src/app/mongodb-schema-visualizer/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.css */ "./src/app/mongodb-schema-visualizer/collection/collection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schema-container {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uZ29kYi1zY2hlbWEtdmlzdWFsaXplci9jcmVhdGUtbmV3LXNjaGVtYS9jcmVhdGUtbmV3LXNjaGVtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9uZ29kYi1zY2hlbWEtdmlzdWFsaXplci9jcmVhdGUtbmV3LXNjaGVtYS9jcmVhdGUtbmV3LXNjaGVtYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVtYS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"schema-name\">\n  <mat-label>Collection Name</mat-label>\n  <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Ex. Products\">\n</mat-form-field>\n<mat-form-field class=\"schema-container\">\n  <mat-label>Define Schema</mat-label>\n  <textarea [(ngModel)]=\"schema.definition\" (change)=\"formatContent()\" matInput rows=\"17\" placeholder=\"Start Defining\"></textarea>\n</mat-form-field>\n<button *ngIf=\"mode == 'CREATE'\" (click)=\"addSchema()\" style=\"margin-left: 10px\" mat-raised-button color=\"primary\">ADD</button>\n<button *ngIf=\"mode == 'EDIT'\" (click)=\"saveSchema()\" style=\"margin-left: 10px\" mat-raised-button color=\"primary\">SAVE</button>"

/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CreateNewSchemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewSchemaComponent", function() { return CreateNewSchemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateNewSchemaComponent = /** @class */ (function () {
    function CreateNewSchemaComponent() {
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.schema = { name: null, definition: null };
        this.mode = "CREATE";
    }
    CreateNewSchemaComponent.prototype.ngOnInit = function () {
    };
    CreateNewSchemaComponent.prototype.formatContent = function () {
        var parsedJSON = JSON.parse(this.schema.definition.toString());
        this.schema.definition = JSON.stringify(parsedJSON, null, "\t");
    };
    CreateNewSchemaComponent.prototype.addSchema = function () {
        this.onAdd.emit(this.schema);
        this.schema = { name: null, definition: null };
    };
    CreateNewSchemaComponent.prototype.saveSchema = function () {
        this.onSave.emit(this.schema);
        this.schema = { name: null, definition: null };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNewSchemaComponent.prototype, "onAdd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNewSchemaComponent.prototype, "onSave", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateNewSchemaComponent.prototype, "schema", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateNewSchemaComponent.prototype, "mode", void 0);
    CreateNewSchemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualizer-create-new-schema',
            template: __webpack_require__(/*! ./create-new-schema.component.html */ "./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.html"),
            styles: [__webpack_require__(/*! ./create-new-schema.component.css */ "./src/app/mongodb-schema-visualizer/create-new-schema/create-new-schema.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateNewSchemaComponent);
    return CreateNewSchemaComponent;
}());



/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".visualizer-container {\n  width: 95%;\n  min-height: 500px;\n  height: auto;\n  /* border: 1px solid grey; */\n}\n\nmongo-collection {\n  float: left;\n}\n\n.visualizer-sidenav-content {\n  display: flex-wrap;\n  height: 500px;\n  align-items: center;\n  justify-content: center;\n}\n\n.visualizer-sidenav {\n  padding: 20px;\n  width: 35%;\n  background-color: #f1f1f1;\n}\n\n.main-container {\n  border: solid 1px #b7b6b6;\n  width: 100%;\n  min-height: 400px;\n  margin-top: 20px;\n  border-radius: 5px;\n  background-color: #e0e0e0;\n}\n\n.collection-display {\n  position: absolute;\n  top: 10px;\n  left: 40px;\n}\n\n.pojos-download-btn {\n  position: absolute;\n  right: 10%;\n  top: 15%;\n}\n\n.app-version {\n  margin-top: -10px;\n  color: #a2a2a2;\n  margin-bottom: 10px;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n#screen {\n  width: 100%;\n  height: auto;\n}\n\n#download {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uZ29kYi1zY2hlbWEtdmlzdWFsaXplci9tb25nb2RiLXNjaGVtYS12aXN1YWxpemVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9uZ29kYi1zY2hlbWEtdmlzdWFsaXplci9tb25nb2RiLXNjaGVtYS12aXN1YWxpemVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlzdWFsaXplci1jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAqL1xufVxuXG5tb25nby1jb2xsZWN0aW9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi52aXN1YWxpemVyLXNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXgtd3JhcDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52aXN1YWxpemVyLXNpZGVuYXYge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYjdiNmI2O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuLmNvbGxlY3Rpb24tZGlzcGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiA0MHB4O1xufVxuXG4ucG9qb3MtZG93bmxvYWQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAlO1xuICB0b3A6IDE1JTtcbn1cblxuLmFwcC12ZXJzaW9uIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGNvbG9yOiAjYTJhMmEyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jc2NyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuI2Rvd25sb2FkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"visualizer-container\" autosize>\n  <mat-drawer #drawer [disableClose]=\"true\" [opened]=\"true\" class=\"visualizer-sidenav\" mode=\"side\">\n    <visualizer-create-new-schema [(mode)]=\"mode\" [(schema)]=\"selectedSchema\" (onSave)=\"saveUpdatedSchema($event)\" (onAdd)=\"addNewSchema($event)\"></visualizer-create-new-schema>\n    <button (click)=\"openFileBrowser($event)\" style=\"margin-left: 10px\" mat-raised-button color=\"primary\">UPLOAD</button>\n    <input id=\"jsonFileBrowserBtn\" style=\"padding-left: 60px;display: none\" type=\"file\" multiple placeholder=\"Json Schema File\" (change)=\"loadJsonFile($event.target.files)\">\n  </mat-drawer>\n\n  <div #screen class=\"visualizer-sidenav-content\">\n    <!-- <button data-html2canvas-ignore style=\"top: 0px;\" type=\"button\" mat-button (click)=\"drawer.toggle()\">Toggle Create Schema</button> -->\n    <button *ngIf=\"collections.length > 0\" data-html2canvas-ignore mat-button (click)=\"downloadSnapshot()\">Download as Image</button>\n    <div id=\"vis-disp\" *ngFor=\"let collection of collections\">\n      <mongo-collection style=\"float: left\" (onSelectingSchema)=\"editSchema($event)\" [collection]=\"collection\"></mongo-collection>\n      <br>\n    </div>\n  </div>\n\n  <div id=\"download\">\n    <img #canvas>\n    <a #downloadLink></a>\n  </div>\n\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MongodbSchemaVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MongodbSchemaVisualizerComponent", function() { return MongodbSchemaVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection/collection.component */ "./src/app/mongodb-schema-visualizer/collection/collection.component.ts");
/* harmony import */ var _pojo_generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pojo-generator.service */ "./src/app/mongodb-schema-visualizer/pojo-generator.service.ts");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);





var MongodbSchemaVisualizerComponent = /** @class */ (function () {
    function MongodbSchemaVisualizerComponent(pojoGeneratorService) {
        this.pojoGeneratorService = pojoGeneratorService;
        this.appVersion = "1.0";
        this.collections = [];
        this.selectedSchema = { name: null, definition: null };
        this.mode = "CREATE";
    }
    MongodbSchemaVisualizerComponent.prototype.ngOnInit = function () {
    };
    MongodbSchemaVisualizerComponent.prototype.downloadSnapshot = function () {
        var _this = this;
        html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(this.visualizationDisplay.nativeElement, {
            scrollX: 0,
            scrollY: 0,
            height: window.outerHeight + window.innerHeight,
            windowHeight: window.outerHeight + window.innerHeight,
            // windowWidth: this.visualizationDisplay.nativeElement.offsetWidth,
            // windowHeight: this.visualizationDisplay.nativeElement.offsetHeight,
            ignoreElements: function (element) { return element.className == "ignore-from-screenshot"; }
        }).then(function (canvas) {
            _this.canvas.nativeElement.src = canvas.toDataURL();
            _this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
            _this.downloadLink.nativeElement.download = 'MongoD Schema Visualization.png';
            _this.downloadLink.nativeElement.click();
        });
    };
    MongodbSchemaVisualizerComponent.prototype.openFileBrowser = function (event) {
        event.preventDefault();
        var fileBrowserBtn = document.getElementById("jsonFileBrowserBtn");
        fileBrowserBtn.click();
    };
    MongodbSchemaVisualizerComponent.prototype.editSchema = function (selectedSchema) {
        this.selectedSchema = selectedSchema;
        this.mode = "EDIT";
    };
    MongodbSchemaVisualizerComponent.prototype.addNewSchema = function (schema) {
        this.collections.push(new _collection_collection_component__WEBPACK_IMPORTED_MODULE_2__["MongoCollection"](schema.name.toString(), JSON.parse(schema.definition.toString())));
    };
    MongodbSchemaVisualizerComponent.prototype.saveUpdatedSchema = function (schema) {
        this.filterMatchingSchema(schema.name);
        this.addNewSchema(schema);
        this.selectedSchema = { name: null, definition: null };
        this.mode = "CREATE";
    };
    MongodbSchemaVisualizerComponent.prototype.filterMatchingSchema = function (schemaName) {
        var filteredCollection = [];
        this.collections.forEach(function (collection) {
            if (collection.name != schemaName) {
                filteredCollection.push(collection);
            }
        });
        this.collections = filteredCollection;
    };
    MongodbSchemaVisualizerComponent.prototype.processFile = function (file) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function () {
            var fileContent = fileReader.result;
            var parsedFileContent = JSON.parse(fileContent.toString());
            var fileName = file.name.split(".json")[0];
            _this.collections.push(new _collection_collection_component__WEBPACK_IMPORTED_MODULE_2__["MongoCollection"](fileName, parsedFileContent));
        };
        fileReader.readAsText(file);
    };
    MongodbSchemaVisualizerComponent.prototype.downloadAll = function () {
        var collection = this.collections[0];
        this.pojoGeneratorService.generate(collection.getContent(), collection.getName(), false);
        this.pojoGeneratorService.downloadAll();
    };
    MongodbSchemaVisualizerComponent.prototype.loadJsonFile = function (files) {
        for (var index = 0; index < files.length; index++) {
            this.processFile(files[index]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('screen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MongodbSchemaVisualizerComponent.prototype, "visualizationDisplay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MongodbSchemaVisualizerComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downloadLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MongodbSchemaVisualizerComponent.prototype, "downloadLink", void 0);
    MongodbSchemaVisualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mongodb-schema-visualizer',
            template: __webpack_require__(/*! ./mongodb-schema-visualizer.component.html */ "./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.html"),
            styles: [__webpack_require__(/*! ./mongodb-schema-visualizer.component.css */ "./src/app/mongodb-schema-visualizer/mongodb-schema-visualizer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pojo_generator_service__WEBPACK_IMPORTED_MODULE_3__["PojoGeneratorService"]])
    ], MongodbSchemaVisualizerComponent);
    return MongodbSchemaVisualizerComponent;
}());



/***/ }),

/***/ "./src/app/mongodb-schema-visualizer/pojo-generator.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mongodb-schema-visualizer/pojo-generator.service.ts ***!
  \*********************************************************************/
/*! exports provided: PojoEnum, PojoClass, PojoField, PojoGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PojoEnum", function() { return PojoEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PojoClass", function() { return PojoClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PojoField", function() { return PojoField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PojoGeneratorService", function() { return PojoGeneratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);




var PojoEnum = /** @class */ (function () {
    function PojoEnum(name, data) {
        this.name = name;
        var enums = data.split("Enum - ");
        this.values = enums[1].trim().split(",");
    }
    PojoEnum.prototype.firstCharToUpperCase = function (name) {
        var firstCharUpperCase = name.charAt(0).toUpperCase();
        return firstCharUpperCase + name.substr(1);
    };
    PojoEnum.prototype.getDisplayForm = function () {
        var enumDeclaration = "\tpublic enum " + this.firstCharToUpperCase(this.name) + " {\n\t\t";
        this.values.forEach(function (value) {
            enumDeclaration += value.toUpperCase() + ",";
        });
        enumDeclaration += "\n\t}\n\n";
        return enumDeclaration;
    };
    return PojoEnum;
}());

var PojoClass = /** @class */ (function () {
    function PojoClass(name, nested) {
        this.name = name;
        this.fields = [];
        this.nested = nested;
    }
    PojoClass.prototype.addField = function (pojoField) {
        if (pojoField.isEnum()) {
            this.pojoEnum = new PojoEnum(pojoField.getName(), pojoField.getDataType());
            pojoField = new PojoField(pojoField.getName(), pojoField.getName());
        }
        this.fields.push(pojoField);
    };
    PojoClass.prototype.getName = function () {
        return this.name;
    };
    PojoClass.prototype.getClassName = function () {
        var dynamicClassName = !this.nested ? this.name.substring(0, this.name.length - 1) : this.name;
        return this.firstCharToUpperCase(dynamicClassName);
    };
    PojoClass.prototype.firstCharToUpperCase = function (name) {
        var firstCharUpperCase = name.charAt(0).toUpperCase();
        return firstCharUpperCase + name.substr(1);
    };
    PojoClass.prototype.getCollectionName = function () {
        return this.name.toLowerCase();
    };
    PojoClass.prototype.getDisplayForm = function () {
        var classDisplayForm = "";
        if (!this.nested) {
            classDisplayForm += "@Document(collection = \"" + this.getCollectionName() + "\")\n";
        }
        classDisplayForm += "public class " + this.getClassName() + " {\n\n";
        if (this.pojoEnum) {
            classDisplayForm += this.pojoEnum.getDisplayForm();
        }
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            classDisplayForm = classDisplayForm + field.getDisplayForm();
        }
        for (var _b = 0, _c = this.fields; _b < _c.length; _b++) {
            var field = _c[_b];
            classDisplayForm = classDisplayForm + field.getGetterSetters();
        }
        classDisplayForm += "\n\n}";
        return classDisplayForm;
    };
    return PojoClass;
}());

var PojoField = /** @class */ (function () {
    function PojoField(name, datatype) {
        this.name = name;
        this.datatype = datatype;
    }
    PojoField.prototype.getDisplayForm = function () {
        var fieldDisplayForm = "";
        if (this.name == "id") {
            fieldDisplayForm += "\t@Id\n";
        }
        return fieldDisplayForm + "\tprivate " + this.firstCharToUpperCase(this.datatype) + " " + this.name + ";\n";
    };
    PojoField.prototype.firstCharToUpperCase = function (name) {
        var transformedFirstCharacter = name.charAt(0).toUpperCase();
        return transformedFirstCharacter + name.substr(1);
    };
    PojoField.prototype.firstCharToLowerCase = function (name) {
        var transformedFirstCharacter = name.charAt(0).toLowerCase();
        return transformedFirstCharacter + name.substr(1);
    };
    PojoField.prototype.isEnum = function () {
        return this.datatype.indexOf("Enum") != -1;
    };
    PojoField.prototype.getDataType = function () {
        return this.datatype;
    };
    PojoField.prototype.getName = function () {
        return this.name;
    };
    PojoField.prototype.getGetterSetters = function () {
        var getterDisplay = "\n\n\tpublic " + this.firstCharToUpperCase(this.datatype) + " get" + this.firstCharToUpperCase(this.name) +
            "(){\n" +
            "\treturn this." + this.name + ";\n"
            + "\t}";
        var setterDisplay = "\n\n\tpublic void set" + this.firstCharToUpperCase(this.name) +
            "(" + this.firstCharToUpperCase(this.datatype) + " " + this.firstCharToLowerCase(this.name) + "){\n" +
            "\t\tthis." + this.name + " = " + this.name + ";\n"
            + "\t}";
        return getterDisplay + setterDisplay;
    };
    return PojoField;
}());

var PojoGeneratorService = /** @class */ (function () {
    function PojoGeneratorService() {
        this.nestedClasses = [];
        this.pojoClasses = [];
    }
    PojoGeneratorService.prototype.firstCharToUpperCase = function (name) {
        var firstCharUpperCase = name.charAt(0).toUpperCase();
        return firstCharUpperCase + name.substr(1);
    };
    PojoGeneratorService.prototype.generate = function (jsonData, name, isNested) {
        var pojoClass = new PojoClass(name, isNested);
        this.pojoClasses.push(pojoClass);
        for (var field in jsonData) {
            if (jsonData[field] instanceof Object) {
                if (Array.isArray(jsonData[field])) {
                    this.generate(jsonData[field][0], field, true);
                    pojoClass.addField(new PojoField(field, field));
                }
                else {
                    this.generate(jsonData[field], field, true);
                    pojoClass.addField(new PojoField(field, field));
                }
            }
            else {
                pojoClass.addField(new PojoField(field, jsonData[field]));
            }
        }
    };
    PojoGeneratorService.prototype.downloadAll = function () {
        var _this = this;
        this.zipFile = new jszip__WEBPACK_IMPORTED_MODULE_2__();
        this.pojoClasses.forEach(function (pojoClassToDownload) {
            _this.addFile(pojoClassToDownload.getClassName().toString(), pojoClassToDownload.getDisplayForm().toString());
        });
        this.downloadZip();
    };
    PojoGeneratorService.prototype.addFile = function (filename, content) {
        this.zipFile.file(filename + ".java", content);
    };
    PojoGeneratorService.prototype.downloadZip = function () {
        this.zipFile.generateAsync({ type: "blob" })
            .then(function (content) {
            // see FileSaver.js
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(content, "MongoDBSchemaModel.zip");
        });
    };
    PojoGeneratorService.prototype.download = function (filename, content) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:image/jpeg' + content);
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    PojoGeneratorService.prototype.downloadFile = function (filename, content) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', filename + ".java");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    PojoGeneratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PojoGeneratorService);
    return PojoGeneratorService;
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
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anandmuley/Personal/Projects/Business/mongodb-schema-visualizer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map