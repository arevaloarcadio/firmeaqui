(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/profile/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/profile/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/user */ "./resources/js/helpers/user.js");
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
  name: 'Profile',
  data: function data() {
    return {
      axios: axios__WEBPACK_IMPORTED_MODULE_0___default.a,
      name: null,
      email: null
    };
  },
  mounted: function mounted() {
    this.name = this.getUser.name;
    this.email = this.getUser.email;
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getUser'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['setAuthUser'])), {}, {
    getPicture: function getPicture() {
      var file = this.$refs.picture.files[0];
      this.file_picture = file;
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#profile').attr("src", window.webkitURL.createObjectURL(file));
    },
    save: function save() {
      var _this = this;

      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("picture", this.file_picture);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/' + this.getUser.id, formData).then(function (res) {
        console.log(res);
        _helpers_user__WEBPACK_IMPORTED_MODULE_3__["default"].setUser(res.data.data);

        _this.setAuthUser(res.data.data);

        _this.$toast.fire({
          icon: 'success',
          title: 'Modificación de perfil exitoso'
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    save_password: function save_password() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/password', {
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function (res) {
        _this2.$toast.fire({
          icon: 'success',
          title: 'Cambio de contraseña exitoso'
        });

        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/profile/index.vue?vue&type=template&id=67e46a52&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/profile/index.vue?vue&type=template&id=67e46a52& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "py-4" },
        [
          _c(
            "CCol",
            { attrs: { sm: "12", md: "12" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardBody",
                    [
                      _c("CCardHeader", { staticClass: "pb-0" }, [
                        _c("h5", [_vm._v("Mi Perfil")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        {
                          staticClass: "form-group",
                          staticStyle: { "margin-top": "18px" }
                        },
                        [
                          _c("CCol", { attrs: { sm: "12", md: "3" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "12", md: "6" } },
                            [
                              _c("center", [
                                _c("label", { attrs: { for: "file-input" } }, [
                                  _c("img", {
                                    staticClass: "c-avatar-img",
                                    staticStyle: {
                                      height: "100px",
                                      width: "100px"
                                    },
                                    attrs: {
                                      id: "profile",
                                      src:
                                        _vm.axios.defaults.baseURL +
                                        "/" +
                                        _vm.getUser.photo
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                ref: "picture",
                                staticStyle: { display: "none" },
                                attrs: {
                                  type: "file",
                                  id: "file-input",
                                  name: "file-input",
                                  accept: "image/x-png,image/jpeg"
                                },
                                on: { change: _vm.getPicture }
                              }),
                              _vm._v(" "),
                              _c("label", { staticClass: "typo__label" }, [
                                _vm._v("Nombre")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.name,
                                    expression: "name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { placeholder: "Ingrese el nombre" },
                                domProps: { value: _vm.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.name = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("label", { staticClass: "typo__label" }, [
                                _vm._v("Email")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.email,
                                    expression: "email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { placeholder: "Ingrese el Email" },
                                domProps: { value: _vm.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.email = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  staticClass: "px-4",
                                  attrs: { color: "primary" },
                                  on: { click: _vm.save }
                                },
                                [
                                  _vm._v(
                                    "\n                Guardar\n              "
                                  )
                                ]
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
      ),
      _vm._v(" "),
      _c(
        "CRow",
        [
          _c(
            "CCol",
            { attrs: { sm: "12", md: "12" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardBody",
                    [
                      _c("CCardHeader", { staticClass: "pb-0" }, [
                        _c("h5", [_vm._v("Cambio de contraseña")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "CRow",
                        {
                          staticClass: "form-group",
                          staticStyle: { "margin-top": "18px" }
                        },
                        [
                          _c("CCol", { attrs: { sm: "12", md: "3" } }),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { sm: "12", md: "6" } },
                            [
                              _c("label", { staticClass: "typo__label" }, [
                                _vm._v("Contraseña")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.password,
                                    expression: "password"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { placeholder: "Ingrese el nombre" },
                                domProps: { value: _vm.password },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.password = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("label", { staticClass: "typo__label" }, [
                                _vm._v("Confirmar Contraseña")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.password_confirmation,
                                    expression: "password_confirmation"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { placeholder: "Ingrese el Email" },
                                domProps: { value: _vm.password_confirmation },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.password_confirmation =
                                      $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  staticClass: "px-4",
                                  attrs: { color: "primary" },
                                  on: { click: _vm.save_password }
                                },
                                [
                                  _vm._v(
                                    "\n                Guardar\n              "
                                  )
                                ]
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

/***/ "./resources/js/views/pages/user/profile/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/user/profile/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_67e46a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=67e46a52& */ "./resources/js/views/pages/user/profile/index.vue?vue&type=template&id=67e46a52&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/user/profile/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_67e46a52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_67e46a52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/user/profile/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/user/profile/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/user/profile/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/profile/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/user/profile/index.vue?vue&type=template&id=67e46a52&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/user/profile/index.vue?vue&type=template&id=67e46a52& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_67e46a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=67e46a52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/profile/index.vue?vue&type=template&id=67e46a52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_67e46a52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_67e46a52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);