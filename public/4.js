(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/new-request.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-notifications */ "./node_modules/vue-notifications/dist/vue-notifications.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var STATUS_INITIAL = 0,
    STATUS_SAVING = 1,
    STATUS_SUCCESS = 2,
    STATUS_FAILED = 3;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  data: function data() {
    return {
      requestModal: false,
      selected: 'Month',
      documents: [],
      step: 1,
      document_images: [],
      current_page: 0,
      uploadedFiles: [],
      uploadError: null,
      fileCount: 0,
      currentStatus: null,
      uploadFieldName: 'photos',
      signature_areas: [],
      current_div: null,
      current_key: null,
      hoverDrawDiv: false,
      user_filter: null,
      users_response: 'Ingresa un dato para la busqueda',
      users: [],
      selected_users: [],
      awaitingSearch: false,
      subject: null,
      message: null,
      document_id: null,
      toasts: [],
      sending: false,
      add_new_signature: false,
      email: null,
      validate_email: false,
      link: null
    };
  },
  computed: _objectSpread({
    isInitial: function isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving: function isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess: function isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed: function isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['getUser'])),
  mounted: function mounted() {
    this.reset();
  },
  methods: {
    chooseFile: function chooseFile() {
      document.querySelector('#file').click();
    },
    getFile: function getFile($event) {
      var formData = new FormData();
      formData.append("document", $event.target.files[0]);
      this.save(formData);
    },
    reset: function reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    next: function next() {
      var self = this;
      var width = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#img-pdf').width();
      var height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#img-pdf').height();
      Promise.all([self.signature_areas.forEach(function (signature_area, key) {
        var div_width = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#signature_area-' + key).width();
        var div_height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#signature_area-' + key).height();
        signature_area['height'] = div_height * 100 / height;
        signature_area['width'] = div_width * 100 / width;
      })])["catch"](function (err) {
        return console.log(err);
      })["finally"](function () {
        self.step = 2;
      });
    },
    save: function save(formData) {
      var _this = this;

      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/documents/convert-pdf', formData).then(function (res) {
        console.log(res);
        _this.document_images = res.data.data.images;
        console.log(_this.document_images);
        _this.document_id = res.data.data.document.id;
        _this.currentStatus = STATUS_SUCCESS;
      })["catch"](function (err) {
        console.log(err);
        _this.uploadError = err.response;
        _this.currentStatus = STATUS_FAILED;
      });
    },
    save_request: function save_request() {
      var _this2 = this;

      this.sending = true;
      var data = {
        subject: this.subject,
        message: this.message,
        users: this.selected_users,
        document_id: this.document_id,
        sign_documents: this.signature_areas
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/requests', data).then(function (res) {
        console.log(res);
        _this2.sending = false;

        _this2.$toast.fire({
          icon: 'success',
          title: 'Envio registrado exitosamente'
        });

        _this2.reset_new();
      })["catch"](function (err) {
        console.log(err);
        _this2.sending = false;
      });
    },
    edit_name_sign: function edit_name_sign(id) {
      document.getElementById(id + "header").onmousedown = null;
      document.getElementById(id).addEventListener("input", function (inputEvt) {
        console.log("input event fired");
      }, false);
    },
    get_name_sign: function get_name_sign($event, key) {
      this.signature_areas[key].name = $event.target.textContent;
    },
    delete_sign: function delete_sign(key, email) {
      this.signature_areas.splice(key);
      this.delete_addressee(email);
    },
    add_signature: function add_signature() {
      var _this3 = this;

      this.signature_areas.push({
        name: 'Firma <br>' + this.email,
        percentage_top: '1%',
        percentage_left: '1%',
        height: '104px',
        width: '50px',
        num_page: this.current_page,
        email: this.email
      });
      var validate = this.selected_users.find(function (user) {
        return user.email == _this3.email;
      });
      console.log(validate);

      if (validate === undefined) {
        this.selected_users.push({
          email: this.email
        });
      }

      this.add_new_signature = false;
      this.email = null;
      var self = this;
      setTimeout(self.move('signature_area-' + (self.signature_areas.length - 1), self.signature_areas.length - 1), 500);
    },
    move: function move(id, key) {
      this.current_div = id;
      this.current_key = key;
      this.dragElement(document.getElementById(id));
    },
    dragElement: function dragElement(elmnt) {
      var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
      var self = this;

      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        document.getElementById(elmnt.id).onresize = resize();
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }

      function resize(e) {
        e = e || window.event;
        e.preventDefault();
        console.log(e);
        var div_width = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + e.target.id).width();
        var div_height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + e.target.id).height();
        var width = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#img-pdf').width();
        var height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#img-pdf').height();
        self.signature_areas[self.current_key]['height'] = div_height * 100 / height;
        self.signature_areas[self.current_key]['width'] = div_width * 100 / width;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault(); // get the mouse cursor position at startup:

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault(); // calculate the new cursor position:

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY; // set the element's new position:

        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement(ev) {
        var div = document.getElementById(self.current_div);
        var width = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#img-pdf').width();
        var height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#img-pdf').height();
        var div_width = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#signature_area-' + self.current_key).width();
        var div_height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#signature_area-' + self.current_key).height();
        var percentage_top = parseInt(div.style.top) * 100 / height;
        var percentage_left = parseInt(div.style.left) * 100 / width;
        self.signature_areas[self.current_key]['percentage_top'] = percentage_top;
        self.signature_areas[self.current_key]['percentage_left'] = percentage_left;
        self.signature_areas[self.current_key]['height'] = div_height * 100 / height;
        self.signature_areas[self.current_key]['width'] = div_width * 100 / width;
        console.log(div.style.left + '*' + 100 + '/' + width);

        if (parseInt(div.style.top) < 0) {
          div.style.top = '0px';
        }

        if (parseInt(div.style.left) < 0) {
          div.style.left = '0px';
        }

        if (parseInt(div.style.left) + div_width > width) {
          div.style.left = width - div_width + 'px';
        }

        if (parseInt(div.style.top) + div_height > height) {
          div.style.top = height - div_height + 'px';
        }

        console.log(self.signature_areas); //$('#'+self.current_div).attr('style','top:'+percentage_top+'%;left:'+percentage_left+'%');

        /* stop moving when mouse button is released:*/

        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
    handlerTouchMove: function handlerTouchMove(ev) {
      //e.targetTouches[0];
      console.log(ev);
    },
    handlerTouchEnd: function handlerTouchEnd(ev) {
      console.log(ev);
    },
    color: function color(value) {
      var $color;

      if (value <= 25) {
        $color = 'info';
      } else if (value > 25 && value <= 50) {
        $color = 'success';
      } else if (value > 50 && value <= 75) {
        $color = 'warning';
      } else if (value > 75 && value <= 100) {
        $color = 'danger';
      }

      return $color;
    },
    add_addressee: function add_addressee(email) {
      var add = true;
      this.selected_users.forEach(function (user) {
        if (email == user.email) {
          add = false;
        }
      });

      if (add) {
        this.selected_users.push({
          email: email
        });
      }
    },
    delete_addressee: function delete_addressee(email) {
      var _this4 = this;

      this.selected_users.forEach(function (user, key) {
        console.log(user);

        if (user.email == email) {
          _this4.selected_users.splice(key, 1);
        }
      });
    },
    input_search: function input_search() {
      var _this5 = this;

      if (!this.awaitingSearch) {
        setTimeout(function () {
          _this5.users_response = 'Buscando...';

          _this5.search_user();

          _this5.awaitingSearch = false;
        }, 1100); // 1 sec delay
      }

      this.awaitingSearch = true;
    },
    search_user: function search_user() {
      var _this6 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/search', {
        user_like: this.user_filter
      }).then(function (res) {
        console.log(res);
        _this6.users = res.data.data.data;

        if (_this6.users.length == 0) {
          _this6.users_response = "No se encontro este correo en nuestra base de datos";
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    validateEmail: function validateEmail() {
      var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      this.validate_email = validEmail.test(this.email);
    },
    reset_new: function reset_new() {
      this.requestModal = false;
      this.selected = 'Month';
      this.documents = [];
      this.step = 1;
      this.document_images = [];
      this.current_page = 0;
      this.uploadedFiles = [];
      this.uploadError = null;
      this.fileCount = 0;
      this.currentStatus = STATUS_INITIAL;
      this.uploadFieldName = 'photos';
      this.signature_areas = [];
      this.current_div = null;
      this.current_key = null;
      this.hoverDrawDiv = false;
      this.user_filter = null;
      this.users_response = 'Ingresa un dato para la busqueda';
      this.users = [];
      this.selected_users = [];
      this.awaitingSearch = false;
      this.subject = null;
      this.message = null;
      this.document_id = null;
      this.toasts = [];
      this.sending = false;
      this.add_new_signature = false;
      this.email = null;
      this.validate_email = false;
    }
  },
  notifications: {
    showSuccessMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].types.success,
      title: 'Exito',
      message: 'Se ha registrado exitosamente el envio'
    },
    showErrorMsg: {
      type: vue_notifications__WEBPACK_IMPORTED_MODULE_3__["default"].types.error,
      title: 'Error',
      message: 'Ha ocurrido un error'
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropbox[data-v-1ae23a71] {\n  outline: 2px dashed grey;\n  /* the dash box */\n  outline-offset: -10px;\n  background: lightcyan;\n  color: dimgray;\n  padding: 10px 10px;\n  min-height: 150px;\n  /* minimum height */\n  position: relative;\n  cursor: pointer;\n}\n.input-file[data-v-1ae23a71] {\n  opacity: 0;\n  /* invisible but it's there! */\n  width: 100%;\n  height: 200px;\n  position: absolute;\n  cursor: pointer;\n}\n.dropbox[data-v-1ae23a71]:hover {\n  background: lightblue;\n  /* when mouse over to the drop zone, change color */\n}\n.dropbox p[data-v-1ae23a71] {\n  font-size: 1.2em;\n  text-align: center;\n  padding: 50px 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.active-div[data-v-1ae23a71]{\n    background-color: blue;\n}\n.display-center[data-v-1ae23a71]{\n    display: flex;\n    justify-content: center;\n}\n.draw[data-v-1ae23a71] {\n    border: 2px solid;\n    border-color: #3c4b64;\n    border-radius: 10px;\n    padding: 20px; \n    resize: both;\n    overflow: auto;\n    position: absolute;\n    width:  104px;\n    height: 50px;\n    /*transform: translate(-284px, -175px);*/\n}\n.email-request[data-v-1ae23a71]{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 9px;\n}\n.container-email-request[data-v-1ae23a71]{\n  background: #EAEAEA;\n  border-radius: 4px;\n  padding: 3px 8px;\n  line-height: 17px;\n}\n.div-draw[data-v-1ae23a71] {\n  position: absolute;\n  z-index: 9;\n  text-align: center;\n  border-radius: 10px;\n  border: 1px solid #d3d3d3;\n  background-color: rgb(88, 130, 184);\n  resize: both;\n  overflow: auto;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.div-draw-header[data-v-1ae23a71] {\n  padding: 10px;\n  cursor: move;\n  z-index: 10;\n  background-color: rgb(88, 130, 184);\n  color: #fff;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.div-draw-header[data-v-1ae23a71]:focus-visible {\n  outline: none;\n}\n.pencilProfile[data-v-1ae23a71]{\n    color: white;\n    display: flex;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    background-color: transparent;\n    position: absolute;\n    text-align: center;\n    margin-left: 6px;\n    margin-top: -3px;\n}\n@media (min-width: 1000px) {\n.img-pdf-convert[data-v-1ae23a71]{\n     height: 500px;\n     width: 300px;\n      border: 2px solid;\n}\n}\n@media (min-width: 10px) {\n.img-pdf-convert[data-v-1ae23a71]{\n     height: 400px;\n\n     width: 200px;\n    border: 2px solid;\n}\n}\n@media (min-width: 768px) {\n.img-pdf-convert[data-v-1ae23a71]{\n     height: 600px;\n\n     width: 480px;\n    border: 2px solid;\n}\n}\n@media (min-width: 992px) {\n.img-pdf-convert[data-v-1ae23a71]{\n     height: 1000px;\n\n     width: 780px;\n    border: 2px solid;\n}\n}\n@media (min-width: 1200px) {\n.img-pdf-convert[data-v-1ae23a71]{\n     height: 1000px;\n\n     width: 780px;\n    border: 2px solid;\n}\n}\n@media (min-width: 1400px) {\n.img-pdf-convert[data-v-1ae23a71]{\n     height: 1400px;\n\n     width: 1200px;\n    border: 2px solid;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=template&id=1ae23a71&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/new-request.vue?vue&type=template&id=1ae23a71&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                    !_vm.isSuccess
                      ? _c("div", [
                          _c(
                            "div",
                            { staticClass: "display-center" },
                            [
                              _c("CIcon", {
                                attrs: { name: "cil-file", height: "75" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "display-center" }, [
                            _c("h5", [_vm._v("Sube el documento a firmar")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "display-center" },
                            [
                              _c(
                                "CButton",
                                {
                                  attrs: { size: "sm", color: "primary" },
                                  on: { click: _vm.chooseFile }
                                },
                                [_c("span", [_vm._v("Subir documento")])]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                ref: "file",
                                staticStyle: { display: "none" },
                                attrs: {
                                  multiple: false,
                                  accept:
                                    "application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                  id: "file",
                                  name: "file",
                                  type: "file"
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.getFile($event)
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", { staticClass: "dropbox" }, [
                            _c("input", {
                              staticClass: "input-file",
                              attrs: {
                                type: "file",
                                multiple: false,
                                accept:
                                  "application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                disabled: _vm.isSaving,
                                name: "file"
                              },
                              on: {
                                change: function($event) {
                                  _vm.getFile($event)
                                  _vm.fileCount = $event.target.files.length
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.isInitial
                              ? _c("p", [
                                  _vm._v(
                                    "\n                 Puedes soltar el documento aquí \n                "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isSaving
                              ? _c("p", [
                                  _vm._v(
                                    "\n                  Subiendo archivo...\n                "
                                  )
                                ])
                              : _vm._e()
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isSuccess
                      ? _c("div", [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.step == 1,
                                  expression: "step == 1"
                                }
                              ]
                            },
                            [
                              _c("h4", [
                                _vm._v("Archivo subido exitosamente.")
                              ]),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                [
                                  _c("CCol", { attrs: { xs: "12", lg: "2" } }, [
                                    _c("p", [
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "javascript:void(0)" },
                                          on: {
                                            click: function($event) {
                                              return _vm.reset()
                                            }
                                          }
                                        },
                                        [_vm._v("Subir de nuevo")]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { xs: "12", lg: "4" } },
                                    [
                                      _c(
                                        "CButton",
                                        {
                                          staticClass: "px-4",
                                          attrs: { color: "primary" },
                                          on: {
                                            click: function($event) {
                                              _vm.add_new_signature = true
                                            }
                                          }
                                        },
                                        [_vm._v("Agregar nueva firma")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCol",
                                    { attrs: { xs: "12", lg: "6" } },
                                    [
                                      _c(
                                        "CButton",
                                        {
                                          staticClass: "px-4",
                                          staticStyle: { float: "right" },
                                          attrs: {
                                            color: "success",
                                            disabled:
                                              _vm.signature_areas.length == 0
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.next()
                                            }
                                          }
                                        },
                                        [_vm._v("Continuar")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("div", { staticClass: "display-center" }, [
                                _c(
                                  "div",
                                  { attrs: { id: "panel" } },
                                  [
                                    _vm._l(_vm.signature_areas, function(
                                      signature_area,
                                      key
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          staticStyle: { position: "relative" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    signature_area.num_page ==
                                                    _vm.current_page,
                                                  expression:
                                                    "signature_area.num_page == current_page"
                                                }
                                              ],
                                              staticClass: "div-draw",
                                              attrs: {
                                                id: "signature_area-" + key
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.move(
                                                    "signature_area-" + key,
                                                    key
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "pencilProfile",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.delete_sign(
                                                        key,
                                                        signature_area.email
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        x\n                      "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "div-draw-header",
                                                  attrs: {
                                                    id:
                                                      "signature_area-" +
                                                      key +
                                                      "header",
                                                    contenteditable: "true"
                                                  },
                                                  on: {
                                                    blur: function($event) {
                                                      return _vm.get_name_sign(
                                                        $event,
                                                        key
                                                      )
                                                    },
                                                    dblclick: function($event) {
                                                      return _vm.edit_name_sign(
                                                        "signature_area-" + key
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        Firma "
                                                  ),
                                                  _c("br"),
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        signature_area.email
                                                      ) +
                                                      " \n                      "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("img", {
                                      staticClass: "img-pdf-convert",
                                      attrs: {
                                        id: "img-pdf",
                                        src:
                                          _vm.document_images[_vm.current_page]
                                      }
                                    })
                                  ],
                                  2
                                )
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("div", { staticClass: "display-center" }, [
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
                                              disabled:
                                                _vm.current_page + 1 == 1
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
                                                    _vm.current_page--
                                                  }
                                                }
                                              },
                                              [_vm._v("Anterior")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("li", { staticClass: "page-item" }, [
                                          _c(
                                            "a",
                                            { staticClass: "page-link" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.current_page + 1)
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "li",
                                          {
                                            class: {
                                              "page-item": true,
                                              disabled:
                                                _vm.current_page + 1 >=
                                                _vm.document_images.length
                                            }
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "page-link",
                                                on: {
                                                  click: function($event) {
                                                    _vm.current_page++
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
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.step == 2,
                                  expression: "step == 2"
                                }
                              ]
                            },
                            [
                              _c("CCardHeader", { staticClass: "pb-0" }, [
                                _c("h5", [_vm._v("Destinatario")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "CRow",
                                {
                                  staticClass: "form-group",
                                  staticStyle: { "margin-top": "18px" }
                                },
                                [
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("CCol", { attrs: { sm: "12", md: "2" } }),
                                  _vm._v(" "),
                                  _c("CCol", { attrs: { sm: "12", md: "6" } }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "typo__label",
                                        attrs: { for: "subject" }
                                      },
                                      [_vm._v("Asunto")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.subject,
                                          expression: "subject"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "subject",
                                        name: "subject",
                                        placeholder: "Ingrese el asunto"
                                      },
                                      domProps: { value: _vm.subject },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.subject = $event.target.value
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      {
                                        staticClass: "typo__label",
                                        attrs: { for: "description" }
                                      },
                                      [_vm._v("Descripción")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.message,
                                          expression: "message"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "description",
                                        name: "description",
                                        placeholder: "Opcional"
                                      },
                                      domProps: { value: _vm.message },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.message = $event.target.value
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("CCol", { attrs: { sm: "12", md: "4" } }),
                                  _vm._v(" "),
                                  _c("CCol", { attrs: { sm: "12", md: "2" } }),
                                  _vm._v(" "),
                                  _c("CCol", { attrs: { sm: "12", md: "6" } }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "typo__label",
                                        attrs: { for: "subject" }
                                      },
                                      [_vm._v("Destinatario")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-control" },
                                      [
                                        _c(
                                          "CRow",
                                          _vm._l(_vm.selected_users, function(
                                            user
                                          ) {
                                            return _c(
                                              "div",
                                              { staticClass: "email-request" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "container-email-request"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                          " +
                                                        _vm._s(user.email) +
                                                        "\n                          "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          }),
                                          0
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.step == 3,
                                  expression: "step == 3"
                                }
                              ]
                            },
                            [
                              _c("CInput", {
                                attrs: {
                                  placeholder: "Password",
                                  type: "password",
                                  autocomplete: "curent-password"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "prepend-content",
                                      fn: function() {
                                        return [
                                          _c("CIcon", {
                                            attrs: { name: "cil-copy" }
                                          })
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  false,
                                  4100099705
                                ),
                                model: {
                                  value: _vm.link,
                                  callback: function($$v) {
                                    _vm.link = $$v
                                  },
                                  expression: "link"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12", md: "2" } }),
                  _vm._v(" "),
                  _c("CCol", { attrs: { sm: "12", md: "6" } }, [
                    _vm.step == 2
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary mt-2",
                            attrs: { disabled: _vm.sending },
                            on: {
                              click: function($event) {
                                _vm.step = 1
                              }
                            }
                          },
                          [_vm._v("Atras")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.step == 2
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary mt-2",
                            attrs: { disabled: _vm.sending },
                            on: { click: _vm.save_request }
                          },
                          [_vm._v("Enviar")]
                        )
                      : _vm._e()
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CModal",
            {
              attrs: {
                title: "Asignación de Firma",
                show: _vm.add_new_signature
              },
              on: {
                "update:show": function($event) {
                  _vm.add_new_signature = $event
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
                              _vm.add_new_signature = false
                            }
                          }
                        },
                        [_vm._v("Cerrar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CButton",
                        {
                          attrs: {
                            disabled: !_vm.validate_email,
                            color: "primary"
                          },
                          on: {
                            click: function($event) {
                              return _vm.add_signature()
                            }
                          }
                        },
                        [_vm._v("Agregar")]
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c("CInput", {
                attrs: { type: "email", placeholder: "Correo Electrónico" },
                on: { input: _vm.validateEmail },
                scopedSlots: _vm._u([
                  {
                    key: "prepend-content",
                    fn: function() {
                      return [_c("CIcon", { attrs: { name: "cil-user" } })]
                    },
                    proxy: true
                  }
                ]),
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
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

/***/ "./resources/js/views/pages/user/documents/new-request.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/new-request.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_request_vue_vue_type_template_id_1ae23a71_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-request.vue?vue&type=template&id=1ae23a71&scoped=true& */ "./resources/js/views/pages/user/documents/new-request.vue?vue&type=template&id=1ae23a71&scoped=true&");
/* harmony import */ var _new_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-request.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/user/documents/new-request.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _new_request_vue_vue_type_style_index_0_id_1ae23a71_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true& */ "./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true&");
/* harmony import */ var _new_request_vue_vue_type_style_index_1_id_1ae23a71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css& */ "./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _new_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_request_vue_vue_type_template_id_1ae23a71_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _new_request_vue_vue_type_template_id_1ae23a71_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ae23a71",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/user/documents/new-request.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/user/documents/new-request.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/new-request.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./new-request.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_0_id_1ae23a71_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=0&id=1ae23a71&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_0_id_1ae23a71_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_0_id_1ae23a71_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_0_id_1ae23a71_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_0_id_1ae23a71_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_0_id_1ae23a71_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_1_id_1ae23a71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=style&index=1&id=1ae23a71&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_1_id_1ae23a71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_1_id_1ae23a71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_1_id_1ae23a71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_1_id_1ae23a71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_style_index_1_id_1ae23a71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/user/documents/new-request.vue?vue&type=template&id=1ae23a71&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/new-request.vue?vue&type=template&id=1ae23a71&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_template_id_1ae23a71_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./new-request.vue?vue&type=template&id=1ae23a71&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/new-request.vue?vue&type=template&id=1ae23a71&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_template_id_1ae23a71_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_request_vue_vue_type_template_id_1ae23a71_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);