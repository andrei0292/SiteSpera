function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/brazi/brazi.component */
    "./src/app/components/brazi/brazi.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/diverse/diverse.component */
    "./src/app/components/diverse/diverse.component.ts");
    /* harmony import */


    var _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/flori/flori.component */
    "./src/app/components/flori/flori.component.ts");
    /* harmony import */


    var _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/foto/foto.component */
    "./src/app/components/foto/foto.component.ts");
    /* harmony import */


    var _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/ienupar/ienupar.component */
    "./src/app/components/ienupar/ienupar.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/tuja/tuja.component */
    "./src/app/components/tuja/tuja.component.ts");

    var routes = [{
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"]
    }, {
      path: 'tuja',
      component: _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_10__["TujaComponent"]
    }, {
      path: 'brazi',
      component: _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_3__["BraziComponent"]
    }, {
      path: 'ienupar',
      component: _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_8__["IenuparComponent"]
    }, {
      path: 'diverse',
      component: _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_5__["DiverseComponent"]
    }, {
      path: 'flori',
      component: _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_6__["FloriComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'foto',
      component: _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_7__["FotoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'tuja';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 0,
      consts: [[1, "bk"], [1, "container"], [1, "row"], [1, "col-md-12", "col-xs-12"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [".bk[_ngcontent-%COMP%]{\r\n    \r\n    background-color: teal;\r\n    min-height: 100vh;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsc0JBQXNCO0lBQ3RCLGlCQUFpQixDQUFDOztBQUV0Qjs7OztJQUlJIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmt7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcxLCAyMTksIDE4Nyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7fVxyXG5cclxuLyogKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gfSAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/foto/foto.component */
    "./src/app/components/foto/foto.component.ts");
    /* harmony import */


    var _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/tuja/tuja.component */
    "./src/app/components/tuja/tuja.component.ts");
    /* harmony import */


    var _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/brazi/brazi.component */
    "./src/app/components/brazi/brazi.component.ts");
    /* harmony import */


    var _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/ienupar/ienupar.component */
    "./src/app/components/ienupar/ienupar.component.ts");
    /* harmony import */


    var _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/diverse/diverse.component */
    "./src/app/components/diverse/diverse.component.ts");
    /* harmony import */


    var _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/flori/flori.component */
    "./src/app/components/flori/flori.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts"); // IMPORTURI ANGULAR
    //TRADUCERI
    // import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
    // import { TranslateHttpLoader } from '@ngx-translate/http-loader';
    // import { HttpClient } from '@angular/common/http';
    // Componente


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_10__["FotoComponent"], _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_11__["TujaComponent"], _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_12__["BraziComponent"], _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_13__["IenuparComponent"], _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_14__["DiverseComponent"], _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_15__["FloriComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_10__["FotoComponent"], _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_11__["TujaComponent"], _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_12__["BraziComponent"], _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_13__["IenuparComponent"], _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_14__["DiverseComponent"], _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_15__["FloriComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var items = document.querySelectorAll(".timeline li");

          function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
          }

          function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
              if (isElementInViewport(items[i])) {
                if (!items[i].classList.contains("in-view")) {
                  items[i].classList.add("in-view");
                }
              } else if (items[i].classList.contains("in-view")) {
                items[i].classList.remove("in-view");
              }
            }
          }

          window.addEventListener("load", callbackFunc);
          window.addEventListener("scroll", callbackFunc);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 73,
      vars: 0,
      consts: [[1, "intro"], [1, "timeline"], [1, "discovery"], [1, "scientist"], ["target", "_blank", "href", "/assets/pics/Start.jpg"], ["src", "/assets/pics/Start.jpg"], ["target", "_blank", "href", "/assets/pics/tuja/TuiaSmaragd.jpg"], ["src", "/assets/pics/tuja/TuiaSmaragd.jpg"], ["target", "_blank", "href", "/assets/pics/amenajare1.jpg"], ["src", "/assets/pics/amenajare1.jpg"], ["target", "_blank", "href", "/assets/pics/5.jpg"], ["src", "/assets/pics/5.jpg"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Asociatie familiara");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Principala activitate - cresterea si vanzarea plantelor conifere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2013");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deschidere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Am inceput sa punem bazele noii noastre afaceri. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2013");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Am plantat primul puiet. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2015");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tuia Smaragd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Am facut prima livrare. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "2015");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Amenajare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Am amenajat prima gradina. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Diversificare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " La solicitarile clientilor am inceput diversificarea gamei de produse. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Va asteptam cu drag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Povestea noastra continua. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.intro[_ngcontent-%COMP%] {\n  min-height: 25vh;\n}\n.intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  font-size: 30px;\n  text-align: center;\n  color: red;\n}\n.intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  font-size: 25px;\n  text-align: center;\n  color: red;\n}\nbody[_ngcontent-%COMP%] {\n  font: normal 16px/1.5;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  background: linear-gradient(54deg, #0dc0d8, #8bfff4);\n  color: #6c6e94;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n}\n.timeline[_ngcontent-%COMP%] {\n  margin-bottom: 5vh;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  width: 6px;\n  margin: 0 auto;\n  padding-top: 50px;\n  background: #fff;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%) rotate(45deg);\n  width: 20px;\n  height: 20px;\n  z-index: 2;\n  background: #05a093;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  width: 400px;\n  padding: 20px;\n  background: linear-gradient(154deg, #afdfe6, #ffffff);\n  box-shadow: 4px 13px 30px 1px rgba(15, 162, 182, 0.2);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #05a093;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  width: 80px;\n  height: 30px;\n  top: -15px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 1.5px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .discovery[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .scientist[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100px;\n  margin: 20px;\n  border: 1px solid black;\n  overflow: hidden;\n  \n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100px;\n  display: block;\n  transition: transform 0.4s;\n  \n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .scientist[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n  transform-origin: 50% 50%;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)    > div[_ngcontent-%COMP%] {\n  left: 45px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n  left: -439px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)   div[_ngcontent-%COMP%] {\n  transform: translate3d(100px, -10px, 0) rotate(10deg);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)   div[_ngcontent-%COMP%] {\n  transform: translate3d(-100px, -10px, 0) rotate(10deg);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.in-view[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n@media screen and (max-width: 900px) {\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 250px;\n    flex-direction: column;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 10px;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n    left: -289px;\n  }\n}\n@media screen and (max-width: 600px) {\n  body[_ngcontent-%COMP%] {\n    background: #8bfff4;\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: calc(100vw - 91px);\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n    left: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXFNwZXJhbnRhXFxEZXNrdG9wXFxOZXcgZm9sZGVyXFxOZXcgZm9sZGVyXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlHQUFBO0FBQ0EsNEZBQUE7QUFDQSw2R0FBQTtBQUNBLGlJQUFBO0FBQ0EsaUtBQUE7QUFPUjs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0xGO0FET0E7RUFDRSxnQkFBQTtBQ0pGO0FETUU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEZBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSko7QURNRTtFQUNFLDBGQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0pKO0FEUUE7RUFDRSxxQkFBQTtFQUNBLDBGQUFBO0VBQ0Esb0RBaENpQjtFQWlDakIsY0FoQ1c7RUFpQ1gsa0JBQUE7RUFDQSxvQkFBQTtBQ0xGO0FEU0E7RUFDRSxrQkFBQTtBQ05GO0FEUUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTk47QURPTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0xSO0FET007RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFEQWxFTztFQW1FUCxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTFI7QURNUTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0pWO0FETVE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0pWO0FES1U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwRkFBQTtBQ0haO0FES1U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRkFBQTtBQ0haO0FETVE7RUFDRSxrQkFBQTtBQ0pWO0FETVE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQTZCLHVEQUFBO0FDSnZDO0FETVE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUE2QixrQkFBQTtBQ0p2QztBRGFhO0VBQ0MscUJBQUE7RUFDQSx5QkFBQTtBQ1hkO0FEaUJRO0VBQ0UsVUFBQTtBQ2ZWO0FEbUJRO0VBQ0UsWUFBQTtBQ2pCVjtBRDRCTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FDekJSO0FENEJRO0VBQ0UscURBQUE7QUMxQlY7QUQ4QlE7RUFDRSxzREFBQTtBQzVCVjtBRGdDUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUM5QlY7QURxQ0E7RUFJUTtJQUNFLFlBQUE7SUFDQSxzQkFBQTtFQ3JDUjtFRHNDUTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VDcENWO0VEd0NRO0lBQ0UsWUFBQTtFQ3RDVjtBQUNGO0FENkNBO0VBQ0U7SUFDRSxtQkFBQTtFQzNDRjs7RUQrQ0k7SUFDRSxpQkFBQTtFQzVDTjtFRDZDTTtJQUNFLHlCQUFBO0VDM0NSO0VEOENRO0lBQ0UsVUFBQTtFQzVDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbiRwcmltYXJ5LWNvbG9yOmxpbmVhci1ncmFkaWVudCgxNTRkZWcsICNhZmRmZTYsICNmZmZmZmYpO1xyXG4kYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDU0ZGVnLCAjMGRjMGQ4LCAjOGJmZmY0KTtcclxuJHRleHQtY29sb3I6ICM2YzZlOTQ7XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5pbnRyb3tcclxuICBtaW4taGVpZ2h0OiAyNXZoO1xyXG4gIFxyXG4gIGgye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIH1cclxuICB9XHJcblxyXG5ib2R5IHtcclxuICBmb250OiBub3JtYWwgMTZweC8xLjUgO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi8vIFNUWUxJTkdcclxuLnRpbWVsaW5lIHtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgdWwge1xyXG4gICAgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzA1YTA5MztcclxuICAgICAgfVxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDEzcHggMzBweCAxcHggcmdiYSgxNSwgMTYyLCAxODIsIDAuMik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0aW1lIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwNWEwOTM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXNjb3Zlcnkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2NpZW50aXN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgICAgICAgICAgLyogY2xpcCB0aGUgZXhjZXNzIHdoZW4gY2hpbGQgZ2V0cyBiaWdnZXIgdGhhbiBwYXJlbnQgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40czsgICAvKiBzbW9vdGhlciB6b29tICovXHJcblxyXG4gICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAvLyAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgLy8gLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIC8vIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5zY2llbnRpc3Q6aG92ZXIgaW1nIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgICAvLyAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAvLyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgJjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBsZWZ0OiA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBsZWZ0OiAtNDM5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBTklNQVRJT05cclxuLnRpbWVsaW5lIHtcclxuICB1bCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDBweCwgLTEwcHgsIDApIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgLTEwcHgsIDApIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuaW4tdmlldyB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAudGltZWxpbmUge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBsZWZ0OiAtMjg5cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzhiZmZmNDtcclxuICB9XHJcbiAgLnRpbWVsaW5lIHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDkxcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgbGVmdDogNDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmludHJvIHtcbiAgbWluLWhlaWdodDogMjV2aDtcbn1cbi5pbnRybyBoMiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cbi5pbnRybyBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmJvZHkge1xuICBmb250OiBub3JtYWwgMTZweC8xLjU7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU0ZGVnLCAjMGRjMGQ4LCAjOGJmZmY0KTtcbiAgY29sb3I6ICM2YzZlOTQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi50aW1lbGluZSB7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbn1cbi50aW1lbGluZSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4udGltZWxpbmUgdWwgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQ6ICMwNWEwOTM7XG59XG4udGltZWxpbmUgdWwgbGkgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1NGRlZywgI2FmZGZlNiwgI2ZmZmZmZik7XG4gIGJveC1zaGFkb3c6IDRweCAxM3B4IDMwcHggMXB4IHJnYmEoMTUsIDE2MiwgMTgyLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGltZWxpbmUgdWwgbGkgZGl2IHRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwNWEwOTM7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdG9wOiAtMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiBkaXYge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aW1lbGluZSB1bCBsaSBkaXYgZGl2IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiBkaXYgaDEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiAuZGlzY292ZXJ5IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiAuc2NpZW50aXN0IHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBjbGlwIHRoZSBleGNlc3Mgd2hlbiBjaGlsZCBnZXRzIGJpZ2dlciB0aGFuIHBhcmVudCAqL1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiBpbWcge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgLyogc21vb3RoZXIgem9vbSAqL1xufVxuLnRpbWVsaW5lIHVsIGxpIC5zY2llbnRpc3Q6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xufVxuLnRpbWVsaW5lIHVsIGxpOm50aC1vZi10eXBlKG9kZCkgPiBkaXYge1xuICBsZWZ0OiA0NXB4O1xufVxuLnRpbWVsaW5lIHVsIGxpOm50aC1vZi10eXBlKGV2ZW4pID4gZGl2IHtcbiAgbGVmdDogLTQzOXB4O1xufVxuXG4udGltZWxpbmUgdWwgbGkgZGl2IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShvZGQpIGRpdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIC0xMHB4LCAwKSByb3RhdGUoMTBkZWcpO1xufVxuLnRpbWVsaW5lIHVsIGxpOm50aC1vZi10eXBlKGV2ZW4pIGRpdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAtMTBweCwgMCkgcm90YXRlKDEwZGVnKTtcbn1cbi50aW1lbGluZSB1bCBsaS5pbi12aWV3IGRpdiB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnRpbWVsaW5lIHVsIGxpIGRpdiBkaXYge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIC50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShldmVuKSA+IGRpdiB7XG4gICAgbGVmdDogLTI4OXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjOGJmZmY0O1xuICB9XG5cbiAgLnRpbWVsaW5lIHVsIGxpIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAudGltZWxpbmUgdWwgbGkgZGl2IHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDkxcHgpO1xuICB9XG4gIC50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShldmVuKSA+IGRpdiB7XG4gICAgbGVmdDogNDVweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/brazi/brazi.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/brazi/brazi.component.ts ***!
    \*****************************************************/

  /*! exports provided: BraziComponent */

  /***/
  function srcAppComponentsBraziBraziComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BraziComponent", function () {
      return BraziComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BraziComponent = /*#__PURE__*/function () {
      function BraziComponent() {
        _classCallCheck(this, BraziComponent);
      }

      _createClass(BraziComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BraziComponent;
    }();

    BraziComponent.ɵfac = function BraziComponent_Factory(t) {
      return new (t || BraziComponent)();
    };

    BraziComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BraziComponent,
      selectors: [["app-brazi"]],
      decls: 451,
      vars: 0,
      consts: [[1, "titleS"], [1, "sec"], [1, "row"], [1, "col-sm-6", "col-xs-6"], [1, "wrapper"], [1, "container"], [1, "top"], ["src", "/assets/pics/brazi/abiesAlba.jpg", "alt", "Douglas", 1, "img-fluid"], [1, "bottom"], [1, "left"], [1, "details"], [1, "inside"], [1, "icon"], [1, "material-icons"], [1, "contents"], [1, "text-center", "titletabel"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], ["src", "/assets/pics/brazi/piceapungens.jpg", "alt", "piceapungens", 1, "img-fluid"], ["src", "/assets/pics/brazi/daisywhite.jpg", "alt", "daisywhite", 1, "img-fluid"], ["src", "/assets/pics/brazi/piceaglaucaconica.jpg", "alt", "piceaglaucaconica", 1, "img-fluid"], ["src", "/assets/pics/brazi/abiesnordmanniana.jpg", "alt", "abiesnordmanniana", 1, "img-fluid"], ["src", "/assets/pics/brazi/pinusmugo.jpg", "alt", "pinusmugo", 1, "img-fluid"], ["src", "/assets/pics/brazi/pinnigra.jpg", "alt", "pinnigra", 1, "img-fluid"]],
      template: function BraziComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Brazi si pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Abies Alba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Se planteaza solitar sau in grupuri.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Plantarea se face in perioada de repaus vegetativ 15 noiembrie-10 martie cu conditia ca solul sa nu fie inghetat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bradul Nordmann este o specie cu temperament de lumina, dar suporta si semiumbra.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Vegeteaza bine in soluri variate, dar le prefera pe cele fertile si bine drenate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Abies Alba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "200-300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2000-2500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "1/ cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Picea pungens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Picea Pungens este un molidul argintiu de talie medie ce poate ajunge la 10-12m.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Are o forma conica simetrica, ramuri cu ace lungi, rigide de culoare albastra-argintie. Este un conifer cu crestere lenta, cu o rata de crestere anuala de 10-15 cm si face conuri mari. Se dezvolta bine in plin soare si isi mentine culoarea tropicala. Se dezvolta bine pe soluri calcaroase iar necesarul de apa este mediu. Acest soi este foarte decorativ, putand fi pus in evidenta ca exemplar solitar. Rezistent la ger, pentru plantare se alege o pozitie insorita. Tolereaza caldura si vantul. Bun pentru mediul urban, fiind rezistent la poluare. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Picea pungens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "1000-1200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "soare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Brad(Picea Glauca)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Daisy White");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Este un molid pitic, foarte atragator, cu forma conica compacta, foliaj foarte dens.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Este special prin culoarea galben-aurie a mugurilor care imbraca planta in primavara oferindu-i un aspect foarte luminos si pufos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "In decurs de 4-6 saptamani de la aparitia lor, acele isi schimba culoarea in alb verde si apoi verde inchis si devin rigide, tepoase.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Este potrivit pentru gradini mici, dar creste foarte bine si in ghivece pe terase.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Se planteaza in plin soare, prefera solurile acide, bine drenate, are crestere foarte inceata.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Brad(Picea Glauca)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Daisy White");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Brad(Picea Glauca)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Glauca Conica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Este un conifer superb cu o coroana deasa si bogata. Frunzele nou crescute sunt moi \u0219i subtiri, de culoare verde-deschis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Are portul conic. Este cunoscut si sub denumirea de molid conic. Are numeroase intrebuintari peisagistice si arata bine in foarte multe spatii.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Se foloseste ca planta solitara sau \xEEn aliniamente. Cresterea e relativ lenta, dar acest arbust rasinos ofera frumusete gradinilor la orice varsta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Brad(Picea Glauca)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Glauca Conica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "40-100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "150-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "incepand cu 50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Abies Nordmanniana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Bradul Nordmann este cel mai popular pom de Craciun.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Se planteaza solitar sau in grupuri.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Plantarea se face in perioada de repaus vegetativ 15 noiembrie-10 martie cu conditia ca solul sa nu fie inghetat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Bradul Nordmann este o specie cu temperament de lumina, dar suporta si semiumbra.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Vegeteaza bine in soluri variate, dar le prefera pe cele fertile si bine drenate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Abies Nordmanniana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "2500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Mugo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Pinii sunt copaci superbi ce pot fi intalniti oriunde de la tarile nordice pana la coastele fierbinti. Probabil cele mai frumoase exemplare se gasesc in mediul lor natural, insa acestea pot fi adevarate bijuterii oriunde, daca ii sunt create conditiile optime de dezvoltare. Pinus mugo este o varietate de pin pitic, cu o crestere compacta si lenta. Formeaza un tufis bogat, mai mult lat decat inalt, cu ace mai scurte de un verde inchis. Arata excelent in gradini cu stancarii, gradini japoneze. Pinii au nevoie de sol usor umed atunci cand se stabilesc, dupa transplantare, dar vor suporta orice sol bine drenat. Pentru a se ramifica si imbogatii, are nevoie de mult soare, asa ca incercati sa ii gasiti un loc cat mai \xEEnsorit. Complet rezistent pana la -45 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Mugo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "30-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "incepand cu 40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Februarie-Aprilie, Septembrie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Nigra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Cunoscut si sub numele de Pin negru, este o specie de conifer originar din Europa Centrala si de Sud. Are o rezistenta sporita la ger si seceta, nepretentios fata de sol si iubeste lumina. Coroana are un aspect piramidal, acest pin face parte din categoria pinilor cu doua ace intr-o teaca. Conurile au dimensiuni de 4-7 cm lungime si sunt indreptate in sus, in tinerete sunt verzi, iar la maturitate se coloreaza in brun-maroniu. Se planteaza ca arbore ornamental in gradini, orase, parcuri.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Nigra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "3000-4000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Februarie-Aprilie, Septembrie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](450, "hr");
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:700\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.titleS[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  min-height: 20vh;\n  background-color: teal;\n  font-size: 40px;\n  align-content: space-between;\n  text-align: center;\n}\n.titleS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 50px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  color: red;\n}\n.titletabel[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\";\n  text-align: center;\n  color: red;\n  font-size: 35px;\n  padding: 15px 25px 15px 25px;\n}\nimg[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  height: 400px;\n  width: 95%;\n}\ntable[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  width: 95%;\n  color: white;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  background-color: teal;\n}\n.col[_ngcontent-%COMP%] {\n  padding-top: 150px;\n}\nhr[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(14, 110, 110, 0.5);\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  background-size: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom.clicked[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 20px;\n  float: right;\n  width: calc(70% - 40px);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 80%;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .contents[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icmF6aS9DOlxcVXNlcnNcXFNwZXJhbnRhXFxEZXNrdG9wXFxOZXcgZm9sZGVyXFxOZXcgZm9sZGVyXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYnJhemlcXGJyYXppLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JyYXppL2JyYXppLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlHQUFBO0FBQ0EsNEZBQUE7QUFDQSw2R0FBQTtBQUNBLGlJQUFBO0FBQ0EsaUtBQUE7QUFHQSxzRUFBQTtBQUNBLCtEQUFBO0FBQ0EsaUtBQUE7QUFDQSxtSkFBQTtBQU9SO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNQSjtBRFVBO0VBQ0ksNEVBQUE7RUFFQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFVJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwwRkFBQTtFQUNBLFVBQUE7QUNSUjtBRGFBO0VBQ0ksZ0VBQUE7RUFDQyxrQkFBQTtFQUNELFVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNWSjtBRGtCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNmSjtBRGlCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNkSjtBRGdCQTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7QUNkRjtBRGdCQTtFQUNJLGtCQUFBO0FDYko7QURnQkE7RUFDSSxXQUFBO0FDYko7QURvQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FDakJKO0FEa0JJO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtBQ2hCTjtBRG1CSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDakJOO0FEa0JNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFJSixxQkFBQTtBQ2hCSjtBRG1CTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNqQlI7QURrQlE7RUFDRSwyQkFBQTtBQ2hCVjtBRGtCUTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBNUdKO0FDMkZSO0FEc0JRO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNwQlY7QURxQlU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDbkJaO0FEMEJJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FDeEJOO0FEeUJNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDdkJSO0FEMEJNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3hCUjtBRHlCUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ3ZCVjtBRHlCUTtFQUVFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDeEJWO0FEMkJNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7QUN6QlI7QUQyQlE7RUFDRSxZQUFBO0VBQ0EsK0JBakxGO0FDd0pSO0FEMkJRO0VBRUUsZUFBQTtFQUNBLFlBQUE7QUMxQlY7QUQ0QlE7RUFDSSxlQUFBO0VBQ0MsWUFBQTtBQzFCYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJhemkvYnJhemkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRmb250MTogJ0Nvb2tpZScsIGN1cnNpdmU7XHJcbiRmb250MjogJ0hhbmRsZWUnLCBjdXJzaXZlO1xyXG4kZm9udDM6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcclxuJGZvbnQ0OiAnU29maWEnLCBjdXJzaXZlO1xyXG4kZm9udDU6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG5cclxuKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxufVxyXG4udGl0bGVTe1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgbWluLWhlaWdodDogMjB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICBcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxldGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0RhbmNpbmcgU2NyaXB0JywnSm9zZWZpbiBTYW5zJztcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xyXG59XHJcbi8vIC50aXRsZTJ7XHJcbi8vICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbi8vIH1cclxuaW1ne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxudGFibGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufVxyXG4uY29se1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcblxyXG5ocntcclxuICAgIGhlaWdodDogNXB4O1xyXG59XHJcblxyXG5cclxuLy8gY29kMlxyXG5cclxuICBcclxuICAud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNCwgMTEwLCAxMTAsIDAuNSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzLCB0cmFuc2Zvcm0gMC41cztcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCAyMHB4IDMwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgLnRvcHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3R0b217XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgJi5jbGlja2Vke1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSxoNSxweyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNBNkNEREU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgIGhlaWdodDoyMDAlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIC5kZXRhaWxze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDcwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnNpZGV7XHJcbiAgICAgIHotaW5kZXg6OTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsMC41KTtcclxuICAgICAgd2lkdGg6MTQwcHg7XHJcbiAgICAgIGhlaWdodDoxNDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC03MHB4O1xyXG4gICAgICByaWdodDogLTcwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjAwcHggMjAwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzLCBib3JkZXItcmFkaXVzIDJzLCB0b3AgMXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC5pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0Ojg1cHg7XHJcbiAgICAgICAgdG9wOjg1cHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGhlaWdodDo4MCU7XHJcbiAgICAgICAgLmljb257XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6MTVweDtcclxuICAgICAgICAgIHRvcDoxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudHN7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50c3tcclxuICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuOHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDEsaDUgLHB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Byb1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRpdGxlUyB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkRhbmNpbmcgU2NyaXB0XCIsIFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDIwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlUyBoMSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xufVxuXG4udGl0bGV0YWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkRhbmNpbmcgU2NyaXB0XCIsIFwiSm9zZWZpbiBTYW5zXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xufVxuXG5pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA5NSU7XG59XG5cbnRhYmxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogOTUlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWMge1xuICBtaW4taGVpZ2h0OiA2MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuXG4uY29sIHtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogNXB4O1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm94LXNoYWRvdzogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzLCB0cmFuc2Zvcm0gMC41cztcbn1cbi53cmFwcGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYm94LXNoYWRvdzogNXB4IDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnRvcCB7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSB7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20uY2xpY2tlZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSBoMSwgLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIGg1LCAud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gcCB7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gLnJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogI0E2Q0RERTtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMjAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSAucmlnaHQgLmRldGFpbHMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDcwJSAtIDQwcHgpO1xufVxuLndyYXBwZXIgLmluc2lkZSB7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTcwcHg7XG4gIHJpZ2h0OiAtNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMDBweCAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMsIGJvcmRlci1yYWRpdXMgMnMsIHRvcCAxcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwcGVyIC5pbnNpZGUgLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4NXB4O1xuICB0b3A6IDg1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbn1cbi53cmFwcGVyIC5pbnNpZGU6aG92ZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogODAlO1xufVxuLndyYXBwZXIgLmluc2lkZTpob3ZlciAuaWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG59XG4ud3JhcHBlciAuaW5zaWRlOmhvdmVyIC5jb250ZW50cyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIHtcbiAgcGFkZGluZzogNSU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC44cztcbn1cbi53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIGgxLCAud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBoNSwgLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSGFuZGxlZVwiLCBjdXJzaXZlO1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgaDUge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BraziComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-brazi',
          templateUrl: './brazi.component.html',
          styleUrls: ['./brazi.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_service_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/contact.service */
    "./src/app/service/contact.service.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(builder, contact) {
        _classCallCheck(this, ContactComponent);

        this.builder = builder;
        this.contact = contact;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.FormData = this.builder.group({
            Fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])]),
            Comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(FormData) {
          console.log(FormData);
          this.contact.PostMessage(FormData).subscribe(function (response) {
            location.href = 'https://mailthis.to/confirm';
            console.log(response);
          }, function (error) {
            console.warn(error.responseText);
            console.log({
              error: error
            });
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 72,
      vars: 2,
      consts: [[1, "sec"], [1, "title"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.7180621011192!2d21.37236275118266!3d46.01825237172684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474577899577a5e7%3A0xb3f72de893c46d0d!2sFiriteaz!5e0!3m2!1sro!2sro!4v1607596016405!5m2!1sro!2sro", "width", "100%", "height", "400", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 1, "card-img-top", 2, "border", "0"], [1, "card-body", "row"], [1, "col-sm-6", "col-xs-6"], [1, "title1"], [1, "card-title", 2, "margin-top", "20px", "margin-bottom", "25px"], ["src", "/assets/pics/icons/adresa.svg", "width", "30px", "height", "30px"], ["href", "tel:0733604176"], [1, "card-text", 2, "margin-bottom", "25px"], ["src", "/assets/pics/icons/wapp.svg", "width", "30px", "height", "30px", 1, "icons"], ["href", "tel:0745631698"], ["href", "https://www.facebook.com/tuiaarborelevietii", 2, "margin-bottom", "25px"], ["src", "/assets/pics/icons/fb.svg", "width", "30px", "height", "30px", 1, "icons"], [1, "text-center", "title1"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "mail"], [1, "container"], [1, "row"], [1, "col-md-12", "offset-xs-12"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "Email"], ["type", "email", "name", "Email", "aria-describedby", "emailHelp", "placeholder", "Adauga email", "formControlName", "Email", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "fullname"], ["type", "text", "name", "Fullname", "placeholder", "Adauga Numele", "formControlName", "Fullname", 1, "form-control"], ["for", "comment"], ["formControlName", "Comment", "name", "Comment", 1, "form-control"], ["type", "submit", 1, "btn", "btn-danger", 3, "disabled"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ne puteti Contacta ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Adresa : Sat Firiteaz, Comuna Sagu,Judetul Arad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Arad cartier Gradiste,Judetul Arad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Speranta : 0733604176");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Petru : 0745631698");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Facebook Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Orar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Luni-Vineri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "9-18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sambata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "10-16");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Duminica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Inchis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Daca aveti intrebari puteti sa ne trimiteti un mesaj in formularul de mai jos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_53_listener() {
            return ctx.onSubmit(ctx.FormData.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "small", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "We'll never share your email with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Nume si prenume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Comentariu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.FormData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.FormData.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n.sec[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 95vh;\n}\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: red;\n  font-size: 50px;\n  text-align: center;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.title1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: red;\n  text-align: center;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.table[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  text-align: center;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.mail[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  padding-bottom: 6vh;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.icons[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcU3BlcmFudGFcXERlc2t0b3BcXE5ldyBmb2xkZXJcXE5ldyBmb2xkZXJcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQUNBLDRGQUFBO0FBQ0EsNkdBQUE7QUFDQSxpSUFBQTtBQUNBLGlLQUFBO0FBR1I7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREtBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEZBQUE7QUNGQTtBRElBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRkFBQTtBQ0RGO0FER0E7RUFDRSwwRkFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSwwRkFBQTtBQ0FGO0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEZBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSwwRkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG4uc2Vje1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0Ojk1dmggO1xyXG4gIFxyXG59XHJcblxyXG4udGl0bGV7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuZm9udC1zaXplOiA1MHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50aXRsZTF7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuLnRhYmxle1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxufVxyXG5he1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm1haWx7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pY29uc3tcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuLnNlYyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogOTV2aDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlMSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4udGFibGUge1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4ubWFpbCB7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIHBhZGRpbmctYm90dG9tOiA2dmg7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmljb25zIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_service_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/diverse/diverse.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/diverse/diverse.component.ts ***!
    \*********************************************************/

  /*! exports provided: DiverseComponent */

  /***/
  function srcAppComponentsDiverseDiverseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiverseComponent", function () {
      return DiverseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DiverseComponent = /*#__PURE__*/function () {
      function DiverseComponent() {
        _classCallCheck(this, DiverseComponent);
      }

      _createClass(DiverseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DiverseComponent;
    }();

    DiverseComponent.ɵfac = function DiverseComponent_Factory(t) {
      return new (t || DiverseComponent)();
    };

    DiverseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DiverseComponent,
      selectors: [["app-diverse"]],
      decls: 669,
      vars: 0,
      consts: [[1, "titleS"], [1, "sec"], [1, "row"], [1, "col-sm-6", "col-xs-6"], [1, "wrapper"], [1, "container"], [1, "top"], ["src", "/assets/pics/plante diverse/artar.jpg", "alt", "tuja", 1, "img-fluid"], [1, "bottom"], [1, "left"], [1, "details"], [1, "inside"], [1, "icon"], [1, "material-icons"], [1, "contents"], [1, "text-center", "titletabel"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], ["src", "/assets/pics/plante diverse/acershirasawanumAureum.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/carexbronze.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/hemerocallisyounique.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/salcie.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/larice.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/prunusnovice.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/prunusetna.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/tisataxusbacata.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/buxusbicolor.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/buxuscimisir.jpg", "alt", "tuja", 1, "img-fluid"]],
      template: function DiverseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Plante diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Acer(Artar)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Palmatum Atropurpureum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Artarul Japonez Rosu este un copac cu o coroana deosebit de atractiva. Prin frunzele sale in nuante de rosu. In perioada anotimpului de toamna frunzele primesc o nuanta intensa de rosu-ruginiu. Frunzele au forma palmata si o lungime de 4-10 centimetri.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Solul preferat de Artarul Atropurpureum este cel umed, bine drenat, solul acid si alcalin. Artarul japonez este o planta foarte rezistenta la daunatori si la poluare. Este un copac decorativ datorita culorii atractive a frunzelor care se schimba de la anotimp la anotimp. Artarul Japonez Atropurpureum este un copac perfect pentru decorarea gradinilor si a parcurilor. Frumusetea lui aparte in combinatie cu alti arbori va iesi in evidenta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Acer(Artar)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Palmatum Atropurpureum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "100-120 , 160-180");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "300-400");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "250 , 500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Semiumbra, umbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Acer (Artar)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Shirasawanum \"Aureum\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Acer shirasawanum Aureum este un arbust cu frunzisul cazator care face parte din familia Sapindaceae. Soiul este originar din Japonia si creste dens cu frunzisul decorativ. Primeste forme ciudate, interesante. Frunzele cresc sub forma palmat-compusa formate din 9-13 lobi. Frunzele in anotimpul de primavara sunt in nuante de verde-auriu, in anotimpul de toamna ele devin galben-portocalii, rosii.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Acer (Artar)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Shirasawanum \"Aureum\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "50-70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Iarba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Carex bronze");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "O planta decorativa, ce formeaza tufe bogate, cu frunze viu colorate intr-o nuanta uimitoare de portocaliu. Se potriveste perfect in decorul oricarui peisaj. Completeaza armonios bordurile si stancariile, creand o imagine exotica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Iarba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Carex bronze");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "50-70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "80-100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "soare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Iarba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Hemerocallis Younique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Iarba decorativa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Iarba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Hemerocallis Younique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "20-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "35-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Salix integra (Salcie)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Hakuro Nishiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Salcie Japoneza altoita pe trunchi (Salix integra \"Hakuro Nishiki\") - este un arbust decorativ ce poarta si denumirea de salcie japoneza, cu lastarii noi de culoare roz si un frunzis pestrit (verde cu crem), aceasta specie de salcie altoita devine foarte usor un punct de atractie al gradinii.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Salix integra (Salcie)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Hakuro Nishiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "100-120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "170-180");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "120-150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Larice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Larice pendular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Laricele este singurul conifer cu frunze cazatoare si se altoieste pe trunchi inalt pentru un efect deosebit. Este deosebit de decorativ prin ramurile lungi ce atarna gratios pana in pamant. Ramurile poarta fascicole de ace lungi de 1-3 cm, liniare, colorate in verde deschis care toamna inainte de cadere devin galbene. Este rezistent la seceta si se poate planta in plin soare. Suporta tunderea ramurilor la nivelul dorit: umbrela, tarator pe jos, ciuperca. Nu necesita ingrijiri speciale: udare moderata, iar primavara si toamna, pamantul se sapa in jurul copacului. Primavara se administreaza fertilizante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Larice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Larice pendular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "100-120,120-140");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "150-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "320-380");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "All season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Prunus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Laurocerasus Novita");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Arbust ornamental vesnic verde condus ca si copac pe un trunchi de 90-100 cm, cu coroana compacta si densa. Frunzele ovale sunt de culoare verde stralucitor. Se preteaza foarte bine la tuns.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Prunus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Laurocerasus Novita");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "300-400");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Prunus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Laurocerasus Etna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Are crestere rapida si se remarca prin aspectul frunzisului de culoare verde-crud, frunzele noi iesite sunt de culoarea bronzului, precum si prin inflorescentele albe, in forma de ciorchini, puternic parfumate. Rezista pana la -27 grade Celsius. Se foloseste la garduri vii de pana la 200 cm inaltime si 80 cm latime. Recomandam plantarea la aproximativ 40-50 cm unul fata de altul.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Prunus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "Laurocerasus Etna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "30, 50-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "200-300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "40-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Taxus Baccata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "Fastigiata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Una dintre cele mai populare conifere din lume, Taxus baccata \"Fastigiata\" este un arbst dens, vesnic verde.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Ramurile sale rigid inaltate se mandresc cu ace lungi, dispuse radial, de culoare verde inchis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "Acest soi feminin produce conuri vizibile, rosii de coral, care contrasteaza frumos cu frunzisul. Poate fi usor taiata si modelata.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Taxus Baccata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "Fastigiata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "40-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "300-500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](548, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](555, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "Buxus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "Sempervirens Elegantissima");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "\"Elegantissima\" este un arbust vesnic verde de dimensiuni medii, cu frunzis dens si compact rotunjit. Frunze \xEEnguste ovale sau alungite, cu margini \xEEnguste de culoare alb-crem, uneori distorsionate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Buxus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "Sempervirens Elegantissima");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "100-150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](608, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](615, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "Buxus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "Cimisir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "Buxus sempervirens prezinta o coroana compacta de culoare verde intens, compusa din frunze mici, stralucitoare, opus ovale, persistente. Se utilizeaza solitar, in grupuri sau in garduri vii. Rezistenta crescuta la ger. Perioada indicata pentru tundere este iulie-august. Se adapteaza oricarui tip de sol: fertil, bogat in humus sau sarac si calcaros. Poate fi expus atat in soare cat si in semiumbra permanenta fiind folosit si ca gard viu si borduri. Se uda des, dar sa nu ballteasca apa, solul sa aiba drenaj bun.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "Buxus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "Cimisir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "I 30-40 D 30-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "200-300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](668, "hr");
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:700\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.titleS[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  min-height: 20vh;\n  background-color: teal;\n  font-size: 40px;\n  align-content: space-between;\n  text-align: center;\n}\n.titleS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 50px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  color: red;\n}\n.titletabel[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\";\n  text-align: center;\n  color: red;\n  font-size: 35px;\n  padding: 15px 25px 15px 25px;\n}\nimg[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  height: 400px;\n  width: 95%;\n}\ntable[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  width: 95%;\n  color: white;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  background-color: teal;\n}\n.col[_ngcontent-%COMP%] {\n  padding-top: 150px;\n}\nhr[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(14, 110, 110, 0.5);\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  background-size: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom.clicked[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 20px;\n  float: right;\n  width: calc(70% - 40px);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 80%;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .contents[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXZlcnNlL0M6XFxVc2Vyc1xcU3BlcmFudGFcXERlc2t0b3BcXE5ldyBmb2xkZXJcXE5ldyBmb2xkZXJcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkaXZlcnNlXFxkaXZlcnNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RpdmVyc2UvZGl2ZXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQUNBLDRGQUFBO0FBQ0EsNkdBQUE7QUFDQSxpSUFBQTtBQUNBLGlLQUFBO0FBR0Esc0VBQUE7QUFDQSwrREFBQTtBQUNBLGlLQUFBO0FBQ0EsbUpBQUE7QUFPUjtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDUEo7QURVQTtFQUNJLDRFQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDUko7QURVSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEZBQUE7RUFDQSxVQUFBO0FDUlI7QURhQTtFQUNJLGdFQUFBO0VBQ0Msa0JBQUE7RUFDRCxVQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDVko7QURrQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDZko7QURpQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDZEo7QURnQkE7RUFFRSxnQkFBQTtFQUNBLHNCQUFBO0FDZEY7QURnQkE7RUFDSSxrQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksV0FBQTtBQ2JKO0FEb0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBQ2pCSjtBRGtCSTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUNoQk47QURtQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2pCTjtBRGtCTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBSUoscUJBQUE7QUNoQko7QURtQk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDakJSO0FEa0JRO0VBQ0UsMkJBQUE7QUNoQlY7QURrQlE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQTVHSjtBQzJGUjtBRHNCUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDcEJWO0FEcUJVO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ25CWjtBRDBCSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQ3hCTjtBRHlCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3ZCUjtBRDBCTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN4QlI7QUR5QlE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUN2QlY7QUR5QlE7RUFFRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ3hCVjtBRDJCTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0FDekJSO0FEMkJRO0VBQ0UsWUFBQTtFQUNBLCtCQWpMRjtBQ3dKUjtBRDJCUTtFQUVFLGVBQUE7RUFDQSxZQUFBO0FDMUJWO0FENEJRO0VBQ0ksZUFBQTtFQUNDLFlBQUE7QUMxQmIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpdmVyc2UvZGl2ZXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuJGZvbnQxOiAnQ29va2llJywgY3Vyc2l2ZTtcclxuJGZvbnQyOiAnSGFuZGxlZScsIGN1cnNpdmU7XHJcbiRmb250MzogJ1BhcmlzaWVubmUnLCBjdXJzaXZlO1xyXG4kZm9udDQ6ICdTb2ZpYScsIGN1cnNpdmU7XHJcbiRmb250NTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG59XHJcbi50aXRsZVN7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0RhbmNpbmcgU2NyaXB0JywnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGV0YWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnRGFuY2luZyBTY3JpcHQnLCdKb3NlZmluIFNhbnMnO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbn1cclxuLy8gLnRpdGxlMntcclxuLy8gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgcGFkZGluZzogMTVweCAyNXB4IDE1cHggMjVweDtcclxuLy8gfVxyXG5pbWd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG50YWJsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNlY3tcclxuXHJcbiAgbWluLWhlaWdodDogNjB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG59XHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4vLyBjb2QyXHJcblxyXG4gIFxyXG4gIC53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDIwcHggMzBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAudG9we1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvdHRvbXtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAmLmNsaWNrZWR7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxLGg1LHB7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250MjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0E2Q0RERTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwMCU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNzAlIC0gNDBweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmluc2lkZXtcclxuICAgICAgei1pbmRleDo5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwwLjUpO1xyXG4gICAgICB3aWR0aDoxNDBweDtcclxuICAgICAgaGVpZ2h0OjE0MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTcwcHg7XHJcbiAgICAgIHJpZ2h0OiAtNzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMDBweCAyMDBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMsIGJvcmRlci1yYWRpdXMgMnMsIHRvcCAxcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmljb257XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6ODVweDtcclxuICAgICAgICB0b3A6ODVweDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICByaWdodDowO1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgaGVpZ2h0OjgwJTtcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICByaWdodDoxNXB4O1xyXG4gICAgICAgICAgdG9wOjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50c3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnRze1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC44cztcclxuICAgICAgICBcclxuICAgICAgICBoMSxoNSAscHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjJweDtcclxuICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGl0bGVTIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGVTIGgxIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50aXRsZXRhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XG59XG5cbmltZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDk1JTtcbn1cblxudGFibGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYyB7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNCwgMTEwLCAxMTAsIDAuNSk7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBib3gtc2hhZG93OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xufVxuLndyYXBwZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBib3gtc2hhZG93OiA1cHggMjBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAudG9wIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIHtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbS5jbGlja2VkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIGgxLCAud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gaDUsIC53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSBwIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkhhbmRsZWVcIiwgY3Vyc2l2ZTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSAucmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjQTZDRERFO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAyMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIC5yaWdodCAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gNDBweCk7XG59XG4ud3JhcHBlciAuaW5zaWRlIHtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNzBweDtcbiAgcmlnaHQ6IC03MHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwMHB4IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cywgYm9yZGVyLXJhZGl1cyAycywgdG9wIDFzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXBwZXIgLmluc2lkZSAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDg1cHg7XG4gIHRvcDogODVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuLndyYXBwZXIgLmluc2lkZTpob3ZlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiA4MCU7XG59XG4ud3JhcHBlciAuaW5zaWRlOmhvdmVyIC5pY29uIHtcbiAgb3BhY2l0eTogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbn1cbi53cmFwcGVyIC5pbnNpZGU6aG92ZXIgLmNvbnRlbnRzIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMge1xuICBwYWRkaW5nOiA1JTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIHRyYW5zZm9ybSAwLjhzO1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgaDEsIC53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIGg1LCAud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmU7XG59XG4ud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBoNSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiverseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-diverse',
          templateUrl: './diverse.component.html',
          styleUrls: ['./diverse.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/flori/flori.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/flori/flori.component.ts ***!
    \*****************************************************/

  /*! exports provided: FloriComponent */

  /***/
  function srcAppComponentsFloriFloriComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FloriComponent", function () {
      return FloriComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FloriComponent = /*#__PURE__*/function () {
      function FloriComponent() {
        _classCallCheck(this, FloriComponent);
      }

      _createClass(FloriComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FloriComponent;
    }();

    FloriComponent.ɵfac = function FloriComponent_Factory(t) {
      return new (t || FloriComponent)();
    };

    FloriComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FloriComponent,
      selectors: [["app-flori"]],
      decls: 189,
      vars: 0,
      consts: [[1, "titleS"], [1, "sec"], [1, "row"], [1, "col-sm-6", "col-xs-6"], [1, "wrapper"], [1, "container"], [1, "top"], ["src", "/assets/pics/flori/royalstar.jpg", "alt", "Royalstar", 1, "img-fluid"], [1, "bottom"], [1, "left"], [1, "details"], [1, "inside"], [1, "icon"], [1, "material-icons"], [1, "contents"], [1, "text-center", "titletabel"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], ["src", "/assets/pics/flori/susan.jpg", "alt", "susan", 1, "img-fluid"], [2, "font-size", "18px"], ["src", "/assets/pics/flori/trandafir.jpg", "alt", "trandafir", 1, "img-fluid"]],
      template: function FloriComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Magnolii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Royal Star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Este un arbust decorativ de talie medie. Frunzele cad toamna, raman doar ramurile cu mugurii de flori ce stau peste iarna si se deschid primavara inainte sa porneasca frunzele. Florile albe si deschise sunt asemanatoare cu cele ale crinului. Un copacel perfect cu flori mai diferite dec\xE2t majoritatea magnoliilor cu flori de tip lalea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Magnolii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Royal Star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "100-120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2000-3000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Magnolii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Susan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Face parte din aceea\u0219i colectie ca si Magnolia Liliflora Betty. Are flori \xEEnguste, in forma de clopotel, roz profund in exterior si rosu deschis in interior. Aceasta este cea mai rosie varietate colorata dintre magnoliile de primavara. Infloreste bogat chiar si cand planta este tanara, primavara mai tarziu, cand nu risca sa fie deteriorat de temperaturile mai scazute din primavara. Mugurii de flori se produc pe cresterile din anul precedent, astfel ca daca doriti, se poate tunde imediat dupa perioada de inflorire, dar nu mai tarziu. Este de altfel usor de intretinut, suporta majoritatea tipurilor de sol. In perioadele de seceta, se recomanda udarea suplimentara.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Magnolii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Susan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "100-120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "300-500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Trandafir pe picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Trandafirii pe picior au aceasta denumire deoarece au o forma de pomisor, cu trunchi subtire si o coroana bogata de flori.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "In ghiveci sau in gradina el va avea nevoie de destul de multa apa. Se va avea grija sa fie udat de doua-trei ori pe saptamana. Atentie, cel care face de obicei operatia de udare va verifica pamantul destul de des pentru ca acesta sa nu se usuce. Singura perioada in care vom reduce frecventa udarilor va fi atunci cand trandafirul se afla in repaus vegetativ. Atunci, acesta va avea nevoie de apa o singura data pe saptamana. De asemenea, pentru o dezvoltare sanatoasa va recomandam sa-l tratati cu ingrasamant lichid pentru trandafiri ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Trandafiri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Culori disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Rosu,Alb,Galben,mov,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "120-140");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:700\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.titleS[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  min-height: 20vh;\n  background-color: teal;\n  font-size: 40px;\n  align-content: space-between;\n  text-align: center;\n}\n.titleS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 50px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  color: red;\n}\n.titletabel[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\";\n  text-align: center;\n  color: red;\n  font-size: 35px;\n  padding: 15px 25px 15px 25px;\n}\nimg[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  height: 400px;\n  width: 95%;\n}\ntable[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  width: 95%;\n  color: white;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  background-color: teal;\n}\n.col[_ngcontent-%COMP%] {\n  padding-top: 150px;\n}\nhr[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(14, 110, 110, 0.5);\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  background-size: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom.clicked[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 20px;\n  float: right;\n  width: calc(70% - 40px);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 80%;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .contents[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbG9yaS9DOlxcVXNlcnNcXFNwZXJhbnRhXFxEZXNrdG9wXFxOZXcgZm9sZGVyXFxOZXcgZm9sZGVyXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmxvcmlcXGZsb3JpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zsb3JpL2Zsb3JpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlHQUFBO0FBQ0EsNEZBQUE7QUFDQSw2R0FBQTtBQUNBLGlJQUFBO0FBQ0EsaUtBQUE7QUFHQSxzRUFBQTtBQUNBLCtEQUFBO0FBQ0EsaUtBQUE7QUFDQSxtSkFBQTtBQU9SO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNQSjtBRFVBO0VBQ0ksNEVBQUE7RUFFQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFVJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwwRkFBQTtFQUNBLFVBQUE7QUNSUjtBRGFBO0VBQ0ksZ0VBQUE7RUFDQyxrQkFBQTtFQUNELFVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNWSjtBRGtCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNmSjtBRGlCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNkSjtBRGdCQTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7QUNkRjtBRGdCQTtFQUNJLGtCQUFBO0FDYko7QURnQkE7RUFDSSxXQUFBO0FDYko7QURvQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FDakJKO0FEa0JJO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtBQ2hCTjtBRG1CSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDakJOO0FEa0JNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFJSixxQkFBQTtBQ2hCSjtBRG1CTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNqQlI7QURrQlE7RUFDRSwyQkFBQTtBQ2hCVjtBRGtCUTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBNUdKO0FDMkZSO0FEc0JRO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNwQlY7QURxQlU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDbkJaO0FEMEJJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FDeEJOO0FEeUJNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDdkJSO0FEMEJNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3hCUjtBRHlCUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ3ZCVjtBRHlCUTtFQUVFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDeEJWO0FEMkJNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7QUN6QlI7QUQyQlE7RUFDRSxZQUFBO0VBQ0EsK0JBakxGO0FDd0pSO0FEMkJRO0VBRUUsZUFBQTtFQUNBLFlBQUE7QUMxQlY7QUQ0QlE7RUFDSSxlQUFBO0VBQ0MsWUFBQTtBQzFCYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmxvcmkvZmxvcmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRmb250MTogJ0Nvb2tpZScsIGN1cnNpdmU7XHJcbiRmb250MjogJ0hhbmRsZWUnLCBjdXJzaXZlO1xyXG4kZm9udDM6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcclxuJGZvbnQ0OiAnU29maWEnLCBjdXJzaXZlO1xyXG4kZm9udDU6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG5cclxuKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxufVxyXG4udGl0bGVTe1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgbWluLWhlaWdodDogMjB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICBcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxldGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0RhbmNpbmcgU2NyaXB0JywnSm9zZWZpbiBTYW5zJztcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xyXG59XHJcbi8vIC50aXRsZTJ7XHJcbi8vICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbi8vIH1cclxuaW1ne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxudGFibGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufVxyXG4uY29se1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcblxyXG5ocntcclxuICAgIGhlaWdodDogNXB4O1xyXG59XHJcblxyXG5cclxuLy8gY29kMlxyXG5cclxuICBcclxuICAud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNCwgMTEwLCAxMTAsIDAuNSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzLCB0cmFuc2Zvcm0gMC41cztcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCAyMHB4IDMwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgLnRvcHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3R0b217XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgJi5jbGlja2Vke1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSxoNSxweyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNBNkNEREU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgIGhlaWdodDoyMDAlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIC5kZXRhaWxze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDcwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnNpZGV7XHJcbiAgICAgIHotaW5kZXg6OTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsMC41KTtcclxuICAgICAgd2lkdGg6MTQwcHg7XHJcbiAgICAgIGhlaWdodDoxNDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC03MHB4O1xyXG4gICAgICByaWdodDogLTcwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjAwcHggMjAwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzLCBib3JkZXItcmFkaXVzIDJzLCB0b3AgMXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC5pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0Ojg1cHg7XHJcbiAgICAgICAgdG9wOjg1cHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGhlaWdodDo4MCU7XHJcbiAgICAgICAgLmljb257XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6MTVweDtcclxuICAgICAgICAgIHRvcDoxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudHN7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50c3tcclxuICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuOHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDEsaDUgLHB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Byb1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRpdGxlUyB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkRhbmNpbmcgU2NyaXB0XCIsIFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDIwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlUyBoMSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xufVxuXG4udGl0bGV0YWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkRhbmNpbmcgU2NyaXB0XCIsIFwiSm9zZWZpbiBTYW5zXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xufVxuXG5pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA5NSU7XG59XG5cbnRhYmxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogOTUlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWMge1xuICBtaW4taGVpZ2h0OiA2MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuXG4uY29sIHtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogNXB4O1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm94LXNoYWRvdzogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzLCB0cmFuc2Zvcm0gMC41cztcbn1cbi53cmFwcGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYm94LXNoYWRvdzogNXB4IDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnRvcCB7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSB7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20uY2xpY2tlZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSBoMSwgLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIGg1LCAud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gcCB7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gLnJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogI0E2Q0RERTtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMjAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSAucmlnaHQgLmRldGFpbHMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDcwJSAtIDQwcHgpO1xufVxuLndyYXBwZXIgLmluc2lkZSB7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTcwcHg7XG4gIHJpZ2h0OiAtNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMDBweCAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMsIGJvcmRlci1yYWRpdXMgMnMsIHRvcCAxcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwcGVyIC5pbnNpZGUgLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4NXB4O1xuICB0b3A6IDg1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbn1cbi53cmFwcGVyIC5pbnNpZGU6aG92ZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogODAlO1xufVxuLndyYXBwZXIgLmluc2lkZTpob3ZlciAuaWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG59XG4ud3JhcHBlciAuaW5zaWRlOmhvdmVyIC5jb250ZW50cyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIHtcbiAgcGFkZGluZzogNSU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC44cztcbn1cbi53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIGgxLCAud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBoNSwgLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSGFuZGxlZVwiLCBjdXJzaXZlO1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgaDUge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloriComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flori',
          templateUrl: './flori.component.html',
          styleUrls: ['./flori.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 11,
      vars: 0,
      consts: [[1, "fot", "fixed-bottom", "text-center"], [1, "display:", "inline;"], ["href", "https://www.facebook.com/Andrei-Levai-Web-Developer-100464558721297", 2, "margin-bottom", "25px"], ["src", "/assets/pics/icons/fb.svg", "width", "30px", "height", "30px", 1, "icons"], ["href", "tel:0733604176", "id", "navsuna", 1, "nav-link"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone-plus"], ["fill-rule", "evenodd", "d", "M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V.5a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M12 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0v-3z"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Realizat de: Andrei0292");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Andrei-Levai-Web-Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Suna-ma! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fot[_ngcontent-%COMP%] {\n  min-height: 5vh;\n  background-color: #0e6e6e;\n}\n\nh1[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  display: inline;\n  color: white;\n  font-size: 25px;\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxTcGVyYW50YVxcRGVza3RvcFxcTmV3IGZvbGRlclxcTmV3IGZvbGRlclxcU3BlcmFcXHR1amEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURJQTtFQUNRLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3R7XHJcbiAgICBcclxuICAgIG1pbi1oZWlnaHQ6IDV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwKTtcclxuICAgXHJcbiAgIFxyXG59IFxyXG5oMSxhXHJcbnsgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzowIDE1cHg7XHJcbiAgICB9IiwiLmZvdCB7XG4gIG1pbi1oZWlnaHQ6IDV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmU2ZTtcbn1cblxuaDEsIGEge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/foto/foto.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/foto/foto.component.ts ***!
    \***************************************************/

  /*! exports provided: FotoComponent */

  /***/
  function srcAppComponentsFotoFotoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FotoComponent", function () {
      return FotoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var FotoComponent = /*#__PURE__*/function () {
      function FotoComponent() {
        _classCallCheck(this, FotoComponent);
      }

      _createClass(FotoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(function () {
            var selectedClass = "";
            jquery__WEBPACK_IMPORTED_MODULE_1__(".filter").click(function () {
              selectedClass = jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr("data-rel");
              jquery__WEBPACK_IMPORTED_MODULE_1__("#gallery").fadeTo(100, 0.1);
              jquery__WEBPACK_IMPORTED_MODULE_1__("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("." + selectedClass).fadeIn().addClass('animation');
                jquery__WEBPACK_IMPORTED_MODULE_1__("#gallery").fadeTo(300, 1);
              }, 300);
            });
          });
        }
      }]);

      return FotoComponent;
    }();

    FotoComponent.ɵfac = function FotoComponent_Factory(t) {
      return new (t || FotoComponent)();
    };

    FotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FotoComponent,
      selectors: [["app-foto"]],
      decls: 92,
      vars: 0,
      consts: [[1, "sec"], [1, "row"], [1, "col-md-12", "d-flex", "justify-content-center", "mb-5", "menu"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar"], ["role", "group", "aria-label", "First group", 1, "btn-group", "mr-2"], ["type", "button", "data-rel", "all", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["role", "group", "aria-label", "Second group", 1, "btn-group", "mr-2"], ["type", "button", "data-rel", "1", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "2", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "3", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "4", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "5", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "6", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["id", "gallery", 1, "gallery"], [1, "mb-3", "pics", "animation", "all", "1"], ["src", "assets/pics/tuja/Grasilis.jpg", "alt", "Card image cap", 1, "img-fluid", "img"], ["src", "assets/pics/tuja/TuiaGlobosa.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/tuja/TuiaSmaragd.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/tuja/TuiaNanaAurea.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "2"], ["src", "assets/pics/brazi/Douglas.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/piceaglaucaconica.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/daisywhite.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/pinusmugo.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/pinnigra.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/piceapungens.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/abiesnordmanniana.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "3"], ["src", "assets/pics/ienupar/pingii-loderi.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/spartan.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/blue-arrow.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/stricta.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/variegata.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/princeofwalles.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/virginiana.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "4"], ["src", "assets/pics/plante diverse/artar.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/salcie.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/larice.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/chiparos.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/chiparosblue.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/hemerocallisyounique.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/carexbronze.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/tisataxusbacata.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/prunus.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/buxusbicolor.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/sempervirenspapa.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/buxuscimisir.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "5"], ["src", "assets/pics/flori/trandafir.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/flori/royalstar.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/flori/susan.jpg", "alt", "Card image cap", 1, "img-fluid"]],
      template: function FotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tuja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Brazi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Amenajari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n.sec[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding-bottom: 10vh;\n}\n.gallery[_ngcontent-%COMP%] {\n  -moz-column-count: 3;\n  column-count: 3;\n  -moz-column-width: 33%;\n  column-width: 33%;\n}\n.gallery[_ngcontent-%COMP%]   .pics[_ngcontent-%COMP%] {\n  transition: all 350ms ease;\n}\n.gallery[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.btn-toolbar[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn.filter[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 16px;\n  transition: 0.7s ease-in;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.btn.filter[_ngcontent-%COMP%]:hover {\n  background-color: #0e6e6e;\n  color: lightcyan;\n}\n.pics[_ngcontent-%COMP%] {\n  margin: 20px;\n  overflow: hidden;\n  \n}\nimg[_ngcontent-%COMP%] {\n  display: block;\n  display: block;\n  transition: all 0.3s;\n}\n.pics[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n@media (max-width: 450px) {\n  .gallery[_ngcontent-%COMP%] {\n    -moz-column-count: 1;\n    column-count: 1;\n    -moz-column-width: 100%;\n    column-width: 100%;\n  }\n}\n@media (max-width: 300px) {\n  .btn.filter[_ngcontent-%COMP%] {\n    padding-left: 1.1rem;\n    padding-right: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3RvL0M6XFxVc2Vyc1xcU3BlcmFudGFcXERlc2t0b3BcXE5ldyBmb2xkZXJcXE5ldyBmb2xkZXJcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3RvXFxmb3RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZvdG8vZm90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQUNBLDRGQUFBO0FBQ0EsNkdBQUE7QUFDQSxpSUFBQTtBQUNBLGlLQUFBO0FBRVI7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDQUo7QURHQTtFQUVJLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRENJO0VBRUEsMEJBQUE7QUNFSjtBRERJO0VBR0EsbUJBQUE7QUNJSjtBREZBO0VBRUksZUFBQTtBQ0lKO0FEQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLDBGQUFBO0FDR0o7QUREQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNJSjtBREFBO0VBR0ksWUFBQTtFQUNBLGdCQUFBO0VBQTZCLHVEQUFBO0FDRWpDO0FEQUU7RUFHRSxjQUFBO0VBR0EsY0FBQTtFQUdBLG9CQUFBO0FDREo7QURLTztFQUtDLHFCQUFBO0FDSlI7QURXSTtFQUNBO0lBRUEsb0JBQUE7SUFDQSxlQUFBO0lBRUEsdUJBQUE7SUFDQSxrQkFBQTtFQ1JGO0FBQ0Y7QURXSTtFQUNBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtFQ1RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvdG8vZm90by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnNlY3tcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwdmg7XHJcbn1cclxuXHJcbi5nYWxsZXJ5IHtcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xyXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDM7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICAtd2Via2l0LWNvbHVtbi13aWR0aDogMzMlO1xyXG4gICAgLW1vei1jb2x1bW4td2lkdGg6IDMzJTtcclxuICAgIGNvbHVtbi13aWR0aDogMzMlOyB9XHJcbiAgICAuZ2FsbGVyeSAucGljcyB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2U7IH1cclxuICAgIC5nYWxsZXJ5IC5hbmltYXRpb24ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyBcclxufVxyXG4uYnRuLXRvb2xiYXJ7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIFxyXG59XHJcblxyXG4uYnRuLmZpbHRlcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAgMC43cyBlYXNlLWluO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJ0bi5maWx0ZXI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDExMCwgMTEwKTtcclxuICAgIGNvbG9yOiBsaWdodGN5YW47XHJcbiAgICBcclxuXHJcbn1cclxuLnBpY3Mge1xyXG4gXHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAgICAgICAgIC8qIGNsaXAgdGhlIGV4Y2VzcyB3aGVuIGNoaWxkIGdldHMgYmlnZ2VyIHRoYW4gcGFyZW50ICovXHJcbiAgfVxyXG4gIGltZ3tcclxuICBcclxuICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40czsgICAvKiBzbW9vdGhlciB6b29tICovXHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuXHJcbiAgICAgICBcclxuICAgICAgIC5waWNzOmhvdmVyIGltZyB7XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgIC8vIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiBcclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuZ2FsbGVyeSB7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMTtcclxuICAgIC1tb3otY29sdW1uLWNvdW50OiAxO1xyXG4gICAgY29sdW1uLWNvdW50OiAxO1xyXG4gICAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IDEwMCU7XHJcbiAgICAtbW96LWNvbHVtbi13aWR0aDogMTAwJTtcclxuICAgIGNvbHVtbi13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuYnRuLmZpbHRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuMXJlbTtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbi5zZWMge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDEwdmg7XG59XG5cbi5nYWxsZXJ5IHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDM7XG4gIC1tb3otY29sdW1uLWNvdW50OiAzO1xuICBjb2x1bW4tY291bnQ6IDM7XG4gIC13ZWJraXQtY29sdW1uLXdpZHRoOiAzMyU7XG4gIC1tb3otY29sdW1uLXdpZHRoOiAzMyU7XG4gIGNvbHVtbi13aWR0aDogMzMlO1xufVxuXG4uZ2FsbGVyeSAucGljcyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDM1MG1zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlO1xufVxuXG4uZ2FsbGVyeSAuYW5pbWF0aW9uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmJ0bi10b29sYmFyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuLmZpbHRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluO1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5idG4uZmlsdGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmU2ZTtcbiAgY29sb3I6IGxpZ2h0Y3lhbjtcbn1cblxuLnBpY3Mge1xuICBtYXJnaW46IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIGNsaXAgdGhlIGV4Y2VzcyB3aGVuIGNoaWxkIGdldHMgYmlnZ2VyIHRoYW4gcGFyZW50ICovXG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5waWNzOmhvdmVyIGltZyB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmdhbGxlcnkge1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAxO1xuICAgIC1tb3otY29sdW1uLWNvdW50OiAxO1xuICAgIGNvbHVtbi1jb3VudDogMTtcbiAgICAtd2Via2l0LWNvbHVtbi13aWR0aDogMTAwJTtcbiAgICAtbW96LWNvbHVtbi13aWR0aDogMTAwJTtcbiAgICBjb2x1bW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuYnRuLmZpbHRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS4xcmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-foto',
          templateUrl: './foto.component.html',
          styleUrls: ['./foto.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 10,
      vars: 0,
      consts: [[1, "overlay"], [1, "dive"], ["src", "/assets/logo/website_logo_transparent_background.png", "alt", "", 1, "img-fluid", "saturate"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pepiniera locala de plante ornamentale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Avem placerea de a aduce in casele si gradinile dumneavoastra mai multe sortimente de plante ornamentale. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Navigand pe site-ul nostru veti putea gasi diverse soiuri de plante ornamentale atat pentru gradina dumneavoastra, cat si pentru interior - terase inchise.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);\n@import url(https://fonts.googleapis.com/css?family=Teko:700);\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.saturate[_ngcontent-%COMP%] {\n  filter: saturate(3);\n  -webkit-filter: saturate(3);\n}\n.grayscale[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n  -webkit-filter: grayscale(100%);\n}\n.contrast[_ngcontent-%COMP%] {\n  filter: contrast(160%);\n  -webkit-filter: contrast(160%);\n}\n.brightness[_ngcontent-%COMP%] {\n  filter: brightness(0.25);\n  -webkit-filter: brightness(0.25);\n}\n.blur[_ngcontent-%COMP%] {\n  filter: blur(3px);\n  -webkit-filter: blur(3px);\n}\n.invert[_ngcontent-%COMP%] {\n  filter: invert(100%);\n  -webkit-filter: invert(100%);\n}\n.sepia[_ngcontent-%COMP%] {\n  filter: sepia(100%);\n  -webkit-filter: sepia(100%);\n}\n.huerotate[_ngcontent-%COMP%] {\n  filter: hue-rotate(180deg);\n  -webkit-filter: hue-rotate(180deg);\n}\n.rss.opacity[_ngcontent-%COMP%] {\n  filter: opacity(50%);\n  -webkit-filter: opacity(50%);\n}\nheader[_ngcontent-%COMP%] {\n  background: url(\"/assets/pics/5.jpg\");\n  text-align: center;\n  width: 100%;\n  height: auto;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0 0 85% 85%/30%;\n}\n.img-fluid[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 300px;\n}\n.dive[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.267);\n  width: 100%;\n  height: auto;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0 0 85% 85%/30%;\n}\nheader[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  color: #FFF;\n  text-shadow: 2px 2px 2px #333;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Handlee\", cursive, \"Dancing Script\", cursive;\n  font-size: 30px;\n  margin-bottom: 20px;\n}\nh3[_ngcontent-%COMP%] {\n  font-family: \"Handlee\", cursive, \"Open Sans\", sans-serif;\n  margin: 0 10px 40px 10px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxTcGVyYW50YVxcRGVza3RvcFxcTmV3IGZvbGRlclxcTmV3IGZvbGRlclxcU3BlcmFcXHR1amEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0VBQUE7QUFDQSw2REFBQTtBQUNBLGlLQUFBO0FBQ0EsbUpBQUE7QUFPUjtFQUFFLFVBQUE7RUFBWSxTQUFBO0VBQVcsc0JBQUE7QUNGekI7QURJQTtFQUFZLG1CQUFBO0VBQ1osMkJBQUE7QUNBQTtBRENBO0VBQWEsdUJBQUE7RUFDVCwrQkFBQTtBQ0dKO0FERkE7RUFBWSxzQkFBQTtFQUNSLDhCQUFBO0FDTUo7QURKQTtFQUFjLHdCQUFBO0VBQXlCLGdDQUFBO0FDU3ZDO0FEUkE7RUFBUSxpQkFBQTtFQUFtQix5QkFBQTtBQ2EzQjtBRFpBO0VBQVUsb0JBQUE7RUFBc0IsNEJBQUE7QUNpQmhDO0FEaEJBO0VBQVMsbUJBQUE7RUFBcUIsMkJBQUE7QUNxQjlCO0FEcEJBO0VBQWEsMEJBQUE7RUFBNEIsa0NBQUE7QUN5QnpDO0FEeEJBO0VBQWUsb0JBQUE7RUFBc0IsNEJBQUE7QUM2QnJDO0FEM0JBO0VBQ0MscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQzhCRDtBRDVCQTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7QUM4Qko7QUQzQkE7RUFDSSxzQ0FBQTtFQUNBLFdBQUE7RUFDSCxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQzhCRDtBRDVCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQytCRDtBRDFCQTtFQUNDLDBEQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDNkJEO0FEMUJBO0VBQ0Msd0RBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUM2QkQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvKTtcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuJGZvbnQxOiAnQ29va2llJywgY3Vyc2l2ZTtcclxuJGZvbnQyOiAnSGFuZGxlZScsIGN1cnNpdmU7XHJcbiRmb250MzogJ1BhcmlzaWVubmUnLCBjdXJzaXZlO1xyXG4kZm9udDQ6ICdTb2ZpYScsIGN1cnNpdmU7XHJcbiRmb250NTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XHJcblxyXG4qe3BhZGRpbmc6IDA7IG1hcmdpbjogMDsgYm94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG4uc2F0dXJhdGUgeyBmaWx0ZXI6IHNhdHVyYXRlKDMpO1xyXG4td2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMyk7IH1cclxuLmdyYXlzY2FsZSB7IGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6Z3JheXNjYWxlKDEwMCUpIH1cclxuLmNvbnRyYXN0IHsgZmlsdGVyOiBjb250cmFzdCgxNjAlKTtcclxuICAgIC13ZWJraXQtZmlsdGVyOmNvbnRyYXN0KDE2MCUpXHJcbiB9XHJcbi5icmlnaHRuZXNzIHsgZmlsdGVyOiBicmlnaHRuZXNzKDAuMjUpOy13ZWJraXQtZmlsdGVyOmJyaWdodG5lc3MoMC4yNSkgfVxyXG4uYmx1ciB7IGZpbHRlcjogYmx1cigzcHgpOyAtd2Via2l0LWZpbHRlcjpibHVyKDNweCl9XHJcbi5pbnZlcnQgeyBmaWx0ZXI6IGludmVydCgxMDAlKTsgLXdlYmtpdC1maWx0ZXI6aW52ZXJ0KDEwMCUpfVxyXG4uc2VwaWEgeyBmaWx0ZXI6IHNlcGlhKDEwMCUpOyAtd2Via2l0LWZpbHRlcjpzZXBpYSgxMDAlKX1cclxuLmh1ZXJvdGF0ZSB7IGZpbHRlcjogaHVlLXJvdGF0ZSgxODBkZWcpOyAtd2Via2l0LWZpbHRlcjpodWUtcm90YXRlKDE4MGRlZyl9XHJcbi5yc3Mub3BhY2l0eSB7IGZpbHRlcjogb3BhY2l0eSg1MCUpOyAtd2Via2l0LWZpbHRlcjpvcGFjaXR5KDUwJSl9XHJcblxyXG5oZWFkZXIge1xyXG5cdGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9waWNzLzUuanBnJyk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLXJhZGl1czogMCAwIDg1JSA4NSUgLyAzMCU7XHJcbn1cclxuLmltZy1mbHVpZHtcclxuICAgIFxyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG5cclxufVxyXG4uZGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNjcpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItcmFkaXVzOiAwIDAgODUlIDg1JSAvIDMwJTtcclxufVxyXG5oZWFkZXIgLm92ZXJsYXl7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0Y29sb3I6ICNGRkY7XHJcblx0dGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMzMzM7XHJcbiAgICBcclxuXHRcclxufVxyXG5cclxuaDEge1xyXG5cdGZvbnQtZmFtaWx5OiAkZm9udDIsJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaDN7XHJcblx0Zm9udC1mYW1pbHk6ICRmb250MiwnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHRtYXJnaW46IDAgMTBweCA0MHB4IDEwcHg7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8pO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29va2llJmZhbWlseT1IYW5kbGVlJmZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1Tb2ZpYSZmYW1pbHk9VGFuZ2VyaW5lOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zYXR1cmF0ZSB7XG4gIGZpbHRlcjogc2F0dXJhdGUoMyk7XG4gIC13ZWJraXQtZmlsdGVyOiBzYXR1cmF0ZSgzKTtcbn1cblxuLmdyYXlzY2FsZSB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4uY29udHJhc3Qge1xuICBmaWx0ZXI6IGNvbnRyYXN0KDE2MCUpO1xuICAtd2Via2l0LWZpbHRlcjogY29udHJhc3QoMTYwJSk7XG59XG5cbi5icmlnaHRuZXNzIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMjUpO1xuICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygwLjI1KTtcbn1cblxuLmJsdXIge1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLmludmVydCB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xufVxuXG4uc2VwaWEge1xuICBmaWx0ZXI6IHNlcGlhKDEwMCUpO1xuICAtd2Via2l0LWZpbHRlcjogc2VwaWEoMTAwJSk7XG59XG5cbi5odWVyb3RhdGUge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTgwZGVnKTtcbiAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoMTgwZGVnKTtcbn1cblxuLnJzcy5vcGFjaXR5IHtcbiAgZmlsdGVyOiBvcGFjaXR5KDUwJSk7XG4gIC13ZWJraXQtZmlsdGVyOiBvcGFjaXR5KDUwJSk7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvcGljcy81LmpwZ1wiKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4NSUgODUlLzMwJTtcbn1cblxuLmltZy1mbHVpZCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG4uZGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNjcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4NSUgODUlLzMwJTtcbn1cblxuaGVhZGVyIC5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMzMzO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhhbmRsZWVcIiwgY3Vyc2l2ZSwgXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmgzIHtcbiAgZm9udC1mYW1pbHk6IFwiSGFuZGxlZVwiLCBjdXJzaXZlLCBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMTBweCA0MHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ienupar/ienupar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/ienupar/ienupar.component.ts ***!
    \*********************************************************/

  /*! exports provided: IenuparComponent */

  /***/
  function srcAppComponentsIenuparIenuparComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IenuparComponent", function () {
      return IenuparComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IenuparComponent = /*#__PURE__*/function () {
      function IenuparComponent() {
        _classCallCheck(this, IenuparComponent);
      }

      _createClass(IenuparComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IenuparComponent;
    }();

    IenuparComponent.ɵfac = function IenuparComponent_Factory(t) {
      return new (t || IenuparComponent)();
    };

    IenuparComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IenuparComponent,
      selectors: [["app-ienupar"]],
      decls: 251,
      vars: 0,
      consts: [[1, "titleS"], [1, "sec"], [1, "row"], [1, "col-sm-6", "col-xs-6"], [1, "wrapper"], [1, "container"], [1, "top"], ["src", "/assets/pics/ienupar/blue-arrow.jpg", "alt", "blue-arrow", 1, "img-fluid"], [1, "bottom"], [1, "left"], [1, "details"], [1, "inside"], [1, "icon"], [1, "material-icons"], [1, "contents"], [1, "text-center", "titletabel"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], ["src", "/assets/pics/ienupar/spartan.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/ienupar/princeofwalles1.jpg", "alt", "princeofwalles1", 1, "img-fluid"], ["src", "/assets/pics/ienupar/pingii-loderi.jpg", "alt", "tuja", 1, "img-fluid"]],
      template: function IenuparComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ienupari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blue Arrow este un ienupar suplu si zvelt, cu crestere verticala si coroana ingusta, cu ramurile lungi, indreptate in sus. Culoarea acelor oscileaza de la albastru-verzui la albastru-argintiu. Crestere rapida si isi pastreaza forma chiar si fara taiere. Emana un miros placut, in special la atingere. Ienuparii tolereaza orice sol, cu exceptia celor unde balteste apa. Se dezvolta cel mai bine in locuri insorite sau usor umbrite. Odata stabilit, tolereaza seceta pe termen lung si vanturile puternice. Tunderea nu este necesara, dar se poate face primavara inainte de incoltire sau spre sfarsitul verii. Complet rezistent pana la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "150-170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "500-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Spartan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Crestere rapida si isi pastreaza forma chiar si fara tundere.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Ienuperii tolereaza orice sol, cu excep\u021Bia celor unde balteste apa. Se dezvolta cel mai bine \xEEn locuri insorite sau usor umbrite. Odata stabilit, tolereaza seceta pe termen lung si vanturile puternice. Tunderea nu este necesar\u0103 dar se poate face primavara inainte de a intra in vegetatie sau spre sfarsitul verii. Complet rezistent pana la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Spartan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "150-170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "500-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Prince of Walles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Imprastiat ca un covor de frunzis luxuriant, verde stralucitor, in forma de stea. In toamna si iarna isi schimba culoarea in nuanta prunei.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Daunatorii ocazionali de insecte includ afide, viermi. Aveti grija la acarienii paianjen. Frunzele plantelor mature vor muri uneori in centru.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Prince of Walles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "D 60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Intindere 100-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Pingii-loderi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Acest soi de ienupar se poate planta si pastra si in ghivece fiind ideal pentru gradinile mici unde spatiul este limitat deoarece formeaza un decor pe masura. Poate fi plantat si in parcuri si spatii verzi publice. Arata uimitor mai ales in aranjamentele de stancarii si in gradinile alpine.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Frunzisul ienuparului Pingii Loderi este intr-o nuanta argintie-verzuie. Rezista foarte bine la orice conditii de mediu si poate fi plantat si in soluri nisipoase cu umiditate medie sau uscate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Poate atinge timp de zece ani inaltimea maxima de 150 cm dar inaltimea medie este cuprinsa intre 20-30 de centimetri. Indrageste locurile cu soare din abundenta, in care isi pastreaza o culoare verzuie vie si vibranta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Pingii-loderi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "30-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "hr");
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:700\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.titleS[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  min-height: 20vh;\n  background-color: teal;\n  font-size: 40px;\n  align-content: space-between;\n  text-align: center;\n}\n.titleS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 50px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  color: red;\n}\n.titletabel[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\";\n  text-align: center;\n  color: red;\n  font-size: 35px;\n  padding: 15px 25px 15px 25px;\n}\nimg[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  height: 400px;\n  width: 95%;\n}\ntable[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  width: 95%;\n  color: white;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  background-color: teal;\n}\n.col[_ngcontent-%COMP%] {\n  padding-top: 150px;\n}\nhr[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(14, 110, 110, 0.5);\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  background-size: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom.clicked[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 20px;\n  float: right;\n  width: calc(70% - 40px);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 80%;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .contents[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pZW51cGFyL0M6XFxVc2Vyc1xcU3BlcmFudGFcXERlc2t0b3BcXE5ldyBmb2xkZXJcXE5ldyBmb2xkZXJcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpZW51cGFyXFxpZW51cGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2llbnVwYXIvaWVudXBhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQUNBLDRGQUFBO0FBQ0EsNkdBQUE7QUFDQSxpSUFBQTtBQUNBLGlLQUFBO0FBR0Esc0VBQUE7QUFDQSwrREFBQTtBQUNBLGlLQUFBO0FBQ0EsbUpBQUE7QUFPUjtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDUEo7QURVQTtFQUNJLDRFQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDUko7QURVSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEZBQUE7RUFDQSxVQUFBO0FDUlI7QURhQTtFQUNJLGdFQUFBO0VBQ0Msa0JBQUE7RUFDRCxVQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDVko7QURrQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDZko7QURpQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDZEo7QURnQkE7RUFFRSxnQkFBQTtFQUNBLHNCQUFBO0FDZEY7QURnQkE7RUFDSSxrQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksV0FBQTtBQ2JKO0FEb0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBQ2pCSjtBRGtCSTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUNoQk47QURtQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2pCTjtBRGtCTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBSUoscUJBQUE7QUNoQko7QURtQk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDakJSO0FEa0JRO0VBQ0UsMkJBQUE7QUNoQlY7QURrQlE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQTVHSjtBQzJGUjtBRHNCUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDcEJWO0FEcUJVO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ25CWjtBRDBCSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQ3hCTjtBRHlCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3ZCUjtBRDBCTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN4QlI7QUR5QlE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUN2QlY7QUR5QlE7RUFFRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ3hCVjtBRDJCTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0FDekJSO0FEMkJRO0VBQ0UsWUFBQTtFQUNBLCtCQWpMRjtBQ3dKUjtBRDJCUTtFQUVFLGVBQUE7RUFDQSxZQUFBO0FDMUJWO0FENEJRO0VBQ0ksZUFBQTtFQUNDLFlBQUE7QUMxQmIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2llbnVwYXIvaWVudXBhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuJGZvbnQxOiAnQ29va2llJywgY3Vyc2l2ZTtcclxuJGZvbnQyOiAnSGFuZGxlZScsIGN1cnNpdmU7XHJcbiRmb250MzogJ1BhcmlzaWVubmUnLCBjdXJzaXZlO1xyXG4kZm9udDQ6ICdTb2ZpYScsIGN1cnNpdmU7XHJcbiRmb250NTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG59XHJcbi50aXRsZVN7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0RhbmNpbmcgU2NyaXB0JywnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGV0YWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnRGFuY2luZyBTY3JpcHQnLCdKb3NlZmluIFNhbnMnO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbn1cclxuLy8gLnRpdGxlMntcclxuLy8gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgcGFkZGluZzogMTVweCAyNXB4IDE1cHggMjVweDtcclxuLy8gfVxyXG5pbWd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG50YWJsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNlY3tcclxuXHJcbiAgbWluLWhlaWdodDogNjB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG59XHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4vLyBjb2QyXHJcblxyXG4gIFxyXG4gIC53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDIwcHggMzBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAudG9we1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvdHRvbXtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAmLmNsaWNrZWR7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxLGg1LHB7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250MjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0E2Q0RERTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwMCU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNzAlIC0gNDBweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmluc2lkZXtcclxuICAgICAgei1pbmRleDo5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwwLjUpO1xyXG4gICAgICB3aWR0aDoxNDBweDtcclxuICAgICAgaGVpZ2h0OjE0MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTcwcHg7XHJcbiAgICAgIHJpZ2h0OiAtNzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMDBweCAyMDBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMsIGJvcmRlci1yYWRpdXMgMnMsIHRvcCAxcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmljb257XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6ODVweDtcclxuICAgICAgICB0b3A6ODVweDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICByaWdodDowO1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgaGVpZ2h0OjgwJTtcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICByaWdodDoxNXB4O1xyXG4gICAgICAgICAgdG9wOjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50c3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnRze1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC44cztcclxuICAgICAgICBcclxuICAgICAgICBoMSxoNSAscHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjJweDtcclxuICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGl0bGVTIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGVTIGgxIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50aXRsZXRhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XG59XG5cbmltZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDk1JTtcbn1cblxudGFibGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYyB7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNCwgMTEwLCAxMTAsIDAuNSk7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBib3gtc2hhZG93OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xufVxuLndyYXBwZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBib3gtc2hhZG93OiA1cHggMjBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAudG9wIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIHtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbS5jbGlja2VkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIGgxLCAud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gaDUsIC53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSBwIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkhhbmRsZWVcIiwgY3Vyc2l2ZTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSAucmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjQTZDRERFO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAyMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIC5yaWdodCAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gNDBweCk7XG59XG4ud3JhcHBlciAuaW5zaWRlIHtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNzBweDtcbiAgcmlnaHQ6IC03MHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwMHB4IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cywgYm9yZGVyLXJhZGl1cyAycywgdG9wIDFzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXBwZXIgLmluc2lkZSAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDg1cHg7XG4gIHRvcDogODVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuLndyYXBwZXIgLmluc2lkZTpob3ZlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiA4MCU7XG59XG4ud3JhcHBlciAuaW5zaWRlOmhvdmVyIC5pY29uIHtcbiAgb3BhY2l0eTogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbn1cbi53cmFwcGVyIC5pbnNpZGU6aG92ZXIgLmNvbnRlbnRzIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMge1xuICBwYWRkaW5nOiA1JTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIHRyYW5zZm9ybSAwLjhzO1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgaDEsIC53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIGg1LCAud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmU7XG59XG4ud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBoNSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IenuparComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ienupar',
          templateUrl: './ienupar.component.html',
          styleUrls: ['./ienupar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // var $cont = document.querySelector('.cont');
          // var $elsArr = [].slice.call(document.querySelectorAll('.el'));
          // var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
          // setTimeout(function () {
          //   $cont.classList.remove('s--inactive');
          // }, 200);
          // $elsArr.forEach(function ($el) {
          //   $el.addEventListener('click', function () {
          //     if (this.classList.contains('s--active')) return;
          //     $cont.classList.add('s--el-active');
          //     this.classList.add('s--active');
          //   });
          // });
          // $closeBtnsArr.forEach(function ($btn) {
          //   $btn.addEventListener('click', function (e) {
          //     e.stopPropagation();
          //     $cont.classList.remove('s--el-active');
          //     document.querySelector('.el.s--active').classList.remove('s--active');
          //   });
          // });

          /* Demo purposes only */
          $(".hover").mouseleave(function () {
            $(this).removeClass("hover");
          });
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 68,
      vars: 0,
      consts: [[1, "sec"], [1, "text-center"], [1, "sec1"], [1, "row", "rand1"], [1, "col-xl-4", "col-sm-12", "col-md-6", "col-xs-12", "d-flex", "justify-content-center"], ["id", "cat1", 1, "snip1543"], ["routerLink", "/tuja", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat2", 1, "snip1543"], ["routerLink", "/brazi", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat3", 1, "snip1543"], ["routerLink", "/ienupari", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat4", 1, "snip1543"], ["routerLink", "/flori", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat5", 1, "snip1543"], ["routerLink", "/diverse", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat6", 1, "snip1543"], ["download", "CATALOG", "href", "assets/catalog/CATALOG.docx", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pepiniera s-a dezvoltat repede, oferind specii si soiuri noi, datorita multor cumparatori multumiti. Reproducerea in cantitate mare, face posibil ca la unele plante sa putem oferi preturi avantajoase. La sediul nostru din ARAD, cartier Gradiste, va oferim in cantitati mai mici, specii care nu sunt trecute in catalog, pe site.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Plantele ce lipsesc vi-i le procuram la pret convenabil pentru dumneavoastra.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Preturile afisate sunt cu titlu informativ, ele putand varia in functie de marimea,specia si cantitatea plantelor achizitionate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Daca catalogul nostru v-a atras atentia, va rugam sa faceti o vizita la noi si speram sa va putem oferi solutia cea mai rezonabila.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Va multumim pentru increderea acordata si asteptam comenzile dumneavoastra.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figure", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tuja si Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Plante conifere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figure", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Plante conifere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ienupari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Plante conifere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "figure", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Plante decorative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "figure", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Plante Diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Plante decorative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "figure", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Descarca Ultimul Catalog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Descarca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);\n@import url(https://fonts.googleapis.com/css?family=Teko:700);\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 30vh;\n  border: 1px solid #0e6e6e;\n  background-color: rgba(14, 110, 110, 0.5);\n  border-radius: 3px;\n  padding: 10px 15px 30px 15px;\n  margin: 20px 15px 20px 0px;\n  background-color: #0e6e6e;\n  color: white;\n  font-family: \"Handlee\", cursive, \"Josefin Sans\";\n  width: 100%;\n  height: auto;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0 0 85% 85%/30%;\n}\n.sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Handlee\", cursive, \"Tangerine\", \"Dancing Script\", \"Josefin Sans\", cursive;\n  font-size: 25px;\n  margin-bottom: 30px;\n  text-align: justify;\n}\n.rand1[_ngcontent-%COMP%] {\n  margin-bottom: 6vh;\n  width: 100%;\n}\n.sec1[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 50vh;\n  background-color: teal;\n  margin-bottom: 6vh;\n  padding: 10px 15px;\n  margin: 20px 15px 20px 0px;\n  width: 100%;\n}\n.snip1543[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #ffffff;\n  font-family: \"Josefin Sans\", \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  overflow: hidden;\n  position: relative;\n  text-align: left;\n  transform: translateZ(0);\n}\n#cat1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/tuja/TuiaSmaragd.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/brazi/abiesAlba.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/ienupar/spartan.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat4[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/flori/susan.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat5[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/plante diverse/salcie.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat6[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/logo/website_logo_solid_background.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  transition: all 0.45s ease;\n}\n.snip1543[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\";\n  background-color: #008080;\n  opacity: 0.5;\n  transition: all 0.45s ease;\n}\n.snip1543[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-80%);\n}\n.snip1543[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-70%);\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n  bottom: 0;\n  padding: 25px 40% 25px 20px;\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: teal;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);\n  content: \"\";\n  opacity: 0.5;\n  z-index: -1;\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-100%);\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-90%);\n}\n.snip1543[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0;\n  letter-spacing: 1px;\n}\n.snip1543[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 1em;\n  text-transform: uppercase;\n  font-family: \"Handlee\", cursive, \"Leckerli One\", \"Teko\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.snip1543[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Josefin Sans\";\n  font-size: 1em;\n}\n.snip1543[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 1.5em;\n  color: white;\n  font-family: \"Handlee\", cursive, \"Josefin Sans\";\n  bottom: 0;\n  color: white;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.snip1543[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .snip1543.hover[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .snip1543.hover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 0.9;\n  transition-delay: 0.2s;\n}\n.snip1543[_ngcontent-%COMP%]:hover:before, .snip1543.hover[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-20%);\n  transition-delay: 0.05s;\n}\n.snip1543[_ngcontent-%COMP%]:hover:after, .snip1543.hover[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-10%);\n}\n.snip1543[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]:before, .snip1543.hover[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-40%);\n  transition-delay: 0.15s;\n}\n.snip1543[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]:after, .snip1543.hover[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-30%);\n  transition-delay: 0.1s;\n}\n@media (max-width: 149.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 100px;\n    min-height: 149.98px;\n    max-height: 149.98px;\n    height: 149.98px;\n  }\n}\n@media (min-width: 150px) and (max-width: 276px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 200px;\n    min-height: 300px;\n    max-height: 300px;\n    height: 300px;\n  }\n}\n@media (min-width: 276px) and (max-width: 375.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n    min-height: 300px;\n    max-height: 300px;\n    height: 300px;\n  }\n}\n@media (min-width: 376px) and (max-width: 575.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 200px;\n    min-height: 300px;\n    max-height: 300px;\n    height: 300px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 100%;\n    min-height: 290px;\n    max-height: 290px;\n    height: 190px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 200px;\n    max-width: 200px;\n    min-width: 100px;\n    min-height: 200px;\n    max-height: 200px;\n    height: 200px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 315px;\n    max-width: 315px;\n    min-width: 215px;\n    min-height: 315px;\n    max-height: 315px;\n    height: 315px;\n  }\n}\n@media (min-width: 1200px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 315px;\n    max-width: 315px;\n    min-width: 215px;\n    min-height: 315px;\n    max-height: 315px;\n    height: 315px;\n    padding-left: 0;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcU3BlcmFudGFcXERlc2t0b3BcXE5ldyBmb2xkZXJcXE5ldyBmb2xkZXJcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNUSxvRUFBQTtBQUNBLDZEQUFBO0FBQ0EsaUtBQUE7QUFDQSxtSkFBQTtBQVFSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ1pGO0FEZUE7RUFDRSxnQkFBQTtBQ1pGO0FEY0E7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Qsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQyw4QkFBQTtBQ1hGO0FEZUE7RUFDQyx1RkFBQTtFQUNBLGVBQUE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0FDYkY7QURpQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNkRjtBRG1CQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ2hCRjtBRHNCQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDBEQUFBO0VBQ0EsZUFBQTtFQUdBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQVFBLHdCQUFBO0FDM0JGO0FEOEJBO0VBQ0UsMERBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUMzQkY7QURnQ0E7RUFDRSx5REFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQzdCRjtBRG1DQTtFQUNFLHlEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDaENGO0FEcUNBO0VBQ0UscURBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNsQ0Y7QURzQ0E7RUFDRSwrREFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ25DRjtBRHVDQTtFQUNFLHVFQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDcENGO0FEdUNBOzs7RUFJRSxzQkFBQTtFQUVBLDBCQUFBO0FDcENGO0FEb0RBOztFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFFQSwwQkFBQTtBQ2pERjtBRG9EQTtFQUVFLHVDQUFBO0FDakRGO0FEb0RBO0VBRUUsd0NBQUE7QUNqREY7QURvREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDakRGO0FEb0RBOztFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNqREY7QURvREE7RUFFRSx3Q0FBQTtBQ2pERjtBRG9EQTtFQUVFLHdDQUFBO0FDakRGO0FEb0RBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNqREY7QURvREE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUdBQUE7QUNsREY7QURxREE7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDbERGO0FEcURBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDbERGO0FEd0RBOzs7O0VBS0Usd0JBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7QUNyREY7QUR3REE7O0VBR0UsdUNBQUE7RUFFQSx1QkFBQTtBQ3JERjtBRHdEQTs7RUFHRSx3Q0FBQTtBQ3JERjtBRHdEQTs7RUFHRSx1Q0FBQTtFQUVBLHVCQUFBO0FDckRGO0FEd0RBOztFQUdFLHdDQUFBO0VBRUEsc0JBQUE7QUNyREY7QUR3REE7RUFFRTtJQUVFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7RUN2REY7QUFDRjtBRDREQTtFQUVFO0lBRUUsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDNURGO0FBQ0Y7QUQ2REE7RUFFRTtJQUVFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUM3REY7QUFDRjtBRGlFQTtFQUVFO0lBRUUsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDakVGO0FBQ0Y7QUR1RUE7RUFFRTtJQUVFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDdkVGO0FBQ0Y7QUQrRUM7RUFDQztJQUVFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUM5RUY7QUFDRjtBRG9GQztFQUNDO0lBRUUsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQ25GRjtBQUNGO0FEd0ZDO0VBRUM7SUFFRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUN4RkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBDb2QgMiBcclxuXHJcblxyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Bybyk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UZWtvOjcwMCk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRmb250MTogJ0Nvb2tpZScsIGN1cnNpdmU7XHJcbiRmb250MjogJ0hhbmRsZWUnLCBjdXJzaXZlO1xyXG4kZm9udDM6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcclxuJGZvbnQ0OiAnU29maWEnLCBjdXJzaXZlO1xyXG4kZm9udDU6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG5cclxuXHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHJ7XHJcbiAgbWFyZ2luLXRvcDoxMHB4XHJcbn1cclxuLnNlY3tcclxuICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNCwgMTEwLCAxMTApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOjEwcHggMTVweCAzMHB4IDE1cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDE1cHggMjBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDIsJ0pvc2VmaW4gU2Fucyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgODUlIDg1JSAvIDMwJTtcclxuIFxyXG5cclxuIFxyXG5wIHtcclxuXHRmb250LWZhbWlseTokZm9udDIsJ1RhbmdlcmluZScgLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIGN1cnNpdmU7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG59XHJcblxyXG4ucmFuZDF7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5zZWMxe1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dGVhbDtcclxuICBtYXJnaW4tYm90dG9tOiA2dmg7XHJcbiAgcGFkZGluZzoxMHB4IDE1cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDE1cHggMjBweCAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5zbmlwMTU0MyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LWZhbWlseTonSm9zZWZpbiBTYW5zJyAsJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC8vIG1hcmdpbjogMTBweDtcclxuIFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLy8gd2lkdGg6IDMxNXB4O1xyXG4gIC8vIG1heC13aWR0aDogMzE1cHg7XHJcbiAgLy8gbWluLXdpZHRoOiAyMTVweDtcclxuICAvLyBtaW4taGVpZ2h0OiAzMTVweDtcclxuICAvLyBtYXgtaGVpZ2h0OiAzMTVweDtcclxuICAvLyBoZWlnaHQ6IDMxNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxufVxyXG4vLyB0dWlhXHJcbiNjYXQxe1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy90dWphL1R1aWFTbWFyYWdkLmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBcclxufVxyXG5cclxuLy8gYnJhemlcclxuI2NhdDJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzL2JyYXppL2FiaWVzQWxiYS5qcGdcIik7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiBcclxuICBcclxufVxyXG5cclxuLy8gaWVudXBhclxyXG4jY2F0M3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvaWVudXBhci9zcGFydGFuLmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuXHJcbi8vIGZsb3JpXHJcbiNjYXQ0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy9mbG9yaS9zdXNhbi5qcGdcIik7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8vIGRpdmVyc2VcclxuI2NhdDV7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzL3BsYW50ZSBkaXZlcnNlL3NhbGNpZS5qcGdcIik7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8vIGNvbnRhY3QgIFxyXG4jY2F0NntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2xvZ28vd2Vic2l0ZV9sb2dvX3NvbGlkX2JhY2tncm91bmQucG5nXCIpOyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc25pcDE1NDMgKixcclxuLnNuaXAxNTQzICo6YmVmb3JlLFxyXG4uc25pcDE1NDMgKjphZnRlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcclxuXHJcbn1cclxuXHJcbi8vIC5zbmlwMTU0MyBpbWcge1xyXG4vLyAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuLy8gICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vICAgbWluLXdpZHRoOiAxMDAlOyBcclxuLy8gICBib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xyXG4gIFxyXG4gIFxyXG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgXHJcbiAgXHJcbi8vIH1cclxuXHJcbi5zbmlwMTU0MzpiZWZvcmUsXHJcbi5zbmlwMTU0MzphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDgwO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xyXG59XHJcblxyXG4uc25pcDE1NDM6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtODAlKTtcclxuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTgwJSk7XHJcbn1cclxuXHJcbi5zbmlwMTU0MzphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC03MCUpO1xyXG4gIHRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTcwJSk7XHJcbn1cclxuXHJcbi5zbmlwMTU0MyBmaWdjYXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogMjVweCA0MCUgMjVweCAyMHB4O1xyXG59XHJcblxyXG4uc25pcDE1NDMgZmlnY2FwdGlvbjpiZWZvcmUsXHJcbi5zbmlwMTU0MyBmaWdjYXB0aW9uOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDEyOCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtOTAlKTtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC05MCUpO1xyXG59XHJcblxyXG4uc25pcDE1NDMgaDMsXHJcbi5zbmlwMTU0MyBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uc25pcDE1NDMgaDMge1xyXG4gIFxyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJGZvbnQyICwnTGVja2VybGkgT25lJywgJ1Rla28nLGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNuaXAxNTQzIHAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5zbmlwMTU0MyBhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6JGZvbnQyLCAnSm9zZWZpbiBTYW5zJztcclxuICBib3R0b206IDA7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgXHJcblxyXG59XHJcblxyXG5cclxuLnNuaXAxNTQzOmhvdmVyIGgzLFxyXG4uc25pcDE1NDMuaG92ZXIgaDMsXHJcbi5zbmlwMTU0Mzpob3ZlciBwLFxyXG4uc25pcDE1NDMuaG92ZXIgcCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxufVxyXG5cclxuLnNuaXAxNTQzOmhvdmVyOmJlZm9yZSxcclxuLnNuaXAxNTQzLmhvdmVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTIwJSk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC0yMCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XHJcbn1cclxuXHJcbi5zbmlwMTU0Mzpob3ZlcjphZnRlcixcclxuLnNuaXAxNTQzLmhvdmVyOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTEwJSk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtMTAlKTtcclxufVxyXG5cclxuLnNuaXAxNTQzOmhvdmVyIGZpZ2NhcHRpb246YmVmb3JlLFxyXG4uc25pcDE1NDMuaG92ZXIgZmlnY2FwdGlvbjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC00MCUpO1xyXG4gIHRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtNDAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xyXG59XHJcblxyXG4uc25pcDE1NDM6aG92ZXIgZmlnY2FwdGlvbjphZnRlcixcclxuLnNuaXAxNTQzLmhvdmVyIGZpZ2NhcHRpb246YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtMzAlKTtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0zMCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ5Ljk4cHgpIHsgXHJcbiAgICBcclxuICAuc25pcDE1NDN7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTQ5Ljk4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNDkuOThweDtcclxuICAgIGhlaWdodDogMTQ5Ljk4cHg7XHJcbiAgfSBcclxuICBcclxuICAgXHJcblxyXG4gfVxyXG5AbWVkaWEgIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogIDI3NnB4KSB7IFxyXG4gICAgXHJcbiAgLnNuaXAxNTQze1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH0gfVxyXG5AbWVkaWEgIChtaW4td2lkdGg6IDI3NnB4KSBhbmQgKG1heC13aWR0aDogMzc1Ljk4cHgpIHsgXHJcbiAgICBcclxuICAuc25pcDE1NDN7XHJcblxyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOztcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH0gXHJcbiAgIFxyXG5cclxuIH1cclxuQG1lZGlhICAobWluLXdpZHRoOiAzNzZweCkgYW5kIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gICAgXHJcbiAgLnNuaXAxNTQze1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH0gXHJcbiAgIFxyXG5cclxuIH1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkgeyAgXHJcbiAgXHJcbiAgLnNuaXAxNTQze1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjkwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyOTBweDtcclxuICAgIGhlaWdodDogMTkwcHg7XHJcbiAgfSBcclxuXHJcblxyXG4gfVxyXG4gXHJcblxyXG4gXHJcbiAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKVxyXG4gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgIFxyXG4gIC5zbmlwMTU0M3tcclxuXHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH0gXHJcblxyXG4gXHJcbiB9XHJcbiBcclxuIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHsgIFxyXG4gIC5zbmlwMTU0M3tcclxuXHJcbiAgICB3aWR0aDogMzE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDMxNXB4O1xyXG4gICAgbWluLXdpZHRoOiAyMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMxNXB4O1xyXG4gICAgbWF4LWhlaWdodDogMzE1cHg7XHJcbiAgICBoZWlnaHQ6IDMxNXB4O1xyXG4gIH1cclxuXHJcbiB9XHJcbiBcclxuIC8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxyXG4gQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAgXHJcblxyXG4gIC5zbmlwMTU0M3tcclxuXHJcbiAgICB3aWR0aDogMzE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDMxNXB4O1xyXG4gICAgbWluLXdpZHRoOiAyMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMxNXB4O1xyXG4gICAgbWF4LWhlaWdodDogMzE1cHg7XHJcbiAgICBoZWlnaHQ6IDMxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAiLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UZWtvOjcwMCk7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zZWMge1xuICBtaW4taGVpZ2h0OiAzMHZoO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU2ZTZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMzBweCAxNXB4O1xuICBtYXJnaW46IDIwcHggMTVweCAyMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmU2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmUsIFwiSm9zZWZpbiBTYW5zXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDg1JSA4NSUvMzAlO1xufVxuLnNlYyBwIHtcbiAgZm9udC1mYW1pbHk6IFwiSGFuZGxlZVwiLCBjdXJzaXZlLCBcIlRhbmdlcmluZVwiLCBcIkRhbmNpbmcgU2NyaXB0XCIsIFwiSm9zZWZpbiBTYW5zXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnJhbmQxIHtcbiAgbWFyZ2luLWJvdHRvbTogNnZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYzEge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gIG1hcmdpbi1ib3R0b206IDZ2aDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW46IDIwcHggMTVweCAyMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbmlwMTU0MyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbiNjYXQxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzL3R1amEvVHVpYVNtYXJhZ2QuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNjYXQyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzL2JyYXppL2FiaWVzQWxiYS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvaWVudXBhci9zcGFydGFuLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jY2F0NCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy9mbG9yaS9zdXNhbi5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvcGxhbnRlIGRpdmVyc2Uvc2FsY2llLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jY2F0NiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbG9nby93ZWJzaXRlX2xvZ29fc29saWRfYmFja2dyb3VuZC5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNuaXAxNTQzICosXG4uc25pcDE1NDMgKjpiZWZvcmUsXG4uc25pcDE1NDMgKjphZnRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2U7XG59XG5cbi5zbmlwMTU0MzpiZWZvcmUsXG4uc25pcDE1NDM6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODA4MDtcbiAgb3BhY2l0eTogMC41O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcbn1cblxuLnNuaXAxNTQzOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC04MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTgwJSk7XG59XG5cbi5zbmlwMTU0MzphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtNzAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtNzAlKTtcbn1cblxuLnNuaXAxNTQzIGZpZ2NhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDI1cHggNDAlIDI1cHggMjBweDtcbn1cblxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YmVmb3JlLFxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwLjU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc25pcDE1NDMgZmlnY2FwdGlvbjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5zbmlwMTU0MyBmaWdjYXB0aW9uOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC05MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC05MCUpO1xufVxuXG4uc25pcDE1NDMgaDMsXG4uc25pcDE1NDMgcCB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnNuaXAxNTQzIGgzIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmUsIFwiTGVja2VybGkgT25lXCIsIFwiVGVrb1wiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLnNuaXAxNTQzIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnNuaXAxNTQzIGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSGFuZGxlZVwiLCBjdXJzaXZlLCBcIkpvc2VmaW4gU2Fuc1wiO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zbmlwMTU0Mzpob3ZlciBoMyxcbi5zbmlwMTU0My5ob3ZlciBoMyxcbi5zbmlwMTU0Mzpob3ZlciBwLFxuLnNuaXAxNTQzLmhvdmVyIHAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAwLjk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLnNuaXAxNTQzOmhvdmVyOmJlZm9yZSxcbi5zbmlwMTU0My5ob3ZlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMjAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC0yMCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbn1cblxuLnNuaXAxNTQzOmhvdmVyOmFmdGVyLFxuLnNuaXAxNTQzLmhvdmVyOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0xMCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0xMCUpO1xufVxuXG4uc25pcDE1NDM6aG92ZXIgZmlnY2FwdGlvbjpiZWZvcmUsXG4uc25pcDE1NDMuaG92ZXIgZmlnY2FwdGlvbjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtNDAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC00MCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn1cblxuLnNuaXAxNTQzOmhvdmVyIGZpZ2NhcHRpb246YWZ0ZXIsXG4uc25pcDE1NDMuaG92ZXIgZmlnY2FwdGlvbjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtMzAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtMzAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ5Ljk4cHgpIHtcbiAgLnNuaXAxNTQzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxNDkuOThweDtcbiAgICBtYXgtaGVpZ2h0OiAxNDkuOThweDtcbiAgICBoZWlnaHQ6IDE0OS45OHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiAyNzZweCkge1xuICAuc25pcDE1NDMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyNzZweCkgYW5kIChtYXgtd2lkdGg6IDM3NS45OHB4KSB7XG4gIC5zbmlwMTU0MyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuc25pcDE1NDMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5zbmlwMTU0MyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyOTBweDtcbiAgICBtYXgtaGVpZ2h0OiAyOTBweDtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuc25pcDE1NDMge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5zbmlwMTU0MyB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1heC13aWR0aDogMzE1cHg7XG4gICAgbWluLXdpZHRoOiAyMTVweDtcbiAgICBtaW4taGVpZ2h0OiAzMTVweDtcbiAgICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgICBoZWlnaHQ6IDMxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zbmlwMTU0MyB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1heC13aWR0aDogMzE1cHg7XG4gICAgbWluLXdpZHRoOiAyMTVweDtcbiAgICBtaW4taGVpZ2h0OiAzMTVweDtcbiAgICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgICBoZWlnaHQ6IDMxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 43,
      vars: 0,
      consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", 2, "background-color", "rgba(14, 110, 110)"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["src", "/assets/logo/website_logo_transparent_background.png", "width", "100px", "height", "100px", "alt", ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-center"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "", 1, "nav-link"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/tuja", 1, "dropdown-item"], ["routerLink", "/brazi", 1, "dropdown-item"], ["routerLink", "/ienupar", 1, "dropdown-item"], ["routerLink", "/flori", 1, "dropdown-item"], ["routerLink", "/diverse", 1, "dropdown-item"], [1, "dropdown-divider"], ["download", "CATALOG", "href", "assets/CATALOGUL PRIMAVERII.docx", 1, "dropdown-item"], [1, "nav-item"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/foto", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], ["href", "tel:0733604176", "id", "navsuna", 1, "nav-link"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone-plus"], ["fill-rule", "evenodd", "d", "M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V.5a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M12 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0v-3z"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pepiniera Volintir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Produse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tuja si Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Descarca ultimul Catalog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Suna-ma! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n.navbar[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background-color: #0e6e6e;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: 25px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.705);\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #0e6e6e;\n  color: white;\n}\n@media (min-width: 150px) and (max-width: 276px) {\n  .navbar[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: #0e6e6e;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 25px;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.705);\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n    background-color: #0e6e6e;\n    color: white;\n  }\n}\n@media (min-width: 276px) and (max-width: 375.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: #0e6e6e;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 25px;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.705);\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n    background-color: #0e6e6e;\n    color: white;\n  }\n}\n@media (min-width: 376px) and (max-width: 575.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: #0e6e6e;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 25px;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.705);\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n    background-color: #0e6e6e;\n    color: white;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: #0e6e6e;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 25px;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.705);\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n    background-color: #0e6e6e;\n    color: white;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: #0e6e6e;\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 25px;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.705);\n  }\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n    background-color: #0e6e6e;\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxTcGVyYW50YVxcRGVza3RvcFxcTmV3IGZvbGRlclxcTmV3IGZvbGRlclxcU3BlcmFcXHR1amEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUFDQSw0RkFBQTtBQUNBLDZHQUFBO0FBQ0EsaUlBQUE7QUFDQSxpS0FBQTtBQUVSO0VBQ0ksZUFBQTtFQUNBLDRFQUFBO0FDQUo7QURDSTtFQUNJLHlCQUFBO0FDQ1I7QURDUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNDWjtBRE1FO0VBQ0U7SUFDSSxlQUFBO0lBQ0EsNEVBQUE7RUNITjtFRElNO0lBQ0kseUJBQUE7RUNGVjtFRElVO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlDQUFBO0VDRmQ7RURJVTtJQUNJLHlCQUFBO0lBQ0EsWUFBQTtFQ0ZkO0FBQ0Y7QURRRTtFQUVFO0lBQ0ksZUFBQTtJQUNBLDRFQUFBO0VDUE47RURRTTtJQUNJLHlCQUFBO0VDTlY7RURRVTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQ0FBQTtFQ05kO0VEUVU7SUFDSSx5QkFBQTtJQUNBLFlBQUE7RUNOZDtBQUNGO0FEV0U7RUFHRTtJQUNJLGVBQUE7SUFDQSw0RUFBQTtFQ1hOO0VEWU07SUFDSSx5QkFBQTtFQ1ZWO0VEWVU7SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUNBQUE7RUNWZDtFRFlVO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0VDVmQ7QUFDRjtBRGlCRTtFQUVFO0lBQ0ksZUFBQTtJQUNBLDRFQUFBO0VDaEJOO0VEaUJNO0lBQ0kseUJBQUE7RUNmVjtFRGlCVTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQ0FBQTtFQ2ZkO0VEaUJVO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0VDZmQ7QUFDRjtBRDBCRztFQUNDO0lBQ0ksZUFBQTtJQUNBLDRFQUFBO0VDeEJOO0VEeUJNO0lBQ0kseUJBQUE7RUN2QlY7RUR5QlU7SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUNBQUE7RUN2QmQ7RUR5QlU7SUFDSSx5QkFBQTtJQUNBLFlBQUE7RUN2QmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm5hdmJhcntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnRGFuY2luZyBTY3JpcHQnLCdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJvcGRvd24taXRlbTpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5cclxuICBAbWVkaWEgIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogIDI3NnB4KSB7IFxyXG4gICAgLm5hdmJhcntcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTEwLCAxMTApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuICBAbWVkaWEgIChtaW4td2lkdGg6IDI3NnB4KSBhbmQgKG1heC13aWR0aDogMzc1Ljk4cHgpIHsgXHJcbiAgICAgIFxyXG4gICAgLm5hdmJhcntcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTEwLCAxMTApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgfVxyXG4gIEBtZWRpYSAgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA1NzUuOThweCkgeyBcclxuXHJcbiAgICAgXHJcbiAgICAubmF2YmFye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0RhbmNpbmcgU2NyaXB0JywnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDUpOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDExMCwgMTEwKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHsgIFxyXG4gICAgXHJcbiAgICAubmF2YmFye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0RhbmNpbmcgU2NyaXB0JywnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDUpOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDExMCwgMTEwKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICB9XHJcbiAgIFxyXG4gIFxyXG4gICBcclxuICAgLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgIFxyXG4gICAgLm5hdmJhcntcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTEwLCAxMTApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgXHJcbiAgIH1cclxuICAgXHJcbiAgIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbiAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkgeyAgXHJcbiAgIFxyXG4gIFxyXG4gICB9XHJcbiAgIFxyXG4gICAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcclxuICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAgXHJcbiAgXHJcblxyXG4gIFxyXG4gIFxyXG4gICAgfVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuLm5hdmJhciB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2ZTZlO1xufVxuLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KTtcbn1cbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2ZTZlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDI3NnB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJEYW5jaW5nIFNjcmlwdFwiLCBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZlNmU7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwNSk7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmU2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyNzZweCkgYW5kIChtYXgtd2lkdGg6IDM3NS45OHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJEYW5jaW5nIFNjcmlwdFwiLCBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZlNmU7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwNSk7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmU2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNzZweCkgYW5kIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJEYW5jaW5nIFNjcmlwdFwiLCBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZlNmU7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwNSk7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmU2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJEYW5jaW5nIFNjcmlwdFwiLCBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZlNmU7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwNSk7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmU2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJEYW5jaW5nIFNjcmlwdFwiLCBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTZlNmU7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwNSk7XG4gIH1cbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmU2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/tuja/tuja.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/tuja/tuja.component.ts ***!
    \***************************************************/

  /*! exports provided: TujaComponent */

  /***/
  function srcAppComponentsTujaTujaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TujaComponent", function () {
      return TujaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TujaComponent = /*#__PURE__*/function () {
      function TujaComponent() {
        _classCallCheck(this, TujaComponent);
      }

      _createClass(TujaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TujaComponent;
    }();

    TujaComponent.ɵfac = function TujaComponent_Factory(t) {
      return new (t || TujaComponent)();
    };

    TujaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TujaComponent,
      selectors: [["app-tuja"]],
      decls: 384,
      vars: 0,
      consts: [[1, "titleS"], [1, "sec"], [1, "row"], [1, "col-sm-6", "col-xs-6"], [1, "wrapper"], [1, "container"], [1, "top"], ["src", "/assets/pics/tuja/TuiaSmaragd.jpg", "alt", "tuja", 1, "img-fluid"], [1, "bottom"], [1, "left"], [1, "details"], [1, "inside"], [1, "icon"], [1, "material-icons"], [1, "contents"], [1, "text-center", "titletabel"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], ["src", "/assets/pics/tuja/TuiaGlobosa.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/tuja/TuiaNanaAurea.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/tuja/Leylandii.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/chiparosblue.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/tuja/Grasilis.jpg", "alt", "Grasilis", 1, "img-fluid"]],
      template: function TujaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tuia si chiparosi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Smaragd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tuia este un conifer cu frunzele a\u0219ezate \xEEn scara, orientate catre varful tulpinii, mereu verzi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Este rezistent la temperaturi \xEEnalte, dar si scazute. Poate atinge inaltimi considerabile. Coroana poate fi lesne controlata prin tunderi repetate si devine extrem de spectaculoasa daca i se dau forme geometrice sau spiralate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tuia este una dintre cele mai utilizate plante decorative din gradinile lumii pentru forma sa unica, piramidala.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "De altfel, tuia este adesea folosita pentru a crea un grad viu, un paravan in gradina care sa ne fereasca de ochii curiosilor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " O planta rezistenta, care se pliaza pe orice climat si care necesita minima \xEEngrijire.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dar, imediat dup\u0103 ce este plantata are nevoie de apa \xEEn mod curent si este recomandat sa o udati \xEEn fiecare zi, iar dupa c\xE2teva saptamani la fiecare trei zile.Tuia creste \xEEn medie 20-30 cm pe an.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Smaragd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "60-150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "700-800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "incepand cu 25 lei");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Danica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Arbore de talie mica,forma sferica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Se preteaza la aproape toate solurile, dar le prefera pe cele bine drenate s\u0219 neutre. Cel mai bine se comport\u0103 la soare, dar apreciaza usoara umbra de dupa-amiaza vara. Evitati umbra completa. Acesta este un soi dens, sferic, cu crestere lenta. Frunzisul are culoarea verde-smarald si devine bronz toamna. Se potriveste bine alaturi de pietre sau borduri, dar si \xEEn ghivece. Este o alegere populara si sigura.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Danica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "30-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "incepand cu 35 lei");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Nana Aurea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Este un conifer cu frunzele vesnic verzi. Cresterea este \xEEnceata \u0219i compacta. Nu are nevoie deloc de \xEEngrijire. Este ideala pentru stancarii sau borduri. Se adapteaza usor la toate conditiile, dar nu ii plac zonele apoase. Culoarea este galben-auriu pe timpul verii si bronz iarna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Nana Aurea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "30-70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "180-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "incepand cu 50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Leylandii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Este un conifer cu frunzele vesnic verzi. Cresterea este rapida. Pentru un coronament des necesita tundere. Se adapteaza usor la toate conditiile.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Este una dintre cele mai cunoscute specii decorative folosite ca si gard viu.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Leylandii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "160-180");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "700-800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Chiparos albastru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Chamaecyparis lawsoniana Columnaris este o specie arbustiva ornamentala cunoscuta si sub numele de Chiparos Albastru Columnaris. Este una dintre cele mai cunoscute specii decorative folosite ca si gard viu. Surprinde prin nuantele de albastru si prin aspectul sau zvelt, dens. Poate fi plantat si solitar, insa in grupuri frumusetea si utilitatea lor cresc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Chiparos albastru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "100-120,120-140");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "700-800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "50-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Nana Grasilis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Chamaecyparis Obtusa Nana Grasilis cunoscut si sub numele de chiparos japonez este perfect in orice colt din gradina.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Frunzele sunt de un verde luxuriant, lucios in forma de scoici plate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Are o crestere lenta ,7-15cm/an.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Rezistent la inghet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Imagini cu caracter informativ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Nana Grasilis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "25-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "150-180");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "hr");
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:700\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.titleS[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  min-height: 20vh;\n  background-color: teal;\n  font-size: 40px;\n  align-content: space-between;\n  text-align: center;\n}\n.titleS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 50px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  color: red;\n}\n.titletabel[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\";\n  text-align: center;\n  color: red;\n  font-size: 35px;\n  padding: 15px 25px 15px 25px;\n}\nimg[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  height: 400px;\n  width: 95%;\n}\ntable[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  width: 95%;\n  color: white;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  background-color: teal;\n}\n.col[_ngcontent-%COMP%] {\n  padding-top: 150px;\n}\nhr[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(14, 110, 110, 0.5);\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  background-size: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom.clicked[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 20px;\n  float: right;\n  width: calc(70% - 40px);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 80%;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .contents[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dWphL0M6XFxVc2Vyc1xcU3BlcmFudGFcXERlc2t0b3BcXE5ldyBmb2xkZXJcXE5ldyBmb2xkZXJcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0dWphXFx0dWphLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3R1amEvdHVqYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQUNBLDRGQUFBO0FBQ0EsNkdBQUE7QUFDQSxpSUFBQTtBQUNBLGlLQUFBO0FBR0Esc0VBQUE7QUFDQSwrREFBQTtBQUNBLGlLQUFBO0FBQ0EsbUpBQUE7QUFPUjtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDUEo7QURVQTtFQUNJLDRFQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDUko7QURVSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEZBQUE7RUFDQSxVQUFBO0FDUlI7QURhQTtFQUNJLGdFQUFBO0VBQ0Msa0JBQUE7RUFDRCxVQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDVko7QURrQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDZko7QURpQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDZEo7QURnQkE7RUFFRSxnQkFBQTtFQUNBLHNCQUFBO0FDZEY7QURnQkE7RUFDSSxrQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksV0FBQTtBQ2JKO0FEb0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBQ2pCSjtBRGtCSTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUNoQk47QURtQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2pCTjtBRGtCTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBSUoscUJBQUE7QUNoQko7QURtQk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDakJSO0FEa0JRO0VBQ0UsMkJBQUE7QUNoQlY7QURrQlE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQTVHSjtBQzJGUjtBRHNCUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDcEJWO0FEcUJVO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ25CWjtBRDBCSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQ3hCTjtBRHlCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3ZCUjtBRDBCTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN4QlI7QUR5QlE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUN2QlY7QUR5QlE7RUFFRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ3hCVjtBRDJCTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0FDekJSO0FEMkJRO0VBQ0UsWUFBQTtFQUNBLCtCQWpMRjtBQ3dKUjtBRDJCUTtFQUVFLGVBQUE7RUFDQSxZQUFBO0FDMUJWO0FENEJRO0VBQ0ksZUFBQTtFQUNDLFlBQUE7QUMxQmIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1amEvdHVqYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuJGZvbnQxOiAnQ29va2llJywgY3Vyc2l2ZTtcclxuJGZvbnQyOiAnSGFuZGxlZScsIGN1cnNpdmU7XHJcbiRmb250MzogJ1BhcmlzaWVubmUnLCBjdXJzaXZlO1xyXG4kZm9udDQ6ICdTb2ZpYScsIGN1cnNpdmU7XHJcbiRmb250NTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG59XHJcbi50aXRsZVN7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0RhbmNpbmcgU2NyaXB0JywnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGV0YWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnRGFuY2luZyBTY3JpcHQnLCdKb3NlZmluIFNhbnMnO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbn1cclxuLy8gLnRpdGxlMntcclxuLy8gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgcGFkZGluZzogMTVweCAyNXB4IDE1cHggMjVweDtcclxuLy8gfVxyXG5pbWd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG50YWJsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNlY3tcclxuXHJcbiAgbWluLWhlaWdodDogNjB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG59XHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4vLyBjb2QyXHJcblxyXG4gIFxyXG4gIC53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgYm94LXNoYWRvdzogNXB4IDIwcHggMzBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAudG9we1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvdHRvbXtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAmLmNsaWNrZWR7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxLGg1LHB7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250MjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0E2Q0RERTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0OjIwMCU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNzAlIC0gNDBweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmluc2lkZXtcclxuICAgICAgei1pbmRleDo5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwwLjUpO1xyXG4gICAgICB3aWR0aDoxNDBweDtcclxuICAgICAgaGVpZ2h0OjE0MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTcwcHg7XHJcbiAgICAgIHJpZ2h0OiAtNzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMDBweCAyMDBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMsIGJvcmRlci1yYWRpdXMgMnMsIHRvcCAxcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmljb257XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6ODVweDtcclxuICAgICAgICB0b3A6ODVweDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICByaWdodDowO1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgaGVpZ2h0OjgwJTtcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICByaWdodDoxNXB4O1xyXG4gICAgICAgICAgdG9wOjE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50c3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnRze1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC44cztcclxuICAgICAgICBcclxuICAgICAgICBoMSxoNSAscHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjJweDtcclxuICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGl0bGVTIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGVTIGgxIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50aXRsZXRhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XG59XG5cbmltZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDk1JTtcbn1cblxudGFibGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYyB7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNCwgMTEwLCAxMTAsIDAuNSk7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBib3gtc2hhZG93OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xufVxuLndyYXBwZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBib3gtc2hhZG93OiA1cHggMjBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAudG9wIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIHtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbS5jbGlja2VkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIGgxLCAud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gaDUsIC53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSBwIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkhhbmRsZWVcIiwgY3Vyc2l2ZTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSAucmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjQTZDRERFO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAyMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIC5yaWdodCAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gNDBweCk7XG59XG4ud3JhcHBlciAuaW5zaWRlIHtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNzBweDtcbiAgcmlnaHQ6IC03MHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwMHB4IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cywgYm9yZGVyLXJhZGl1cyAycywgdG9wIDFzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXBwZXIgLmluc2lkZSAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDg1cHg7XG4gIHRvcDogODVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuLndyYXBwZXIgLmluc2lkZTpob3ZlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiA4MCU7XG59XG4ud3JhcHBlciAuaW5zaWRlOmhvdmVyIC5pY29uIHtcbiAgb3BhY2l0eTogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbn1cbi53cmFwcGVyIC5pbnNpZGU6aG92ZXIgLmNvbnRlbnRzIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMge1xuICBwYWRkaW5nOiA1JTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIHRyYW5zZm9ybSAwLjhzO1xufVxuLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgaDEsIC53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIGg1LCAud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmU7XG59XG4ud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBoNSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TujaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tuja',
          templateUrl: './tuja.component.html',
          styleUrls: ['./tuja.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/contact.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/contact.service.ts ***!
    \********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppServiceContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ContactService = /*#__PURE__*/function () {
      function ContactService(http) {
        _classCallCheck(this, ContactService);

        this.http = http;
        this.mailApi = 'https://mailthis.to/volintirsperanta@gmail.com';
      }

      _createClass(ContactService, [{
        key: "PostMessage",
        value: function PostMessage(input) {
          return this.http.post(this.mailApi, input, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            if (response) {
              return response;
            }
          }, function (error) {
            return error;
          }));
        }
      }]);

      return ContactService;
    }();

    ContactService.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Speranta\Desktop\New folder\New folder\Spera\tuja\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map