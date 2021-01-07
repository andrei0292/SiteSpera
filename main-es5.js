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


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/tuja/tuja.component */
    "./src/app/components/tuja/tuja.component.ts");

    var routes = [{
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"]
    }, {
      path: 'produse',
      component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"]
    }, {
      path: 'tuja',
      component: _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_11__["TujaComponent"]
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
      consts: [[1, "bk"], [1, "container"], [1, "row"], [1, "col-md-12"]],
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


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/foto/foto.component */
    "./src/app/components/foto/foto.component.ts");
    /* harmony import */


    var _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/tuja/tuja.component */
    "./src/app/components/tuja/tuja.component.ts");
    /* harmony import */


    var _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/brazi/brazi.component */
    "./src/app/components/brazi/brazi.component.ts");
    /* harmony import */


    var _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/ienupar/ienupar.component */
    "./src/app/components/ienupar/ienupar.component.ts");
    /* harmony import */


    var _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/diverse/diverse.component */
    "./src/app/components/diverse/diverse.component.ts");
    /* harmony import */


    var _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/flori/flori.component */
    "./src/app/components/flori/flori.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts"); // import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
    // import { TranslateHttpLoader } from '@ngx-translate/http-loader';
    // import { HttpClient } from '@angular/common/http';


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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_11__["FotoComponent"], _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_12__["TujaComponent"], _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_13__["BraziComponent"], _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_14__["IenuparComponent"], _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_15__["DiverseComponent"], _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_16__["FloriComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_11__["FotoComponent"], _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_12__["TujaComponent"], _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_13__["BraziComponent"], _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_14__["IenuparComponent"], _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_15__["DiverseComponent"], _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_16__["FloriComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]],
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
      decls: 137,
      vars: 0,
      consts: [[1, "intro"], [1, "timeline"], [1, "discovery"], [1, "scientist"], ["src", "/assets/pics/1.jpg"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2010");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deschidere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Am inceput sa punem bazele noii noastre afaceri ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2012");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sortiment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Chiparos Albastru ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Am plantat primul puiet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.intro[_ngcontent-%COMP%] {\n  min-height: 25vh;\n}\n\n.intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n  font-family: sans-serif;\n  font-size: 30px;\n  text-align: center;\n  color: red;\n}\n\n.intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 25px;\n  text-align: center;\n  color: red;\n}\n\nbody[_ngcontent-%COMP%] {\n  font: normal 16px/1.5 \"Titillium Web\", sans-serif;\n  background: linear-gradient(54deg, #9164ff, #8bfff4);\n  color: #3c3f64;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  width: 6px;\n  margin: 0 auto;\n  padding-top: 50px;\n  background: #fff;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%) rotate(45deg);\n  width: 20px;\n  height: 20px;\n  z-index: 2;\n  background: #eee;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  width: 400px;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #f5af19;\n  width: 80px;\n  height: 30px;\n  top: -15px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 2px;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .discovery[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100px;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)    > div[_ngcontent-%COMP%] {\n  left: 45px;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n  left: -439px;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)   div[_ngcontent-%COMP%] {\n  transform: translate3d(100px, -10px, 0) rotate(10deg);\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)   div[_ngcontent-%COMP%] {\n  transform: translate3d(-100px, -10px, 0) rotate(10deg);\n}\n\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.in-view[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n\n@media screen and (max-width: 900px) {\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 250px;\n    flex-direction: column;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 10px;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n    left: -289px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  body[_ngcontent-%COMP%] {\n    background: #8bfff4;\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: calc(100vw - 91px);\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n    left: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDSEY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBRElFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRElFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRko7O0FETUE7RUFDRSxpREFBQTtFQUNBLG9EQS9CaUI7RUFnQ2pCLGNBL0JXO0VBZ0NYLGtCQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURTSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNOTjs7QURPTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0xSOztBRE9NO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFoRVE7RUFpRVIsb0RBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0xSOztBRE1RO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0pWOztBRE1RO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKVjs7QURLVTtFQUNFLGtCQUFBO0FDSFo7O0FETVE7RUFDRSxrQkFBQTtBQ0pWOztBRFFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNOWjs7QURVUTtFQUNFLFVBQUE7QUNSVjs7QURZUTtFQUNFLFlBQUE7QUNWVjs7QURxQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ2xCUjs7QURxQlE7RUFDRSxxREFBQTtBQ25CVjs7QUR1QlE7RUFDRSxzREFBQTtBQ3JCVjs7QUR5QlE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDdkJWOztBRDhCQTtFQUlRO0lBQ0UsWUFBQTtJQUNBLHNCQUFBO0VDOUJSO0VEK0JRO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUM3QlY7RURpQ1E7SUFDRSxZQUFBO0VDL0JWO0FBQ0Y7O0FEc0NBO0VBQ0U7SUFDRSxtQkFBQTtFQ3BDRjs7RUR3Q0k7SUFDRSxpQkFBQTtFQ3JDTjtFRHNDTTtJQUNFLHlCQUFBO0VDcENSO0VEdUNRO0lBQ0UsVUFBQTtFQ3JDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDU0ZGVnLCAjOTE2NGZmLCAjOGJmZmY0KTtcclxuJHRleHQtY29sb3I6ICMzYzNmNjQ7XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5pbnRyb3tcclxuICBtaW4taGVpZ2h0OiAyNXZoO1xyXG4gIFxyXG4gIGgye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIH1cclxuICB9XHJcblxyXG5ib2R5IHtcclxuICBmb250OiBub3JtYWwgMTZweC8xLjUgJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi8vIFNUWUxJTkdcclxuLnRpbWVsaW5lIHtcclxuICB1bCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggMTNweCAzMHB4IDFweCByZ2JhKDI1MiwgNTYsIDU2LCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGltZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVhZjE5O1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzY292ZXJ5IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjaWVudGlzdCB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIGxlZnQ6IC00MzlweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFOSU1BVElPTlxyXG4udGltZWxpbmUge1xyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgZGl2IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LCAtMTBweCwgMCkgcm90YXRlKDEwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAtMTBweCwgMCkgcm90YXRlKDEwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5pbi12aWV3IHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC50aW1lbGluZSB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0yODlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGJmZmY0O1xyXG4gIH1cclxuICAudGltZWxpbmUge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTFweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoZXZlbikge1xyXG4gICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBsZWZ0OiA0NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pbnRybyB7XG4gIG1pbi1oZWlnaHQ6IDI1dmg7XG59XG4uaW50cm8gaDIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cbi5pbnRybyBoMyB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxuYm9keSB7XG4gIGZvbnQ6IG5vcm1hbCAxNnB4LzEuNSBcIlRpdGlsbGl1bSBXZWJcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU0ZGVnLCAjOTE2NGZmLCAjOGJmZmY0KTtcbiAgY29sb3I6ICMzYzNmNjQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi50aW1lbGluZSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4udGltZWxpbmUgdWwgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4udGltZWxpbmUgdWwgbGkgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogNHB4IDEzcHggMzBweCAxcHggcmdiYSgyNTIsIDU2LCA1NiwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiB0aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZjVhZjE5O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0b3A6IC0xNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiBkaXYge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aW1lbGluZSB1bCBsaSBkaXYgZGl2IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGltZWxpbmUgdWwgbGkgZGl2IC5kaXNjb3Zlcnkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4udGltZWxpbmUgdWwgbGkgZGl2IGltZyB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShvZGQpID4gZGl2IHtcbiAgbGVmdDogNDVweDtcbn1cbi50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShldmVuKSA+IGRpdiB7XG4gIGxlZnQ6IC00MzlweDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4udGltZWxpbmUgdWwgbGk6bnRoLW9mLXR5cGUob2RkKSBkaXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LCAtMTBweCwgMCkgcm90YXRlKDEwZGVnKTtcbn1cbi50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShldmVuKSBkaXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgLTEwcHgsIDApIHJvdGF0ZSgxMGRlZyk7XG59XG4udGltZWxpbmUgdWwgbGkuaW4tdmlldyBkaXYge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC50aW1lbGluZSB1bCBsaSBkaXYge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC50aW1lbGluZSB1bCBsaSBkaXYgZGl2IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICAudGltZWxpbmUgdWwgbGk6bnRoLW9mLXR5cGUoZXZlbikgPiBkaXYge1xuICAgIGxlZnQ6IC0yODlweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogIzhiZmZmNDtcbiAgfVxuXG4gIC50aW1lbGluZSB1bCBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA5MXB4KTtcbiAgfVxuICAudGltZWxpbmUgdWwgbGk6bnRoLW9mLXR5cGUoZXZlbikgPiBkaXYge1xuICAgIGxlZnQ6IDQ1cHg7XG4gIH1cbn0iXX0= */"]
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
      decls: 165,
      vars: 0,
      consts: [[1, "sec"], [1, "title1"], [1, "row"], [1, "col-sm-6", "col-xs-6"], ["src", "/assets/pics/1.jpg", "alt", "tuja", 1, "img-fluid"], [1, "text-center", "title2"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "col"]],
      template: function BraziComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Culori disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Rosu,Alb,Galben");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\n\r\n.title1[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 35px;\r\n    padding: 50px;\r\n\r\n}\r\n\r\n.title2[_ngcontent-%COMP%]{\r\n     text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 25px;\r\n    padding: 15px 25px 15px 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    height: 400px;\r\n    width: 95%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    width: 95%;\r\n    color: white;\r\n}\r\n\r\n.sec[_ngcontent-%COMP%]{\r\n\r\n    min-height: 95vh;\r\n  background-color: teal;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n    padding-top: 150px;\r\n}\r\n\r\n.help[_ngcontent-%COMP%]{\r\n    \r\n    margin: 20px;\r\n    background-color: lightseagreen;\r\n    color: white;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    height: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icmF6aS9icmF6aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0FBRWQ7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTs7QUFFakI7O0FBQ0E7S0FDSyxrQkFBa0I7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFDQTs7SUFFSSxnQkFBZ0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJhemkvYnJhemkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcbi50aXRsZTF7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG5cclxufVxyXG4udGl0bGUye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xyXG59XHJcbmltZ3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbnRhYmxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2Vje1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDk1dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufVxyXG4uY29se1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcblxyXG4uaGVscHtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5ocntcclxuICAgIGhlaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJhemkvYnJhemkuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BraziComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-brazi',
          templateUrl: './brazi.component.html',
          styleUrls: ['./brazi.component.css', './brazi.component.scss']
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

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 39,
      vars: 0,
      consts: [[1, "sec"], [1, "title"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.7180621011192!2d21.37236275118266!3d46.01825237172684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474577899577a5e7%3A0xb3f72de893c46d0d!2sFiriteaz!5e0!3m2!1sro!2sro!4v1607596016405!5m2!1sro!2sro", "width", "100%", "height", "400", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 1, "card-img-top", 2, "border", "0"], [1, "card-body", "row"], [1, "col-sm-6", "col-xs-6"], [1, "title1"], [1, "card-title", 2, "margin-top", "20px", "margin-bottom", "25px"], ["src", "/assets/pics/icons/adresa.svg", "width", "30px", "height", "30px"], [1, "card-text", 2, "margin-bottom", "25px"], ["src", "/assets/pics/icons/wapp.svg", "width", "30px", "height", "30px"], ["href", "https://www.facebook.com/tuiaarborelevietii", 2, "margin-bottom", "25px"], ["src", "/assets/pics/icons/fb.svg", "width", "30px", "height", "30px"], [1, "text-center", "title1"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "C o n t a c t");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Numar de telefon/WhatsApp: 0722 222 222");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Facebook Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Orar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Luni-Vineri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "9-18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sambata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "10-16");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Duminica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Inchis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");
        }
      },
      styles: [".sec[_ngcontent-%COMP%]{\r\n  min-width: 100%;\r\n  min-height:95vh ;\r\n  \r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\nmargin-bottom: 20px;\r\ncolor: rgb(255, 0, 0);\r\nfont-size: 50px;\r\ntext-align: center;\r\n}\r\n\r\n.title1[_ngcontent-%COMP%]{\r\n  margin-bottom: 20px;\r\n  color: rgb(255, 0, 0);\r\n  text-align: center;\r\n  }\r\n\r\na[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCOztBQUVsQjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCOztBQUNGO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2Vje1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0Ojk1dmggO1xyXG4gIFxyXG59XHJcblxyXG4udGl0bGV7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuZm9udC1zaXplOiA1MHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxlMXtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5he1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
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
      decls: 165,
      vars: 0,
      consts: [[1, "sec"], [1, "title1"], [1, "row"], [1, "col-sm-6", "col-xs-6"], ["src", "/assets/pics/1.jpg", "alt", "tuja", 1, "img-fluid"], [1, "text-center", "title2"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "col"]],
      template: function DiverseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Culori disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Rosu,Alb,Galben");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\n\r\n.title1[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 35px;\r\n    padding: 50px;\r\n\r\n}\r\n\r\n.title2[_ngcontent-%COMP%]{\r\n     text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 25px;\r\n    padding: 15px 25px 15px 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    height: 400px;\r\n    width: 95%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    width: 95%;\r\n    color: white;\r\n}\r\n\r\n.sec[_ngcontent-%COMP%]{\r\n\r\n    min-height: 95vh;\r\n  background-color: teal;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n    padding-top: 150px;\r\n}\r\n\r\n.help[_ngcontent-%COMP%]{\r\n    padding-left:15px;\r\n    margin: 20px 15px 20px 10px;\r\n    background-color: lightseagreen;\r\n    color: white;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    height: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXZlcnNlL2RpdmVyc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVOztBQUVkOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGFBQWE7O0FBRWpCOztBQUNBO0tBQ0ssa0JBQWtCO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBQ0E7O0lBRUksZ0JBQWdCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpdmVyc2UvZGl2ZXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxufVxyXG5cclxuLnRpdGxlMXtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcblxyXG59XHJcbi50aXRsZTJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbn1cclxuaW1ne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxudGFibGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN7XHJcblxyXG4gICAgbWluLWhlaWdodDogOTV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG59XHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbi5oZWxwe1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMTVweCAyMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmhye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiverseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-diverse',
          templateUrl: './diverse.component.html',
          styleUrls: ['./diverse.component.css']
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
      decls: 165,
      vars: 0,
      consts: [[1, "sec"], [1, "title1"], [1, "row"], [1, "col-sm-6", "col-xs-6"], ["src", "/assets/pics/1.jpg", "alt", "tuja", 1, "img-fluid"], [1, "text-center", "title2"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "col"]],
      template: function FloriComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Culori disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Rosu,Alb,Galben");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\n\r\n.title1[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 35px;\r\n    padding: 50px;\r\n\r\n}\r\n\r\n.title2[_ngcontent-%COMP%]{\r\n     text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 25px;\r\n    padding: 15px 25px 15px 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    height: 400px;\r\n    width: 95%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    width: 95%;\r\n    color: white;\r\n}\r\n\r\n.sec[_ngcontent-%COMP%]{\r\n\r\n    min-height: 95vh;\r\n  background-color: teal;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n    padding-top: 150px;\r\n}\r\n\r\n.help[_ngcontent-%COMP%]{\r\n    padding-left:15px;\r\n    margin: 20px 15px 20px 10px;\r\n    background-color: lightseagreen;\r\n    color: white;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    height: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbG9yaS9mbG9yaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0FBRWQ7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTs7QUFFakI7O0FBQ0E7S0FDSyxrQkFBa0I7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFDQTs7SUFFSSxnQkFBZ0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmxvcmkvZmxvcmkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcbi50aXRsZTF7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG5cclxufVxyXG4udGl0bGUye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xyXG59XHJcbmltZ3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbnRhYmxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2Vje1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDk1dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufVxyXG4uY29se1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcbi5oZWxwe1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMTVweCAyMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmhye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloriComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flori',
          templateUrl: './flori.component.html',
          styleUrls: ['./flori.component.css']
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
      decls: 1,
      vars: 0,
      consts: [[1, "fot", "fixed-bottom"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: [".fot[_ngcontent-%COMP%]{\r\n    min-height: 5vh;\r\n    background-color: tomato;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm90e1xyXG4gICAgbWluLWhlaWdodDogNXZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
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
      decls: 72,
      vars: 0,
      consts: [[1, "row"], [1, "col-md-12", "d-flex", "justify-content-center", "mb-5", "menu"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar"], ["role", "group", "aria-label", "First group", 1, "btn-group", "mr-2"], ["type", "button", "data-rel", "all", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["role", "group", "aria-label", "Second group", 1, "btn-group", "mr-2"], ["type", "button", "data-rel", "1", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "2", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "3", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "4", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "5", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "6", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["id", "gallery", 1, "gallery"], [1, "mb-3", "pics", "animation", "all", "2"], ["src", "assets/pics/1.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "4"], [1, "mb-3", "pics", "animation", "all", "5"], ["src", "assets/pics/2.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "3"], ["src", "assets/pics/3.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "1"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(121).jpg", "data-size", "1600x1067", 1, "black-text"], ["alt", "picture", "src", "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).jpg", 1, "img-fluid"], [1, "text-center", "my-3"], [1, "mb-3", "pics", "animation", "all", "6"]],
      template: function FotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tuja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Brazi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Amenajari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Photo title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Photo title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Photo title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Photo title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Photo title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".gallery[_ngcontent-%COMP%] {\r\n    -moz-column-count: 3;\r\n    column-count: 3;\r\n    -moz-column-width: 33%;\r\n    column-width: 33%; }\r\n    .gallery[_ngcontent-%COMP%]   .pics[_ngcontent-%COMP%] {\r\n    transition: all 350ms ease; }\r\n    .gallery[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\r\n    transform: scale(1); \r\n}\r\n    .btn.filter[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    \r\n    font-size: 16px;\r\n}\r\n    .btn.filter[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(11, 75, 35);\r\n    color: lightcyan;\r\n\r\n}\r\n    @media (max-width: 450px) {\r\n    .gallery[_ngcontent-%COMP%] {\r\n    -moz-column-count: 1;\r\n    column-count: 1;\r\n    -moz-column-width: 100%;\r\n    column-width: 100%;\r\n    }\r\n    }\r\n    @media (max-width: 300px) {\r\n    .btn.filter[_ngcontent-%COMP%] {\r\n    padding-left: 1.1rem;\r\n    padding-right: 1.1rem;\r\n    \r\n      }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3RvL2ZvdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLG9CQUFvQjtJQUNwQixlQUFlO0lBRWYsc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFFO0lBQ25CO0lBRUEsMEJBQTBCLEVBQUU7SUFDNUI7SUFHQSxtQkFBbUI7QUFDdkI7SUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsZUFBZTtBQUNuQjtJQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjs7QUFFcEI7SUFLSTtJQUNBO0lBRUEsb0JBQW9CO0lBQ3BCLGVBQWU7SUFFZix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCO0lBQ0E7SUFFQTtJQUNBO0lBQ0Esb0JBQW9CO0lBQ3BCLHFCQUFxQjs7TUFFbkI7SUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm90by9mb3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeSB7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcclxuICAgIC1tb3otY29sdW1uLWNvdW50OiAzO1xyXG4gICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IDMzJTtcclxuICAgIC1tb3otY29sdW1uLXdpZHRoOiAzMyU7XHJcbiAgICBjb2x1bW4td2lkdGg6IDMzJTsgfVxyXG4gICAgLmdhbGxlcnkgLnBpY3Mge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlOyB9XHJcbiAgICAuZ2FsbGVyeSAuYW5pbWF0aW9uIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgXHJcbn1cclxuXHJcbi5idG4uZmlsdGVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5idG4uZmlsdGVyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA3NSwgMzUpO1xyXG4gICAgY29sb3I6IGxpZ2h0Y3lhbjtcclxuXHJcbn1cclxuXHJcblxyXG4gXHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLmdhbGxlcnkge1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMTtcclxuICAgIGNvbHVtbi1jb3VudDogMTtcclxuICAgIC13ZWJraXQtY29sdW1uLXdpZHRoOiAxMDAlO1xyXG4gICAgLW1vei1jb2x1bW4td2lkdGg6IDEwMCU7XHJcbiAgICBjb2x1bW4td2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLmJ0bi5maWx0ZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjFyZW07XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-foto',
          templateUrl: './foto.component.html',
          styleUrls: ['./foto.component.css']
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
      decls: 165,
      vars: 0,
      consts: [[1, "sec"], [1, "title1"], [1, "row"], [1, "col-sm-6", "col-xs-6"], ["src", "/assets/pics/1.jpg", "alt", "tuja", 1, "img-fluid"], [1, "text-center", "title2"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "col"]],
      template: function IenuparComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Culori disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Rosu,Alb,Galben");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\n\r\n.title1[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 35px;\r\n    padding: 50px;\r\n\r\n}\r\n\r\n.title2[_ngcontent-%COMP%]{\r\n     text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 25px;\r\n    padding: 15px 25px 15px 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    height: 400px;\r\n    width: 95%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    width: 95%;\r\n    color: white;\r\n}\r\n\r\n.sec[_ngcontent-%COMP%]{\r\n\r\n    min-height: 95vh;\r\n  background-color: teal;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n    padding-top: 150px;\r\n}\r\n\r\n.help[_ngcontent-%COMP%]{\r\n    padding-left:15px;\r\n    margin: 20px 15px 20px 10px;\r\n    background-color: lightseagreen;\r\n    color: white;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    height: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pZW51cGFyL2llbnVwYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVOztBQUVkOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGFBQWE7O0FBRWpCOztBQUNBO0tBQ0ssa0JBQWtCO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBQ0E7O0lBRUksZ0JBQWdCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2llbnVwYXIvaWVudXBhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxufVxyXG5cclxuLnRpdGxlMXtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcblxyXG59XHJcbi50aXRsZTJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbn1cclxuaW1ne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxudGFibGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZWN7XHJcblxyXG4gICAgbWluLWhlaWdodDogOTV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG59XHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbi5oZWxwe1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMTVweCAyMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmhye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IenuparComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ienupar',
          templateUrl: './ienupar.component.html',
          styleUrls: ['./ienupar.component.css']
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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
      decls: 92,
      vars: 0,
      consts: [[1, "row"], [1, "poza", "col-sm-6", "col-xs-6"], [1, "col-sm-6", "col-xs-6"], [1, "title"], [1, "subtite"], [1, "sec"], [1, "sec1"], [1, "col"], [1, "col-sm-4", "col-xs-12"], ["id", "cat1", 1, "snip1543"], ["routerLink", "/tuja"], ["id", "cat2", 1, "snip1543", "hover"], ["routerLink", "/brazi"], ["id", "cat3", 1, "snip1543"], ["routerLink", "/ienupar"], ["id", "cat4", 1, "snip1543"], ["id", "cat5", 1, "snip1543", "hover"], ["routerLink", "/brazi", "role", "button", 1, "btn", 2, "background-color", "red"], ["id", "cat6", 1, "snip1543"], [1, "col-sm-12", "col-xs-12"], ["action", "mailto:andrei0292@gmail.com", "method", "post", "enctype", "text/plain"], ["type", "text", "name", "name"], ["type", "text", "name", "mail"], ["type", "text", "name", "comment", "size", "50"], ["type", "submit", "value", "Send"], ["type", "reset", "value", "Reset"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "W e l c o m e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OurSite bla bla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pepiniera locala de plante conifere si decorative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Avem placerea de a aduce in casele dumneavoastra mai multe sortimente de plante");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Navigand pe site-ul nostru veti putea gasi diverse soiuri de plante");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tuja si Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Plante conifere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "figure", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Plante conifere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ienupari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Plante conifere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "figure", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Plante decorative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "figure", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Plante Diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Plante decorative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "figure", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sfaturi plantare si intretinere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Toate plantele");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Mai multe detalii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Ne puteti contacta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " E-mail:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Comment:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n }\r\n   \r\n.poza[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    min-width:  50%;\r\n    min-height: 60vh;\r\n    max-height: 95vh;\r\n    box-sizing: content-box;\r\n    padding-top: 0;\r\n    position: relative;\r\n    background-image: url(\"/assets/pics/5.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;   \r\n    \r\n    clip-path: ellipse(50vh 45vh at 20% 30%);\r\n    -webkit-clip-path:ellipse(50vh 45vh at 20% 30%);\r\n}\r\n   \r\n.title[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n    margin-left: 20px;\r\n    color: rgb(255, 0, 0);\r\n    font-size: 50px;\r\n    \r\n   \r\n}\r\n   \r\n.subtite[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 30px;\r\n   \r\n}\r\n   \r\n.sec[_ngcontent-%COMP%]{\r\n  min-height: 30vh;\r\n  background-color: teal;\r\n}\r\n   \r\n.sec1[_ngcontent-%COMP%]{\r\n  min-height: 100vh;\r\n  background-color:teal;\r\n  margin-bottom: 6vh;\r\n  \r\n}\r\n   \r\n.swipe[_ngcontent-%COMP%]{\r\n   margin-left: 50%;\r\n   margin-right: 50%;\r\n   margin-top: 50vh; \r\n   background-color: white;\r\n\r\n}\r\n   \r\n.swipe.vert-move[_ngcontent-%COMP%] {\r\n    -webkit-animation: mover 1s infinite  alternate;\r\n    animation: mover 1s infinite  alternate;\r\n}\r\n   \r\n.swipe.vert-move[_ngcontent-%COMP%] {\r\n    -webkit-animation: mover 1s infinite  alternate;\r\n    animation: mover 1s infinite  alternate;\r\n}\r\n   \r\n@-webkit-keyframes mover {\r\n    0% { transform: translateY(0); }\r\n    100% { transform: translateY(-10px); }\r\n}\r\n   \r\n@keyframes mover {\r\n    0% { transform: translateY(0); }\r\n    100% { transform: translateY(-10px); }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0NBQ3pCOztBQUVEOzs7SUFHSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QjtnREFDNEM7SUFDNUMsd0NBQXdDO0lBQ3hDLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7OztBQUduQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTs7QUFFbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7O0FBRXBCOztBQUlBO0dBQ0csZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixnQkFBZ0I7R0FDaEIsdUJBQXVCOztBQUUxQjs7QUFDQTtJQUNJLCtDQUErQztJQUMvQyx1Q0FBdUM7QUFDM0M7O0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0MsdUNBQXVDO0FBQzNDOztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDOztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuIH1cclxuICAgXHJcbi5wb3phe1xyXG4gICAgXHJcbiAgICBcclxuICAgIG1pbi13aWR0aDogIDUwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy81LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgIFxyXG4gICAgLyogY2xpcC1wYXRoOiBjaXJjbGUoNDB2aCBhdCAyNSUgNDUlKTtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOmNpcmNsZSg0MHZoIGF0IDI1JSA0NSUpOyAqL1xyXG4gICAgY2xpcC1wYXRoOiBlbGxpcHNlKDUwdmggNDV2aCBhdCAyMCUgMzAlKTtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOmVsbGlwc2UoNTB2aCA0NXZoIGF0IDIwJSAzMCUpO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuLnN1YnRpdGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgIFxyXG59XHJcbi5zZWN7XHJcbiAgbWluLWhlaWdodDogMzB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG59XHJcblxyXG5cclxuXHJcbi5zZWMxe1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dGVhbDtcclxuICBtYXJnaW4tYm90dG9tOiA2dmg7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuLnN3aXBle1xyXG4gICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDUwJTtcclxuICAgbWFyZ2luLXRvcDogNTB2aDsgXHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uc3dpcGUudmVydC1tb3ZlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG59XHJcbi5zd2lwZS52ZXJ0LW1vdmUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZXIge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */", "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);\n@import url(https://fonts.googleapis.com/css?family=Teko:700);\n.snip1543[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #ffffff;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  margin: 10px;\n  max-width: 315px;\n  min-width: 215px;\n  overflow: hidden;\n  position: relative;\n  text-align: left;\n  width: 315px;\n  min-height: 315px;\n  max-height: 315px;\n  height: 315px;\n  transform: translateZ(0);\n}\n#cat1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/1.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/2.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/3.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat4[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/4.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat5[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/5.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat6[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/intretinere.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  transition: all 0.45s ease;\n}\n.snip1543[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  max-width: 100%;\n  min-width: 100%;\n  box-sizing: content-box;\n  vertical-align: top;\n}\n.snip1543[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\";\n  background-color: #b81212;\n  opacity: 0.5;\n  transition: all 0.45s ease;\n}\n.snip1543[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-80%);\n}\n.snip1543[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-70%);\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n  bottom: 0;\n  padding: 25px 40% 25px 20px;\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ff0000;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);\n  content: \"\";\n  opacity: 0.5;\n  z-index: -1;\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-100%);\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-90%);\n}\n.snip1543[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0;\n  letter-spacing: 1px;\n}\n.snip1543[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Teko\", sans-serif;\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n.snip1543[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n.snip1543[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 1.5em;\n  bottom: 0;\n  color: white;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.snip1543[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .snip1543.hover[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .snip1543.hover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 0.9;\n  transition-delay: 0.2s;\n}\n.snip1543[_ngcontent-%COMP%]:hover:before, .snip1543.hover[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-20%);\n  transition-delay: 0.05s;\n}\n.snip1543[_ngcontent-%COMP%]:hover:after, .snip1543.hover[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-10%);\n}\n.snip1543[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]:before, .snip1543.hover[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-40%);\n  transition-delay: 0.15s;\n}\n.snip1543[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]:after, .snip1543.hover[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-30%);\n  transition-delay: 0.1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLUSxvRUFBQTtBQUNBLDZEQUFBO0FBQ1I7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUVBLHdCQUFBO0FDSkY7QURNQTtFQUNFLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDSEY7QURLQTtFQUNFLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRkY7QURJQTtFQUNFLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDREY7QURHQTtFQUNFLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQUY7QURFQTtFQUNFLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURDQTtFQUNFLHFEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRUY7QURDQTs7O0VBSUUsc0JBQUE7RUFFQSwwQkFBQTtBQ0VGO0FERUE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUdBLG1CQUFBO0FDREY7QURNQTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsMEJBQUE7QUNIRjtBRE1BO0VBRUUsdUNBQUE7QUNIRjtBRE1BO0VBRUUsd0NBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ0hGO0FETUE7O0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hGO0FETUE7RUFFRSx3Q0FBQTtBQ0hGO0FETUE7RUFFRSx3Q0FBQTtBQ0hGO0FETUE7O0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUVBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDSkY7QURVQTs7OztFQUtFLHdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0FDUEY7QURVQTs7RUFHRSx1Q0FBQTtFQUVBLHVCQUFBO0FDUEY7QURVQTs7RUFHRSx3Q0FBQTtBQ1BGO0FEVUE7O0VBR0UsdUNBQUE7RUFFQSx1QkFBQTtBQ1BGO0FEVUE7O0VBR0Usd0NBQUE7RUFFQSxzQkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIENvZCAyIFxyXG5cclxuXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8pO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDApO1xyXG4uc25pcDE1NDMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMTVweDtcclxuICBtaW4td2lkdGg6IDIxNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDMxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMxNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDMxNXB4O1xyXG4gIGhlaWdodDogMzE1cHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcbiNjYXQxe1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy8xLmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4jY2F0MntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvMi5qcGdcIik7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuI2NhdDN7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzLzMuanBnXCIpOyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiNjYXQ0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy80LmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4jY2F0NXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvNS5qcGdcIik7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuI2NhdDZ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzL2ludHJldGluZXJlLmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNuaXAxNTQzICosXHJcbi5zbmlwMTU0MyAqOmJlZm9yZSxcclxuLnNuaXAxNTQzICo6YWZ0ZXIge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2U7XHJcblxyXG59XHJcblxyXG4uc25pcDE1NDMgaW1nIHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTsgXHJcbiAgYm94LXNpemluZzpjb250ZW50LWJveDtcclxuICBcclxuICBcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIFxyXG4gIFxyXG59XHJcblxyXG4uc25pcDE1NDM6YmVmb3JlLFxyXG4uc25pcDE1NDM6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4MTIxMjtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcclxufVxyXG5cclxuLnNuaXAxNTQzOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTgwJSk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC04MCUpO1xyXG59XHJcblxyXG4uc25pcDE1NDM6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtNzAlKTtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC03MCUpO1xyXG59XHJcblxyXG4uc25pcDE1NDMgZmlnY2FwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDI1cHggNDAlIDI1cHggMjBweDtcclxufVxyXG5cclxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YmVmb3JlLFxyXG4uc25pcDE1NDMgZmlnY2FwdGlvbjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICBjb250ZW50OiAnJztcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5zbmlwMTU0MyBmaWdjYXB0aW9uOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIHRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5zbmlwMTU0MyBmaWdjYXB0aW9uOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTkwJSk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtOTAlKTtcclxufVxyXG5cclxuLnNuaXAxNTQzIGgzLFxyXG4uc25pcDE1NDMgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLnNuaXAxNTQzIGgzIHtcclxuICBmb250LWZhbWlseTogJ1Rla28nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNuaXAxNTQzIHAge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5zbmlwMTU0MyBhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuXHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIFxyXG5cclxufVxyXG5cclxuXHJcbi5zbmlwMTU0Mzpob3ZlciBoMyxcclxuLnNuaXAxNTQzLmhvdmVyIGgzLFxyXG4uc25pcDE1NDM6aG92ZXIgcCxcclxuLnNuaXAxNTQzLmhvdmVyIHAge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbn1cclxuXHJcbi5zbmlwMTU0Mzpob3ZlcjpiZWZvcmUsXHJcbi5zbmlwMTU0My5ob3ZlcjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC0yMCUpO1xyXG4gIHRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMjAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xyXG59XHJcblxyXG4uc25pcDE1NDM6aG92ZXI6YWZ0ZXIsXHJcbi5zbmlwMTU0My5ob3ZlcjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0xMCUpO1xyXG4gIHRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTEwJSk7XHJcbn1cclxuXHJcbi5zbmlwMTU0Mzpob3ZlciBmaWdjYXB0aW9uOmJlZm9yZSxcclxuLnNuaXAxNTQzLmhvdmVyIGZpZ2NhcHRpb246YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtNDAlKTtcclxuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTQwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcclxufVxyXG5cclxuLnNuaXAxNTQzOmhvdmVyIGZpZ2NhcHRpb246YWZ0ZXIsXHJcbi5zbmlwMTU0My5ob3ZlciBmaWdjYXB0aW9uOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTMwJSk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtMzAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Bybyk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDApO1xuLnNuaXAxNTQzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWF4LXdpZHRoOiAzMTVweDtcbiAgbWluLXdpZHRoOiAyMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMzE1cHg7XG4gIG1pbi1oZWlnaHQ6IDMxNXB4O1xuICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgaGVpZ2h0OiAzMTVweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuI2NhdDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvMS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvMi5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvMy5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvNC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvNS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvaW50cmV0aW5lcmUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zbmlwMTU0MyAqLFxuLnNuaXAxNTQzICo6YmVmb3JlLFxuLnNuaXAxNTQzICo6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xufVxuXG4uc25pcDE1NDMgaW1nIHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5zbmlwMTU0MzpiZWZvcmUsXG4uc25pcDE1NDM6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4MTIxMjtcbiAgb3BhY2l0eTogMC41O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcbn1cblxuLnNuaXAxNTQzOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC04MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTgwJSk7XG59XG5cbi5zbmlwMTU0MzphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtNzAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtNzAlKTtcbn1cblxuLnNuaXAxNTQzIGZpZ2NhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDI1cHggNDAlIDI1cHggMjBweDtcbn1cblxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YmVmb3JlLFxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwLjU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc25pcDE1NDMgZmlnY2FwdGlvbjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5zbmlwMTU0MyBmaWdjYXB0aW9uOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC05MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC05MCUpO1xufVxuXG4uc25pcDE1NDMgaDMsXG4uc25pcDE1NDMgcCB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnNuaXAxNTQzIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiVGVrb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zbmlwMTU0MyBwIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLnNuaXAxNTQzIGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLnNuaXAxNTQzOmhvdmVyIGgzLFxuLnNuaXAxNTQzLmhvdmVyIGgzLFxuLnNuaXAxNTQzOmhvdmVyIHAsXG4uc25pcDE1NDMuaG92ZXIgcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDAuOTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4uc25pcDE1NDM6aG92ZXI6YmVmb3JlLFxuLnNuaXAxNTQzLmhvdmVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC0yMCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTIwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xufVxuXG4uc25pcDE1NDM6aG92ZXI6YWZ0ZXIsXG4uc25pcDE1NDMuaG92ZXI6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTEwJSk7XG4gIHRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTEwJSk7XG59XG5cbi5zbmlwMTU0Mzpob3ZlciBmaWdjYXB0aW9uOmJlZm9yZSxcbi5zbmlwMTU0My5ob3ZlciBmaWdjYXB0aW9uOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC00MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTQwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xufVxuXG4uc25pcDE1NDM6aG92ZXIgZmlnY2FwdGlvbjphZnRlcixcbi5zbmlwMTU0My5ob3ZlciBmaWdjYXB0aW9uOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0zMCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0zMCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css', './main.component.scss']
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
      decls: 38,
      vars: 0,
      consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/tuja", 1, "dropdown-item"], ["routerLink", "/brazi", 1, "dropdown-item"], ["routerLink", "/ienupar", 1, "dropdown-item"], ["routerLink", "/flori", 1, "dropdown-item"], ["routerLink", "/diverse", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/produse", 1, "dropdown-item"], [1, "nav-item"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/foto", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Produse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tuja si Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sfaturi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["nav[_ngcontent-%COMP%]{\r\n    color: #ABDBBB;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgICBjb2xvcjogI0FCREJCQjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)();
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 2,
      vars: 0,
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Produse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%]{\r\n    padding-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csbUJBQW1CO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9DSSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBoMXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuLypcclxuLmFjY29yZGlvbiB7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSBcclxuICBcclxuLmFjY29yZGlvbi53aWR0aCB7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICB3aWR0aDogNDAwcHg7IFxyXG59IFxyXG4gIFxyXG4uYWNjb3JkaW9uLndpZHRoIC5jYXJkIHsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7IFxyXG59IFxyXG4gIFxyXG4uYWNjb3JkaW9uLndpZHRoIC5jYXJkIC5jYXJkLWhlYWRlciB7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IFxyXG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY5RDU4OyBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyBcclxufSBcclxuICBcclxuLmNhcmQtYm9keSB7IFxyXG4gICAgd2lkdGg6IDQwMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGUgOyBcclxufSBcclxuICBcclxuLmNvbGxhcHNpbmcud2lkdGggeyBcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTsgXHJcbiAgICBoZWlnaHQ6IGF1dG87IFxyXG4gICAgd2lkdGg6IDEwcHg7IFxyXG59IFxyXG4gIFxyXG5oMSB7IFxyXG4gICAgY29sb3I6IGdyZWVuOyBcclxufSAgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
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
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);

    var TujaComponent = /*#__PURE__*/function () {
      function TujaComponent() {
        _classCallCheck(this, TujaComponent);
      }

      _createClass(TujaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({
            duration: 700,
            delay: 400,
            once: true
          });
          aos__WEBPACK_IMPORTED_MODULE_1___default.a.refresh({
            delay: 400,
            once: true
          });
        }
      }]);

      return TujaComponent;
    }();

    TujaComponent.ɵfac = function TujaComponent_Factory(t) {
      return new (t || TujaComponent)();
    };

    TujaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TujaComponent,
      selectors: [["app-tuja"]],
      decls: 165,
      vars: 0,
      consts: [[1, "sec"], [1, "title1"], [1, "row"], [1, "col-sm-6", "col-xs-6", "imagineP"], ["src", "/assets/pics/1.jpg", "alt", "tuja", 1, "img-fluid"], [1, "col-sm-6", "col-xs-6"], [1, "text-center", "title2"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "col"], ["src", "/assets/pics/2.jpg", "alt", "tuja", "data-aos", "fade-right", "data-aos-anchor-placement", "top-center", 1, "img-fluid"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", 1, "col-sm-6", "col-xs-6"], ["data-aos", "zoom-out-up", 1, "card", "help"], ["src", "/assets/pics/3.jpg", "alt", "tuja", 1, "img-fluid"]],
      template: function TujaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Trandafiri pe Picior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Culori disponibile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Rosu,Alb,Galben");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Help ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque alias, similique fuga libero autem corporis, dolore dolorum, recusandae necessitatibus modi impedit nesciunt reprehenderit. Asperiores, nam debitis! Aspernatur minus assumenda asperiores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\n\r\n.title1[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 35px;\r\n    padding: 50px;\r\n\r\n}\r\n\r\n.title2[_ngcontent-%COMP%]{\r\n     text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    font-size: 25px;\r\n    padding: 15px 25px 15px 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    height: 400px;\r\n    width: 95%;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    width: 95%;\r\n    color: white;\r\n}\r\n\r\n.sec[_ngcontent-%COMP%]{\r\n\r\n    min-height: 95vh;\r\n  background-color: teal;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n    padding-top: 150px;\r\n}\r\n\r\n.help[_ngcontent-%COMP%]{\r\n    padding-left:15px;\r\n    margin: 20px 15px 20px 10px;\r\n    background-color: lightseagreen;\r\n    color: white;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    height: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dWphL3R1amEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtJQUNJLFNBQVM7SUFDVCxVQUFVOztBQUVkOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGFBQWE7O0FBRWpCOztBQUNBO0tBQ0ssa0JBQWtCO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBQ0E7Ozs7Ozs7OztHQVNHOztBQUNIO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUNBOztJQUVJLGdCQUFnQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90dWphL3R1amEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGgxe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufSAqL1xyXG5cclxuKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxufVxyXG5cclxuLnRpdGxlMXtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcblxyXG59XHJcbi50aXRsZTJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbn1cclxuaW1ne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuLyogLmltYWdpbmVQe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzLzIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxyXG59XHJcblxyXG4uaW1hZ2luZVA6aG92ZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvMS5qcGdcIikgO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxyXG59ICovXHJcbnRhYmxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2Vje1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDk1dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufVxyXG4uY29se1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcblxyXG4uaGVscHtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDE1cHggMjBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5ocntcclxuICAgIGhlaWdodDogNXB4O1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TujaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tuja',
          templateUrl: './tuja.component.html',
          styleUrls: ['./tuja.component.css']
        }]
      }], function () {
        return [];
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
    /*! C:\Users\andre\Desktop\Spera\tuja\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map