(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/task/Tasks.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/task/Tasks.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-notifications */ "./node_modules/vue-notifications/dist/vue-notifications.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Toast = sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  onOpen: function onOpen(toast) {
    toast.addEventListener('mouseenter', sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.stopTimer);
    toast.addEventListener('mouseleave', sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.resumeTimer);
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Tasks",
  data: function data() {
    return {
      msgError: "",
      userTicket: null,
      users: [],
      tasks: [],
      futureTasks: [],
      searching: false,
      previousUrl: "",
      nextUrl: "",
      submitted: false,
      statuses: [{
        name: "Cerrado",
        value: "close"
      }, {
        name: "Pendiente",
        value: "pending"
      }, {
        name: "Todo",
        value: "all"
      }],
      task: {
        description: "",
        user_id: 0,
        date: null
      },
      search: {
        description: "",
        user_id: 0,
        date: null
      },
      taskFields: [{
        key: "id",
        label: "",
        _classes: "text-center"
      }, {
        key: "avatar",
        label: "Avatar",
        _classes: "text-center"
      }, {
        key: "user",
        label: "Usuario"
      }, {
        key: "description",
        label: "Descripción"
      }, {
        key: "status",
        label: "Estado"
      }, {
        key: "date",
        label: "Fecha"
      }, {
        key: "actions",
        label: ""
      }]
    };
  },
  created: function created() {
    this.getUsers();
    this.getMyTasks();
    this.getMyFutureTasks();
    this.task.date = new Date().toLocaleString();
  },
  mounted: function mounted() {},
  methods: {
    customLabel: function customLabel(_ref) {
      var firstname = _ref.firstname,
          lastname = _ref.lastname,
          units = _ref.units;
      return "".concat(firstname, " ").concat(lastname, " ").concat(units);
    },
    getUsers: function getUsers() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: "users",
        method: "GET"
      }).then(function (resp) {
        var t = _this;
        t.users = resp.data.users; //resolve(resp)

        resolve(resp);
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    getMyTasks: function getMyTasks() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: "myPendingTasks",
        method: "GET"
      }).then(function (resp) {
        var t = _this2;
        t.tasks = resp.data.tasks; //resolve(resp)

        resolve(resp);
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    getMyFutureTasks: function getMyFutureTasks() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: "myFutureTasks",
        method: "GET"
      }).then(function (resp) {
        var t = _this3;
        t.futureTasks = resp.data.tasks.data;

        if (resp.data.tasks.next_page_url) {
          t.nextUrl = resp.data.tasks.next_page_url;
        } else {
          t.nextUrl = "";
        }

        if (resp.data.tasks.prev_page_url) {
          t.previousUrl = resp.data.tasks.prev_page_url;
        } else {
          t.previousUrl = "";
        } //resolve(resp)


        resolve(resp);
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    previous: function previous() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: this.previousUrl,
        method: "GET"
      }).then(function (resp) {
        var t = _this4;
        console.log(resp.data);
        t.futureTasks = resp.data.tasks.data;

        if (resp.data.tasks.next_page_url) {
          t.nextUrl = resp.data.tasks.next_page_url;
        } else {
          t.nextUrl = "";
        }

        if (resp.data.tasks.prev_page_url) {
          t.previousUrl = resp.data.tasks.prev_page_url;
        } else {
          t.previousUrl = "";
        } //resolve(resp)


        resolve(resp);
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    next: function next() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: this.nextUrl,
        method: "GET"
      }).then(function (resp) {
        var t = _this5;
        console.log(resp.data.tasks.prev_page_url);
        t.futureTasks = resp.data.tasks.data;

        if (resp.data.tasks.next_page_url) {
          t.nextUrl = resp.data.tasks.next_page_url;
        } else {
          t.nextUrl = "";
        }

        if (resp.data.tasks.prev_page_url) {
          t.previousUrl = resp.data.tasks.prev_page_url;
        } else {
          t.previousUrl = "";
        } //resolve(resp)


        resolve(resp);
      })["catch"](function (err) {//commit('auth_error', err)
        //reject(err)
      });
    },
    postNewTask: function postNewTask(e) {
      var _this6 = this;

      e.preventDefault();
      this.submitted = true;
      this.$validator.validateAll().then(function (exito) {
        var t = _this6;

        if (exito) {
          t.task.user_id = t.task.user_id.id;
          axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: "newTask",
            method: "POST",
            data: t.task
          }).then(function (resp) {
            t.submitted = false;
            t.task.user_id = 0;
            t.task.description = "";
            t.task.date = null; //resolve(resp)

            t.showSuccessMsg();
            t.$router.push({
              path: "/tasks/" + resp.data.task.id
            });
          })["catch"](function (err) {
            var i = 0;

            for (var key in err.response.data) {
              err.response.data[key].forEach(function (error) {
                i++;
              });
            }

            var e = 0;

            for (var key in err.response.data) {
              err.response.data[key].forEach(function (error) {
                e++;

                if (e == i) {
                  _this6.msgError += error;
                } else {
                  _this6.msgError += error + "<br>";
                }
              });
            }

            Toast.fire({
              icon: 'error',
              html: _this6.msgError
            }); //this.msgError = ""
            //commit('auth_error', err)
            //t.showErrorMsg();
            //reject(err)
          });
        }
      });
    },
    searchTasks: function searchTasks() {
      var t = this;
      this.search.user_id = this.search.user_id.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url: "tasks/search",
        method: "POST",
        data: t.search
      }).then(function (resp) {
        console.log(resp);
        t.futureTasks = resp.data.tasks;
        t.search.user_id = 0;
      })["catch"](function (err) {
        console.log(err); //commit('auth_error', err)

        t.showErrorMsg(); //reject(err)
      });
    },
    unitsTitleToHTML: function unitsTitleToHTML(userId) {
      if (userId == undefined) return;
      var msg = '';
      var user = this.users.find(function (u) {
        return u.id == userId;
      });

      if (Object.keys(user.units).length) {
        // const reducer = user.units.reduce((accumulator, currentValue) => {
        //   console.log(accumulator, currentValue);
        //   return `${accumulator.name} <br> ${currentValue.name}`
        // });
        for (var key in user.units) {
          msg = msg.concat("".concat(user.units[key].name, ", "));
        }

        msg = msg.slice(0, -2);
      }

      return msg;
    }
  },
  watch: {
    searching: function searching() {
      if (this.searching) {
        this.futureTasks = [];
      } else {
        this.getMyFutureTasks();
      }
    }
  },
  notifications: {
    showSuccessMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].types.success,
      title: "Operación completada",
      message: "Registro creado con éxito!"
    },
    showCloseMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].types.success,
      title: "Operación completada",
      message: "Registro Actualizado con éxito!"
    },
    showErrorMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].types.error,
      title: "Operación rechazada",
      message: "Algo salió mal:"
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/task/Tasks.vue?vue&type=template&id=19fece24&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/task/Tasks.vue?vue&type=template&id=19fece24& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          _c(
            "CCol",
            { attrs: { sm: "12", md: "4" } },
            [
              _c("CCard", { staticClass: "p-2" }, [
                _c(
                  "form",
                  {
                    attrs: { method: "post" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.postNewTask($event)
                      }
                    }
                  },
                  [
                    _c("CCardHeader", { staticClass: "pb-0" }, [
                      _c("h5", [_vm._v("Asignar Tarea")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "CCardBody",
                      { staticClass: "pt-2" },
                      [
                        _c(
                          "CRow",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "typo__label",
                                attrs: { for: "user" }
                              },
                              [_vm._v("Usuario")]
                            ),
                            _vm._v(" "),
                            _c("multiselect", {
                              attrs: {
                                id: "user",
                                name: "user",
                                label: "firstname",
                                placeholder: "Introduzca Nombre",
                                "track-by": "id",
                                options: _vm.users,
                                "option-height": 30,
                                "show-labels": false,
                                "custom-label": _vm.customLabel
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "singleLabel",
                                  fn: function(props) {
                                    return [
                                      _c("img", {
                                        staticClass: "option__image mr-2 py-0",
                                        attrs: {
                                          src: props.option.photo,
                                          height: "30px"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "option__desc" },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "option__title" },
                                            [
                                              _vm._v(
                                                _vm._s(props.option.firstname) +
                                                  " " +
                                                  _vm._s(props.option.lastname)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          _vm._l(props.option.units, function(
                                            unit,
                                            key
                                          ) {
                                            return _c(
                                              "small",
                                              {
                                                key: key,
                                                staticClass: "mr-2 text-info"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(unit.name) +
                                                    "\n                    "
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ]
                                  }
                                },
                                {
                                  key: "option",
                                  fn: function(props) {
                                    return [
                                      _c("img", {
                                        staticClass: "option__image mr-2 py-0",
                                        attrs: {
                                          src: props.option.photo,
                                          height: "30px"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "option__desc" },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "option__title" },
                                            [
                                              _vm._v(
                                                _vm._s(props.option.firstname) +
                                                  " " +
                                                  _vm._s(props.option.lastname)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          _vm._l(props.option.units, function(
                                            unit,
                                            key
                                          ) {
                                            return _c(
                                              "small",
                                              {
                                                key: key,
                                                staticClass: "mr-2 text-info"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(unit.name) +
                                                    "\n                    "
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.task.user_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.task, "user_id", $$v)
                                },
                                expression: "task.user_id"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("CRow", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "typo__label",
                              attrs: { for: "description" }
                            },
                            [_vm._v("Descripción")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.task.description,
                                expression: "task.description"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:4",
                                expression: "'required|min:4'"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.submitted && _vm.errors.has("description")
                            },
                            attrs: {
                              id: "description",
                              name: "description",
                              rows: "5",
                              placeholder: "Describa aquí la tarea"
                            },
                            domProps: { value: _vm.task.description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.task,
                                  "description",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("description")
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.first("description")))
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("CRow", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "typo__label",
                              attrs: { for: "dateTask" }
                            },
                            [_vm._v("Fecha")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.task.date,
                                expression: "task.date"
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
                              "is-invalid":
                                _vm.submitted && _vm.errors.has("dateTask")
                            },
                            attrs: {
                              type: "date",
                              name: "dateTask",
                              id: "dateTask"
                            },
                            domProps: { value: _vm.task.date },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.task, "date", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("dateTask")
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.first("dateTask")))
                              ])
                            : _vm._e()
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("CCardFooter", { staticClass: "py-2" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary mt-2",
                          on: { click: _vm.postNewTask }
                        },
                        [_vm._v("Crear Tarea")]
                      )
                    ])
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { attrs: { sm: "12", md: "8" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", { staticClass: "pb-0" }, [
                    _c("h5", [_vm._v("Tareas Pendientes")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _vm.tasks
                        ? _c("CDataTable", {
                            staticClass: "mb-0 table-outline",
                            attrs: {
                              hover: "",
                              "no-sorting": "",
                              items: _vm.tasks,
                              fields: _vm.taskFields,
                              "head-color": "light"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "id",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c(
                                      "td",
                                      { staticClass: "text-center" },
                                      [
                                        _c("b", [_vm._v("ID:")]),
                                        _vm._v(
                                          " " +
                                            _vm._s(item.id) +
                                            "\n            "
                                        )
                                      ]
                                    )
                                  }
                                },
                                {
                                  key: "avatar",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c(
                                      "td",
                                      { staticClass: "text-center" },
                                      [
                                        _c("div", { staticClass: "c-avatar" }, [
                                          _c("img", {
                                            directives: [
                                              {
                                                name: "c-popover",
                                                rawName: "v-c-popover",
                                                value: {
                                                  header: "Unidades",
                                                  content: _vm.unitsTitleToHTML(
                                                    item.creator_id
                                                  ),
                                                  placement: "right"
                                                },
                                                expression:
                                                  "{\n                  header: 'Unidades',\n                  content: unitsTitleToHTML(item.creator_id),\n                  placement: 'right'}"
                                              }
                                            ],
                                            staticClass: "c-avatar-img",
                                            attrs: {
                                              alt: "",
                                              src: item.creator.photo,
                                              title: _vm.unitsTitleToHTML(
                                                item.creator_id
                                              )
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("img", {
                                            directives: [
                                              {
                                                name: "c-popover",
                                                rawName: "v-c-popover",
                                                value: {
                                                  header: "Unidades",
                                                  content: _vm.unitsTitleToHTML(
                                                    item.user_id
                                                  ),
                                                  placement: "right"
                                                },
                                                expression:
                                                  "{\n                    header: 'Unidades',\n                    content: unitsTitleToHTML(item.user_id),\n                    placement: 'right'}"
                                              }
                                            ],
                                            staticClass: "c-avatar-img",
                                            attrs: {
                                              src: item.user.photo,
                                              title: _vm.unitsTitleToHTML(
                                                item.user_id
                                              )
                                            }
                                          })
                                        ])
                                      ]
                                    )
                                  }
                                },
                                {
                                  key: "user",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c("td", {}, [
                                      _c("b", [_vm._v("De: ")]),
                                      _vm._v(
                                        " " +
                                          _vm._s(item.creator.firstname) +
                                          " " +
                                          _vm._s(item.creator.lastname)
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("b", [_vm._v("A: ")]),
                                      _vm._v(
                                        " " +
                                          _vm._s(item.user.firstname) +
                                          " " +
                                          _vm._s(item.user.lastname) +
                                          "\n            "
                                      )
                                    ])
                                  }
                                },
                                {
                                  key: "status",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c(
                                      "td",
                                      {},
                                      [
                                        item.status == "supervision" ||
                                        item.status == "execution"
                                          ? [_vm._v("Abierto")]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        item.status == "close"
                                          ? [_vm._v("Cerrado")]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  }
                                },
                                {
                                  key: "actions",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c(
                                      "td",
                                      {},
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: { to: "/tasks/" + item.id }
                                          },
                                          [_vm._v("Editar")]
                                        )
                                      ],
                                      1
                                    )
                                  }
                                }
                              ],
                              null,
                              false,
                              1013159133
                            )
                          })
                        : _vm._e()
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
            { attrs: { sm: "12" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", { staticClass: "pb-0" }, [
                    _c(
                      "h5",
                      [
                        !_vm.searching
                          ? [_vm._v("Tareas Futuras")]
                          : [_vm._v("Buscador de Tareas")],
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.searching,
                                expression: "!searching"
                              }
                            ],
                            staticClass: "float-right btn btn-info pt-0 mb-2",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                _vm.searching = true
                              }
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "cil-search btn-icon mr-2"
                            }),
                            _vm._v(" Buscar\n            ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.searching,
                                expression: "searching"
                              }
                            ],
                            staticClass:
                              "float-right btn btn-warning pt-0 mb-2",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                _vm.searching = false
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n              Tareas Futuras\n            "
                            )
                          ]
                        )
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CRow",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.searching,
                              expression: "searching"
                            }
                          ]
                        },
                        [
                          _c("CCol", { attrs: { md: "1" } }, [
                            _vm._v("\n              Filtrar:\n            ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { md: "4" } },
                            [
                              _c("multiselect", {
                                attrs: {
                                  id: "user",
                                  name: "user",
                                  "track-by": "id",
                                  label: "firstname",
                                  placeholder: "Introduzca Nombre",
                                  options: _vm.users,
                                  "show-labels": false,
                                  "option-height": 30,
                                  "custom-label": _vm.customLabel
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "singleLabel",
                                    fn: function(props) {
                                      return [
                                        _c("img", {
                                          staticClass: "option__image mr-2 ",
                                          attrs: {
                                            src: props.option.photo,
                                            height: "30px"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "option__desc" },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "option__title" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    props.option.firstname
                                                  ) +
                                                    " " +
                                                    _vm._s(
                                                      props.option.lastname
                                                    )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _vm._l(props.option.units, function(
                                              unit,
                                              key
                                            ) {
                                              return _c(
                                                "small",
                                                {
                                                  key: key,
                                                  staticClass: "mr-2 text-info"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(unit.name) +
                                                      "\n                    "
                                                  )
                                                ]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "option",
                                    fn: function(props) {
                                      return [
                                        _c("img", {
                                          staticClass: "option__image mr-2",
                                          attrs: {
                                            src: props.option.photo,
                                            height: "30px"
                                          }
                                        }),
                                        _c(
                                          "span",
                                          { staticClass: "option__desc" },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "option__title" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    props.option.firstname
                                                  ) +
                                                    " " +
                                                    _vm._s(
                                                      props.option.lastname
                                                    )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _vm._l(props.option.units, function(
                                              unit,
                                              key
                                            ) {
                                              return _c(
                                                "small",
                                                {
                                                  key: key,
                                                  staticClass: "mr-2 text-info"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(unit.name) +
                                                      "\n                    "
                                                  )
                                                ]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.search.user_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.search, "user_id", $$v)
                                  },
                                  expression: "search.user_id"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { attrs: { md: "2" } },
                            [
                              _c("multiselect", {
                                attrs: {
                                  placeholder: "Estado",
                                  label: "name",
                                  "track-by": "value",
                                  options: _vm.statuses,
                                  "show-labels": false,
                                  "option-height": 30,
                                  id: "status",
                                  name: "status"
                                },
                                model: {
                                  value: _vm.search.status,
                                  callback: function($$v) {
                                    _vm.$set(_vm.search, "status", $$v)
                                  },
                                  expression: "search.status"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CCol", { attrs: { md: "2" } }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search.description,
                                  expression: "search.description"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "description",
                                placeholder: "Ingrese Descripción",
                                id: "description"
                              },
                              domProps: { value: _vm.search.description },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.search,
                                    "description",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("CCol", { attrs: { md: "2" } }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                on: { click: _vm.searchTasks }
                              },
                              [_vm._v("Buscar")]
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.tasks
                        ? _c("CDataTable", {
                            staticClass: "mb-0 table-outline",
                            attrs: {
                              hover: "",
                              "head-color": "light",
                              "no-sorting": "",
                              items: _vm.futureTasks,
                              fields: _vm.taskFields
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "avatar",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c(
                                      "td",
                                      { staticClass: "text-center py-0" },
                                      [
                                        _c("div", { staticClass: "c-avatar" }, [
                                          _c("img", {
                                            directives: [
                                              {
                                                name: "c-popover",
                                                rawName: "v-c-popover",
                                                value: {
                                                  header: "Unidades",
                                                  content: _vm.unitsTitleToHTML(
                                                    item.creator_id
                                                  ),
                                                  placement: "right"
                                                },
                                                expression:
                                                  "{\n                    header: 'Unidades',\n                    content: unitsTitleToHTML(item.creator_id),\n                    placement: 'right'}"
                                              }
                                            ],
                                            staticClass: "c-avatar-img",
                                            attrs: {
                                              alt: "",
                                              src: item.creator.photo,
                                              title: _vm.unitsTitleToHTML(
                                                item.creator_id
                                              )
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("img", {
                                            directives: [
                                              {
                                                name: "c-popover",
                                                rawName: "v-c-popover",
                                                value: {
                                                  header: "Unidades",
                                                  content: _vm.unitsTitleToHTML(
                                                    item.user_id
                                                  ),
                                                  placement: "right"
                                                },
                                                expression:
                                                  "{\n                    header: 'Unidades',\n                    content: unitsTitleToHTML(item.user_id),\n                    placement: 'right'}"
                                              }
                                            ],
                                            staticClass: "c-avatar-img",
                                            attrs: {
                                              src: item.user.photo,
                                              title: _vm.unitsTitleToHTML(
                                                item.user_id
                                              )
                                            }
                                          })
                                        ])
                                      ]
                                    )
                                  }
                                },
                                {
                                  key: "user",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c("td", {}, [
                                      _c("b", [_vm._v("De: ")]),
                                      _vm._v(
                                        " " +
                                          _vm._s(item.creator.firstname) +
                                          " " +
                                          _vm._s(item.creator.lastname)
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("b", [_vm._v("A: ")]),
                                      _vm._v(
                                        " " +
                                          _vm._s(item.user.firstname) +
                                          " " +
                                          _vm._s(item.user.lastname) +
                                          "\n            "
                                      )
                                    ])
                                  }
                                },
                                {
                                  key: "status",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c(
                                      "td",
                                      {},
                                      [
                                        item.status == "supervision" ||
                                        item.status == "execution"
                                          ? [_vm._v("Abierto")]
                                          : _vm._e(),
                                        _vm._v(" "),
                                        item.status == "close"
                                          ? [_vm._v("Cerrado")]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  }
                                },
                                {
                                  key: "actions",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return _c(
                                      "td",
                                      {},
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "btn btn-success",
                                            attrs: { to: "/tasks/" + item.id }
                                          },
                                          [_vm._v("Editar")]
                                        )
                                      ],
                                      1
                                    )
                                  }
                                }
                              ],
                              null,
                              false,
                              3402379250
                            )
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("CCardFooter", { staticClass: "py-0" }, [
                    _c("nav", [
                      _c(
                        "ul",
                        { staticClass: "pagination justify-content-right" },
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
                                on: { click: _vm.previous }
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
                                staticClass: "page-link",
                                on: { click: _vm.next }
                              },
                              [_vm._v("Siguiente")]
                            )
                          ])
                        ]
                      )
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

/***/ "./resources/js/views/pages/user/task/Tasks.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/pages/user/task/Tasks.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tasks_vue_vue_type_template_id_19fece24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=19fece24& */ "./resources/js/views/pages/user/task/Tasks.vue?vue&type=template&id=19fece24&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/user/task/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_19fece24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tasks_vue_vue_type_template_id_19fece24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/user/task/Tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/user/task/Tasks.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/user/task/Tasks.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/task/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/user/task/Tasks.vue?vue&type=template&id=19fece24&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/user/task/Tasks.vue?vue&type=template&id=19fece24& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_19fece24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=template&id=19fece24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/task/Tasks.vue?vue&type=template&id=19fece24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_19fece24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_19fece24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);