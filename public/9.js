(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_jwt_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/jwt-token */ "./resources/js/helpers/jwt-token.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/user */ "./resources/js/helpers/user.js");
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-notifications */ "./node_modules/vue-notifications/dist/vue-notifications.js");
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
  name: 'Login',
  data: function data() {
    return {
      user: {
        email: '',
        password: '',
        remember: false
      }
    };
  },
  created: function created() {
    this.setCredentials();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(['setAuthUser'])), {}, {
    login: function login() {
      var _this = this;

      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: '/api/auth/login',
        data: this.user,
        method: 'POST'
      }).then(function (response) {
        if (response.status == "200") {
          console.log(response.data);
          self.showSuccessMsg();
          _helpers_user__WEBPACK_IMPORTED_MODULE_3__["default"].setUser(response.data.user);
          _helpers_jwt_token__WEBPACK_IMPORTED_MODULE_1__["default"].setToken(response.data.token);
          self.setAuthUser(response.data.user);

          _this.remember();

          self.$router.push({
            name: 'Recibidos'
          });
        }
      })["catch"](function (err) {
        //self.showErrorMsg()
        //commit('auth_error', err)
        localStorage.removeItem('token'); //reject(err)
      });
    },
    remember: function remember() {
      // Si el usuario no desea ser recordado y están almacenadas sus credenciales
      if (!this.user.remember && localStorage.getItem('remember')) {
        localStorage.removeItem('remember');
        return;
      }

      ;
      var parsed = window.btoa(JSON.stringify(this.user));
      localStorage.setItem('remember', parsed);
    },
    setCredentials: function setCredentials() {
      if (localStorage.getItem('remember')) {
        try {
          var parsed = JSON.parse(window.atob(localStorage.getItem('remember')));
          this.user = _objectSpread({}, parsed);
        } catch (ex) {
          console.error(ex);
          localStorage.removeItem('remember');
        }
      }
    }
  }),
  notifications: {
    showSuccessMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].types.success,
      title: 'Acceso concedido',
      message: 'Bienvenido'
    },
    showErrorMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_4__["default"].types.error,
      title: 'Acceso denegado',
      message: 'Revise sus credenciales'
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "CContainer",
    [
      _c(
        "CRow",
        [
          _c("CCol", { attrs: { sm: "12", md: "3" } }),
          _vm._v(" "),
          _c(
            "CCol",
            {
              staticStyle: { "margin-top": "110px" },
              attrs: { sm: "12", md: "6" }
            },
            [
              _c(
                "CCard",
                { staticClass: "p-4" },
                [
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        [
                          _c("h1", [_vm._v("Bienvenido a Firmeaqui")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-muted" }, [
                            _vm._v("Accede a tu cuenta")
                          ]),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Username",
                              autocomplete: "username email"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", { attrs: { name: "cil-user" } })
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.user.email,
                              callback: function($$v) {
                                _vm.$set(_vm.user, "email", $$v)
                              },
                              expression: "user.email"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInput", {
                            attrs: {
                              placeholder: "Password",
                              type: "password",
                              autocomplete: "curent-password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "prepend-content",
                                fn: function() {
                                  return [
                                    _c("CIcon", {
                                      attrs: { name: "cil-lock-locked" }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ]),
                            model: {
                              value: _vm.user.password,
                              callback: function($$v) {
                                _vm.$set(_vm.user, "password", $$v)
                              },
                              expression: "user.password"
                            }
                          }),
                          _vm._v(" "),
                          _c("CInputCheckbox", {
                            staticClass: "mt-4 mb-4",
                            attrs: {
                              label: "Recordarme",
                              name: "remember",
                              checked: _vm.user.remember
                            },
                            on: {
                              "update:checked": function($event) {
                                _vm.user.remember = $event
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "CRow",
                            [
                              _c(
                                "CCol",
                                { attrs: { col: "3" } },
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass: "px-4",
                                      attrs: { color: "primary" },
                                      on: { click: _vm.login }
                                    },
                                    [_vm._v("Login")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { col: "4" } },
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass: "px-4",
                                      attrs: { color: "success" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$router.push(
                                            "/pages/register"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Registro")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "text-right",
                                  attrs: { col: "3" }
                                },
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass: "px-0 py-0",
                                      attrs: { color: "link" }
                                    },
                                    [_vm._v("¿Olvidaste tu password?")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/Login.vue":
/*!********************************************!*\
  !*** ./resources/js/views/pages/Login.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=eaaf2be2& */ "./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=eaaf2be2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Login.vue?vue&type=template&id=eaaf2be2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_eaaf2be2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);