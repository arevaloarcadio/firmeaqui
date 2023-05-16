(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Sign',
  data: function data() {
    return {
      uuid: null,
      email: null,
      request: null,
      disabled_download: true
    };
  },
  created: function created() {
    this.uuid = this.$route.params.uuid;
    this.email = this.$route.params.email;
    this.validateRequest();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getUser'])),
  methods: {
    validateRequest: function validateRequest() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/requests/validate/' + this.uuid + '/' + this.email).then(function (res) {
        console.log(res);
        _this.disabled_download = false;
        _this.request = res.data.data;
        console.log(_this.request);
      })["catch"](function (err) {
        console.log(err);
      })["finally"](function () {});
    },
    downloadDocument: function downloadDocument() {
      window.open(axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL + '/' + this.request.request.signed_document_path, "_blank");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=template&id=4cb51439&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=template&id=4cb51439&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "CRow",
        [
          _c("CCol", { attrs: { sm: "12", md: "3" } }),
          _vm._v(" "),
          _c(
            "CCol",
            {
              staticStyle: { "margin-top": "90px" },
              attrs: { sm: "12", md: "6" }
            },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", { staticClass: "pb-0" }, [
                    _c("h5", [_vm._v("Documento firmado exitosamente")])
                  ]),
                  _vm._v(" "),
                  _c("CCardBody", [
                    _c(
                      "div",
                      { staticStyle: { "text-align": "center" } },
                      [
                        _c(
                          "CButton",
                          {
                            attrs: {
                              disabled: _vm.disabled_download,
                              color: "success"
                            },
                            on: { click: _vm.downloadDocument }
                          },
                          [_vm._v("Ver Documento firmado")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticStyle: { "text-align": "center" } }, [
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("\n              Gracias por usar firmeaqui,"),
                        _c("br")
                      ]),
                      _vm.getUser.id == null
                        ? _c(
                            "div",
                            [
                              _vm._v(
                                "\n                Si actualmente no tiene cuenta\n                "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  attrs: { color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push("/pages/register")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Registrese aqui\n                "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _c(
                            "div",
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: { color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push("/receipts")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Ir al Dashboard\n                "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                      _vm._v(" "),
                      _c("p")
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/user/documents/sign-successful.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/sign-successful.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_successful_vue_vue_type_template_id_4cb51439_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-successful.vue?vue&type=template&id=4cb51439&scoped=true& */ "./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=template&id=4cb51439&scoped=true&");
/* harmony import */ var _sign_successful_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-successful.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sign_successful_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sign_successful_vue_vue_type_template_id_4cb51439_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sign_successful_vue_vue_type_template_id_4cb51439_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cb51439",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/user/documents/sign-successful.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_successful_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sign-successful.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_successful_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=template&id=4cb51439&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=template&id=4cb51439&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_successful_vue_vue_type_template_id_4cb51439_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sign-successful.vue?vue&type=template&id=4cb51439&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign-successful.vue?vue&type=template&id=4cb51439&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_successful_vue_vue_type_template_id_4cb51439_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_successful_vue_vue_type_template_id_4cb51439_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);