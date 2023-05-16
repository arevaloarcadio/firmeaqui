(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/receipts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/receipts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  data: function data() {
    return {
      selected: 'Month',
      tableItems: [{
        avatar: {
          url: 'img/avatars/1.jpg',
          status: 'success'
        },
        user: {
          name: 'Yiorgos Avraamu',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'USA',
          flag: 'cif-us'
        },
        usage: {
          value: 50,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Mastercard',
          icon: 'cib-cc-mastercard'
        },
        activity: '10 sec ago'
      }, {
        avatar: {
          url: 'img/avatars/2.jpg',
          status: 'danger'
        },
        user: {
          name: 'Avram Tarasios',
          "new": false,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Brazil',
          flag: 'cif-br'
        },
        usage: {
          value: 22,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Visa',
          icon: 'cib-cc-visa'
        },
        activity: '5 minutes ago'
      }, {
        avatar: {
          url: 'img/avatars/3.jpg',
          status: 'warning'
        },
        user: {
          name: 'Quintin Ed',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'India',
          flag: 'cif-in'
        },
        usage: {
          value: 74,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Stripe',
          icon: 'cib-stripe'
        },
        activity: '1 hour ago'
      }, {
        avatar: {
          url: 'img/avatars/4.jpg',
          status: ''
        },
        user: {
          name: 'Enéas Kwadwo',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'France',
          flag: 'cif-fr'
        },
        usage: {
          value: 98,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'PayPal',
          icon: 'cib-paypal'
        },
        activity: 'Last month'
      }, {
        avatar: {
          url: 'img/avatars/5.jpg',
          status: 'success'
        },
        user: {
          name: 'Agapetus Tadeáš',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Spain',
          flag: 'cif-es'
        },
        usage: {
          value: 22,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Google Wallet',
          icon: 'cib-google-pay'
        },
        activity: 'Last week'
      }, {
        avatar: {
          url: 'img/avatars/6.jpg',
          status: 'danger'
        },
        user: {
          name: 'Friderik Dávid',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Poland',
          flag: 'cif-pl'
        },
        usage: {
          value: 43,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Amex',
          icon: 'cib-cc-amex'
        },
        activity: 'Last week'
      }],
      receipts: [],
      tableFields: [{
        key: 'subject',
        label: '',
        _classes: 'text-center'
      }, {
        key: 'user',
        label: 'Compañia'
      }, {
        key: 'created_at',
        label: 'Estado',
        _classes: 'text-center'
      } //{ key: 'usage', label: 'Progresión' },
      //{ key: 'payment', label: 'Payment method', _classes: 'text-center' },
      //{ key: 'activity', label: 'Actualizado' },
      ]
    };
  },
  mounted: function mounted() {
    this.getRequests();
    pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a.logToConsole = true;
    var pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a('373665a92c46b54dfc70', {
      cluster: 'eu'
    });
    var self = this;
    var channel = pusher.subscribe('channel-' + this.getUser.email);
    channel.bind('receipts', function (data) {
      console.log(data);
      self.getRequests();
    });
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getUser'])),
  methods: _defineProperty({
    getDocumentPath: function getDocumentPath(users) {
      var _this = this;

      var user = users.find(function (user) {
        return user.id == _this.getUser.id;
      });
      window.open(axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL + '/' + user.pivot.signed_document_path, "_blank");
    },
    getRequests: function getRequests() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/requests/by-user').then(function (res) {
        _this2.receipts = res.data.data;
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, "getDocumentPath", function getDocumentPath(path) {
    window.open(axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL + '/' + path, "_blank");
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/receipts.vue?vue&type=template&id=435d943c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/receipts.vue?vue&type=template&id=435d943c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        "CCard",
        [
          _c(
            "CCardBody",
            [
              _c(
                "CRow",
                [
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "margin-left": "24px",
                          "margin-right": "24px"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "card" },
                          [
                            _c("CCardHeader", { staticClass: "pb-0" }, [
                              _c("h5", [_vm._v("Recibidos")])
                            ]),
                            _vm._v(" "),
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-responsive-sm table-striped table-align-middle"
                              },
                              [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Enviado por")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Asunto")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("¿Esta firmado?")
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-center" }, [
                                      _vm._v("Recibido el ")
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(_vm.receipts.data, function(
                                      receipt
                                    ) {
                                      return _c("tr", { key: receipt }, [
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(receipt.user_creator.name)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(receipt.subject))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                receipt.users.find(function(
                                                  user
                                                ) {
                                                  return (
                                                    user.id == _vm.getUser.id &&
                                                    user.pivot.is_signed == 1
                                                  )
                                                }) !== undefined
                                                  ? "Si"
                                                  : "No"
                                              ) + " "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                new Date(
                                                  receipt.created_at
                                                ).toLocaleDateString() +
                                                  " " +
                                                  new Date(
                                                    receipt.created_at
                                                  ).toLocaleTimeString()
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            receipt.users.find(function(user) {
                                              return (
                                                user.id == _vm.getUser.id &&
                                                user.pivot.is_signed == 1
                                              )
                                            }) === undefined
                                              ? _c(
                                                  "CButton",
                                                  {
                                                    attrs: {
                                                      size: "sm",
                                                      color: "primary"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.$router.push(
                                                          {
                                                            name: "Firmar",
                                                            params: {
                                                              uuid:
                                                                receipt.uuid,
                                                              email:
                                                                _vm.getUser
                                                                  .email
                                                            }
                                                          }
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("span", [
                                                      _vm._v("Firmar")
                                                    ])
                                                  ]
                                                )
                                              : _c(
                                                  "CButton",
                                                  {
                                                    attrs: {
                                                      size: "sm",
                                                      color: "primary"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.getDocumentPath(
                                                          receipt.signed_document_path
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("span", [
                                                      _vm._v(
                                                        "Ver documento firmado"
                                                      )
                                                    ])
                                                  ]
                                                )
                                          ],
                                          1
                                        )
                                      ])
                                    }),
                                    _vm._v(" "),
                                    _vm.receipts["data"]
                                      ? [
                                          _vm.receipts.data.length == 0
                                            ? _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center",
                                                    attrs: { colspan: "4" }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "No has recibido ningún documento"
                                                    )
                                                  ]
                                                )
                                              ])
                                            : _vm._e()
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "nav",
                              {
                                attrs: {
                                  "aria-label": "page navigation example"
                                }
                              },
                              [
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "pagination justify-content-center"
                                  },
                                  [
                                    _c(
                                      "li",
                                      {
                                        class: {
                                          "page-item": true,
                                          disabled: !_vm.receipts.prev_page_url
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "page-link",
                                            attrs: { tabindex: "-1" },
                                            on: {
                                              click: function($event) {
                                                return _vm.page(
                                                  _vm.receipts.prev_page_url
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Anterior")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("li", { staticClass: "page-item" }, [
                                      _c("a", { staticClass: "page-link" }, [
                                        _vm._v(
                                          _vm._s(_vm.receipts.current_page)
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      {
                                        class: {
                                          "page-item": true,
                                          disabled: !_vm.receipts.next_page_url
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "page-link",
                                            on: {
                                              click: function($event) {
                                                return _vm.page(
                                                  _vm.receipts.next_page_url
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Siguiente")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
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

/***/ "./resources/js/views/pages/user/documents/receipts.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/receipts.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _receipts_vue_vue_type_template_id_435d943c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipts.vue?vue&type=template&id=435d943c& */ "./resources/js/views/pages/user/documents/receipts.vue?vue&type=template&id=435d943c&");
/* harmony import */ var _receipts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receipts.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/user/documents/receipts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _receipts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _receipts_vue_vue_type_template_id_435d943c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _receipts_vue_vue_type_template_id_435d943c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/user/documents/receipts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/user/documents/receipts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/receipts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./receipts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/receipts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/user/documents/receipts.vue?vue&type=template&id=435d943c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/receipts.vue?vue&type=template&id=435d943c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipts_vue_vue_type_template_id_435d943c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./receipts.vue?vue&type=template&id=435d943c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/receipts.vue?vue&type=template&id=435d943c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipts_vue_vue_type_template_id_435d943c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipts_vue_vue_type_template_id_435d943c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);