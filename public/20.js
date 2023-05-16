(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/notifications/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/notifications/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-notifications */ "./node_modules/vue-notifications/dist/vue-notifications.js");
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
  name: 'Notifications',
  data: function data() {
    return {
      notifications: [],
      units: [],
      url: "",
      userlist: [],
      removed: [],
      selectedOffice: "",
      previousUrl: 0,
      nextUrl: 2,
      notification: {
        id: 0,
        name: "",
        code: ""
      },
      delivery: {
        notification_id: 0,
        unit_id: 0,
        read: 0
      },
      search: {
        needle: ""
      },
      submitted: false,
      notificationModal: false,
      unitModal: false,
      tableFields: [{
        key: 'name',
        label: 'Nombre'
      }, {
        key: 'code',
        label: 'Código',
        _classes: 'text-center'
      }],
      userFields: [{
        key: 'avatar',
        label: ''
      }, {
        key: 'name',
        label: 'Nombre'
      }, {
        key: 'created_at',
        label: 'Fecha Creación',
        _classes: 'text-center'
      }, {
        key: 'read',
        label: 'Leído',
        _classes: 'text-center'
      }, {
        key: 'updated_at',
        label: 'Fecha Lectura',
        _classes: 'text-center'
      }]
    };
  },
  created: function created() {
    this.getUnits();
    this.getNotifications();
  },
  mounted: function mounted() {},
  methods: {
    customLabel: function customLabel(_ref) {
      var firstname = _ref.firstname,
          lastname = _ref.lastname;
      return "".concat(firstname, " ").concat(lastname);
    },
    getUserNotified: function getUserNotified(id, notification) {
      var t = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: 'notifications/units/' + id + '/' + notification,
        method: 'GET'
      }).then(function (resp) {
        console.log("vaaaaa");
        t.userlist = resp.data.users; //resolve(resp)
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    removeNotification: function removeNotification(id) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: 'notification/destroy/' + id,
        method: 'POST'
      }).then(function (resp) {
        var t = _this;
        t.getNotifications(); //resolve(resp)
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    getUnits: function getUnits() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: 'units',
        method: 'GET'
      }).then(function (resp) {
        var t = _this2;
        t.units = resp.data.units; //resolve(resp)

        resolve(resp);
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    newNotification: function newNotification(e) {
      var _this3 = this;

      this.$validator.validateAll().then(function (exito) {
        var t = _this3;

        if (exito) {
          axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: 'notification/add',
            method: 'POST',
            data: t.notification
          }).then(function (resp) {
            t.submitted = false;
            t.notification.id = 0;
            t.notification.name = "";
            t.notification.code = "";
            t.notificationModal = false;
            t.getNotifications();
            t.showSuccessMsg();
          })["catch"](function (err) {
            t.showErrorMsg(); //commit('auth_error', err)
            //reject(err)
          });
        }

        e.preventDefault();
        _this3.submitted = true;
      });
    },
    getNotifications: function getNotifications() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: 'notifications/units',
        method: 'GET'
      }).then(function (resp) {
        var t = _this4;
        t.notifications = resp.data.notifications.data;
        t.url = 'notifications/units'; //resolve(resp)
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    logout: function logout() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: 'logout',
        method: 'POST'
      }).then(function (resp) {
        var t = _this5;
        console.log(resp); //resolve(resp)
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    finder: function finder() {
      var _this6 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: 'notification/search',
        method: 'POST',
        data: this.search
      }).then(function (resp) {
        var t = _this6;
        t.notifications = resp.data.notifications.data;
        t.url = 'notifications/units'; //resolve(resp)
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    addUnit: function addUnit(e) {
      var t = this;
      t.delivery.unit_id = t.delivery.unit_id.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: 'delivery/add/' + this.delivery.notification_id,
        method: 'POST',
        data: t.delivery
      }).then(function (resp) {
        t.delivery.unit_id = 0;
        t.unitModal = false;
        t.getNotifications();
        t.showSuccessMsg();
      })["catch"](function (err) {
        t.showErrorMsg(); //commit('auth_error', err)
        //reject(err)
      });
      e.preventDefault();
    },
    addAll: function addAll(id) {
      var t = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: 'delivery/all/' + id,
        method: 'POST'
      }).then(function (resp) {
        t.delivery.unit_id = 0;
        t.unitModal = false;
        t.getNotifications();
        t.showSuccessMsg();
      })["catch"](function (err) {
        t.showErrorMsg(); //commit('auth_error', err)
        //reject(err)
      }); //e.preventDefault()
    },
    page: function page(url) {
      var _this7 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: url,
        method: 'GET'
      }).then(function (resp) {
        var t = _this7;
        t.notifications = resp.data.notifications;

        if (resp.data.notifications.next_page_url) {
          t.nextUrl = resp.data.notifications.next_page_url;
        } else {
          t.nextUrl = "";
        }

        if (resp.data.notifications.prev_page_url) {
          t.previousUrl = resp.data.notifications.prev_page_url;
        } else {
          t.previousUrl = "";
        } //resolve(resp)

      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    }
  },
  notifications: {
    showSuccessMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].types.success,
      title: 'Operación completada',
      message: 'Unidad añadida con éxito!'
    },
    showErrorMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].types.error,
      title: 'Operación rechazada',
      message: 'Algo salió mal'
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-webkit-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/notifications/index.vue?vue&type=template&id=39a4dcf1&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/notifications/index.vue?vue&type=template&id=39a4dcf1& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
          _c("CCardHeader", [
            _c(
              "h5",
              [
                _vm._v("Notificaciones  "),
                _c(
                  "CButton",
                  {
                    staticClass: "float-right py-0 mr-1",
                    attrs: { color: "success" },
                    on: {
                      click: function($event) {
                        _vm.notificationModal = true
                      }
                    }
                  },
                  [
                    _c("CIcon", {
                      staticClass: "mr-2 cil-energy",
                      attrs: { name: "cil-pencil" }
                    }),
                    _vm._v("Nueva Notificación\n          ")
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search.needle,
                    expression: "search.needle"
                  }
                ],
                attrs: { type: "string", name: "needle" },
                domProps: { value: _vm.search.needle },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.search, "needle", $event.target.value)
                  }
                }
              }),
              _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  on: {
                    click: function($event) {
                      return _vm.finder()
                    }
                  }
                },
                [_vm._v("Buscar")]
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    _vm._l(_vm.notifications, function(not) {
                      return _c(
                        "div",
                        { attrs: { md: "4" } },
                        [
                          _c(
                            "CCard",
                            [
                              _c("CCardHeader", { staticClass: "pb-0" }, [
                                _c("h5", [
                                  _vm._v(_vm._s(not.name)),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-success btn-sm ml-2",
                                      on: {
                                        click: function($event) {
                                          _vm.notificationModal = true
                                          _vm.notification = not
                                        }
                                      }
                                    },
                                    [_vm._v("Editar")]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "CCardBody",
                                [
                                  _c(
                                    "div",
                                    { staticClass: "float-left p-2" },
                                    [
                                      _vm._l(not.deliveries, function(item) {
                                        return [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-success",
                                              attrs: { type: "button" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.getUserNotified(
                                                    item.id,
                                                    not.id
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v(_vm._s(item.name))]
                                          )
                                        ]
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "border-0",
                                      on: {
                                        click: function($event) {
                                          ;(_vm.unitModal = true) &&
                                            (_vm.delivery.notification_id =
                                              not.id)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "float-left p-2" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticStyle: {
                                                overflow: "hidden",
                                                height: "30px",
                                                width: "30px",
                                                "border-radius": "30%",
                                                "background-color": "white"
                                              }
                                            },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src:
                                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ambox_emblem_plus.svg/1200px-Ambox_emblem_plus.svg.png"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.userlist.length > 0
                                    ? _c("CDataTable", {
                                        staticClass: "mb-0 table-outline",
                                        attrs: {
                                          hover: "",
                                          items: _vm.userlist,
                                          fields: _vm.userFields,
                                          "head-color": "light",
                                          "no-sorting": ""
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "avatar",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "c-avatar"
                                                      },
                                                      [
                                                        _c("img", {
                                                          staticClass:
                                                            "c-avatar-img",
                                                          attrs: {
                                                            src:
                                                              item.user.photo,
                                                            alt: ""
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                )
                                              }
                                            },
                                            {
                                              key: "name",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return _c("td", {}, [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        item.user.firstname
                                                      ) +
                                                      " " +
                                                      _vm._s(
                                                        item.user.lastname
                                                      ) +
                                                      "\n                      "
                                                  )
                                                ])
                                              }
                                            },
                                            {
                                              key: "read",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _c("CIcon", {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value: item.read,
                                                          expression:
                                                            "item.read"
                                                        }
                                                      ],
                                                      staticStyle: {
                                                        color: "green"
                                                      },
                                                      attrs: {
                                                        name: "cil-check",
                                                        height: "25"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              }
                                            },
                                            {
                                              key: "created_at",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return _c("td", {}, [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(item.created_at) +
                                                      "\n                      "
                                                  )
                                                ])
                                              }
                                            },
                                            {
                                              key: "updated_at",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return _c("td", {}, [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(item.updated_at) +
                                                      "\n                      "
                                                  )
                                                ])
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("CCardFooter", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary float-right",
                                    on: {
                                      click: function($event) {
                                        return _vm.addAll(not.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Agregar Todos")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger",
                                    attrs: { disabled: !_vm.removed[not.id] },
                                    on: {
                                      click: function($event) {
                                        return _vm.removeNotification(not.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Borrar")]
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.removed[not.id],
                                      expression: "removed[not.id]"
                                    }
                                  ],
                                  attrs: { type: "checkbox", name: "read" },
                                  domProps: {
                                    checked: Array.isArray(_vm.removed[not.id])
                                      ? _vm._i(_vm.removed[not.id], null) > -1
                                      : _vm.removed[not.id]
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.removed[not.id],
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.removed,
                                              not.id,
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.removed,
                                              not.id,
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.removed, not.id, $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" Deseo eliminarlo\n\n              ")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    0
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.notifications
            ? _c("CCardFooter", [
                _c("nav", [
                  _c(
                    "ul",
                    { staticClass: "pagination justify-content-center" },
                    [
                      _c("li", { staticClass: "page-item" }, [
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.previousUrl,
                                expression: "previousUrl"
                              }
                            ],
                            staticClass: "page-link",
                            attrs: { tabindex: "-1" },
                            on: {
                              click: function($event) {
                                return _vm.page(_vm.previousUrl)
                              }
                            }
                          },
                          [_vm._v("Anterior")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "page-item" }, [
                        _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.nextUrl,
                                expression: "nextUrl"
                              }
                            ],
                            staticClass: "page-link btn btn-primary",
                            on: {
                              click: function($event) {
                                return _vm.page(_vm.nextUrl)
                              }
                            }
                          },
                          [_vm._v("Siguiente")]
                        )
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { method: "post" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.newNotification($event)
            }
          }
        },
        [
          _c(
            "CModal",
            {
              attrs: {
                title: "Nueva Notification",
                show: _vm.notificationModal
              },
              on: {
                "update:show": function($event) {
                  _vm.notificationModal = $event
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function() {
                    return [
                      _c(
                        "CButton",
                        {
                          attrs: { color: "danger" },
                          on: {
                            click: function($event) {
                              _vm.notificationModal = false
                            }
                          }
                        },
                        [_vm._v("Cerrar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { color: "primary", type: "submit" } },
                        [_vm._v("Crear Notificación")]
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c(
                "label",
                { staticClass: "typo__label", attrs: { for: "name" } },
                [_vm._v("Nombre")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.notification.name,
                    expression: "notification.name"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": _vm.submitted && _vm.errors.has("name")
                },
                attrs: {
                  type: "text",
                  name: "name",
                  placeholder: "Introduzca el nombre",
                  id: "name"
                },
                domProps: { value: _vm.notification.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.notification, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.has("name")
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(_vm._s(_vm.errors.first("name")))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "typo__label pt-4", attrs: { for: "code" } },
                [_vm._v("Código")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.notification.code,
                    expression: "notification.code"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "min:6",
                    expression: "'min:6'"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": _vm.submitted && _vm.errors.has("code")
                },
                attrs: {
                  name: "code",
                  placeholder: "Introduzca el nombre",
                  id: "code"
                },
                domProps: { value: _vm.notification.code },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.notification, "code", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.has("code")
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(_vm._s(_vm.errors.first("code")))
                  ])
                : _vm._e()
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { method: "post" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addUnit($event)
            }
          }
        },
        [
          _c(
            "CModal",
            {
              attrs: { title: "Añadir Oficina", show: _vm.unitModal },
              on: {
                "update:show": function($event) {
                  _vm.unitModal = $event
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function() {
                    return [
                      _c(
                        "CButton",
                        {
                          attrs: { color: "danger" },
                          on: {
                            click: function($event) {
                              _vm.unitModal = false
                            }
                          }
                        },
                        [_vm._v("Cerrar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        { attrs: { color: "primary", type: "submit" } },
                        [_vm._v("Añadir Oficina")]
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c(
                "label",
                { staticClass: "typo__label", attrs: { for: "unit" } },
                [_vm._v("Oficina")]
              ),
              _vm._v(" "),
              _c("multiselect", {
                attrs: {
                  placeholder: "Introduzca Oficina",
                  label: "name",
                  "track-by": "id",
                  options: _vm.units,
                  "show-labels": false,
                  "option-height": 30,
                  id: "unit",
                  name: "unit"
                },
                model: {
                  value: _vm.delivery.unit_id,
                  callback: function($$v) {
                    _vm.$set(_vm.delivery, "unit_id", $$v)
                  },
                  expression: "delivery.unit_id"
                }
              })
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

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_dist_cjs_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader/dist/cjs.js??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_dist_cjs_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_dist_cjs_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_dist_cjs_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_dist_cjs_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_dist_cjs_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/admin/notifications/index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/pages/admin/notifications/index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_39a4dcf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=39a4dcf1& */ "./resources/js/views/pages/admin/notifications/index.vue?vue&type=template&id=39a4dcf1&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/notifications/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_39a4dcf1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_39a4dcf1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/notifications/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/notifications/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/notifications/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/notifications/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/notifications/index.vue?vue&type=template&id=39a4dcf1&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/notifications/index.vue?vue&type=template&id=39a4dcf1& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_39a4dcf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=39a4dcf1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/notifications/index.vue?vue&type=template&id=39a4dcf1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_39a4dcf1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_39a4dcf1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);