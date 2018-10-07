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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_routing_1 = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var customer_component_1 = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
var navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var projects_component_1 = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var comments_component_1 = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                customer_component_1.CustomerComponent,
                navbar_component_1.NavbarComponent,
                projects_component_1.ProjectsComponent,
                comments_component_1.CommentsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.Routing,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule, http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var customer_component_1 = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
var comments_component_1 = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
var projects_component_1 = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var apiconfig_1 = __webpack_require__(/*! ./classes/apiconfig */ "./src/app/classes/apiconfig.ts");
var appRoutes = [
    { path: apiconfig_1.Apiconfig.getApiStartUri() + 'login', component: login_component_1.LoginComponent },
    { path: apiconfig_1.Apiconfig.getApiStartUri() + 'customer', component: customer_component_1.CustomerComponent },
    { path: apiconfig_1.Apiconfig.getApiStartUri() + 'projects/:id/comments', component: comments_component_1.CommentsComponent },
    { path: apiconfig_1.Apiconfig.getApiStartUri() + 'projects', component: projects_component_1.ProjectsComponent },
    { path: '', redirectTo: apiconfig_1.Apiconfig.getApiStartUri() + 'login', pathMatch: 'full' },
    { path: '**', redirectTo: apiconfig_1.Apiconfig.getApiStartUri() + 'login' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ "./src/app/classes/apiconfig.ts":
/*!**************************************!*\
  !*** ./src/app/classes/apiconfig.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Apiconfig = /** @class */ (function () {
    function Apiconfig() {
    }
    Apiconfig.getIP = function () {
        return this.ApiIP;
    };
    Apiconfig.getPort = function () {
        return this.ApiPort;
    };
    Apiconfig.getProtocol = function () {
        return this.ApiProtocol;
    };
    Apiconfig.getApiStartUri = function () {
        return this.ApiStartUri;
    };
    Apiconfig.ApiIP = "test-node-angular.herokuapp.com"; //"app-obli-devops-backend.herokuapp.com";
    Apiconfig.ApiProtocol = "https://";
    Apiconfig.ApiPort = ""; //:4100
    Apiconfig.ApiStartUri = "front/";
    return Apiconfig;
}());
exports.Apiconfig = Apiconfig;


/***/ }),

/***/ "./src/app/classes/comment.ts":
/*!************************************!*\
  !*** ./src/app/classes/comment.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());
exports.Comment = Comment;


/***/ }),

/***/ "./src/app/classes/session.ts":
/*!************************************!*\
  !*** ./src/app/classes/session.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Session = /** @class */ (function () {
    function Session(user) {
        this.user = user;
    }
    Session.prototype.setClient = function (client) {
        this.client = client;
    };
    Session.prototype.getClient = function () {
        return this.client;
    };
    return Session;
}());
exports.Session = Session;


/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .iniciar{\n    border:none;\n    border-radius: 0;\n    background-color: #0077f7; \n    color:#fff;\n    cursor: pointer;\n  }"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <br><br><br>\n  <div class='card'>\n    <div class='card-header text-left'>\n      {{pageTitle}}\n    </div>\n\n    <div class='card-body'>\n      <!-- Mensaje de error -->\n      <ngb-alert *ngIf=\"errorMessage\" type=\"danger\" (close)=\"errorMessage = null\">{{ errorMessage }}</ngb-alert>\n\n\n      <!--Tabla de mascotas -->\n      <div class='table-responsive'>\n        <table class='table'>\n          <!--Cabezal de la tabla -->\n          <thead>\n          <tr>\n            <th>Text</th>\n          </tr>\n          </thead>\n          <!--Cuerpo de la tabla-->\n          <tbody>\n          <!-- Aca va todo el contenido de la tabla  -->\n          <tr *ngFor='let c of comments'>\n            <td>{{c.text}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <br/>\n  <form id=\"editForm\" method=\"post\" accept-charset=\"utf-8\" [formGroup]=\"editForm\">\n    <div class=\"form-group\">\n      <div class=\"input-group margin-bottom-sm search-class-width\">\n        <span class=\"input-group-addon search-class icon-search\"><i class=\"fa fa-lock\"></i></span>\n        <input type=\"text\" class=\"form-control search-class input-search\" id=\"text\" required\n               placeholder=\"text to add a comment...\" formControlName=\"text\">\n      </div>\n    </div>\n    <input type=\"button\" value=\"Save\" class=\"btn iniciar\" (click)=\"save()\">\n    <ngb-alert *ngIf=\"errorMessage\" type=\"danger\" (close)=\"errorMessage = null\">{{ errorMessage }}</ngb-alert>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var index_1 = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
var project_service_1 = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(formBuilder, projectsService, currentRoute) {
        this.formBuilder = formBuilder;
        this.projectsService = projectsService;
        this.currentRoute = currentRoute;
        this.pageTitle = "";
        this._subjectError = new index_1.Subject();
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subjectError.subscribe(function (message) { return _this.errorMessage = message; });
        this._subjectError.pipe(operators_1.debounceTime(3000)).subscribe(function () { return _this.errorMessage = null; });
        this.id_project = "" + this.currentRoute.snapshot.params["id"];
        this.pageTitle = "Comments";
        if (this.id_project == 'undefined') {
            this.id_project = null;
            this._subjectError.next(this.errorMessage = 'Se necesita un ID de proyecto');
        }
        else {
            //this.getProject();
            this.getComments();
        }
        this.editForm = this.formBuilder.group({
            text: ['', forms_1.Validators.required]
        });
    };
    CommentsComponent.prototype.getProject = function () {
        var _this = this;
        this.projectsService.getProject(this.id_project).subscribe((function (data) { return _this.resultProject(data); }), (function (error) { console.error(error); _this.handleError(error); }));
    };
    CommentsComponent.prototype.getComments = function () {
        var _this = this;
        this.projectsService.getCommentsProject(this.id_project).subscribe((function (data) { return _this.resultList(data); }), (function (error) { console.error(error); _this.handleError(error); }));
    };
    CommentsComponent.prototype.save = function () {
        var _this = this;
        var text = this.editForm.controls['text'].value;
        this.projectsService.postCoommentProject(this.id_project, text).subscribe((function (data) { return _this.resultAddComment(data); }), (function (error) { console.error(error); _this.handleError(error); }));
    };
    CommentsComponent.prototype.resultProject = function (data) {
        this.name = data.body.name;
        this.pageTitle = "Comments of " + name;
    };
    CommentsComponent.prototype.resultList = function (data) {
        this.comments = data.body;
    };
    CommentsComponent.prototype.resultAddComment = function (data) {
        this.comments.push(data.body);
    };
    CommentsComponent.prototype.handleError = function (error) {
        if (error.status == 401) {
            this._subjectError.next(this.errorMessage = 'Usuario no autorizado');
        }
        else {
            if (error.error.Message != null) {
                this._subjectError.next(this.errorMessage = error.error.Message);
            }
            else {
                this._subjectError.next(this.errorMessage = 'Se ha producido un error');
            }
        }
    };
    CommentsComponent = __decorate([
        core_1.Component({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, project_service_1.ProjectService, router_1.ActivatedRoute])
    ], CommentsComponent);
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;


/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container{\n    width: 320px;\n    height: 300px;\n    font-family: 'Montserrat', sans-serif;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    box-shadow: 5px 7px 7px rgba(0,0,0,0.4);\n  }\n  \n  .encabezado{\n    height: 20%;\n    padding-left: 2px;\n    padding-right: 2px;\n    background-color: #264763; \n    text-align: center;\n    vertical-align: middle;\n    padding: 2%;\n    color: #fff;\n  }\n  \n  .encabezado h1{\n    padding: 3%;\n    font-size: 2em;\n    width: 100%;\n  }\n  \n  .formulario form{\n    margin: 0 auto;\n    padding: 2%;\n    width: 90%;\n    text-align: right;\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n  \n  input[type=text]{\n    border:none;\n    border-radius: 0;\n    outline: none;\n    box-shadow:none !important;\n    border-bottom: 2px solid #d2d2d2;\n  }\n  \n  input[type=password]{\n    border:none;\n    border-radius: 0;\n    outline: none;\n    box-shadow:none !important;\n    border-bottom: 2px solid #d2d2d2;\n  }\n  \n  .iniciar{\n    border:none;\n    border-radius: 0;\n    background-color: #0077f7; \n    color:#fff;\n  }\n  \n  .search-class {\n    border: none;\n    background: #ffffff;\n  }\n  \n  .icon-search {\n    border: 0;\n    border-right: none;\n    padding-right: 0;\n  }\n  \n  .input-search {\n    border: 0;\n    border-left: none;\n  }\n  \n  .fa-user{\n    padding-top: 10px;\n    color: #d2d2d2;\n  }\n  \n  .fa-lock{\n    padding-top: 10px;\n    color: #d2d2d2;\n  }"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"row encabezado\">\n    <h1>Edit Profile</h1>\n  </div>\n  <br>\n  <div class=\"row formulario\">\n    <form id=\"editForm\" method=\"post\" accept-charset=\"utf-8\" [formGroup]=\"editForm\">\n      <div class=\"form-group\">\n        <div class=\"input-group margin-bottom-sm search-class-width\">\n          <span class=\"input-group-addon search-class icon-search\"><i class=\"fa fa-user\"></i></span>\n          <input type=\"text\" class=\"form-control search-class input-search\" id=\"nomUsu\" required\n                 placeholder=\"Company name\" formControlName=\"company_name\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group margin-bottom-sm search-class-width\">\n          <span class=\"input-group-addon search-class icon-search\"><i class=\"fa fa-lock\"></i></span>\n          <input type=\"text\" class=\"form-control search-class input-search\" id=\"psw\" required\n                 placeholder=\"Rut\" formControlName=\"rut\" (keypress)=\"numberOnly($event)\">\n        </div>\n      </div>\n      <input type=\"button\" value=\"Save\" class=\"btn iniciar\" (click)=\"save()\">\n      <ngb-alert *ngIf=\"errorMessage\" type=\"danger\" (close)=\"errorMessage = null\">{{ errorMessage }}</ngb-alert>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var customer_service_1 = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
var storage_service_1 = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(formBuilder, router, storageService, customerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.storageService = storageService;
        this.customerService = customerService;
        this._subject = new rxjs_1.Subject();
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subject.subscribe(function (message) { return _this.errorMessage = message; });
        this._subject.pipe(operators_1.debounceTime(3000)).subscribe(function () { return _this.errorMessage = null; });
        var company_name = this.storageService.getCurrentClient() ? this.storageService.getCurrentClient().company_name : '';
        var rut = this.storageService.getCurrentClient() ? this.storageService.getCurrentClient().rut : '';
        this.editForm = this.formBuilder.group({
            company_name: [{ value: company_name, disabled: true }],
            rut: [rut, forms_1.Validators.required]
        });
    };
    CustomerComponent.prototype.save = function () {
        var _this = this;
        if (this.editForm.valid) {
            var client = this.storageService.getCurrentClient();
            client.rut = this.editForm.controls['rut'].value;
            console.log(client);
            this.customerService.put(client)
                .subscribe((function (data) { return _this.correctSave(data); }), (function (error) { console.error(error); _this.setErrorMessage(); }));
        }
        else {
            document.getElementById('formLogin').classList.add('was-validated');
        }
    };
    CustomerComponent.prototype.setErrorMessage = function () {
        this._subject.next(this.errorMessage = 'Credenciales inválidas');
    };
    CustomerComponent.prototype.correctSave = function (data) {
        this.storageService.setCurrentClient(data.body);
        this.router.navigateByUrl('/projects');
    };
    CustomerComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router,
            storage_service_1.StorageService,
            customer_service_1.CustomerService])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container{\n    width: 320px;\n    height: 300px;\n    font-family: 'Montserrat', sans-serif;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    box-shadow: 5px 7px 7px rgba(0,0,0,0.4);\n  }\n  \n  .encabezado{\n    height: 20%;\n    padding-left: 2px;\n    padding-right: 2px;\n    background-color: #264763; \n    text-align: center;\n    vertical-align: middle;\n    padding: 2%;\n    color: #fff;\n  }\n  \n  .encabezado h1{\n    padding: 3%;\n    font-size: 2em;\n    width: 100%;\n  }\n  \n  .formulario form{\n    margin: 0 auto;\n    padding: 2%;\n    width: 90%;\n    text-align: right;\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n  \n  input[type=text]{\n    border:none;\n    border-radius: 0;\n    outline: none;\n    box-shadow:none !important;\n    border-bottom: 2px solid #d2d2d2;\n  }\n  \n  input[type=password]{\n    border:none;\n    border-radius: 0;\n    outline: none;\n    box-shadow:none !important;\n    border-bottom: 2px solid #d2d2d2;\n  }\n  \n  .iniciar{\n    border:none;\n    border-radius: 0;\n    background-color: #0077f7; \n    color:#fff;\n  }\n  \n  .search-class {\n    border: none;\n    background: #ffffff;\n  }\n  \n  .icon-search {\n    border: 0;\n    border-right: none;\n    padding-right: 0;\n  }\n  \n  .input-search {\n    border: 0;\n    border-left: none;\n  }\n  \n  .fa-user{\n    padding-top: 10px;\n    color: #d2d2d2;\n  }\n  \n  .fa-lock{\n    padding-top: 10px;\n    color: #d2d2d2;\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row encabezado\">\n    <h1>CustomToys</h1>\n  </div>\n  <br>\n  <div class=\"row formulario\">\n    <form id=\"formLogin\" method=\"post\" accept-charset=\"utf-8\" (keydown)=\"keyDownFunction($event)\" [formGroup]=\"loginForm\" [ngClass]=\"{'was-validated':loginForm.controls.username.dirty && loginForm.controls.password.dirty}\">\n      <div class=\"form-group\">\n        <div class=\"input-group margin-bottom-sm search-class-width\">\n          <span class=\"input-group-addon search-class icon-search\"><i class=\"fa fa-user\"></i></span>\n          <input type=\"text\" class=\"form-control search-class input-search\" id=\"nomUsu\" required\n                 placeholder=\"Username\" formControlName=\"username\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group margin-bottom-sm search-class-width\">\n          <span class=\"input-group-addon search-class icon-search\"><i class=\"fa fa-lock\"></i></span>\n          <input type=\"password\" class=\"form-control search-class input-search\" id=\"psw\" required\n                 placeholder=\"Password\" formControlName=\"password\">\n        </div>\n      </div>\n      <input type=\"button\" value=\"Login\" class=\"btn iniciar\" (click)=\"login()\">\n      <ngb-alert *ngIf=\"errorMessage\" type=\"danger\" (close)=\"errorMessage = null\">{{ errorMessage }}</ngb-alert>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var login_service_1 = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var customer_service_1 = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
var storage_service_1 = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
var session_1 = __webpack_require__(/*! ../classes/session */ "./src/app/classes/session.ts");
var apiconfig_1 = __webpack_require__(/*! ../classes/apiconfig */ "./src/app/classes/apiconfig.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, storageService, loginService, customerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.storageService = storageService;
        this.loginService = loginService;
        this.customerService = customerService;
        this._subject = new rxjs_1.Subject();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subject.subscribe(function (message) { return _this.errorMessage = message; });
        this._subject.pipe(operators_1.debounceTime(3000)).subscribe(function () { return _this.errorMessage = null; });
        if (this.storageService.isAuthenticated()) {
            this.router.navigate([apiconfig_1.Apiconfig.getApiStartUri() + 'projects']);
        }
        this.loginForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
    };
    //
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
                .subscribe((function (data) { return _this.correctLogin(data); }), (function (error) { console.error(error); _this.setErrorMessage(); }));
        }
        else {
            document.getElementById('formLogin').classList.add('was-validated');
        }
    };
    LoginComponent.prototype.setErrorMessage = function () {
        this._subject.next(this.errorMessage = 'Credenciales inválidas');
    };
    LoginComponent.prototype.correctLogin = function (data) {
        var user = data.body;
        var session = new session_1.Session(user);
        this.storageService.setCurrentSession(session);
        this.getCheckRut();
    };
    LoginComponent.prototype.getCheckRut = function () {
        var _this = this;
        this.customerService.get()
            .subscribe((function (data) { return _this.checkRouting(data); }), (function (error) { console.error(error); _this.setErrorMessage(); }));
    };
    LoginComponent.prototype.checkRouting = function (data) {
        var client = data.body;
        this.storageService.setCurrentClient(client);
        if (this.storageService.getCurrentClient().rut != '')
            this.router.navigate([apiconfig_1.Apiconfig.getApiStartUri() + 'projects']);
        else
            this.router.navigate([apiconfig_1.Apiconfig.getApiStartUri() + 'customer']);
    };
    LoginComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.login();
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router,
            storage_service_1.StorageService, login_service_1.LoginService, customer_service_1.CustomerService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {cursor: pointer;}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">CustomToys</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link pointer\" (click)=\"customer()\">Edit profile</a>\n      <a class=\"nav-item nav-link pointer\" (click)=\"projects()\">Projects</a>\n      <a class=\"nav-item nav-link pointer\" (click)=\"logout()\">Logout</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var logout_service_1 = __webpack_require__(/*! ../services/logout.service */ "./src/app/services/logout.service.ts");
var storage_service_1 = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
var apiconfig_1 = __webpack_require__(/*! ../classes/apiconfig */ "./src/app/classes/apiconfig.ts");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, storageService, logoutService) {
        this.router = router;
        this.storageService = storageService;
        this.logoutService = logoutService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (!this.storageService.isAuthenticated()) {
            this.router.navigate([apiconfig_1.Apiconfig.getApiStartUri() + 'login']);
        }
        this.checkRouting();
    };
    NavbarComponent.prototype.customer = function (event) {
        this.router.navigateByUrl(apiconfig_1.Apiconfig.getApiStartUri() + 'customer');
    };
    NavbarComponent.prototype.projects = function (event) {
        this.router.navigateByUrl(apiconfig_1.Apiconfig.getApiStartUri() + 'projects');
    };
    NavbarComponent.prototype.login = function (event) {
        this.router.navigateByUrl(apiconfig_1.Apiconfig.getApiStartUri() + 'login');
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.logoutService.logout(this.storageService.getCurrentToken())
            .subscribe((function (data) { return _this.storageService.logout(); }), (function (error) { return console.log(error); }));
    };
    NavbarComponent.prototype.checkRouting = function () {
        if (this.storageService.isAuthenticated())
            if (this.storageService.getCurrentClient() && this.storageService.getCurrentClient().rut == '')
                this.router.navigate([apiconfig_1.Apiconfig.getApiStartUri() + 'customer']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, storage_service_1.StorageService, logout_service_1.LogoutService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header{\n    background-color: #264763;\n    color: white;\n  }\n  \n  .editar{\n    color: #0077f7;\n  }\n  \n  .eliminar{\n    color: crimson;\n  }\n  \n  .admin{\n    color: darkgreen;\n  }\n  \n  .notadmin{\n    color: crimson;\n  }\n  \n  .editar:hover{\n    cursor: pointer;\n    cursor: hand;\n  }\n  \n  .eliminar:hover{\n    cursor: pointer;\n    cursor: hand;\n  }\n  \n  .show-comment{\n    cursor: pointer;\n  }"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <br><br><br>\n  <div class='card'>\n    <div class='card-header text-left'>\n      {{pageTitle}}\n    </div>\n\n    <div class='card-body'>\n      <!-- Mensaje de error -->\n      <ngb-alert *ngIf=\"errorMessage\" type=\"danger\" (close)=\"errorMessage = null\">{{ errorMessage }}</ngb-alert>\n\n\n      <!--Tabla de mascotas -->\n      <div class='table-responsive'>\n        <table class='table'>\n          <!--Cabezal de la tabla -->\n          <thead>\n          <tr>\n            <th>Name</th>\n            <th>Start Date</th>\n            <th>End Date</th>\n            <th>Actions</th>\n          </tr>\n          </thead>\n          <!--Cuerpo de la tabla-->\n          <tbody>\n          <!-- Aca va todo el contenido de la tabla  -->\n          <tr *ngFor='let p of projects'>\n            <td>{{p.name}}</td>\n            <td>{{p.start_date}}</td>\n            <td>{{p.end_date}}</td>\n\n            <td><span class=\"fa fa-edit show-comment\" [title]='\"Show comments\"' (click)='showComments(p._id)'>Show comments</span></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var index_1 = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var project_service_1 = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
var storage_service_1 = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(router, projectsService, storageService) {
        this.router = router;
        this.projectsService = projectsService;
        this.storageService = storageService;
        this.pageTitle = 'Projects';
        this._subjectError = new index_1.Subject();
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subjectError.subscribe(function (message) { return _this.errorMessage = message; });
        this._subjectError.pipe(operators_1.debounceTime(3000)).subscribe(function () { return _this.errorMessage = null; });
        if (this.storageService.getCurrentClient())
            this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getProjectsOfClient().subscribe((function (data) { return _this.result(data); }), (function (error) { console.error(error); _this.handleError(error); }));
    };
    ProjectsComponent.prototype.showComments = function (id_project) {
        this.router.navigateByUrl("/projects/" + id_project + "/comments");
    };
    ProjectsComponent.prototype.result = function (data) {
        this.projects = data.body;
    };
    ProjectsComponent.prototype.handleError = function (error) {
        if (error.status == 401) {
            this._subjectError.next(this.errorMessage = 'Usuario no autorizado');
        }
        else {
            if (error.error.Message != null) {
                this._subjectError.next(this.errorMessage = error.error.Message);
            }
            else {
                this._subjectError.next(this.errorMessage = 'Se ha producido un error');
            }
        }
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, project_service_1.ProjectService, storage_service_1.StorageService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;


/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var apiconfig_1 = __webpack_require__(/*! ../classes/apiconfig */ "./src/app/classes/apiconfig.ts");
var storage_service_1 = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
var CustomerService = /** @class */ (function () {
    function CustomerService(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.WEB_API_URL = apiconfig_1.Apiconfig.getProtocol() + apiconfig_1.Apiconfig.getIP() + apiconfig_1.Apiconfig.getPort() + '/api/clients';
    }
    CustomerService.prototype.get = function () {
        var myHeaders = new http_1.HttpHeaders({
            'Token': this.storageService.getCurrentToken()
        });
        var httpOptions = {
            headers: myHeaders,
            observe: 'response'
        };
        var url = this.WEB_API_URL + "/" + this.storageService.getCurrentUser().id_client;
        return this.httpClient.get(url, { headers: myHeaders, observe: 'response' })
            .pipe(operators_1.tap(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); }));
    };
    CustomerService.prototype.put = function (client) {
        var myHeaders = new http_1.HttpHeaders({
            'Token': this.storageService.getCurrentToken()
        });
        var httpOptions = {
            headers: myHeaders,
            observe: 'response'
        };
        var url = this.WEB_API_URL + "/" + client._id;
        console.log(url);
        return this.httpClient.put(url, client, { headers: myHeaders, observe: 'response' })
            .pipe(operators_1.tap(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); }));
    };
    CustomerService.prototype.handleError = function (error) {
        console.error(error);
    };
    CustomerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, storage_service_1.StorageService])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;


/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var apiconfig_1 = __webpack_require__(/*! ../classes/apiconfig */ "./src/app/classes/apiconfig.ts");
// import { Response } from '@angular/http';
var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.WEB_API_URL = apiconfig_1.Apiconfig.getProtocol() + apiconfig_1.Apiconfig.getIP() + '' + apiconfig_1.Apiconfig.getPort() + '/api/CustomerLogin';
    }
    LoginService.prototype.login = function (username, password) {
        var myHeaders = new http_1.HttpHeaders({
            'username': username,
            'password': password
        });
        var httpOptions = {
            headers: myHeaders,
            observe: 'response'
        };
        return this.httpClient.post(this.WEB_API_URL, null, { headers: myHeaders, observe: 'response' })
            .pipe(operators_1.tap(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); })
        // catchError(this.handleError)
        );
    };
    LoginService.prototype.handleError = function (error) {
        console.error(error);
        // return throwError(error.json().error || 'Server error');
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/app/services/logout.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/logout.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var apiconfig_1 = __webpack_require__(/*! ../classes/apiconfig */ "./src/app/classes/apiconfig.ts");
var LogoutService = /** @class */ (function () {
    function LogoutService(httpClient) {
        this.httpClient = httpClient;
        this.WEB_API_URL = apiconfig_1.Apiconfig.getProtocol() + apiconfig_1.Apiconfig.getIP() + '' + apiconfig_1.Apiconfig.getPort() + '/api/CustomerLogout';
    }
    LogoutService.prototype.logout = function (token) {
        var myHeaders = new http_1.HttpHeaders({
            'Token': token
        });
        var httpOptions = {
            headers: myHeaders,
            observe: 'response'
        };
        return this.httpClient.post(this.WEB_API_URL, null, { headers: myHeaders, observe: 'response' })
            .pipe(operators_1.tap(function (data) { return console.log('El usuario se deslogeo'); }) //,
        //catchError(this.handleError))
        );
    };
    LogoutService.prototype.handleError = function (error) {
        console.error(error);
    };
    LogoutService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LogoutService);
    return LogoutService;
}());
exports.LogoutService = LogoutService;


/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var comment_1 = __webpack_require__(/*! ../classes/comment */ "./src/app/classes/comment.ts");
var apiconfig_1 = __webpack_require__(/*! ../classes/apiconfig */ "./src/app/classes/apiconfig.ts");
var storage_service_1 = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
var ProjectService = /** @class */ (function () {
    function ProjectService(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.WEB_API_URL_PROJECTS = apiconfig_1.Apiconfig.getProtocol() + apiconfig_1.Apiconfig.getIP() + '' + apiconfig_1.Apiconfig.getPort() + '/api/projects';
        this.WEB_API_URL_CLIENTS = apiconfig_1.Apiconfig.getProtocol() + apiconfig_1.Apiconfig.getIP() + '' + apiconfig_1.Apiconfig.getPort() + '/api/clients';
    }
    ProjectService.prototype.getProject = function (id_project) {
        var myHeaders = new http_1.HttpHeaders({
            'Token': this.storageService.getCurrentToken()
        });
        var httpOptions = {
            headers: myHeaders,
            observe: 'response'
        };
        var url = this.WEB_API_URL_PROJECTS + "/" + id_project;
        return this.httpClient.get(url, { headers: myHeaders, observe: 'response' })
            .pipe(operators_1.tap(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); }));
    };
    ProjectService.prototype.getProjectsOfClient = function () {
        var myHeaders = new http_1.HttpHeaders({
            'Token': this.storageService.getCurrentToken()
        });
        var httpOptions = {
            headers: myHeaders,
            observe: 'response'
        };
        var url = this.WEB_API_URL_CLIENTS + "/" + this.storageService.getCurrentUser().id_client + "/projects";
        return this.httpClient.get(url, { headers: myHeaders, observe: 'response' })
            .pipe(operators_1.tap(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); }));
    };
    ProjectService.prototype.getCommentsProject = function (id_project) {
        var myHeaders = new http_1.HttpHeaders({
            'Token': this.storageService.getCurrentToken()
        });
        var httpOptions = {
            headers: myHeaders,
            observe: 'response'
        };
        var url = this.WEB_API_URL_PROJECTS + "/" + id_project + "/Comments";
        return this.httpClient.get(url, { headers: myHeaders, observe: 'response' })
            .pipe(operators_1.tap(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); }));
    };
    ProjectService.prototype.postCoommentProject = function (id_project, text) {
        var myHeaders = new http_1.HttpHeaders({
            'Token': this.storageService.getCurrentToken()
        });
        var httpOptions = {
            headers: myHeaders,
            observe: 'response'
        };
        var url = this.WEB_API_URL_PROJECTS + "/" + id_project + "/Comments";
        var comment = new comment_1.Comment();
        comment.text = text;
        comment.id_project = id_project;
        return this.httpClient.post(url, comment, { headers: myHeaders, observe: 'response' })
            .pipe(operators_1.tap(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); }));
    };
    ProjectService.prototype.handleError = function (error) {
        console.error(error);
    };
    ProjectService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, storage_service_1.StorageService])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;


/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var StorageService = /** @class */ (function () {
    function StorageService(router) {
        this.router = router;
        this.currentSession = null;
        this.localStorageService = localStorage;
        this.currentSession = this.loadSessionData();
    }
    StorageService.prototype.setCurrentSession = function (session) {
        this.currentSession = session;
        this.localStorageService.setItem('sesion', JSON.stringify(session));
    };
    StorageService.prototype.loadSessionData = function () {
        var sessionStr = this.localStorageService.getItem('sesion');
        return (sessionStr) ? JSON.parse(sessionStr) : null;
    };
    StorageService.prototype.getCurrentSession = function () {
        return this.currentSession;
    };
    StorageService.prototype.removeCurrentSession = function () {
        this.localStorageService.removeItem('sesion');
        this.currentSession = null;
    };
    StorageService.prototype.getCurrentUser = function () {
        var session = this.getCurrentSession();
        return (session && session.user) ? session.user : null;
    };
    ;
    StorageService.prototype.isAuthenticated = function () {
        return (this.getCurrentToken() != null) ? true : false;
    };
    ;
    StorageService.prototype.getCurrentToken = function () {
        var session = this.getCurrentSession();
        return (session && session.user && session.user.token) ? session.user.token : null;
    };
    ;
    StorageService.prototype.getCurrentClient = function () {
        var session = this.getCurrentSession();
        return (session && session.client) ? session.client : null;
    };
    ;
    StorageService.prototype.setCurrentClient = function (client) {
        var session = this.getCurrentSession();
        session.client = client;
        this.setCurrentSession(session);
    };
    ;
    StorageService.prototype.logout = function () {
        this.removeCurrentSession();
        this.router.navigate(['/login']);
    };
    StorageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pabluc/repositorios/test_angular_node/customtoys-customers-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map