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
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_11__["FotoComponent"], _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_12__["TujaComponent"], _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_13__["BraziComponent"], _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_14__["IenuparComponent"], _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_15__["DiverseComponent"], _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_16__["FloriComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _components_foto_foto_component__WEBPACK_IMPORTED_MODULE_11__["FotoComponent"], _components_tuja_tuja_component__WEBPACK_IMPORTED_MODULE_12__["TujaComponent"], _components_brazi_brazi_component__WEBPACK_IMPORTED_MODULE_13__["BraziComponent"], _components_ienupar_ienupar_component__WEBPACK_IMPORTED_MODULE_14__["IenuparComponent"], _components_diverse_diverse_component__WEBPACK_IMPORTED_MODULE_15__["DiverseComponent"], _components_flori_flori_component__WEBPACK_IMPORTED_MODULE_16__["FloriComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"]],
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
      decls: 76,
      vars: 0,
      consts: [[1, "intro"], [1, "timeline"], [1, "discovery"], [1, "scientist"], ["href", "/assets/pics/Start.jpg"], ["src", "/assets/pics/Start.jpg"], ["href", "/assets/pics/1.jpg"], ["src", "/assets/pics/1.jpg"], ["href", "/assets/pics/amenajare1.jpg"], ["src", "/assets/pics/amenajare1.jpg"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 7);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.intro[_ngcontent-%COMP%] {\n  min-height: 25vh;\n}\n.intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  font-size: 30px;\n  text-align: center;\n  color: red;\n}\n.intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  font-size: 25px;\n  text-align: center;\n  color: red;\n}\nbody[_ngcontent-%COMP%] {\n  font: normal 16px/1.5;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  background: linear-gradient(54deg, #0dc0d8, #8bfff4);\n  color: #6c6e94;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n}\n.timeline[_ngcontent-%COMP%] {\n  margin-bottom: 5vh;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  width: 6px;\n  margin: 0 auto;\n  padding-top: 50px;\n  background: #fff;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%) rotate(45deg);\n  width: 20px;\n  height: 20px;\n  z-index: 2;\n  background: #05a093;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  width: 400px;\n  padding: 20px;\n  background: linear-gradient(154deg, #afdfe6, #ffffff);\n  box-shadow: 4px 13px 30px 1px rgba(15, 162, 182, 0.2);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #05a093;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  width: 80px;\n  height: 30px;\n  top: -15px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 1.5px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .discovery[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .scientist[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100px;\n  margin: 20px;\n  border: 1px solid black;\n  overflow: hidden;\n  \n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100px;\n  display: block;\n  transition: transform 0.4s;\n  \n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .scientist[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n  transform-origin: 50% 50%;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)    > div[_ngcontent-%COMP%] {\n  left: 45px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n  left: -439px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)   div[_ngcontent-%COMP%] {\n  transform: translate3d(100px, -10px, 0) rotate(10deg);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)   div[_ngcontent-%COMP%] {\n  transform: translate3d(-100px, -10px, 0) rotate(10deg);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.in-view[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n@media screen and (max-width: 900px) {\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 250px;\n    flex-direction: column;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 10px;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n    left: -289px;\n  }\n}\n@media screen and (max-width: 600px) {\n  body[_ngcontent-%COMP%] {\n    background: #8bfff4;\n  }\n\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: calc(100vw - 91px);\n  }\n  .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(even)    > div[_ngcontent-%COMP%] {\n    left: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQcm9pZWN0ZVxcYW5ndWxhclxcU3BlcmFcXHR1amEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQUNBLDRGQUFBO0FBQ0EsNkdBQUE7QUFDQSxpSUFBQTtBQUNBLGlLQUFBO0FBT1I7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRE9BO0VBQ0UsZ0JBQUE7QUNKRjtBRE1FO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBGQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0pKO0FETUU7RUFDRSwwRkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNKSjtBRFFBO0VBQ0UscUJBQUE7RUFDQSwwRkFBQTtFQUNBLG9EQWhDaUI7RUFpQ2pCLGNBaENXO0VBaUNYLGtCQUFBO0VBQ0Esb0JBQUE7QUNMRjtBRFNBO0VBQ0Usa0JBQUE7QUNORjtBRFFJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ05OO0FET007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRE9NO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxREFsRU87RUFtRVAscURBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0xSO0FETVE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEZBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNKVjtBRE1RO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKVjtBREtVO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEZBQUE7QUNIWjtBREtVO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEZBQUE7QUNIWjtBRE1RO0VBQ0Usa0JBQUE7QUNKVjtBRE1RO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUE2Qix1REFBQTtBQ0p2QztBRE1RO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBNkIsa0JBQUE7QUNKdkM7QURhYTtFQUNDLHFCQUFBO0VBQ0EseUJBQUE7QUNYZDtBRGlCUTtFQUNFLFVBQUE7QUNmVjtBRG1CUTtFQUNFLFlBQUE7QUNqQlY7QUQ0Qk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ3pCUjtBRDRCUTtFQUNFLHFEQUFBO0FDMUJWO0FEOEJRO0VBQ0Usc0RBQUE7QUM1QlY7QURnQ1E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDOUJWO0FEcUNBO0VBSVE7SUFDRSxZQUFBO0lBQ0Esc0JBQUE7RUNyQ1I7RURzQ1E7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQ3BDVjtFRHdDUTtJQUNFLFlBQUE7RUN0Q1Y7QUFDRjtBRDZDQTtFQUNFO0lBQ0UsbUJBQUE7RUMzQ0Y7O0VEK0NJO0lBQ0UsaUJBQUE7RUM1Q047RUQ2Q007SUFDRSx5QkFBQTtFQzNDUjtFRDhDUTtJQUNFLFVBQUE7RUM1Q1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG4kcHJpbWFyeS1jb2xvcjpsaW5lYXItZ3JhZGllbnQoMTU0ZGVnLCAjYWZkZmU2LCAjZmZmZmZmKTtcclxuJGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCg1NGRlZywgIzBkYzBkOCwgIzhiZmZmNCk7XHJcbiR0ZXh0LWNvbG9yOiAjNmM2ZTk0O1xyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uaW50cm97XHJcbiAgbWluLWhlaWdodDogMjV2aDtcclxuICBcclxuICBoMntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICB9XHJcbiAgfVxyXG5cclxuYm9keSB7XHJcbiAgZm9udDogbm9ybWFsIDE2cHgvMS41IDtcclxuICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4vLyBTVFlMSU5HXHJcbi50aW1lbGluZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwNWEwOTM7XHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDRweCAxM3B4IDMwcHggMXB4IHJnYmEoMTUsIDE2MiwgMTgyLCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGltZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDVhMDkzO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzY292ZXJ5IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjaWVudGlzdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAgICAgICAgIC8qIGNsaXAgdGhlIGV4Y2VzcyB3aGVuIGNoaWxkIGdldHMgYmlnZ2VyIHRoYW4gcGFyZW50ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICBcclxuICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHM7ICAgLyogc21vb3RoZXIgem9vbSAqL1xyXG5cclxuICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgLy8gLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIC8vIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuc2NpZW50aXN0OmhvdmVyIGltZyB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgICAgLy8gLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgICAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgbGVmdDogNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgbGVmdDogLTQzOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQU5JTUFUSU9OXHJcbi50aW1lbGluZSB7XHJcbiAgdWwge1xyXG4gICAgbGkge1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIC0xMHB4LCAwKSByb3RhdGUoMTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIC0xMHB4LCAwKSByb3RhdGUoMTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmluLXZpZXcge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLnRpbWVsaW5lIHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgbGVmdDogLTI4OXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICM4YmZmZjQ7XHJcbiAgfVxyXG4gIC50aW1lbGluZSB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA5MXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pbnRybyB7XG4gIG1pbi1oZWlnaHQ6IDI1dmg7XG59XG4uaW50cm8gaDIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG4uaW50cm8gaDMge1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG5ib2R5IHtcbiAgZm9udDogbm9ybWFsIDE2cHgvMS41O1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1NGRlZywgIzBkYzBkOCwgIzhiZmZmNCk7XG4gIGNvbG9yOiAjNmM2ZTk0O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udGltZWxpbmUge1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG59XG4udGltZWxpbmUgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnRpbWVsaW5lIHVsIGxpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kOiAjMDVhMDkzO1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTRkZWcsICNhZmRmZTYsICNmZmZmZmYpO1xuICBib3gtc2hhZG93OiA0cHggMTNweCAzMHB4IDFweCByZ2JhKDE1LCAxNjIsIDE4MiwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpbWVsaW5lIHVsIGxpIGRpdiB0aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjMDVhMDkzO1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRvcDogLTE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbi50aW1lbGluZSB1bCBsaSBkaXYgZGl2IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGltZWxpbmUgdWwgbGkgZGl2IGRpdiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi50aW1lbGluZSB1bCBsaSBkaXYgZGl2IGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi50aW1lbGluZSB1bCBsaSBkaXYgLmRpc2NvdmVyeSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi50aW1lbGluZSB1bCBsaSBkaXYgLnNjaWVudGlzdCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogY2xpcCB0aGUgZXhjZXNzIHdoZW4gY2hpbGQgZ2V0cyBiaWdnZXIgdGhhbiBwYXJlbnQgKi9cbn1cbi50aW1lbGluZSB1bCBsaSBkaXYgaW1nIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG4gIC8qIHNtb290aGVyIHpvb20gKi9cbn1cbi50aW1lbGluZSB1bCBsaSAuc2NpZW50aXN0OmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbn1cbi50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShvZGQpID4gZGl2IHtcbiAgbGVmdDogNDVweDtcbn1cbi50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShldmVuKSA+IGRpdiB7XG4gIGxlZnQ6IC00MzlweDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4udGltZWxpbmUgdWwgbGk6bnRoLW9mLXR5cGUob2RkKSBkaXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LCAtMTBweCwgMCkgcm90YXRlKDEwZGVnKTtcbn1cbi50aW1lbGluZSB1bCBsaTpudGgtb2YtdHlwZShldmVuKSBkaXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgLTEwcHgsIDApIHJvdGF0ZSgxMGRlZyk7XG59XG4udGltZWxpbmUgdWwgbGkuaW4tdmlldyBkaXYge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC50aW1lbGluZSB1bCBsaSBkaXYge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC50aW1lbGluZSB1bCBsaSBkaXYgZGl2IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICAudGltZWxpbmUgdWwgbGk6bnRoLW9mLXR5cGUoZXZlbikgPiBkaXYge1xuICAgIGxlZnQ6IC0yODlweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogIzhiZmZmNDtcbiAgfVxuXG4gIC50aW1lbGluZSB1bCBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnRpbWVsaW5lIHVsIGxpIGRpdiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA5MXB4KTtcbiAgfVxuICAudGltZWxpbmUgdWwgbGk6bnRoLW9mLXR5cGUoZXZlbikgPiBkaXYge1xuICAgIGxlZnQ6IDQ1cHg7XG4gIH1cbn0iXX0= */"]
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
      decls: 395,
      vars: 0,
      consts: [[1, "sec"], [1, "title1"], [1, "row"], [1, "col-sm-6", "col-xs-6"], ["src", "/assets/pics/brazi/Douglas.jpg", "alt", "Douglas", 1, "img-fluid"], [1, "text-center", "title2"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "col"], ["src", "/assets/pics/brazi/abiesnordmanniana.jpg", "alt", "abiesnordmanniana", 1, "img-fluid"], ["src", "/assets/pics/brazi/piceapungens.jpg", "alt", "piceapungens", 1, "img-fluid"], ["src", "/assets/pics/brazi/daisywhite.jpg", "alt", "daisywhite", 1, "img-fluid"], ["src", "/assets/pics/brazi/piceaglaucaconica.jpg", "alt", "piceaglaucaconica", 1, "img-fluid"], ["src", "/assets/pics/brazi/pinusmugo.jpg", "alt", "pinusmugo", 1, "img-fluid"], ["src", "/assets/pics/brazi/pinnigra.jpg", "alt", "pinnigra", 1, "img-fluid"]],
      template: function BraziComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Abies Alba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "100-410");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "400");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Se planteaza solitar sau in grupuri.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Plantarea se face in perioada de repaus vegetativ 15 noiembrie-10 martie cu conditia ca solul sa nu fie inghetat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Bradul Nordmann este o specie cu temperament de lumina, dar suporta si semiumbra.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Vegeteaza bine in soluri variate, dar le prefera pe cele fertile si bine drenate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Brazi si pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Abies Nordmanniana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "2500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Bradul Nordmann este cel mai popular pom de Craciun.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Se planteaza solitar sau in grupuri.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Plantarea se face in perioada de repaus vegetativ 15 noiembrie-10 martie cu conditia ca solul sa nu fie inghetat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Bradul Nordmann este o specie cu temperament de lumina, dar suporta si semiumbra.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Vegeteaza bine in soluri variate, dar le prefera pe cele fertile si bine drenate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Brazi si pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Brad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Picea pungens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "1000-1200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "soare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Picea Pungens este un molidul argintiu de talie medie ce poate ajunge la 10-12m.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Are o forma conica simetrica, ramuri cu ace lungi, rigide de culoare albastra-argintie. Este un conifer cu crestere lenta, cu o rata de crestere anuala de 10-15 cm si face conuri mari. Se dezvolta bine in plin soare si isi mentine culoarea tropicala. Se dezvolta bine pe soluri calcaroase iar necesarul de apa este mediu. Acest soi este foarte decorativ, putand fi pus in evidenta ca exemplar solitar. Rezistent la ger, pentru plantare se alege o pozitie insorita. Tolereaza caldura si vantul. Bun pentru mediul urban, fiind rezistent la poluare.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Picea Glauca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Daisy White");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Este un molid pitic, foarte atragator, cu forma conica compacta, foliaj foarte dens.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Este special prin culoarea galben-aurie a mugurilor care imbraca planta in primavara oferindu-i un aspect foarte luminos si pufos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "In decurs de 4-6 saptamani de la aparitia lor, acele isi schimba culoarea in alb verde si apoi verde inchis si devin rigide, tepoase.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Este potrivit pentru gradini mici, dar creste foarte bine si in ghivece pe terase.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Se planteaza in plin soare, prefera solurile acide, bine drenate, are crestere foarte inceata.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Picea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Glauca Conica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "150-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Noiembrie-Martie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Este un conifer superb cu o coroana deas\u0103 \u0219i bogat\u0103. Frunzele nou crescute sunt moi \u0219i sub\u021Biri, de culoare verde-deschis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Are portul conic. Este cunoscut \u0219i sub denumirea de molid conic. Are numeroase \xEEntrebuin\u021B\u0103ri peisagistice \u0219i arat\u0103 bine \xEEn foarte multe spa\u021Bii.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Se folose\u0219te ca plant\u0103 solitar\u0103 sau \xEEn aliniamente. Cre\u0219terea e relativ lent\u0103, dar acest arbust r\u0103\u0219inos ofer\u0103 frumuse\u021Be gr\u0103dinilor la orice v\xE2rst\u0103.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Mugo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Februarie-Aprilie, Septembrie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Pinii sunt copaci superbi ce pot fi \xEEnt\xE2lni\u021Bi oriunde de la \u021B\u0103rile nordice p\xE2n\u0103 la coastele fierbin\u021Bi. Probabil cele mai frumoase exemplare se g\u0103sesc \xEEn mediul lor natural, \xEEns\u0103 acestea pot fi adev\u0103rate bijuterii oriunde, dac\u0103 ii sunt create condi\u021Biile optime de dezvoltare. Pinus mugo este o varietate de pin pitic, cu o cre\u0219tere compact\u0103 \u0219i lent\u0103. Formeaz\u0103 un tufi\u0219 bogat, mai mult lat dec\xE2t \xEEnalt, cu ace mai scurte de un verde \xEEnchis. Arat\u0103 excelent \xEEn gr\u0103dini cu st\xE2nc\u0103rii, gr\u0103dini japoneze. Pinii au nevoie de sol u\u0219or umed atunci c\xE2nd se stabilesc, dup\u0103 transplantare, dar vor suporta orice sol bine drenat. Pentru a se ramifica \u0219i \xEEmbog\u0103\u021Bii, are nevoie de mult soare, a\u0219a c\u0103 \xEEncerca\u021Bi s\u0103 ii g\u0103si\u021Bi un loc c\xE2t mai \xEEnsorit. Complet rezistent p\xE2n\u0103 la -45 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Nigra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "3000-4000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Februarie-Aprilie, Septembrie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Cunoscut \u0219i sub numele de Pin negru, este o specie de conifer originar din Europa Centrala \u0219i de Sud. Are o rezisten\u021B\u0103 sporit\u0103 la ger \u0219i secet\u0103, nepreten\u021Bios fa\u021B\u0103 de sol \u0219i iube\u0219te lumina. Coroana are un aspect piramidal, acest pin face parte din categoria pinilor cu dou\u0103 ace \xEEntr-o teac\u0103. Conurile au dimensiuni de 4-7 cm lungime \u0219i sunt \xEEndreptate \xEEn sus, \xEEn tinere\u021Be sunt verzi, iar la maturitate se coloreaz\u0103 \xEEn brun-maroniu. Se planteaz\u0103 ca arbore ornamental \xEEn gr\u0103dini, ora\u0219e, parcuri.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJhemkvYnJhemkuY29tcG9uZW50LnNjc3MifQ== */"]
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
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n.sec[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 95vh;\n}\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: red;\n  font-size: 50px;\n  text-align: center;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.title1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: red;\n  text-align: center;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.table[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  text-align: center;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.mail[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  padding-bottom: 6vh;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.icons[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFByb2llY3RlXFxhbmd1bGFyXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUFDQSw0RkFBQTtBQUNBLDZHQUFBO0FBQ0EsaUlBQUE7QUFDQSxpS0FBQTtBQUdSO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDREY7QURLQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBGQUFBO0FDRkE7QURJQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEZBQUE7QUNERjtBREdBO0VBQ0UsMEZBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0VBQ0EsMEZBQUE7QUNBRjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBGQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0VBQ0EsMEZBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuLnNlY3tcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDo5NXZoIDtcclxuICBcclxufVxyXG5cclxuLnRpdGxle1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5jb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbmZvbnQtc2l6ZTogNTBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0bGUxe1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbi50YWJsZXtcclxuICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuYXtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYWlse1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDZ2aDtcclxuICBmb250LWZhbWlseTogJ1NhbnNpdGEgU3dhc2hlZCcsJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmUsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uaWNvbnN7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbi5zZWMge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDk1dmg7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZTEge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLm1haWwge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBwYWRkaW5nLWJvdHRvbTogNnZoO1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5pY29ucyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufSJdfQ== */"]
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
      decls: 667,
      vars: 0,
      consts: [[1, "sec"], [1, "title1"], [1, "row"], [1, "col-sm-6", "col-xs-6"], ["src", "/assets/pics/plante diverse/salcie.jpg", "alt", "tuja", 1, "img-fluid"], [1, "text-center", "title2"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "col"], ["src", "/assets/pics/plante diverse/artar.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/acershirasawanumAureum.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/carexbronze.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/hemerocallisyounique.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/chiparosblue.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/larice.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/prunusetna.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/prunusnovice.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/tisataxusbacata.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/buxusbicolor.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/buxuscimisir.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/plante diverse/palmier.jpg", "alt", "tuja", 1, "img-fluid"]],
      template: function DiverseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Salix integra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hakuro Nishiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "100-120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "170-180");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "120-150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Perioada plantare");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Soare,semiumbra");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Salcie Japoneza altoita pe trunchi (Salix integra \"Hakuro Nishiki\") - este un arbust decorativ ce poarta si denumirea de salcie japoneza, cu lastarii noi de culoare roz si un frunzis pestrit (verde cu crem), aceasta specie de salcie altoita devine foarte usor un punct de atractie al gradinii.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Acer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Palmatum Atropurpureum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "100-120 , 160-180");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "300-400");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "250 , 500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Periada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Semiumbra, umbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Artarul Japonez Rosu este un copac cu o coroana deosebit de atractiva. Prin frunzele sale in nuante de rosu. In perioada anotimpului de toamna frunzele primesc o nuanta intensa de rosu-ruginiu. Frunzele au forma palmata si o lungime de 4-10 centimetri.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Solul preferat de Artarul Atropurpureum este cel umed, bine drenat, solul acid si alcalin. Artarul japonez este o planta foarte rezistenta la daunatori si la poluare. Este un copac decorativ datorita culorii atractive a frunzelor care se schimba de la anotimp la anotimp. Artarul Japonez Atropurpureum este un copac perfect pentru decorarea gradinilor si a parcurilor. Frumusetea lui aparte in combinatie cu alti arbori va iesi in evidenta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Acer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Shirasawanum \"Aureum\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "50-70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "All Season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Acer shirasawanum Aureum este un arbust cu frunzisul cazator care face parte din familia Sapindaceae. Soiul este originar din Japonia si creste dens cu frunzisul decorativ. Primeste forme ciudate, interesante. Frunzele cresc sub forma palmat-compusa formate din 9-13 lobi. Frunzele in anotimpul de primavara sunt in nuante de verde-auriu, in anotimpul de toamna ele devin galben-portocalii, rosii.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Iarba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Carex bronze");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "50-70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "80-100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "soare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "O plant\u0103 decorativ\u0103, ce formeaz\u0103 tufe bogate, cu frunze viu colorate \xEEntr-o nuan\u021B\u0103 uimitoare de portocaliu. Se potrive\u0219te perfect \xEEn decorul oric\u0103rui peisaj. Completeaz\u0103 armonios bordurile \u0219i st\xE2nc\u0103riile, cre\xE2nd o imagine exotic\u0103.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Iarba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Hemerocallis Younique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "20-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "35-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Chiparos albastru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "100-120,120-140");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "700-800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "50-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Chamaecyparis lawsoniana Columnaris este o specie arbustiva ornamentala cunoscuta si sub numele de Chiparos Albastru Columnaris. Este una dintre cele mai cunoscute specii decorative folosite ca si gard viu. Surprinde prin nuantele de albastru si prin aspectul sau zvelt, dens. Poate fi plantat si solitar, insa in grupuri frumusetea si utilitatea lor cresc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Larice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Larice pendular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "100-120,120-140");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "150-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "320-380");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "All season");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Laricele este singurul conifer cu frunze cazatoare de la noi si se altoieste pe trunchi inalt pentru un efect deosebit. Este deosebit de decorativ prin ramurile lungi ce atarna gratios pana in pamant. Ramurile poarta fascicole de ace lungi de 1-3 cm, liniare, colorate in verde deschis care toamna inainte de cadere devin galbene. Este rezistent la seceta si se poate planta in plin soare. Suporta tunderea ramurilor la nivelul dorit: umbrela, tarator pe jos, ciuperca\u2026. Nu necesita ingrijiri speciale: udare moderata, iar primavara si toamna, pamantul se sapa in jurul copacului; primavara se administreaza fertilizante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Prunus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Laurocerasus Etna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "30, 50-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "200-300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "40-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Are cre\u0219tere rapid\u0103 \u0219i se remarc\u0103 prin aspectul frunzi\u0219ului de culoare verde-crud, frunzele noi ie\u0219ite sunt de culoarea bronzului, precum \u0219i prin inflorescen\u021Bele albe, \xEEn form\u0103 de ciorchini, puternic parfumate. Rezista p\xE2n\u0103 la -27 grade Celsius. Se folose\u0219te la garduri vii de p\xE2n\u0103 la 200 cm \xEEn\u0103l\u021Bime \u0219i 80 cm l\u0103\u021Bime. Recomand\u0103m plantarea la aproximativ 40-50 cm unul fa\u021B\u0103 de altul.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Prunus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Laurocerasus Novita");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Arbust ornamental vesnic verde condus ca si copac pe un trunchi de 90-100 cm, cu coroana compacta \u0219i densa. Frunzele ovale sunt de culoare verde str\u0103lucitor. Se preteaz\u0103 foarte bine la tuns.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Taxus Baccata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Fastigiata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "40-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "300-500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "Una dintre cele mai populare conifere din lume, Taxus baccata \"Fastigiata\" este un arbst dens, vesnic verde.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Ramurile sale rigid inaltate se mandresc cu ace lungi, dispuse radial, de culoare verde inchis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Acest soi feminin produce conuri vizibile, rosii de coral, care contrasteaza frumos cu frunzisul. Poate fi usor taiata si modelata.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](520, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "Buxus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Sempervirens Elegantissima");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "100-150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "\"Elegantissima\" este un arbust ve\u0219nic verde de dimensiuni medii, cu frunzi\u0219 dens \u0219i obicei compact rotunjit. Frunze \xEEnguste ovale sau alungite, cu margini \xEEnguste de culoare alb-crem, uneori distorsionate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](571, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Buxus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "Cimisir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "I 30-40 D 30-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "200-300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "th", 8);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "Buxus sempervirens prezinta o coroana compacta de culoare verde intens, compusa din frunze mici, stralucitoare, opus ovale, persistente. Se utilizeaza solitar, in grupuri sau in garduri vii. Rezistenta crescuta la ger. Perioada indicata pentru tundere este iulie-august. Se adapteaza oricarui tip de sol: fertil, bogat in humus sau sarac si calcaros. Poate fi expus atat in soare cat si in semiumbra permanenta fiind folosit si ca gard viu si borduri. Se uda des, dar sa nu ballteasca apa, solul sa aiba drenaj bun.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](617, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](622, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "Palmier");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "Chamaerops humilis vulcano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "55, 70, 100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "150, 250, 350");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "soare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](666, "p");

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
        value: function ngOnInit() {
          $('.buy').click(function () {
            $('.bottom').addClass("clicked");
          });
          $('.remove').click(function () {
            $('.bottom').removeClass("clicked");
          });
        }
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Este un arbust decorativ de talie medie. Frunzele cad toamna, r\u0103m\xE2n doar ramurile cu mugurii de flori ce stau peste iarn\u0103 \u0219i se deschid prim\u0103vara \xEEnainte s\u0103 porneasc\u0103 frunzele. Florile albe \u0219i deschise sunt asem\u0103n\u0103toare cu cele ale crinului. Un cop\u0103cel perfect cu flori mai diferite dec\xE2t majoritatea magnoliilor cu flori de tip lalea.");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Face parte din aceea\u0219i colec\u021Bie ca \u0219i Magnolia Liliflora Betty. Are flori \xEEnguste, \xEEn form\u0103 de clopo\u021Bel, roz profund \xEEn exterior \u0219i ro\u0219u deschis \xEEn interior. Aceasta este cea mai ro\u0219ie varietate colorat\u0103 dintre magnoliile de prim\u0103var\u0103. \xCEnflore\u0219te bogat chiar \u0219i c\xE2nd planta este t\xE2n\u0103r\u0103, prim\u0103vara mai t\xE2rziu, c\xE2nd nu risc\u0103 s\u0103 fie deteriorat de temperaturile mai sc\u0103zute din prim\u0103var\u0103. Mugurii de flori se produc pe cre\u0219terile din anul precedent, astfel c\u0103 dac\u0103 dori\u021Bi, se poate tunde imediat dup\u0103 perioada de \xEEnflorire, dar nu mai t\xE2rziu. Este de altfel u\u0219or de \xEEntre\u021Binut, suport\u0103 majoritatea tipurilor de sol. \xCEn perioadele de secet\u0103, se recomand\u0103 udarea suplimentar\u0103.");

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
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:700\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.titleS[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  min-height: 20vh;\n  background-color: teal;\n  font-size: 40px;\n  align-content: space-between;\n  text-align: center;\n}\n.titleS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 50px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  color: red;\n}\n.titletabel[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\";\n  text-align: center;\n  color: red;\n  font-size: 35px;\n  padding: 15px 25px 15px 25px;\n}\nimg[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  height: 400px;\n  width: 95%;\n}\ntable[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  width: 95%;\n  color: white;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  background-color: teal;\n}\n.col[_ngcontent-%COMP%] {\n  padding-top: 150px;\n}\nhr[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: rgba(14, 110, 110, 0.5);\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  background-size: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom.clicked[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  padding: 20px;\n  float: right;\n  width: calc(70% - 40px);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: rgba(0, 0, 0, 0.5);\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover {\n  overflow: auto;\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 80%;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]:hover   .contents[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Handlee\", cursive;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .inside[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbG9yaS9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQcm9pZWN0ZVxcYW5ndWxhclxcU3BlcmFcXHR1amEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZsb3JpXFxmbG9yaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbG9yaS9mbG9yaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpR0FBQTtBQUNBLDRGQUFBO0FBQ0EsNkdBQUE7QUFDQSxpSUFBQTtBQUNBLGlLQUFBO0FBR0Esc0VBQUE7QUFDQSwrREFBQTtBQUNBLGlLQUFBO0FBQ0EsbUpBQUE7QUFPUjtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDUEo7QURVQTtFQUNJLDRFQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDUko7QURVSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEZBQUE7RUFDQSxVQUFBO0FDUlI7QURhQTtFQUNJLGdFQUFBO0VBQ0Msa0JBQUE7RUFDRCxVQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDVko7QURrQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDZko7QURpQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDZEo7QURnQkE7RUFFRSxnQkFBQTtFQUNBLHNCQUFBO0FDZEY7QURnQkE7RUFDSSxrQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksV0FBQTtBQ2JKO0FEb0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBQ2pCSjtBRGtCSTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUNoQk47QURtQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2pCTjtBRGtCTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBSUoscUJBQUE7QUNoQko7QURtQk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDakJSO0FEa0JRO0VBQ0UsMkJBQUE7QUNoQlY7QURrQlE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQTVHSjtBQzJGUjtBRHNCUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDcEJWO0FEcUJVO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ25CWjtBRDBCSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQ3hCTjtBRHlCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3ZCUjtBRDBCTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUN4QlI7QUR5QlE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUN2QlY7QUR5QlE7RUFFRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ3hCVjtBRDJCTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0FDekJSO0FEMkJRO0VBQ0UsWUFBQTtFQUNBLCtCQWpMRjtBQ3dKUjtBRDJCUTtFQUVFLGVBQUE7RUFDQSxZQUFBO0FDMUJWO0FENEJRO0VBQ0ksZUFBQTtFQUNDLFlBQUE7QUMxQmIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zsb3JpL2Zsb3JpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8nKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UZWtvOjcwMCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29va2llJmZhbWlseT1IYW5kbGVlJmZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1Tb2ZpYSZmYW1pbHk9VGFuZ2VyaW5lOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kZm9udDE6ICdDb29raWUnLCBjdXJzaXZlO1xyXG4kZm9udDI6ICdIYW5kbGVlJywgY3Vyc2l2ZTtcclxuJGZvbnQzOiAnUGFyaXNpZW5uZScsIGN1cnNpdmU7XHJcbiRmb250NDogJ1NvZmlhJywgY3Vyc2l2ZTtcclxuJGZvbnQ1OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcclxuXHJcbip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbn1cclxuLnRpdGxlU3tcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnRGFuY2luZyBTY3JpcHQnLCdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDIwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGNvbG9yOnJlZDtcclxuICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZXRhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2Fucyc7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4IDE1cHggMjVweDtcclxufVxyXG4vLyAudGl0bGUye1xyXG4vLyAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbi8vICAgICBmb250LXNpemU6IDI1cHg7XHJcbi8vICAgICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xyXG4vLyB9XHJcbmltZ3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbnRhYmxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2Vje1xyXG5cclxuICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbn1cclxuLmNvbHtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuXHJcbi8vIGNvZDJcclxuXHJcbiAgXHJcbiAgLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cywgdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICBib3gtc2hhZG93OiA1cHggMjBweCAzMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgIC50b3B7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm90dG9te1xyXG4gICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICYuY2xpY2tlZHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEsaDUscHsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46MTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQyO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yaWdodHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQTZDRERFO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICBoZWlnaHQ6MjAwJTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAuZGV0YWlsc3tcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg3MCUgLSA0MHB4KTtcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5zaWRle1xyXG4gICAgICB6LWluZGV4Ojk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLDAuNSk7XHJcbiAgICAgIHdpZHRoOjE0MHB4O1xyXG4gICAgICBoZWlnaHQ6MTQwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtNzBweDtcclxuICAgICAgcmlnaHQ6IC03MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwMHB4IDIwMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cywgYm9yZGVyLXJhZGl1cyAycywgdG9wIDFzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuaWNvbntcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDo4NXB4O1xyXG4gICAgICAgIHRvcDo4NXB4O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBoZWlnaHQ6ODAlO1xyXG4gICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHJpZ2h0OjE1cHg7XHJcbiAgICAgICAgICB0b3A6MTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnRze1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29udGVudHN7XHJcbiAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIHRyYW5zZm9ybSAwLjhzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGgxLGg1ICxwe1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm9cIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UZWtvOjcwMFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29va2llJmZhbWlseT1IYW5kbGVlJmZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1Tb2ZpYSZmYW1pbHk9VGFuZ2VyaW5lOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50aXRsZVMge1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJEYW5jaW5nIFNjcmlwdFwiLCBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtaW4taGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXRsZVMgaDEge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRpdGxldGFiZWwge1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJEYW5jaW5nIFNjcmlwdFwiLCBcIkpvc2VmaW4gU2Fuc1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgcGFkZGluZzogMTVweCAyNXB4IDE1cHggMjVweDtcbn1cblxuaW1nIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogOTUlO1xufVxuXG50YWJsZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VjIHtcbiAgbWluLWhlaWdodDogNjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cywgdHJhbnNmb3JtIDAuNXM7XG59XG4ud3JhcHBlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGJveC1zaGFkb3c6IDVweCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC50b3Age1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20ge1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tLmNsaWNrZWQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gaDEsIC53cmFwcGVyIC5jb250YWluZXIgLmJvdHRvbSBoNSwgLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIHAge1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSGFuZGxlZVwiLCBjdXJzaXZlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYm90dG9tIC5yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNBNkNEREU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDIwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5ib3R0b20gLnJpZ2h0IC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogY2FsYyg3MCUgLSA0MHB4KTtcbn1cbi53cmFwcGVyIC5pbnNpZGUge1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03MHB4O1xuICByaWdodDogLTcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjAwcHggMjAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzLCBib3JkZXItcmFkaXVzIDJzLCB0b3AgMXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud3JhcHBlciAuaW5zaWRlIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogODVweDtcbiAgdG9wOiA4NXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG59XG4ud3JhcHBlciAuaW5zaWRlOmhvdmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDgwJTtcbn1cbi53cmFwcGVyIC5pbnNpZGU6aG92ZXIgLmljb24ge1xuICBvcGFjaXR5OiAwO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xufVxuLndyYXBwZXIgLmluc2lkZTpob3ZlciAuY29udGVudHMge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4ud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyB7XG4gIHBhZGRpbmc6IDUlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuOHM7XG59XG4ud3JhcHBlciAuaW5zaWRlIC5jb250ZW50cyBoMSwgLndyYXBwZXIgLmluc2lkZSAuY29udGVudHMgaDUsIC53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkhhbmRsZWVcIiwgY3Vyc2l2ZTtcbn1cbi53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi53cmFwcGVyIC5pbnNpZGUgLmNvbnRlbnRzIGg1IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"]
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
      decls: 92,
      vars: 0,
      consts: [[1, "sec"], [1, "row"], [1, "col-md-12", "d-flex", "justify-content-center", "mb-5", "menu"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar"], ["role", "group", "aria-label", "First group", 1, "btn-group", "mr-2"], ["type", "button", "data-rel", "all", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["role", "group", "aria-label", "Second group", 1, "btn-group", "mr-2"], ["type", "button", "data-rel", "1", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "2", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "3", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "4", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "5", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["type", "button", "data-rel", "6", 1, "btn", "btn-outline-black", "waves-effect", "filter"], ["id", "gallery", 1, "gallery"], [1, "mb-3", "pics", "animation", "all", "1"], ["src", "assets/pics/tuja/Grasilis.jpg", "alt", "Card image cap", 1, "img-fluid", "img"], ["src", "assets/pics/tuja/TuiaGlobosa.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/tuja/TuiaSmaragd.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/tuja/TuiaNanaAurea.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "2"], ["src", "assets/pics/brazi/Douglas.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/piceaglaucaconica.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/piceadaisywhite.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/pinusmugo.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/pinnigra.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/piceapungens.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/brazi/abiesnordmanniana.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "3"], ["src", "assets/pics/ienupar/pingii-loderi.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/spartan.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/blue-arrow.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/stricta.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/variegata.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/princeofwalles.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/ienupar/virginiana.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "4"], ["src", "assets/pics/plante diverse/artar.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/salcie.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/larice.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/chiparos.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/chiparosblue.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/hemerocallisyounique.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/carexbronze.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/tisataxusbacata.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/prunus.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/buxusbicolor.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/sempervirenspapa.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/plante diverse/buxuscimisir.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "mb-3", "pics", "animation", "all", "5"], ["src", "assets/pics/flori/trandafir.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/flori/royalstar.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/pics/flori/susan.jpg", "alt", "Card image cap", 1, "img-fluid"]],
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
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n.sec[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding-bottom: 10vh;\n}\n.gallery[_ngcontent-%COMP%] {\n  -moz-column-count: 3;\n  column-count: 3;\n  -moz-column-width: 33%;\n  column-width: 33%;\n}\n.gallery[_ngcontent-%COMP%]   .pics[_ngcontent-%COMP%] {\n  transition: all 350ms ease;\n}\n.gallery[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.btn-toolbar[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn.filter[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 16px;\n  transition: 0.7s ease-in;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.btn.filter[_ngcontent-%COMP%]:hover {\n  background-color: #0e6e6e;\n  color: lightcyan;\n}\n.pics[_ngcontent-%COMP%] {\n  margin: 20px;\n  overflow: hidden;\n  \n}\nimg[_ngcontent-%COMP%] {\n  display: block;\n  display: block;\n  transition: all 0.3s;\n}\n.pics[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n@media (max-width: 450px) {\n  .gallery[_ngcontent-%COMP%] {\n    -moz-column-count: 1;\n    column-count: 1;\n    -moz-column-width: 100%;\n    column-width: 100%;\n  }\n}\n@media (max-width: 300px) {\n  .btn.filter[_ngcontent-%COMP%] {\n    padding-left: 1.1rem;\n    padding-right: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3RvL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFByb2llY3RlXFxhbmd1bGFyXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm90b1xcZm90by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb3RvL2ZvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUFDQSw0RkFBQTtBQUNBLDZHQUFBO0FBQ0EsaUlBQUE7QUFDQSxpS0FBQTtBQUVSO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQ0FKO0FER0E7RUFFSSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUVBLDBCQUFBO0FDRUo7QURESTtFQUdBLG1CQUFBO0FDSUo7QURGQTtFQUVJLGVBQUE7QUNJSjtBREFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSwwRkFBQTtBQ0dKO0FEREE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDSUo7QURBQTtFQUdJLFlBQUE7RUFDQSxnQkFBQTtFQUE2Qix1REFBQTtBQ0VqQztBREFFO0VBR0UsY0FBQTtFQUdBLGNBQUE7RUFHQSxvQkFBQTtBQ0RKO0FES087RUFLQyxxQkFBQTtBQ0pSO0FEV0k7RUFDQTtJQUVBLG9CQUFBO0lBQ0EsZUFBQTtJQUVBLHVCQUFBO0lBQ0Esa0JBQUE7RUNSRjtBQUNGO0FEV0k7RUFDQTtJQUNBLG9CQUFBO0lBQ0EscUJBQUE7RUNURjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3RvL2ZvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5zZWN7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcclxuICAgIC1tb3otY29sdW1uLWNvdW50OiAzO1xyXG4gICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IDMzJTtcclxuICAgIC1tb3otY29sdW1uLXdpZHRoOiAzMyU7XHJcbiAgICBjb2x1bW4td2lkdGg6IDMzJTsgfVxyXG4gICAgLmdhbGxlcnkgLnBpY3Mge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlOyB9XHJcbiAgICAuZ2FsbGVyeSAuYW5pbWF0aW9uIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgXHJcbn1cclxuLmJ0bi10b29sYmFye1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmJ0bi5maWx0ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogIDAuN3MgZWFzZS1pbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnTGVja2VybGkgT25lJywgY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5idG4uZmlsdGVyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICBjb2xvcjogbGlnaHRjeWFuO1xyXG4gICAgXHJcblxyXG59XHJcbi5waWNzIHtcclxuIFxyXG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICAvKiBjbGlwIHRoZSBleGNlc3Mgd2hlbiBjaGlsZCBnZXRzIGJpZ2dlciB0aGFuIHBhcmVudCAqL1xyXG4gIH1cclxuICBpbWd7XHJcbiAgXHJcbiAgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHM7ICAgLyogc21vb3RoZXIgem9vbSAqL1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAucGljczpob3ZlciBpbWcge1xyXG4gICAgICAgIC8vIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gXHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLmdhbGxlcnkge1xyXG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XHJcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMTtcclxuICAgIGNvbHVtbi1jb3VudDogMTtcclxuICAgIC13ZWJraXQtY29sdW1uLXdpZHRoOiAxMDAlO1xyXG4gICAgLW1vei1jb2x1bW4td2lkdGg6IDEwMCU7XHJcbiAgICBjb2x1bW4td2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLmJ0bi5maWx0ZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjFyZW07XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG4uc2VjIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xufVxuXG4uZ2FsbGVyeSB7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xuICAtbW96LWNvbHVtbi1jb3VudDogMztcbiAgY29sdW1uLWNvdW50OiAzO1xuICAtd2Via2l0LWNvbHVtbi13aWR0aDogMzMlO1xuICAtbW96LWNvbHVtbi13aWR0aDogMzMlO1xuICBjb2x1bW4td2lkdGg6IDMzJTtcbn1cblxuLmdhbGxlcnkgLnBpY3Mge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZTtcbn1cblxuLmdhbGxlcnkgLmFuaW1hdGlvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5idG4tdG9vbGJhciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bi5maWx0ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbjtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uYnRuLmZpbHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZlNmU7XG4gIGNvbG9yOiBsaWdodGN5YW47XG59XG5cbi5waWNzIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBjbGlwIHRoZSBleGNlc3Mgd2hlbiBjaGlsZCBnZXRzIGJpZ2dlciB0aGFuIHBhcmVudCAqL1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogYmxvY2s7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucGljczpob3ZlciBpbWcge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5nYWxsZXJ5IHtcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMTtcbiAgICAtbW96LWNvbHVtbi1jb3VudDogMTtcbiAgICBjb2x1bW4tY291bnQ6IDE7XG4gICAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IDEwMCU7XG4gICAgLW1vei1jb2x1bW4td2lkdGg6IDEwMCU7XG4gICAgY29sdW1uLXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmJ0bi5maWx0ZXIge1xuICAgIHBhZGRpbmctbGVmdDogMS4xcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMXJlbTtcbiAgfVxufSJdfQ== */"]
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
      styles: ["@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);\n@import url(https://fonts.googleapis.com/css?family=Teko:700);\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.saturate[_ngcontent-%COMP%] {\n  filter: saturate(3);\n  -webkit-filter: saturate(3);\n}\n.grayscale[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n  -webkit-filter: grayscale(100%);\n}\n.contrast[_ngcontent-%COMP%] {\n  filter: contrast(160%);\n  -webkit-filter: contrast(160%);\n}\n.brightness[_ngcontent-%COMP%] {\n  filter: brightness(0.25);\n  -webkit-filter: brightness(0.25);\n}\n.blur[_ngcontent-%COMP%] {\n  filter: blur(3px);\n  -webkit-filter: blur(3px);\n}\n.invert[_ngcontent-%COMP%] {\n  filter: invert(100%);\n  -webkit-filter: invert(100%);\n}\n.sepia[_ngcontent-%COMP%] {\n  filter: sepia(100%);\n  -webkit-filter: sepia(100%);\n}\n.huerotate[_ngcontent-%COMP%] {\n  filter: hue-rotate(180deg);\n  -webkit-filter: hue-rotate(180deg);\n}\n.rss.opacity[_ngcontent-%COMP%] {\n  filter: opacity(50%);\n  -webkit-filter: opacity(50%);\n}\nheader[_ngcontent-%COMP%] {\n  background: url(\"/assets/pics/5.jpg\");\n  text-align: center;\n  width: 100%;\n  height: auto;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0 0 85% 85%/30%;\n}\n.img-fluid[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 300px;\n}\n.dive[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.267);\n  width: 100%;\n  height: auto;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0 0 85% 85%/30%;\n}\nheader[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  color: #FFF;\n  text-shadow: 2px 2px 2px #333;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Handlee\", cursive, \"Dancing Script\", cursive;\n  font-size: 30px;\n  margin-bottom: 20px;\n}\nh3[_ngcontent-%COMP%] {\n  font-family: \"Handlee\", cursive, \"Open Sans\", sans-serif;\n  margin: 0 10px 40px 10px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUHJvaWVjdGVcXGFuZ3VsYXJcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9FQUFBO0FBQ0EsNkRBQUE7QUFDQSxpS0FBQTtBQUNBLG1KQUFBO0FBT1I7RUFBRSxVQUFBO0VBQVksU0FBQTtFQUFXLHNCQUFBO0FDRnpCO0FESUE7RUFBWSxtQkFBQTtFQUNaLDJCQUFBO0FDQUE7QURDQTtFQUFhLHVCQUFBO0VBQ1QsK0JBQUE7QUNHSjtBREZBO0VBQVksc0JBQUE7RUFDUiw4QkFBQTtBQ01KO0FESkE7RUFBYyx3QkFBQTtFQUF5QixnQ0FBQTtBQ1N2QztBRFJBO0VBQVEsaUJBQUE7RUFBbUIseUJBQUE7QUNhM0I7QURaQTtFQUFVLG9CQUFBO0VBQXNCLDRCQUFBO0FDaUJoQztBRGhCQTtFQUFTLG1CQUFBO0VBQXFCLDJCQUFBO0FDcUI5QjtBRHBCQTtFQUFhLDBCQUFBO0VBQTRCLGtDQUFBO0FDeUJ6QztBRHhCQTtFQUFlLG9CQUFBO0VBQXNCLDRCQUFBO0FDNkJyQztBRDNCQTtFQUNDLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUM4QkQ7QUQ1QkE7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0FDOEJKO0FEM0JBO0VBQ0ksc0NBQUE7RUFDQSxXQUFBO0VBQ0gsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUM4QkQ7QUQ1QkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUMrQkQ7QUQxQkE7RUFDQywwREFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzZCRDtBRDFCQTtFQUNDLHdEQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDNkJEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Bybyk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UZWtvOjcwMCk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRmb250MTogJ0Nvb2tpZScsIGN1cnNpdmU7XHJcbiRmb250MjogJ0hhbmRsZWUnLCBjdXJzaXZlO1xyXG4kZm9udDM6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcclxuJGZvbnQ0OiAnU29maWEnLCBjdXJzaXZlO1xyXG4kZm9udDU6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG5cclxuKntwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuLnNhdHVyYXRlIHsgZmlsdGVyOiBzYXR1cmF0ZSgzKTtcclxuLXdlYmtpdC1maWx0ZXI6IHNhdHVyYXRlKDMpOyB9XHJcbi5ncmF5c2NhbGUgeyBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgIC13ZWJraXQtZmlsdGVyOmdyYXlzY2FsZSgxMDAlKSB9XHJcbi5jb250cmFzdCB7IGZpbHRlcjogY29udHJhc3QoMTYwJSk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjpjb250cmFzdCgxNjAlKVxyXG4gfVxyXG4uYnJpZ2h0bmVzcyB7IGZpbHRlcjogYnJpZ2h0bmVzcygwLjI1KTstd2Via2l0LWZpbHRlcjpicmlnaHRuZXNzKDAuMjUpIH1cclxuLmJsdXIgeyBmaWx0ZXI6IGJsdXIoM3B4KTsgLXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpfVxyXG4uaW52ZXJ0IHsgZmlsdGVyOiBpbnZlcnQoMTAwJSk7IC13ZWJraXQtZmlsdGVyOmludmVydCgxMDAlKX1cclxuLnNlcGlhIHsgZmlsdGVyOiBzZXBpYSgxMDAlKTsgLXdlYmtpdC1maWx0ZXI6c2VwaWEoMTAwJSl9XHJcbi5odWVyb3RhdGUgeyBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTgwZGVnKTsgLXdlYmtpdC1maWx0ZXI6aHVlLXJvdGF0ZSgxODBkZWcpfVxyXG4ucnNzLm9wYWNpdHkgeyBmaWx0ZXI6IG9wYWNpdHkoNTAlKTsgLXdlYmtpdC1maWx0ZXI6b3BhY2l0eSg1MCUpfVxyXG5cclxuaGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvcGljcy81LmpwZycpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMCA4NSUgODUlIC8gMzAlO1xyXG59XHJcbi5pbWctZmx1aWR7XHJcbiAgICBcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuXHJcbn1cclxuLmRpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjY3KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLXJhZGl1czogMCAwIDg1JSA4NSUgLyAzMCU7XHJcbn1cclxuaGVhZGVyIC5vdmVybGF5e1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGNvbG9yOiAjRkZGO1xyXG5cdHRleHQtc2hhZG93OiAycHggMnB4IDJweCAjMzMzO1xyXG4gICAgXHJcblx0XHJcbn1cclxuXHJcbmgxIHtcclxuXHRmb250LWZhbWlseTogJGZvbnQyLCdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmgze1xyXG5cdGZvbnQtZmFtaWx5OiAkZm9udDIsJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblx0bWFyZ2luOiAwIDEwcHggNDBweCAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UZWtvOjcwMCk7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2F0dXJhdGUge1xuICBmaWx0ZXI6IHNhdHVyYXRlKDMpO1xuICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMyk7XG59XG5cbi5ncmF5c2NhbGUge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cblxuLmNvbnRyYXN0IHtcbiAgZmlsdGVyOiBjb250cmFzdCgxNjAlKTtcbiAgLXdlYmtpdC1maWx0ZXI6IGNvbnRyYXN0KDE2MCUpO1xufVxuXG4uYnJpZ2h0bmVzcyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjI1KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMC4yNSk7XG59XG5cbi5ibHVyIHtcbiAgZmlsdGVyOiBibHVyKDNweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbi5pbnZlcnQge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcbn1cblxuLnNlcGlhIHtcbiAgZmlsdGVyOiBzZXBpYSgxMDAlKTtcbiAgLXdlYmtpdC1maWx0ZXI6IHNlcGlhKDEwMCUpO1xufVxuXG4uaHVlcm90YXRlIHtcbiAgZmlsdGVyOiBodWUtcm90YXRlKDE4MGRlZyk7XG4gIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKDE4MGRlZyk7XG59XG5cbi5yc3Mub3BhY2l0eSB7XG4gIGZpbHRlcjogb3BhY2l0eSg1MCUpO1xuICAtd2Via2l0LWZpbHRlcjogb3BhY2l0eSg1MCUpO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3BpY3MvNS5qcGdcIik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwIDAgODUlIDg1JS8zMCU7XG59XG5cbi5pbWctZmx1aWQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLmRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjY3KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwIDAgODUlIDg1JS8zMCU7XG59XG5cbmhlYWRlciAub3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzMzMztcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmUsIFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkhhbmRsZWVcIiwgY3Vyc2l2ZSwgXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDEwcHggNDBweCAxMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */"]
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
      decls: 465,
      vars: 0,
      consts: [[1, "titleS"], [1, "sec"], ["id", "card-visitors", 1, "card"], ["type", "checkbox", "id", "card-visitors-indicator"], [1, "header"], ["for", "card-visitors-indicator", 1, "indicator"], ["width", "18", "height", "27", 1, "open"], ["x1", "1.5", "y1", "12", "x2", "2", "y2", "25", "stroke-linecap", "round", 2, "stroke", "#FFFFFF", "stroke-width", "3"], ["x1", "9", "y1", "7", "x2", "9", "y2", "25", "stroke-linecap", "round", 2, "stroke", "#FFFFFF", "stroke-width", "3"], ["x1", "16.5", "y1", "2", "x2", "16.5", "y2", "25", "stroke-linecap", "round", 2, "stroke", "#FFFFFF", "stroke-width", "3"], ["width", "15", "height", "25", 1, "close"], ["x1", "1.5", "y1", "13.5", "x2", "15", "y2", "0", 2, "stroke", "#FFFFFF", "stroke-width", "3"], ["x1", "1.5", "y1", "11.5", "x2", "15", "y2", "25", 2, "stroke", "#FFFFFF", "stroke-width", "3"], [1, "content"], [1, "data"], [1, "top"], [1, "title"], [1, "date"], ["src", "/assets/pics/1.jpg", "alt", ""], [1, "float"], [1, "info"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "row", "pozatabel"], [1, "col-xl-6", "col-sm-12", "col-xs-6", "header"], ["src", "/assets/pics/ienupar/blue-arrow.jpg", "alt", "blue-arrow", 1, "img-fluid"], [1, "col-xl-6", "col-sm-12", "col-xs-6"], [1, "text-center", "titletabel"], [1, "row", "detalii"], [1, "col-xl-12", "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], [1, "title1"], [1, "row"], [1, "col-sm-6", "col-xs-6"], ["src", "/assets/pics/ienupar/blue-arrow.jpg", "alt", "tuja", 1, "img-fluid"], [1, "text-center", "title2"], [1, "col-sm-12", "col-xs-12"], [1, "col"], ["src", "/assets/pics/ienupar/pingii-loderi.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/ienupar/spartan.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/ienupar/princeofwalles1.jpg", "alt", "tuja", 1, "img-fluid"]],
      template: function IenuparComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ienupari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "line", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "line", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Blue Arrow este un ienup\u0103r suplu \u0219i zvelt, cu cre\u0219tere vertical\u0103 \u0219i coroan\u0103 \xEEngust\u0103, cu ramurile lungi, \xEEndreptate \xEEn sus. Culoarea acelor oscileaz\u0103 de la albastru-verzui la albastru-argintiu. Crestere rapida \u0219i \xEE\u0219i p\u0103streaz\u0103 forma chiar \u0219i f\u0103r\u0103 t\u0103iere. Eman\u0103 un miros pl\u0103cut, \xEEn special la atingere. Ienuperii tolereaz\u0103 orice sol, cu excep\u021Bia celor unde b\u0103lte\u0219te apa. Se dezvolt\u0103 cel mai bine \xEEn locuri \xEEnsorite sau u\u0219or umbrite. Odat\u0103 stabilit, tolereaz\u0103 seceta pe termen lung \u0219i v\xE2nturile puternice. Tunderea nu este necesar\u0103 dar se poate face prim\u0103vara \xEEnainte de \xEEncol\u021Bire sau spre sf\xE2r\u0219itul verii. Complet rezistent p\xE2n\u0103 la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "15 Sep 2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "150-170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "500-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "150-170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "500-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "blockquote", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Blue Arrow este un ienup\u0103r suplu \u0219i zvelt, cu cre\u0219tere vertical\u0103 \u0219i coroan\u0103 \xEEngust\u0103, cu ramurile lungi, \xEEndreptate \xEEn sus. Culoarea acelor oscileaz\u0103 de la albastru-verzui la albastru-argintiu. Crestere rapida \u0219i \xEE\u0219i p\u0103streaz\u0103 forma chiar \u0219i f\u0103r\u0103 t\u0103iere. Eman\u0103 un miros pl\u0103cut, \xEEn special la atingere. Ienuperii tolereaz\u0103 orice sol, cu excep\u021Bia celor unde b\u0103lte\u0219te apa. Se dezvolt\u0103 cel mai bine \xEEn locuri \xEEnsorite sau u\u0219or umbrite. Odat\u0103 stabilit, tolereaz\u0103 seceta pe termen lung \u0219i v\xE2nturile puternice. Tunderea nu este necesar\u0103 dar se poate face prim\u0103vara \xEEnainte de \xEEncol\u021Bire sau spre sf\xE2r\u0219itul verii. Complet rezistent p\xE2n\u0103 la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "line", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "line", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "line", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "line", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "line", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Blue Arrow este un ienup\u0103r suplu \u0219i zvelt, cu cre\u0219tere vertical\u0103 \u0219i coroan\u0103 \xEEngust\u0103, cu ramurile lungi, \xEEndreptate \xEEn sus. Culoarea acelor oscileaz\u0103 de la albastru-verzui la albastru-argintiu. Crestere rapida \u0219i \xEE\u0219i p\u0103streaz\u0103 forma chiar \u0219i f\u0103r\u0103 t\u0103iere. Eman\u0103 un miros pl\u0103cut, \xEEn special la atingere. Ienuperii tolereaz\u0103 orice sol, cu excep\u021Bia celor unde b\u0103lte\u0219te apa. Se dezvolt\u0103 cel mai bine \xEEn locuri \xEEnsorite sau u\u0219or umbrite. Odat\u0103 stabilit, tolereaz\u0103 seceta pe termen lung \u0219i v\xE2nturile puternice. Tunderea nu este necesar\u0103 dar se poate face prim\u0103vara \xEEnainte de \xEEncol\u021Bire sau spre sf\xE2r\u0219itul verii. Complet rezistent p\xE2n\u0103 la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "15 Sep 2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "150-170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "500-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h2", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "150-170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "500-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "blockquote", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Blue Arrow este un ienup\u0103r suplu \u0219i zvelt, cu cre\u0219tere vertical\u0103 \u0219i coroan\u0103 \xEEngust\u0103, cu ramurile lungi, \xEEndreptate \xEEn sus. Culoarea acelor oscileaz\u0103 de la albastru-verzui la albastru-argintiu. Crestere rapida \u0219i \xEE\u0219i p\u0103streaz\u0103 forma chiar \u0219i f\u0103r\u0103 t\u0103iere. Eman\u0103 un miros pl\u0103cut, \xEEn special la atingere. Ienuperii tolereaz\u0103 orice sol, cu excep\u021Bia celor unde b\u0103lte\u0219te apa. Se dezvolt\u0103 cel mai bine \xEEn locuri \xEEnsorite sau u\u0219or umbrite. Odat\u0103 stabilit, tolereaz\u0103 seceta pe termen lung \u0219i v\xE2nturile puternice. Tunderea nu este necesar\u0103 dar se poate face prim\u0103vara \xEEnainte de \xEEncol\u021Bire sau spre sf\xE2r\u0219itul verii. Complet rezistent p\xE2n\u0103 la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h1", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h2", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Blue Arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "150-170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "500-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "blockquote", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Blue Arrow este un ienup\u0103r suplu \u0219i zvelt, cu cre\u0219tere vertical\u0103 \u0219i coroan\u0103 \xEEngust\u0103, cu ramurile lungi, \xEEndreptate \xEEn sus. Culoarea acelor oscileaz\u0103 de la albastru-verzui la albastru-argintiu. Crestere rapida \u0219i \xEE\u0219i p\u0103streaz\u0103 forma chiar \u0219i f\u0103r\u0103 t\u0103iere. Eman\u0103 un miros pl\u0103cut, \xEEn special la atingere. Ienuperii tolereaz\u0103 orice sol, cu excep\u021Bia celor unde b\u0103lte\u0219te apa. Se dezvolt\u0103 cel mai bine \xEEn locuri \xEEnsorite sau u\u0219or umbrite. Odat\u0103 stabilit, tolereaz\u0103 seceta pe termen lung \u0219i v\xE2nturile puternice. Tunderea nu este necesar\u0103 dar se poate face prim\u0103vara \xEEnainte de \xEEncol\u021Bire sau spre sf\xE2r\u0219itul verii. Complet rezistent p\xE2n\u0103 la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h1", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "h2", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Pingii-loderi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "30-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "blockquote", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Acest soi de ienupar se poate planta si pastra si in ghivece fiind ideal pentru gradinile mici unde spatiul este limitat deoarece formeaza un decor pe masura. Poate fi plantat si in parcuri si spatii verzi publice. Arata uimitor mai ales in aranjamentele de stancarii si in gradinile alpine.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Frunzisul ienuparului Pingii Loderi este intr-o nuanta argintie-verzuie. Rezista foarte bine la orice conditii de mediu si poate fi plantat si in soluri nisipoase cu umiditate medie sau uscate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Poate atinge timp de zece ani inaltimea maxima de 150 cm dar inaltimea medie este cuprinsa intre 20-30 de centimetri. Indrageste locurile cu soare din abundenta, in care isi pastreaza o culoare verzuie vie si vibranta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "h1", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "line", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "line", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "line", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "line", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "line", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Visitors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "01 Sep 2016 - 15 Sep 2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Blue Arrow este un ienup\u0103r suplu \u0219i zvelt, cu cre\u0219tere vertical\u0103 \u0219i coroan\u0103 \xEEngust\u0103, cu ramurile lungi, \xEEndreptate \xEEn sus. Culoarea acelor oscileaz\u0103 de la albastru-verzui la albastru-argintiu. Crestere rapida \u0219i \xEE\u0219i p\u0103streaz\u0103 forma chiar \u0219i f\u0103r\u0103 t\u0103iere. Eman\u0103 un miros pl\u0103cut, \xEEn special la atingere. Ienuperii tolereaz\u0103 orice sol, cu excep\u021Bia celor unde b\u0103lte\u0219te apa. Se dezvolt\u0103 cel mai bine \xEEn locuri \xEEnsorite sau u\u0219or umbrite. Odat\u0103 stabilit, tolereaz\u0103 seceta pe termen lung \u0219i v\xE2nturile puternice. Tunderea nu este necesar\u0103 dar se poate face prim\u0103vara \xEEnainte de \xEEncol\u021Bire sau spre sf\xE2r\u0219itul verii. Complet rezistent p\xE2n\u0103 la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "15 Sep 2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "h2", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Spartan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "150-170");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "500-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "blockquote", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Crestere rapida \u0219i \xEE\u0219i p\u0103streaz\u0103 forma chiar \u0219i f\u0103r\u0103 t\u0103iere.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Ienuperii tolereaz\u0103 orice sol, cu excep\u021Bia celor unde b\u0103lte\u0219te apa. Se dezvolt\u0103 cel mai bine \xEEn locuri \xEEnsorite sau u\u0219or umbrite. Odat\u0103 stabilit, tolereaz\u0103 seceta pe termen lung \u0219i v\xE2nturile puternice. Tunderea nu este necesar\u0103 dar se poate face prim\u0103vara \xEEnainte de \xEEncol\u021Bire sau spre sf\xE2r\u0219itul verii. Complet rezistent p\xE2n\u0103 la -40 grade Celsius.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "h1", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "h2", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Juniperus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Prince of Walles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "D 60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Intindere 100-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Soare, semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "blockquote", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Impr\u0103\u0219tiat ca un covor de frunzi\u0219 luxuriant, verde str\u0103lucitor, \xEEn form\u0103 de stea. In toamna \u0219i iarna isi schimba culoarea in nuanta prunei.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "D\u0103un\u0103torii ocazionali de insecte includ afide, viermi. Ave\u021Bi grij\u0103 la acarienii p\u0103ianjen. Frunzele plantelor mature vor muri uneori \xEEn centru.");

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
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:700\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n@import \"https://fonts.googleapis.com/css?family=Roboto:300,400,500&subset=latin-ext\";\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.titleS[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  min-height: 20vh;\n  background-color: teal;\n  font-size: 40px;\n  align-content: space-between;\n  text-align: center;\n}\n.titleS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 50px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  color: red;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 95vh;\n  background-color: teal;\n  margin: 0 25px 10px 25px;\n}\n.titletabel[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\";\n  text-align: center;\n  color: red;\n  font-size: 35px;\n  padding: 15px 25px 15px 25px;\n}\nimg[_ngcontent-%COMP%] {\n  border: 1px solid #0e6e6e;\n  background-color: rgba(14, 110, 110, 0.5);\n  border-radius: 3px;\n  padding: 5px;\n  height: 60vh;\n  width: 100%;\n}\ntable[_ngcontent-%COMP%] {\n  border: 1px solid #0e6e6e;\n  background-color: rgba(14, 110, 110, 0.5);\n  border-radius: 3px;\n  padding-left: 10px;\n  width: 100%;\n  height: 100%;\n  min-width: 150px;\n  color: white;\n  font-family: \"Josefin Sans\";\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n}\n.help[_ngcontent-%COMP%] {\n  border: 1px solid #0e6e6e;\n  background-color: rgba(14, 110, 110, 0.5);\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin: 0px 15px 40px 0px;\n  background-color: #0e6e6e;\n  color: white;\n  font-family: \"Josefin Sans\";\n  width: 100%;\n  height: 100%;\n}\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 5px;\n  background-color: rgba(14, 110, 110, 0.5);\n}\n*[_ngcontent-%COMP%] {\n  z-index: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  color: #212121;\n  background-color: #212121;\n}\n.indicator[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  border-radius: 5px;\n}\n.card#card-visitors[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  margin: calc((100vh - 400px) / 2) auto;\n}\n.card#card-visitors[_ngcontent-%COMP%]   input[type=checkbox]#card-visitors-indicator[_ngcontent-%COMP%] {\n  display: none;\n}\n.card#card-visitors[_ngcontent-%COMP%]   input[type=checkbox]#card-visitors-indicator[_ngcontent-%COMP%]:checked    + .header[_ngcontent-%COMP%]   label.indicator[_ngcontent-%COMP%] {\n  top: 30%;\n  right: calc(50% - 25px);\n  margin: calc(-30% - 25px) calc(50% - 25px) 0 0;\n  background-color: transparent;\n  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, right 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 0s cubic-bezier(0.4, 0, 0.2, 1) 0.6s, margin 0s cubic-bezier(0.4, 0, 0.2, 1) 0.9s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   input[type=checkbox]#card-visitors-indicator[_ngcontent-%COMP%]:checked    + .header[_ngcontent-%COMP%]   label.indicator[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   input[type=checkbox]#card-visitors-indicator[_ngcontent-%COMP%]:checked    + .header[_ngcontent-%COMP%]   label.indicator[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.9s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   input[type=checkbox]#card-visitors-indicator[_ngcontent-%COMP%]:checked    + .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.45s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   input[type=checkbox]#card-visitors-indicator[_ngcontent-%COMP%]:checked    + .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .line-container[_ngcontent-%COMP%] {\n  max-height: 80%;\n  transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.9s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   input[type=checkbox]#card-visitors-indicator[_ngcontent-%COMP%]:checked    + .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .float[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(10);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, opacity 0s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  background-color: teal;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   label.indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  width: 50px;\n  height: 50px;\n  top: calc(60% - 25px);\n  right: 20px;\n  margin: 0;\n  border-radius: 100%;\n  background-color: #ff9800;\n  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, right 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, margin 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   label.indicator[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 11.5px 16px;\n  opacity: 1;\n  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   label.indicator[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 12.5px 17.5px;\n  transform: scale(0);\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 500;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background-color: #ff9800;\n  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% - 40px);\n  height: 60%;\n  margin: 0 20px 20px 20px;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 20%;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #ffffff;\n  opacity: 0.25;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  opacity: 0.7;\n  font-size: 13px;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  width: 90%;\n  height: 100%;\n  top: 0;\n  margin-left: 10%;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% / 14);\n  height: 100%;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .line-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: absolute;\n  width: 2px;\n  height: 80%;\n  max-height: 0;\n  bottom: 20%;\n  margin: 0 calc((100% - 2px) / 2);\n  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .line-container[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #ffffff;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 20%;\n  bottom: 0;\n  margin-bottom: -3px;\n  opacity: 0.7;\n  font-size: 13px;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 25px;\n  line-height: 30px;\n  text-align: center;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 0.7;\n  text-align: center;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .float[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  right: calc(50% - 25px);\n  opacity: 0;\n  border-radius: 100%;\n  background-color: #ff9800;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, opacity 0s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  height: calc(40% - 80px);\n  padding: 40px 20px;\n  color: #9e9e9e;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #212121;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 40px;\n}\n.card#card-visitors[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pZW51cGFyL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFByb2llY3RlXFxhbmd1bGFyXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaWVudXBhclxcaWVudXBhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pZW51cGFyL2llbnVwYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUFDQSw0RkFBQTtBQUNBLDZHQUFBO0FBQ0EsaUlBQUE7QUFDQSxpS0FBQTtBQUdBLHNFQUFBO0FBQ0EsK0RBQUE7QUFDQSxpS0FBQTtBQUNBLG1KQUFBO0FBeUpBLHFGQUFBO0FBakpSO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ1BKO0FEU0E7RUFDSSw0RUFBQTtFQUVBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ1BKO0FEU0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDBGQUFBO0VBQ0EsVUFBQTtBQ1BSO0FEZ0JBO0VBRUksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDZEo7QURvQkE7RUFDSSxnRUFBQTtFQUNDLGtCQUFBO0VBQ0QsVUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ2pCSjtBRG1CQTtFQUNJLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2hCSjtBRG9CQTtFQUNJLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ2pCSjtBRHNCQTtFQUNJLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbkJKO0FEc0JBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUNuQko7QUQ4RUE7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQzNFRDtBRCtFQTtFQUNDLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUM1RUQ7QUQrRUE7RUFDQyxlQUFBO0FDNUVEO0FEK0VBO0VBQ0MseUJBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0FDNUVEO0FEK0VBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0FDNUVEO0FEK0VBO0VBQ0MsYUFBQTtBQzVFRDtBRCtFQTtFQUlDLFFBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EsNkJBQUE7RUFpQkEsb01BQUE7QUMzRkQ7QURpR0E7RUFLQyxVQUFBO0VBS0EsMERBQUE7QUNsR0Q7QURxR0E7RUFLQyxtQkFBQTtFQUtBLDREQUFBO0FDdEdEO0FEeUdBO0VBS0MsVUFBQTtFQUtBLDJEQUFBO0FDMUdEO0FENkdBO0VBU0MsZUFBQTtFQUtBLDZEQUFBO0FDbEhEO0FEcUhBO0VBS0MsVUFBQTtFQUNBLG9CQUFBO0VBU0EsMEdBQUE7QUMxSEQ7QUQ4SEE7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDM0hEO0FEOEhBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQWlCQSwwTUFBQTtBQ3ZJRDtBRDZJQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBS0EsMERBQUE7QUMxSUQ7QUQ2SUE7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0VBS0EsMERBQUE7QUMxSUQ7QUQ2SUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDMUlEO0FENklBO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FDMUlEO0FENklBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFLQSx3REFBQTtBQzFJRDtBRDZJQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDMUlEO0FENklBO0VBQ0MsV0FBQTtBQzFJRDtBRDZJQTtFQUNDLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUMxSUQ7QUQ2SUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQzFJRDtBRDZJQTtFQUNDLFdBQUE7QUMxSUQ7QUQ2SUE7RUFDQyx5QkFBQTtFQUNBLGFBQUE7QUMxSUQ7QUQ2SUE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUMxSUQ7QUQ2SUE7RUFLQyxhQUFBO0VBT0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FDMUlEO0FENklBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUMxSUQ7QUQ2SUE7RUFZQyxhQUFBO0VBT0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBS0EsMkRBQUE7QUNqSkQ7QURvSkE7RUFTQyxXQUFBO0VBQ0EseUJBQUE7QUN6SkQ7QUQ0SkE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3pKRDtBRDRKQTtFQUNDLFVBQUE7QUN6SkQ7QUQ0SkE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDekpEO0FENEpBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3pKRDtBRDRKQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQVNBLHNHQUFBO0FDN0pEO0FEaUtBO0VBQ0Msd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQzlKRDtBRGlLQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUM5SkQ7QURpS0E7RUFDQyxlQUFBO0FDOUpEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pZW51cGFyL2llbnVwYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRmb250MTogJ0Nvb2tpZScsIGN1cnNpdmU7XHJcbiRmb250MjogJ0hhbmRsZWUnLCBjdXJzaXZlO1xyXG4kZm9udDM6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcclxuJGZvbnQ0OiAnU29maWEnLCBjdXJzaXZlO1xyXG4kZm9udDU6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG5cclxuXHJcbip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4udGl0bGVTe1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgbWluLWhlaWdodDogMjB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5zZWN7XHJcblxyXG4gICAgbWluLWhlaWdodDogOTV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBtYXJnaW46MCAyNXB4IDEwcHggMjVweDtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4udGl0bGV0YWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnRGFuY2luZyBTY3JpcHQnLCdKb3NlZmluIFNhbnMnO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbn1cclxuaW1ne1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxudGFibGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQsIDExMCwgMTEwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmhlbHB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQsIDExMCwgMTEwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzoxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweCAxNXB4IDQwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTs7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDE0OS45OHB4KSB7IFxyXG4gICAgXHJcbi8vICAgICAudGFibGV7XHJcbi8vICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gIH1cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gICAgXHJcbi8vICAgICAudGFibGV7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgfVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkgeyAgIFxyXG4gICAgXHJcbi8vICAuaGVscHtcclxuLy8gICAgICBtaW4td2lkdGg6IDEwOCU7XHJcbi8vICB9XHJcbn1cclxuXHJcbi8vIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7ICAgXHJcbiAgICBcclxuLy8gICAgIC50YWJsZXtcclxuLy8gICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcbi8vIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkgeyAgXHJcbi8vICAgICAudGFibGV7XHJcbi8vICAgICB3aWR0aDogMzAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4vLyB9IFxyXG4vLyB9XHJcblxyXG4vLyAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAgXHJcbi8vICAgICAudGFibGV7XHJcbi8vICAgICB3aWR0aDogNTAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyB9XHJcbi8vICB9XHJcblxyXG5cclxuQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAmc3Vic2V0PWxhdGluLWV4dFwiO1xyXG5cclxuKiB7XHJcblx0ei1pbmRleDogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0Y29sb3I6ICMyMTIxMjE7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxufVxyXG5cclxuLmluZGljYXRvciB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRtYXJnaW46IGNhbGMoKDEwMHZoIC0gNDAwcHgpIC8gMikgYXV0bztcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9ycyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0jY2FyZC12aXNpdG9ycy1pbmRpY2F0b3Ige1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnNcclxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0jY2FyZC12aXNpdG9ycy1pbmRpY2F0b3I6Y2hlY2tlZFxyXG5cdCsgLmhlYWRlclxyXG5cdGxhYmVsLmluZGljYXRvciB7XHJcblx0dG9wOiAzMCU7XHJcblx0cmlnaHQ6IGNhbGMoNTAlIC0gMjVweCk7XHJcblx0bWFyZ2luOiBjYWxjKC0zMCUgLSAyNXB4KSBjYWxjKDUwJSAtIDI1cHgpIDAgMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IHRvcCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsXHJcblx0XHRyaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC42cyxcclxuXHRcdG1hcmdpbiAwcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XHJcblx0LW1vei10cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLFxyXG5cdFx0cmlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvciAwcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNnMsXHJcblx0XHRtYXJnaW4gMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjlzO1xyXG5cdC1vLXRyYW5zaXRpb246IHRvcCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsXHJcblx0XHRyaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC42cyxcclxuXHRcdG1hcmdpbiAwcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XHJcblx0LW1zLXRyYW5zaXRpb246IHRvcCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsXHJcblx0XHRyaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC42cyxcclxuXHRcdG1hcmdpbiAwcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XHJcblx0dHJhbnNpdGlvbjogdG9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyxcclxuXHRcdHJpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyxcclxuXHRcdGJhY2tncm91bmQtY29sb3IgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzLFxyXG5cdFx0bWFyZ2luIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9yc1xyXG5cdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSNjYXJkLXZpc2l0b3JzLWluZGljYXRvcjpjaGVja2VkXHJcblx0KyAuaGVhZGVyXHJcblx0bGFiZWwuaW5kaWNhdG9yXHJcblx0Lm9wZW4ge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjJzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4ycztcclxuXHQtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjJzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjJzO1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuMnM7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnNcclxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0jY2FyZC12aXNpdG9ycy1pbmRpY2F0b3I6Y2hlY2tlZFxyXG5cdCsgLmhlYWRlclxyXG5cdGxhYmVsLmluZGljYXRvclxyXG5cdC5jbG9zZSB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcclxuXHQtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcclxuXHQtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XHJcblx0LW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnNcclxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0jY2FyZC12aXNpdG9ycy1pbmRpY2F0b3I6Y2hlY2tlZFxyXG5cdCsgLmhlYWRlclxyXG5cdC5jb250ZW50XHJcblx0LmRhdGEge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjQ1cztcclxuXHQtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNDVzO1xyXG5cdC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNDVzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjQ1cztcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjQ1cztcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9yc1xyXG5cdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSNjYXJkLXZpc2l0b3JzLWluZGljYXRvcjpjaGVja2VkXHJcblx0KyAuaGVhZGVyXHJcblx0LmNvbnRlbnRcclxuXHQuZGF0YVxyXG5cdC5ncmFwaFxyXG5cdC52ZXJ0aWNhbFxyXG5cdC5kYXlcclxuXHQubGluZS1jb250YWluZXIge1xyXG5cdG1heC1oZWlnaHQ6IDgwJTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XHJcblx0LW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjlzO1xyXG5cdC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XHJcblx0LW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XHJcblx0dHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9yc1xyXG5cdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSNjYXJkLXZpc2l0b3JzLWluZGljYXRvcjpjaGVja2VkXHJcblx0KyAuaGVhZGVyXHJcblx0LmNvbnRlbnRcclxuXHQuZmxvYXQge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxMCk7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsXHJcblx0XHRvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcclxuXHQtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcyxcclxuXHRcdG9wYWNpdHkgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xyXG5cdC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcyxcclxuXHRcdG9wYWNpdHkgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsXHJcblx0XHRvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsXHJcblx0XHRvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDYwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTI4LCAxMjgpO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgbGFiZWwuaW5kaWNhdG9yIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0dG9wOiBjYWxjKDYwJSAtIDI1cHgpO1xyXG5cdHJpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsXHJcblx0XHRyaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcyxcclxuXHRcdGJhY2tncm91bmQtY29sb3IgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLFxyXG5cdFx0bWFyZ2luIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogdG9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLFxyXG5cdFx0cmlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyxcclxuXHRcdG1hcmdpbiAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcclxuXHQtby10cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsXHJcblx0XHRyaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcyxcclxuXHRcdGJhY2tncm91bmQtY29sb3IgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLFxyXG5cdFx0bWFyZ2luIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsXHJcblx0XHRyaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcyxcclxuXHRcdGJhY2tncm91bmQtY29sb3IgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLFxyXG5cdFx0bWFyZ2luIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xyXG5cdHRyYW5zaXRpb246IHRvcCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcyxcclxuXHRcdHJpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvciAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsXHJcblx0XHRtYXJnaW4gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3M7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciBsYWJlbC5pbmRpY2F0b3IgLm9wZW4ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRtYXJnaW46IDExLjVweCAxNnB4O1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC42cztcclxuXHQtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzO1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNnM7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciBsYWJlbC5pbmRpY2F0b3IgLmNsb3NlIHtcclxuXHRtYXJnaW46IDEyLjVweCAxNy41cHg7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XHJcblx0LW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG5cdC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XHJcblx0LW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIC5jb250ZW50IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgPiAqIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcclxuXHQtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG5cdC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIC5jb250ZW50IC5kYXRhIC50b3Age1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNDAlO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLnRvcCAudGl0bGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG5cdGhlaWdodDogNjAlO1xyXG5cdG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIC5jb250ZW50IC5kYXRhIC5ncmFwaCAuaG9yaXpvbnRhbCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC5ob3Jpem9udGFsIGRpdiB7XHJcblx0aGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZGF0YSAuZ3JhcGggLmhvcml6b250YWwgZGl2IGhyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG5cdG9wYWNpdHk6IDAuMjU7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZGF0YSAuZ3JhcGggLmhvcml6b250YWwgZGl2IHAge1xyXG5cdG1hcmdpbi10b3A6IDFweDtcclxuXHRvcGFjaXR5OiAwLjc7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC52ZXJ0aWNhbCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG5cdC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuXHQtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dG9wOiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZGF0YSAuZ3JhcGggLnZlcnRpY2FsIC5kYXkge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogY2FsYygxMDAlIC8gMTQpO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9yc1xyXG5cdC5oZWFkZXJcclxuXHQuY29udGVudFxyXG5cdC5kYXRhXHJcblx0LmdyYXBoXHJcblx0LnZlcnRpY2FsXHJcblx0LmRheVxyXG5cdC5saW5lLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHQtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG5cdC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAycHg7XHJcblx0aGVpZ2h0OiA4MCU7XHJcblx0bWF4LWhlaWdodDogMDtcclxuXHRib3R0b206IDIwJTtcclxuXHRtYXJnaW46IDAgY2FsYygoMTAwJSAtIDJweCkgLyAyKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XHJcblx0LW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XHJcblx0LW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG5cdHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzXHJcblx0LmhlYWRlclxyXG5cdC5jb250ZW50XHJcblx0LmRhdGFcclxuXHQuZ3JhcGhcclxuXHQudmVydGljYWxcclxuXHQuZGF5XHJcblx0LmxpbmUtY29udGFpbmVyXHJcblx0LmxpbmUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZGF0YSAuZ3JhcGggLnZlcnRpY2FsIC5kYXkgcCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGhlaWdodDogMjAlO1xyXG5cdGJvdHRvbTogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHRmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZGF0YSAuZ3JhcGggLnZlcnRpY2FsIC5kYXkgLmhpZGRlbiB7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIC5jb250ZW50IC50aXRsZSB7XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG9wYWNpdHk6IDAuNztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZmxvYXQge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0dG9wOiA1MCU7XHJcblx0cmlnaHQ6IGNhbGMoNTAlIC0gMjVweCk7XHJcblx0b3BhY2l0eTogMDtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLFxyXG5cdFx0b3BhY2l0eSAwcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcyxcclxuXHRcdG9wYWNpdHkgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcclxuXHQtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLFxyXG5cdFx0b3BhY2l0eSAwcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG5cdC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLFxyXG5cdFx0b3BhY2l0eSAwcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsXHJcblx0XHRvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmluZm8ge1xyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuXHRoZWlnaHQ6IGNhbGMoNDAlIC0gODBweCk7XHJcblx0cGFkZGluZzogNDBweCAyMHB4O1xyXG5cdGNvbG9yOiAjOWU5ZTllO1xyXG59XHJcblxyXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5pbmZvIC5jb3VudGVyIHtcclxuXHRtYXJnaW4tdG9wOiA4cHg7XHJcblx0Y29sb3I6ICMyMTIxMjE7XHJcblx0Zm9udC1zaXplOiA0NXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmluZm8gLmNvdW50ZXIgLnVuaXQge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9SGFuZGxlZSZmYW1pbHk9UGFyaXNpZW5uZSZmYW1pbHk9U29maWEmZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCZzdWJzZXQ9bGF0aW4tZXh0XCI7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udGl0bGVTIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGVTIGgxIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZSwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zZWMge1xuICBtaW4taGVpZ2h0OiA5NXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICBtYXJnaW46IDAgMjVweCAxMHB4IDI1cHg7XG59XG5cbi50aXRsZXRhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XG59XG5cbmltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZTZlNmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA2MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU2ZTZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlbHAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU2ZTZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbjogMHB4IDE1cHggNDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTZlNmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmhyIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xufVxuXG4qIHtcbiAgei1pbmRleDogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xufVxuXG4uaW5kaWNhdG9yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiBjYWxjKCgxMDB2aCAtIDQwMHB4KSAvIDIpIGF1dG87XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgaW5wdXRbdHlwZT1jaGVja2JveF0jY2FyZC12aXNpdG9ycy1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIGlucHV0W3R5cGU9Y2hlY2tib3hdI2NhcmQtdmlzaXRvcnMtaW5kaWNhdG9yOmNoZWNrZWQgKyAuaGVhZGVyIGxhYmVsLmluZGljYXRvciB7XG4gIHRvcDogMzAlO1xuICByaWdodDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgbWFyZ2luOiBjYWxjKC0zMCUgLSAyNXB4KSBjYWxjKDUwJSAtIDI1cHgpIDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcywgcmlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC42cywgbWFyZ2luIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcbiAgLW1vei10cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLCByaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsIGJhY2tncm91bmQtY29sb3IgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzLCBtYXJnaW4gMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjlzO1xuICAtby10cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLCByaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsIGJhY2tncm91bmQtY29sb3IgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzLCBtYXJnaW4gMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjlzO1xuICAtbXMtdHJhbnNpdGlvbjogdG9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcywgcmlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC42cywgbWFyZ2luIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcywgcmlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC42cywgbWFyZ2luIDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyBpbnB1dFt0eXBlPWNoZWNrYm94XSNjYXJkLXZpc2l0b3JzLWluZGljYXRvcjpjaGVja2VkICsgLmhlYWRlciBsYWJlbC5pbmRpY2F0b3IgLm9wZW4ge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuMnM7XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgaW5wdXRbdHlwZT1jaGVja2JveF0jY2FyZC12aXNpdG9ycy1pbmRpY2F0b3I6Y2hlY2tlZCArIC5oZWFkZXIgbGFiZWwuaW5kaWNhdG9yIC5jbG9zZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjlzO1xuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjlzO1xuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjlzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgaW5wdXRbdHlwZT1jaGVja2JveF0jY2FyZC12aXNpdG9ycy1pbmRpY2F0b3I6Y2hlY2tlZCArIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNDVzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNDVzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjQ1cztcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNDVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjQ1cztcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyBpbnB1dFt0eXBlPWNoZWNrYm94XSNjYXJkLXZpc2l0b3JzLWluZGljYXRvcjpjaGVja2VkICsgLmhlYWRlciAuY29udGVudCAuZGF0YSAuZ3JhcGggLnZlcnRpY2FsIC5kYXkgLmxpbmUtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogODAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC45cztcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuOXM7XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgaW5wdXRbdHlwZT1jaGVja2JveF0jY2FyZC12aXNpdG9ycy1pbmRpY2F0b3I6Y2hlY2tlZCArIC5oZWFkZXIgLmNvbnRlbnQgLmZsb2F0IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLCBvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsIG9wYWNpdHkgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsIG9wYWNpdHkgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLCBvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLCBvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgbGFiZWwuaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IGNhbGMoNjAlIC0gMjVweCk7XG4gIHJpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLCByaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsIG1hcmdpbiAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsIHJpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcywgbWFyZ2luIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xuICAtby10cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuM3MsIHJpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcywgbWFyZ2luIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogdG9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLCByaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsIG1hcmdpbiAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjNzLCByaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsIG1hcmdpbiAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMC4zcztcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIGxhYmVsLmluZGljYXRvciAub3BlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAxMS41cHggMTZweDtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNnM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDAuNnM7XG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwLjZzO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgbGFiZWwuaW5kaWNhdG9yIC5jbG9zZSB7XG4gIG1hcmdpbjogMTIuNXB4IDE3LjVweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCA+ICoge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIC5jb250ZW50IC5kYXRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIC5jb250ZW50IC5kYXRhIC50b3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZGF0YSAudG9wIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGhlaWdodDogNjAlO1xuICBtYXJnaW46IDAgMjBweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZGF0YSAuZ3JhcGggLmhvcml6b250YWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC5ob3Jpem9udGFsIGRpdiB7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC5ob3Jpem9udGFsIGRpdiBociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gIG9wYWNpdHk6IDAuMjU7XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZGF0YSAuZ3JhcGggLmhvcml6b250YWwgZGl2IHAge1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC52ZXJ0aWNhbCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaGVhZGVyIC5jb250ZW50IC5kYXRhIC5ncmFwaCAudmVydGljYWwgLmRheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDE0KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC52ZXJ0aWNhbCAuZGF5IC5saW5lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogODAlO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBib3R0b206IDIwJTtcbiAgbWFyZ2luOiAwIGNhbGMoKDEwMCUgLSAycHgpIC8gMik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC52ZXJ0aWNhbCAuZGF5IC5saW5lLWNvbnRhaW5lciAubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC52ZXJ0aWNhbCAuZGF5IHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjAlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGEgLmdyYXBoIC52ZXJ0aWNhbCAuZGF5IC5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5oZWFkZXIgLmNvbnRlbnQgLmRhdGUge1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC43O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkI2NhcmQtdmlzaXRvcnMgLmhlYWRlciAuY29udGVudCAuZmxvYXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRvcDogNTAlO1xuICByaWdodDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLCBvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcywgb3BhY2l0eSAwcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLCBvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBzLCBvcGFjaXR5IDBzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMHMsIG9wYWNpdHkgMHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaW5mbyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDQwJSAtIDgwcHgpO1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uY2FyZCNjYXJkLXZpc2l0b3JzIC5pbmZvIC5jb3VudGVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzIxMjEyMTtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLmNhcmQjY2FyZC12aXNpdG9ycyAuaW5mbyAuY291bnRlciAudW5pdCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */"]
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
      consts: [[1, "sec"], [1, "text-center"], [1, "sec1"], [1, "row", "rand1"], [1, "col-xl-4", "col-sm-12", "col-md-6", "col-xs-12", "d-flex", "justify-content-center"], ["id", "cat1", 1, "snip1543"], ["routerLink", "/tuja", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat2", 1, "snip1543", "hover"], ["routerLink", "/brazi", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat3", 1, "snip1543"], ["routerLink", "/ienupari", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat4", 1, "snip1543"], ["routerLink", "/flori", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat5", 1, "snip1543", "hover"], ["routerLink", "/diverse", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"], ["id", "cat6", 1, "snip1543"], ["download", "CATALOG", "href", "assets/CATALOGUL PRIMAVERII.docx", "role", "button", 1, "btn", 2, "background-color", "rgba(14, 110, 110)"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Descarca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);\n@import url(https://fonts.googleapis.com/css?family=Teko:700);\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 30vh;\n  border: 1px solid #0e6e6e;\n  background-color: rgba(14, 110, 110, 0.5);\n  border-radius: 3px;\n  padding: 10px 15px 30px 15px;\n  margin: 20px 15px 20px 0px;\n  background-color: #0e6e6e;\n  color: white;\n  font-family: \"Handlee\", cursive, \"Josefin Sans\";\n  width: 100%;\n  height: auto;\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0 0 85% 85%/30%;\n}\n.sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Handlee\", cursive, \"Tangerine\", \"Dancing Script\", \"Josefin Sans\", cursive;\n  font-size: 25px;\n  margin-bottom: 30px;\n  text-align: justify;\n}\n.rand1[_ngcontent-%COMP%] {\n  margin-bottom: 6vh;\n  width: 100%;\n}\n.sec1[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 50vh;\n  background-color: teal;\n  margin-bottom: 6vh;\n  padding: 10px 15px;\n  margin: 20px 15px 20px 0px;\n  width: 100%;\n}\n.snip1543[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #ffffff;\n  font-family: \"Josefin Sans\", \"Source Sans Pro\", sans-serif;\n  font-size: 16px;\n  overflow: hidden;\n  position: relative;\n  text-align: left;\n  transform: translateZ(0);\n}\n#cat1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/1.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/2.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/3.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat4[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/4.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat5[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/5.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#cat6[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pics/contact.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  transition: all 0.45s ease;\n}\n.snip1543[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\";\n  background-color: #008080;\n  opacity: 0.5;\n  transition: all 0.45s ease;\n}\n.snip1543[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-80%);\n}\n.snip1543[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-70%);\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 1;\n  bottom: 0;\n  padding: 25px 40% 25px 20px;\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before, .snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: teal;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);\n  content: \"\";\n  opacity: 0.5;\n  z-index: -1;\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-100%);\n}\n.snip1543[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-90%);\n}\n.snip1543[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0;\n  letter-spacing: 1px;\n}\n.snip1543[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 1em;\n  text-transform: uppercase;\n  font-family: \"Handlee\", cursive, \"Leckerli One\", \"Teko\", cursive, \"Arial Narrow\", Arial, sans-serif;\n}\n.snip1543[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Josefin Sans\";\n  font-size: 1em;\n}\n.snip1543[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 1.5em;\n  color: white;\n  font-family: \"Handlee\", cursive, \"Josefin Sans\";\n  bottom: 0;\n  color: white;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.snip1543[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .snip1543.hover[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .snip1543[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .snip1543.hover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 0.9;\n  transition-delay: 0.2s;\n}\n.snip1543[_ngcontent-%COMP%]:hover:before, .snip1543.hover[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-20%);\n  transition-delay: 0.05s;\n}\n.snip1543[_ngcontent-%COMP%]:hover:after, .snip1543.hover[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-10%);\n}\n.snip1543[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]:before, .snip1543.hover[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  transform: skew(30deg) translateX(-40%);\n  transition-delay: 0.15s;\n}\n.snip1543[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]:after, .snip1543.hover[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:after {\n  transform: skew(-30deg) translateX(-30%);\n  transition-delay: 0.1s;\n}\n@media (max-width: 149.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 100px;\n    min-height: 149.98px;\n    max-height: 149.98px;\n    height: 149.98px;\n  }\n}\n@media (min-width: 150px) and (max-width: 276px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 200px;\n    min-height: 300px;\n    max-height: 300px;\n    height: 300px;\n  }\n}\n@media (min-width: 276px) and (max-width: 375.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n    min-height: 300px;\n    max-height: 300px;\n    height: 300px;\n  }\n}\n@media (min-width: 376px) and (max-width: 575.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 200px;\n    min-height: 300px;\n    max-height: 300px;\n    height: 300px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 100%;\n    min-height: 290px;\n    max-height: 290px;\n    height: 190px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 200px;\n    max-width: 200px;\n    min-width: 100px;\n    min-height: 200px;\n    max-height: 200px;\n    height: 200px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 315px;\n    max-width: 315px;\n    min-width: 215px;\n    min-height: 315px;\n    max-height: 315px;\n    height: 315px;\n  }\n}\n@media (min-width: 1200px) {\n  .snip1543[_ngcontent-%COMP%] {\n    width: 315px;\n    max-width: 315px;\n    min-width: 215px;\n    min-height: 315px;\n    max-height: 315px;\n    height: 315px;\n    padding-left: 0;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFByb2llY3RlXFxhbmd1bGFyXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTVEsb0VBQUE7QUFDQSw2REFBQTtBQUNBLGlLQUFBO0FBQ0EsbUpBQUE7QUFRUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNaRjtBRGVBO0VBQ0UsZ0JBQUE7QUNaRjtBRGNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNELHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0MsOEJBQUE7QUNYRjtBRGVBO0VBQ0MsdUZBQUE7RUFDQSxlQUFBO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtBQ2JGO0FEaUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDZEY7QURtQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNoQkY7QURzQkE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSwwREFBQTtFQUNBLGVBQUE7RUFHQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFRQSx3QkFBQTtBQzNCRjtBRDZCQTtFQUNFLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDMUJGO0FENkJBO0VBQ0UsMkNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUMxQkY7QUQ4QkE7RUFDRSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQzNCRjtBRDhCQTtFQUNFLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDM0JGO0FENkJBO0VBQ0UsMkNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUMxQkY7QUQ0QkE7RUFDRSxpREFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ3pCRjtBRDRCQTs7O0VBSUUsc0JBQUE7RUFFQSwwQkFBQTtBQ3pCRjtBRHlDQTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsMEJBQUE7QUN0Q0Y7QUR5Q0E7RUFFRSx1Q0FBQTtBQ3RDRjtBRHlDQTtFQUVFLHdDQUFBO0FDdENGO0FEeUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ3RDRjtBRHlDQTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDdENGO0FEeUNBO0VBRUUsd0NBQUE7QUN0Q0Y7QUR5Q0E7RUFFRSx3Q0FBQTtBQ3RDRjtBRHlDQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDdENGO0FEeUNBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1HQUFBO0FDdkNGO0FEMENBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ3ZDRjtBRDBDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ3ZDRjtBRDZDQTs7OztFQUtFLHdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0FDMUNGO0FENkNBOztFQUdFLHVDQUFBO0VBRUEsdUJBQUE7QUMxQ0Y7QUQ2Q0E7O0VBR0Usd0NBQUE7QUMxQ0Y7QUQ2Q0E7O0VBR0UsdUNBQUE7RUFFQSx1QkFBQTtBQzFDRjtBRDZDQTs7RUFHRSx3Q0FBQTtFQUVBLHNCQUFBO0FDMUNGO0FENkNBO0VBRUU7SUFFRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0VDNUNGO0FBQ0Y7QURpREE7RUFFRTtJQUVFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQ2pERjtBQUNGO0FEa0RBO0VBRUU7SUFFRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDbERGO0FBQ0Y7QURzREE7RUFFRTtJQUVFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQ3RERjtBQUNGO0FENERBO0VBRUU7SUFFRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQzVERjtBQUNGO0FEb0VDO0VBQ0M7SUFFRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDbkVGO0FBQ0Y7QUR5RUM7RUFDQztJQUVFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUN4RUY7QUFDRjtBRDZFQztFQUVDO0lBRUUsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDN0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLy8gQ29kIDIgXHJcblxyXG5cclxuXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8pO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo3MDApO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29va2llJmZhbWlseT1IYW5kbGVlJmZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1Tb2ZpYSZmYW1pbHk9VGFuZ2VyaW5lOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kZm9udDE6ICdDb29raWUnLCBjdXJzaXZlO1xyXG4kZm9udDI6ICdIYW5kbGVlJywgY3Vyc2l2ZTtcclxuJGZvbnQzOiAnUGFyaXNpZW5uZScsIGN1cnNpdmU7XHJcbiRmb250NDogJ1NvZmlhJywgY3Vyc2l2ZTtcclxuJGZvbnQ1OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcclxuXHJcblxyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmhye1xyXG4gIG1hcmdpbi10b3A6MTBweFxyXG59XHJcbi5zZWN7XHJcbiAgbWluLWhlaWdodDogMzB2aDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQsIDExMCwgMTEwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzoxMHB4IDE1cHggMzBweCAxNXB4O1xyXG4gIG1hcmdpbjogMjBweCAxNXB4IDIwcHggMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTEwLCAxMTApO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJGZvbnQyLCdKb3NlZmluIFNhbnMnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDg1JSA4NSUgLyAzMCU7XHJcbiBcclxuXHJcbiBcclxucCB7XHJcblx0Zm9udC1mYW1pbHk6JGZvbnQyLCdUYW5nZXJpbmUnICwnRGFuY2luZyBTY3JpcHQnLCdKb3NlZmluIFNhbnMnLCBjdXJzaXZlO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxufVxyXG5cclxuLnJhbmQxe1xyXG4gIG1hcmdpbi1ib3R0b206IDZ2aDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4uc2VjMXtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnRlYWw7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnZoO1xyXG4gIHBhZGRpbmc6MTBweCAxNXB4O1xyXG4gIG1hcmdpbjogMjBweCAxNXB4IDIwcHggMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uc25pcDE1NDMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1mYW1pbHk6J0pvc2VmaW4gU2FucycgLCdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAvLyBtYXJnaW46IDEwcHg7XHJcbiBcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8vIHdpZHRoOiAzMTVweDtcclxuICAvLyBtYXgtd2lkdGg6IDMxNXB4O1xyXG4gIC8vIG1pbi13aWR0aDogMjE1cHg7XHJcbiAgLy8gbWluLWhlaWdodDogMzE1cHg7XHJcbiAgLy8gbWF4LWhlaWdodDogMzE1cHg7XHJcbiAgLy8gaGVpZ2h0OiAzMTVweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuI2NhdDF7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzLzEuanBnXCIpOyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIFxyXG59XHJcbiNjYXQye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy8yLmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuIFxyXG4gIFxyXG59XHJcbiNjYXQze1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy8zLmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuI2NhdDR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9waWNzLzQuanBnXCIpOyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiNjYXQ1e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGljcy81LmpwZ1wiKTsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4jY2F0NntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvY29udGFjdC5qcGdcIik7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zbmlwMTU0MyAqLFxyXG4uc25pcDE1NDMgKjpiZWZvcmUsXHJcbi5zbmlwMTU0MyAqOmFmdGVyIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xyXG5cclxufVxyXG5cclxuLy8gLnNuaXAxNTQzIGltZyB7XHJcbi8vICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4vLyAgIG1heC13aWR0aDogMTAwJTtcclxuLy8gICBtaW4td2lkdGg6IDEwMCU7IFxyXG4vLyAgIGJveC1zaXppbmc6Y29udGVudC1ib3g7XHJcbiAgXHJcbiAgXHJcbi8vICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBcclxuICBcclxuLy8gfVxyXG5cclxuLnNuaXAxNTQzOmJlZm9yZSxcclxuLnNuaXAxNTQzOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgwODA7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2U7XHJcbn1cclxuXHJcbi5zbmlwMTU0MzpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC04MCUpO1xyXG4gIHRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtODAlKTtcclxufVxyXG5cclxuLnNuaXAxNTQzOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTcwJSk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtNzAlKTtcclxufVxyXG5cclxuLnNuaXAxNTQzIGZpZ2NhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAyNXB4IDQwJSAyNXB4IDIwcHg7XHJcbn1cclxuXHJcbi5zbmlwMTU0MyBmaWdjYXB0aW9uOmJlZm9yZSxcclxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgMTI4KTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgY29udGVudDogJyc7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uc25pcDE1NDMgZmlnY2FwdGlvbjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4uc25pcDE1NDMgZmlnY2FwdGlvbjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC05MCUpO1xyXG4gIHRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTkwJSk7XHJcbn1cclxuXHJcbi5zbmlwMTU0MyBoMyxcclxuLnNuaXAxNTQzIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5zbmlwMTU0MyBoMyB7XHJcbiAgXHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udDIgLCdMZWNrZXJsaSBPbmUnLCAnVGVrbycsY3Vyc2l2ZSwgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc25pcDE1NDMgcCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLnNuaXAxNTQzIGEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTokZm9udDIsICdKb3NlZmluIFNhbnMnO1xyXG4gIGJvdHRvbTogMDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBcclxuXHJcbn1cclxuXHJcblxyXG4uc25pcDE1NDM6aG92ZXIgaDMsXHJcbi5zbmlwMTU0My5ob3ZlciBoMyxcclxuLnNuaXAxNTQzOmhvdmVyIHAsXHJcbi5zbmlwMTU0My5ob3ZlciBwIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcblxyXG4uc25pcDE1NDM6aG92ZXI6YmVmb3JlLFxyXG4uc25pcDE1NDMuaG92ZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMjAlKTtcclxuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTIwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcclxufVxyXG5cclxuLnNuaXAxNTQzOmhvdmVyOmFmdGVyLFxyXG4uc25pcDE1NDMuaG92ZXI6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtMTAlKTtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0xMCUpO1xyXG59XHJcblxyXG4uc25pcDE1NDM6aG92ZXIgZmlnY2FwdGlvbjpiZWZvcmUsXHJcbi5zbmlwMTU0My5ob3ZlciBmaWdjYXB0aW9uOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTQwJSk7XHJcbiAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC00MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbn1cclxuXHJcbi5zbmlwMTU0Mzpob3ZlciBmaWdjYXB0aW9uOmFmdGVyLFxyXG4uc25pcDE1NDMuaG92ZXIgZmlnY2FwdGlvbjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0zMCUpO1xyXG4gIHRyYW5zZm9ybTogc2tldygtMzBkZWcpIHRyYW5zbGF0ZVgoLTMwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDkuOThweCkgeyBcclxuICAgIFxyXG4gIC5zbmlwMTU0M3tcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNDkuOThweDtcclxuICAgIG1heC1oZWlnaHQ6IDE0OS45OHB4O1xyXG4gICAgaGVpZ2h0OiAxNDkuOThweDtcclxuICB9IFxyXG4gIFxyXG4gICBcclxuXHJcbiB9XHJcbkBtZWRpYSAgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiAgMjc2cHgpIHsgXHJcbiAgICBcclxuICAuc25pcDE1NDN7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSB9XHJcbkBtZWRpYSAgKG1pbi13aWR0aDogMjc2cHgpIGFuZCAobWF4LXdpZHRoOiAzNzUuOThweCkgeyBcclxuICAgIFxyXG4gIC5zbmlwMTU0M3tcclxuXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSBcclxuICAgXHJcblxyXG4gfVxyXG5AbWVkaWEgIChtaW4td2lkdGg6IDM3NnB4KSBhbmQgKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXHJcbiAgICBcclxuICAuc25pcDE1NDN7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSBcclxuICAgXHJcblxyXG4gfVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7ICBcclxuICBcclxuICAuc25pcDE1NDN7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyOTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI5MHB4O1xyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICB9IFxyXG5cclxuXHJcbiB9XHJcbiBcclxuXHJcbiBcclxuIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkgeyAgXHJcbiAgLnNuaXAxNTQze1xyXG5cclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfSBcclxuXHJcbiBcclxuIH1cclxuIFxyXG4gLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcclxuIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkgeyAgXHJcbiAgLnNuaXAxNTQze1xyXG5cclxuICAgIHdpZHRoOiAzMTVweDtcclxuICAgIG1heC13aWR0aDogMzE1cHg7XHJcbiAgICBtaW4td2lkdGg6IDIxNXB4O1xyXG4gICAgbWluLWhlaWdodDogMzE1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMTVweDtcclxuICAgIGhlaWdodDogMzE1cHg7XHJcbiAgfVxyXG5cclxuIH1cclxuIFxyXG4gLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXHJcbiBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7ICBcclxuXHJcbiAgLnNuaXAxNTQze1xyXG5cclxuICAgIHdpZHRoOiAzMTVweDtcclxuICAgIG1heC13aWR0aDogMzE1cHg7XHJcbiAgICBtaW4td2lkdGg6IDIxNXB4O1xyXG4gICAgbWluLWhlaWdodDogMzE1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMTVweDtcclxuICAgIGhlaWdodDogMzE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm8pO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29va2llJmZhbWlseT1IYW5kbGVlJmZhbWlseT1QYXJpc2llbm5lJmZhbWlseT1Tb2ZpYSZmYW1pbHk9VGFuZ2VyaW5lOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNlYyB7XG4gIG1pbi1oZWlnaHQ6IDMwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZTZlNmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHg7XG4gIG1hcmdpbjogMjBweCAxNXB4IDIwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2ZTZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkhhbmRsZWVcIiwgY3Vyc2l2ZSwgXCJKb3NlZmluIFNhbnNcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwIDAgODUlIDg1JS8zMCU7XG59XG4uc2VjIHAge1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmUsIFwiVGFuZ2VyaW5lXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ucmFuZDEge1xuICBtYXJnaW4tYm90dG9tOiA2dmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VjMSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgbWFyZ2luLWJvdHRvbTogNnZoO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbjogMjBweCAxNXB4IDIwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNuaXAxNTQzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuI2NhdDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvMS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvMi5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvMy5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvNC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvNS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NhdDYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BpY3MvY29udGFjdC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNuaXAxNTQzICosXG4uc25pcDE1NDMgKjpiZWZvcmUsXG4uc25pcDE1NDMgKjphZnRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2U7XG59XG5cbi5zbmlwMTU0MzpiZWZvcmUsXG4uc25pcDE1NDM6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODA4MDtcbiAgb3BhY2l0eTogMC41O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjQ1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcbn1cblxuLnNuaXAxNTQzOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC04MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpIHRyYW5zbGF0ZVgoLTgwJSk7XG59XG5cbi5zbmlwMTU0MzphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtNzAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtNzAlKTtcbn1cblxuLnNuaXAxNTQzIGZpZ2NhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDI1cHggNDAlIDI1cHggMjBweDtcbn1cblxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YmVmb3JlLFxuLnNuaXAxNTQzIGZpZ2NhcHRpb246YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb250ZW50OiBcIlwiO1xuICBvcGFjaXR5OiAwLjU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc25pcDE1NDMgZmlnY2FwdGlvbjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5zbmlwMTU0MyBmaWdjYXB0aW9uOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC05MCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC05MCUpO1xufVxuXG4uc25pcDE1NDMgaDMsXG4uc25pcDE1NDMgcCB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnNuaXAxNTQzIGgzIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJIYW5kbGVlXCIsIGN1cnNpdmUsIFwiTGVja2VybGkgT25lXCIsIFwiVGVrb1wiLCBjdXJzaXZlLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLnNuaXAxNTQzIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnNuaXAxNTQzIGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSGFuZGxlZVwiLCBjdXJzaXZlLCBcIkpvc2VmaW4gU2Fuc1wiO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zbmlwMTU0Mzpob3ZlciBoMyxcbi5zbmlwMTU0My5ob3ZlciBoMyxcbi5zbmlwMTU0Mzpob3ZlciBwLFxuLnNuaXAxNTQzLmhvdmVyIHAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAwLjk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLnNuaXAxNTQzOmhvdmVyOmJlZm9yZSxcbi5zbmlwMTU0My5ob3ZlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtMjAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC0yMCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbn1cblxuLnNuaXAxNTQzOmhvdmVyOmFmdGVyLFxuLnNuaXAxNTQzLmhvdmVyOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0xMCUpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKSB0cmFuc2xhdGVYKC0xMCUpO1xufVxuXG4uc25pcDE1NDM6aG92ZXIgZmlnY2FwdGlvbjpiZWZvcmUsXG4uc25pcDE1NDMuaG92ZXIgZmlnY2FwdGlvbjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzMGRlZykgdHJhbnNsYXRlWCgtNDAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKSB0cmFuc2xhdGVYKC00MCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn1cblxuLnNuaXAxNTQzOmhvdmVyIGZpZ2NhcHRpb246YWZ0ZXIsXG4uc25pcDE1NDMuaG92ZXIgZmlnY2FwdGlvbjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtMzAlKTtcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZykgdHJhbnNsYXRlWCgtMzAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ5Ljk4cHgpIHtcbiAgLnNuaXAxNTQzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxNDkuOThweDtcbiAgICBtYXgtaGVpZ2h0OiAxNDkuOThweDtcbiAgICBoZWlnaHQ6IDE0OS45OHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiAyNzZweCkge1xuICAuc25pcDE1NDMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyNzZweCkgYW5kIChtYXgtd2lkdGg6IDM3NS45OHB4KSB7XG4gIC5zbmlwMTU0MyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuc25pcDE1NDMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5zbmlwMTU0MyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyOTBweDtcbiAgICBtYXgtaGVpZ2h0OiAyOTBweDtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuc25pcDE1NDMge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5zbmlwMTU0MyB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1heC13aWR0aDogMzE1cHg7XG4gICAgbWluLXdpZHRoOiAyMTVweDtcbiAgICBtaW4taGVpZ2h0OiAzMTVweDtcbiAgICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgICBoZWlnaHQ6IDMxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zbmlwMTU0MyB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1heC13aWR0aDogMzE1cHg7XG4gICAgbWluLXdpZHRoOiAyMTVweDtcbiAgICBtaW4taGVpZ2h0OiAzMTVweDtcbiAgICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgICBoZWlnaHQ6IDMxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufSJdfQ== */"]
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
      decls: 45,
      vars: 0,
      consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", 2, "background-color", "rgba(14, 110, 110)"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["src", "/assets/logo/website_logo_transparent_background.png", "width", "100px", "height", "100px", "alt", ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-center"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", 2, "background-color", "rgb(14, 110, 110)"], ["routerLink", "/tuja", 1, "dropdown-item"], ["routerLink", "/brazi", 1, "dropdown-item"], ["routerLink", "/ienupar", 1, "dropdown-item"], ["routerLink", "/flori", 1, "dropdown-item"], ["routerLink", "/diverse", 1, "dropdown-item"], [1, "dropdown-divider"], ["download", "CATALOG", "href", "assets/CATALOGUL PRIMAVERII.docx", 1, "dropdown-item"], [1, "nav-item"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/foto", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], ["href", "tel:0733604176", "id", "navsuna", 1, "nav-link"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone-plus"], ["fill-rule", "evenodd", "d", "M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V.5a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M12 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0v-3z"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Produse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tuja si Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Brazi si Pini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ienupar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Flori");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Diverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Descarca ultimul Catalog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Suna-ma! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n.navbar[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUHJvaWVjdGVcXGFuZ3VsYXJcXFNwZXJhXFx0dWphL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlHQUFBO0FBQ0EsNEZBQUE7QUFDQSw2R0FBQTtBQUNBLGlJQUFBO0FBQ0EsaUtBQUE7QUFFUjtFQUNJLGVBQUE7RUFDQSw0RUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubmF2YmFye1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBcclxuICAgXHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAxLDI5MyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9U2Fuc2l0YStTd2FzaGVkOndnaHRANDIxJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuLm5hdmJhciB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn0iXX0= */"]
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
      decls: 274,
      vars: 0,
      consts: [[1, "titleS"], [1, "sec"], [1, "row", "pozatabel"], [1, "col-sm-6", "col-xs-6"], ["src", "/assets/pics/tuja/Grasilis.jpg", "alt", "Grasilis", 1, "img-fluid"], [1, "text-center", "titletabel"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row"], [1, "row", "detalii"], [1, "col-sm-12", "col-xs-12"], [1, "card", "help"], [1, "card-header"], [1, "card-body"], [1, "blockquote", "mb-0"], ["src", "/assets/pics/tuja/TuiaSmaragd.jpg", "alt", "TuiaSmaragd", 1, "img-fluid"], [1, "row"], ["src", "/assets/pics/tuja/TuiaGlobosa.jpg", "alt", "tuja", 1, "img-fluid"], [1, "col"], ["src", "/assets/pics/tuja/TuiaNanaAurea.jpg", "alt", "tuja", 1, "img-fluid"], ["src", "/assets/pics/tuja/Leylandii.jpg", "alt", "tuja", 1, "img-fluid"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chiparos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nana Grasilis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "25-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "150-180");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Chamaecyparis Obtusa Nana Grasilis cunoscut si sub numele de chiparos japonez este perfect in orice colt din gradina.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Frunzele sunt de un verde luxuriant, lucios in forma de scoici plate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Are o crestere lenta ,7-15cm/an.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Rezistent la inghet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Smaragd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "700-800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Tuia este un conifer cu frunzele a\u0219ezate \xEEn scar\u0103, orientate c\u0103tre v\xE2rful tulpinii, mereu verzi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Este rezistent la temperaturi \xEEnalte, dar si sc\u0103zute. Poate atinge \xEEn\u0103l\u021Bimi considerabile. Coroana poate fi lesne controlat\u0103 prin tunderi repetate si devine extrem de spectaculoas\u0103 dac\u0103 i se dau forme geometrice sau spiralate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Tuia este una dintre cele mai utilizate plante decorative din gr\u0103dinile lumii pentru forma sa unic\u0103, piramidal\u0103.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "De altfel, tuia este adesea folosit\u0103 pentru a crea un grad viu, un paravan in gr\u0103din\u0103 care s\u0103 ne fereasc\u0103 de ochii curio\u0219ilor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " O plant\u0103 rezistent\u0103, care se pliaz\u0103 pe orice climat si care necesit\u0103 minim\u0103 \xEEngrijire.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Dar, imediat dup\u0103 ce este plantat\u0103 are nevoie de ap\u0103 \xEEn mod curent si este recomandat s\u0103 o uda\u021Bi \xEEn fiecare zi, iar dup\u0103 c\xE2teva s\u0103pt\u0103m\xE2ni la fiecare trei zile.Tuia cre\u015Fte \xEEn medie 30-35 cm pe an.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Danica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "50-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Arbore de talie mica,forma sferica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Se preteaz\u0103 la aproape toate solurile, dar le prefer\u0103 pe cele bine drenate \u0219i neutre. Cel mai bine se comport\u0103 la soare, dar apreciaz\u0103 u\u0219oara umbr\u0103 de dup\u0103-amiaz\u0103 vara. Evita\u021Bi umbra complet\u0103. Acesta este un soi dens, sferic, cu cre\u0219tere pitic\u0103. Frunzi\u0219ul are culoarea verde-smarald \u0219i devine bronz toamna. Se potrive\u0219te bine al\u0103turi de pietre sau borduri, dar \u0219i \xEEn ghivece. Este o alegere popular\u0103 \u0219i sigur\u0103.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Nana Aurea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "180-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Este un conifer cu frunzele ve\u0219nic verzi. Cre\u0219terea este \xEEnceat\u0103 \u0219i compact\u0103. Nu are nevoie deloc de \xEEngrijire. Este ideal\u0103 pentru st\xE2nc\u0103rii sau borduri. Se adapteaz\u0103 u\u0219or la toate condi\u021Biile, dar nu ii plac zonele apoase. Culoarea este galben-auriu pe timpul verii \u0219i bronz iarna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Tuia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Nume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Leylandii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Dimensiune la livrare(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "160-180");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Inaltime la maturitate(cm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "700-800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Pret(lei)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Perioada plantare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Martie-Noiembrie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Cerinte fata de amplasament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "soare,semiumbra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Detalii suplimentare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "blockquote", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Este un conifer cu frunzele ve\u0219nic verzi. Cre\u0219terea este rapida. Pentru un coronament des necesita tundere. Se adapteaz\u0103 u\u0219or la toate condi\u021Biile.");

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
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,293&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:700\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Leckerli+One&family=Sansita+Swashed:wght@421&family=Tangerine&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cookie&family=Handlee&family=Parisienne&family=Sofia&family=Tangerine:wght@700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.titleS[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\", sans-serif;\n  min-height: 20vh;\n  background-color: teal;\n  font-size: 40px;\n  align-content: space-between;\n  text-align: center;\n}\n.titleS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  font-size: 50px;\n  font-family: \"Sansita Swashed\", \"Leckerli One\", cursive, \"Arial Narrow\", Arial, sans-serif;\n  color: red;\n}\n.sec[_ngcontent-%COMP%] {\n  min-height: 95vh;\n  background-color: teal;\n  margin: 0 25px 10px 25px;\n}\n.titletabel[_ngcontent-%COMP%] {\n  font-family: \"Sansita Swashed\", \"Dancing Script\", \"Josefin Sans\";\n  text-align: center;\n  color: red;\n  font-size: 35px;\n  padding: 15px 25px 15px 25px;\n}\nimg[_ngcontent-%COMP%] {\n  border: 1px solid #0e6e6e;\n  background-color: rgba(14, 110, 110, 0.5);\n  border-radius: 3px;\n  padding: 5px;\n  height: 60vh;\n  width: 100%;\n}\ntable[_ngcontent-%COMP%] {\n  border: 1px solid #0e6e6e;\n  background-color: rgba(14, 110, 110, 0.5);\n  border-radius: 3px;\n  padding-left: 10px;\n  width: 100%;\n  height: 100%;\n  min-width: 150px;\n  color: white;\n  font-family: \"Josefin Sans\";\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n}\n.help[_ngcontent-%COMP%] {\n  border: 1px solid #0e6e6e;\n  background-color: rgba(14, 110, 110, 0.5);\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin: 0px 15px 40px 0px;\n  background-color: #0e6e6e;\n  color: white;\n  font-family: \"Josefin Sans\";\n  width: 100%;\n  height: 100%;\n}\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  height: 5px;\n  background-color: rgba(14, 110, 110, 0.5);\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .help[_ngcontent-%COMP%] {\n    min-width: 108%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dWphL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFByb2llY3RlXFxhbmd1bGFyXFxTcGVyYVxcdHVqYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdHVqYVxcdHVqYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dWphL3R1amEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUdBQUE7QUFDQSw0RkFBQTtBQUNBLDZHQUFBO0FBQ0EsaUlBQUE7QUFDQSxpS0FBQTtBQUdBLHNFQUFBO0FBQ0EsK0RBQUE7QUFDQSxpS0FBQTtBQUNBLG1KQUFBO0FBUVI7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDUko7QURVQTtFQUNJLDRFQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDUko7QURVSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEZBQUE7RUFDQSxVQUFBO0FDUlI7QURpQkE7RUFFSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNmSjtBRHFCQTtFQUNJLGdFQUFBO0VBQ0Msa0JBQUE7RUFDRCxVQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDbEJKO0FEb0JBO0VBQ0kseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDakJKO0FEcUJBO0VBQ0kseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDbEJKO0FEdUJBO0VBQ0kseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNwQko7QUR1QkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQ3BCSjtBRDJDQTtFQUVDO0lBQ0ksZUFBQTtFQ3pDSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90dWphL3R1amEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6aXRhbCx3Z2h0QDEsMjkzJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA1MDAmZmFtaWx5PUxlY2tlcmxpK09uZSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEA0MjEmZmFtaWx5PVRhbmdlcmluZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRmb250MTogJ0Nvb2tpZScsIGN1cnNpdmU7XHJcbiRmb250MjogJ0hhbmRsZWUnLCBjdXJzaXZlO1xyXG4kZm9udDM6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcclxuJGZvbnQ0OiAnU29maWEnLCBjdXJzaXZlO1xyXG4kZm9udDU6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG5cclxuXHJcbip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4udGl0bGVTe1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdEYW5jaW5nIFNjcmlwdCcsJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgbWluLWhlaWdodDogMjB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTYW5zaXRhIFN3YXNoZWQnLCdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5zZWN7XHJcblxyXG4gICAgbWluLWhlaWdodDogOTV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICBtYXJnaW46MCAyNXB4IDEwcHggMjVweDtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4udGl0bGV0YWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Fuc2l0YSBTd2FzaGVkJywnRGFuY2luZyBTY3JpcHQnLCdKb3NlZmluIFNhbnMnO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxNXB4IDI1cHg7XHJcbn1cclxuaW1ne1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxudGFibGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQsIDExMCwgMTEwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmhlbHB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQsIDExMCwgMTEwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDExMCwgMTEwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzoxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweCAxNXB4IDQwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMTAsIDExMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTs7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDE0OS45OHB4KSB7IFxyXG4gICAgXHJcbi8vICAgICAudGFibGV7XHJcbi8vICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gIH1cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gICAgXHJcbi8vICAgICAudGFibGV7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgfVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkgeyAgIFxyXG4gICAgXHJcbiAuaGVscHtcclxuICAgICBtaW4td2lkdGg6IDEwOCU7XHJcbiB9XHJcbn1cclxuXHJcbi8vIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7ICAgXHJcbiAgICBcclxuLy8gICAgIC50YWJsZXtcclxuLy8gICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcbi8vIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkgeyAgXHJcbi8vICAgICAudGFibGV7XHJcbi8vICAgICB3aWR0aDogMzAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4vLyB9IFxyXG4vLyB9XHJcblxyXG4vLyAvLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyAgXHJcbi8vICAgICAudGFibGV7XHJcbi8vICAgICB3aWR0aDogNTAwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyB9XHJcbi8vICB9IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FuczppdGFsLHdnaHRAMSwyOTMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDUwMCZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1UYW5nZXJpbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Byb1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1MZWNrZXJsaStPbmUmZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDQyMSZmYW1pbHk9VGFuZ2VyaW5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db29raWUmZmFtaWx5PUhhbmRsZWUmZmFtaWx5PVBhcmlzaWVubmUmZmFtaWx5PVNvZmlhJmZhbWlseT1UYW5nZXJpbmU6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnRpdGxlUyB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkRhbmNpbmcgU2NyaXB0XCIsIFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDIwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlUyBoMSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmUsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xufVxuXG4uc2VjIHtcbiAgbWluLWhlaWdodDogOTV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgbWFyZ2luOiAwIDI1cHggMTBweCAyNXB4O1xufVxuXG4udGl0bGV0YWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnNpdGEgU3dhc2hlZFwiLCBcIkRhbmNpbmcgU2NyaXB0XCIsIFwiSm9zZWZpbiBTYW5zXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nOiAxNXB4IDI1cHggMTVweCAyNXB4O1xufVxuXG5pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU2ZTZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNjB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlNmU2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTEwLCAxMTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWxwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBlNmU2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTEwLCAxMTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW46IDBweCAxNXB4IDQwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2ZTZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ociB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMTAsIDExMCwgMC41KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmhlbHAge1xuICAgIG1pbi13aWR0aDogMTA4JTtcbiAgfVxufSJdfQ== */"]
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
    /*! C:\Users\andre\Desktop\Proiecte\angular\Spera\tuja\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map