(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/sign.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-notifications */ "./node_modules/vue-notifications/dist/vue-notifications.js");
/* harmony import */ var _helpers_jwt_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/jwt-token */ "./resources/js/helpers/jwt-token.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/user */ "./resources/js/helpers/user.js");
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
  name: 'Sign',
  data: function data() {
    return {
      uuid: null,
      email_: null,
      request: {
        document: {
          document_images: []
        }
      },
      signModal: false,
      template_signs: [],
      document_images: [],
      template_sign_ids: [],
      email: null,
      user_id: null,
      sign: null,
      key_sign: null,
      file_sign: null,
      document_id: null,
      disabled_sending: true,
      current_page: 0,
      sending_register: false
    };
  },
  mounted: function mounted() {
    this.uuid = this.$route.params.uuid;
    this.email_ = this.$route.params.email;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.close').attr("style", "display : none !important;");
    this.validateRequest();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['getUser'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(['setAuthUser'])), {}, {
    validateRequest: function validateRequest() {
      var _this = this;

      var template_signs;
      /*if (this.getUser.email != null) {
        if (this.getUser.email != this.email_) {
          this.$toast.fire({
            icon: 'error',
            title: 'No tiene autorización para firmar este documento',
          })
          this.$router.push('/receipts')
          return
        } 
      }*/

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/requests/validate/' + this.uuid + '/' + this.email_).then(function (res) {
        if (res.data.data.validate) {
          _this.request = res.data.data.request;
          _this.document_images = _this.request.document.document_images;

          if (res.data.data.user == null) {
            _this.email = _this.email_; //this.registerUserModal = true
          } else {
            _this.user_id = res.data.data.user.id;
          }

          console.log(_this.request); //var user = this.request.request_users.find(user => user.user.email == this.email)
          //if (user ===  undefined) {

          var user = _this.request.request_users.find(function (user) {
            return user.email == _this.email;
          }); //} 


          if (user.is_signed) {
            _this.$toast.fire({
              icon: 'warning',
              title: 'Ya el documento fue firmado'
            });

            _this.$router.push('/receipts');
          }

          _this.document_id = _this.request.document_id;
          template_signs = _this.request.document.template_signs;
        } else {
          _this.$toast.fire({
            icon: 'error',
            title: 'No tiene autorización para firmar este documento'
          });

          _this.$router.push('/receipts');
        }
      })["catch"](function (err) {
        console.log(err);
      })["finally"](function () {
        var width = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#img-pdf').width();
        var height = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#img-pdf').height();
        template_signs.forEach(function (template_sign) {
          template_sign.left = template_sign.position_x * width / 100;
          template_sign.top = template_sign.position_y * height / 100;
          template_sign.width = template_sign.width * width / 100;
          template_sign.height = template_sign.height * height / 100;
        });
        _this.template_signs = template_signs;
      });
    },
    save: function save() {
      var _this2 = this;

      this.disabled_sending = true;
      var formData = new FormData();
      var ip = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#ip-host').val();
      formData.append('image_sign', this.file_sign);

      for (var i = 0; i < this.template_sign_ids.length; i++) {
        formData.append('template_sign_ids[]', this.template_sign_ids[i]);
      }

      formData.append('user_id', this.user_id);
      formData.append('ip', ip);
      formData.append('email', this.email);
      formData.append('document_id', this.document_id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/documents/sign', formData).then(function (res) {
        _this2.disabled_sending = false;

        if (res.data.data == 'OK') {
          _this2.$toast.fire({
            icon: 'success',
            title: 'Documento firmado exitosamente'
          });

          _this2.$router.push({
            name: 'Firmado Exitoso',
            params: {
              uuid: _this2.uuid,
              email: _this2.email
            }
          });
        }
      })["catch"](function (err) {
        _this2.disabled_sending = false;
        console.log(err);
      });
    },
    getTemplateSign: function getTemplateSign() {
      var _this3 = this;

      this.template_sign_ids = [];
      this.template_signs.forEach(function (template_sign) {
        if (template_sign.email == _this3.email) {
          _this3.template_sign_ids.push(template_sign.id);
        }
      });
      this.signModal = true;
    },
    downloadDocument: function downloadDocument() {
      window.open(axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL + '/' + this.request.document.path, "_blank");
    },
    clear: function clear() {
      this.$refs.signaturePad.clearSignature();
    },
    save_sign: function save_sign() {
      var _this4 = this;

      console.log("sfsfsdf");
      this.signModal = false;

      var _this$$refs$signature = this.$refs.signaturePad.saveSignature(),
          isEmpty = _this$$refs$signature.isEmpty,
          data = _this$$refs$signature.data;

      if (!isEmpty) {
        this.file_sign = this.dataURLtoFile(data, new Date().getTime() + '.png');
        this.template_signs.forEach(function (template_sign, key) {
          if (template_sign.email == _this4.email) {
            document.querySelector('#signature_area-' + key).style.backgroundColor = null;
            document.querySelector('#signature_area-' + key).style.border = null;
            var width = _this4.template_signs[key].width;
            var height = _this4.template_signs[key].height;
            document.querySelector('#signature_area-' + key).style.backgroundSize = width + "px " + height + "px";
            document.querySelector('#signature_area-' + key).style.backgroundRepeat = "no-repeat";
            document.querySelector('#signature_area-' + key).style.backgroundImage = "url('" + URL.createObjectURL(_this4.file_sign) + "')";
          }
        });
      }

      this.disabled_sending = false;
    },
    dataURLtoFile: function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, {
        type: mime
      });
    },
    onBegin: function onBegin() {
      this.$refs.signaturePad.resizeCanvas();
    },
    onEnd: function onEnd() {}
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropbox {\n  outline: 2px dashed grey;\n  /* the dash box */\n  outline-offset: -10px;\n  background: lightcyan;\n  color: dimgray;\n  padding: 10px 10px;\n  min-height: 150px;\n  /* minimum height */\n  position: relative;\n  cursor: pointer;\n}\n.input-file {\n  opacity: 0;\n  /* invisible but it's there! */\n  width: 100%;\n  height: 200px;\n  position: absolute;\n  cursor: pointer;\n}\n.dropbox:hover {\n  background: lightblue;\n  /* when mouse over to the drop zone, change color */\n}\n.dropbox p {\n  font-size: 1.2em;\n  text-align: center;\n  padding: 50px 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.close-register{\n    display: none;\n}\n.active-div{\n    background-color: blue;\n}\n.display-center{\n    display: flex;\n    justify-content: center;\n}\n.draw {\n    border: 2px solid;\n    border-color: #3c4b64;\n    border-radius: 10px;\n    padding: 20px; \n    position: absolute;\n    width:  104px;\n    height: 50px;\n    /*transform: translate(-284px, -175px);*/\n}\n.email-request{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 9px;\n}\n.container-email-request{\n  background: #EAEAEA;\n  border-radius: 4px;\n  padding: 3px 8px;\n  line-height: 17px;\n}\n.div-draw {\n  position: absolute;\n  z-index: 9;\n  text-align: center;\n  color: #fff;\n  border-radius: 10px;\n \n\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.div-draw-header {\n  padding: 10px;\n  z-index: 10;\n  background-color: rgb(88, 130, 184);\n  color: #fff;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.div-draw-header:focus-visible {\n  outline: none;\n}\n.pencilProfile{\n    color: white;\n    display: flex;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    background-color: transparent;\n    position: absolute;\n    text-align: center;\n    margin-left: 6px;\n    margin-top: -3px;\n}\n@media (min-width: 1000px) {\n.float-a-right{\n    float: right;\n}\n.img-pdf-convert{\n     height: 500px;\n     width: 300px;\n      border: 2px solid;\n}\n.div-signature{\n    display: block;\n}\n}\n@media (min-width: 10px) {\n.float-a-right{\n    float: none;\n}\n.img-pdf-convert{\n     height: 400px;\n\n     width: 200px;\n    border: 2px solid;\n}\n.div-signature{\n    display: none;\n}\n}\n@media (min-width: 768px) {\n.float-a-right{\n    float: right;\n}\n.img-pdf-convert{\n     height: 1200px;\n\n     width: 780px;\n    border: 2px solid;\n}\n.div-signature{\n    display: block;\n}\n}\n@media (min-width: 992px) {\n.float-a-right{\n    float: right;\n}\n.img-pdf-convert{\n     height: 1000px;\n\n     width: 780px;\n    border: 2px solid;\n}\n.div-signature{\n    display: block;\n}\n}\n@media (min-width: 1200px) {\n.float-a-right{\n    float: right;\n}\n.img-pdf-convert{\n     height: 1000px;\n\n     width: 780px;\n    border: 2px solid;\n}\n.div-signature{\n    display: block;\n}\n}\n\n/*@media (min-width: 1400px) {\n  .img-pdf-convert{\n     height: 1400px;\n\n     width: 1200px;\n    border: 2px solid;\n  }\n}*/\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sign.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sign.vue?vue&type=style&index=2&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=template&id=63d2e83e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/user/documents/sign.vue?vue&type=template&id=63d2e83e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          _c("CCardHeader", { staticClass: "pb-0" }, [
            _c("h5", [_vm._v("Firma de Documento")])
          ]),
          _vm._v(" "),
          _c(
            "CCardBody",
            [
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    {
                      staticStyle: { "margin-top": "5px" },
                      attrs: { sm: "12", md: "2" }
                    },
                    [
                      _c(
                        "CButton",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.getTemplateSign }
                        },
                        [_vm._v("Firmar")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    {
                      staticStyle: { "margin-top": "5px" },
                      attrs: { sm: "12", md: "4" }
                    },
                    [
                      _c(
                        "CButton",
                        {
                          attrs: { color: "secondary" },
                          on: { click: _vm.downloadDocument }
                        },
                        [_vm._v("Descargar Documento")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    {
                      staticStyle: { "margin-top": "5px" },
                      attrs: { sm: "12", md: "6" }
                    },
                    [
                      _c(
                        "CButton",
                        {
                          staticClass: "px-4 float-a-right",
                          attrs: {
                            color: "success",
                            disabled: _vm.disabled_sending
                          },
                          on: { click: _vm.save }
                        },
                        [_vm._v("Subir Firma")]
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
                  _c("CCol", { attrs: { sm: "12" } }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "display-center" }, [
                      _c(
                        "div",
                        { attrs: { id: "panel" } },
                        [
                          _vm._l(_vm.template_signs, function(
                            template_sign,
                            key
                          ) {
                            return _c(
                              "div",
                              { staticStyle: { position: "relative" } },
                              [
                                template_sign.email == _vm.email
                                  ? _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              template_sign.num_page ==
                                              _vm.current_page,
                                            expression:
                                              "template_sign.num_page == current_page"
                                          }
                                        ],
                                        staticClass: "div-draw div-signature",
                                        staticStyle: {
                                          border: "1px solid #d3d3d3",
                                          "background-color":
                                            "rgb(88, 130, 184)"
                                        },
                                        style: {
                                          width: template_sign.width + "px",
                                          height: template_sign.height + "px",
                                          top: template_sign.top + "px",
                                          left: template_sign.left + "px",
                                          position: "absolute"
                                        },
                                        attrs: { id: "signature_area-" + key },
                                        on: {
                                          click: function($event) {
                                            return _vm.getTemplateSign(
                                              template_sign.email
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            attrs: {
                                              id:
                                                "signature_area-" +
                                                key +
                                                "header"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(
                                                  template_sign.description
                                                ) +
                                                "\n                  "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "img-pdf-convert",
                            attrs: {
                              id: "img-pdf",
                              src: _vm.document_images[_vm.current_page].path
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
                        { attrs: { "aria-label": "page navigation example" } },
                        [
                          _c(
                            "ul",
                            {
                              staticClass: "pagination justify-content-center"
                            },
                            [
                              _c(
                                "li",
                                {
                                  class: {
                                    "page-item": true,
                                    disabled:
                                      _vm.current_page + 1 <
                                      _vm.request.document.document_images
                                        .length
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
                                _c("a", { staticClass: "page-link" }, [
                                  _vm._v(_vm._s(_vm.current_page + 1))
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  class: {
                                    "page-item": true,
                                    disabled:
                                      _vm.current_page + 1 >=
                                      _vm.request.document.document_images
                                        .length
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
                  ])
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
        "CModal",
        {
          attrs: { title: "Subir firma", size: "lg", show: _vm.signModal },
          on: {
            "update:show": function($event) {
              _vm.signModal = $event
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
                          _vm.signModal = false
                        }
                      }
                    },
                    [_vm._v("Cerrar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    { attrs: { color: "secondary" }, on: { click: _vm.clear } },
                    [_vm._v("Limpiar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    {
                      attrs: {
                        color: "primary",
                        disabled: _vm.sending_register
                      },
                      on: { click: _vm.save_sign }
                    },
                    [_vm._v("Firmar")]
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c(
            "div",
            { staticStyle: { border: "2px solid" } },
            [
              _c("VueSignaturePad", {
                ref: "signaturePad",
                attrs: {
                  id: "signature",
                  width: "100%",
                  height: "200px",
                  options: { onBegin: _vm.onBegin }
                }
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/user/documents/sign.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/pages/user/documents/sign.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_vue_vue_type_template_id_63d2e83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign.vue?vue&type=template&id=63d2e83e&scoped=true& */ "./resources/js/views/pages/user/documents/sign.vue?vue&type=template&id=63d2e83e&scoped=true&");
/* harmony import */ var _sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/user/documents/sign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _sign_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _sign_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign.vue?vue&type=style&index=2&lang=css& */ "./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sign_vue_vue_type_template_id_63d2e83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sign_vue_vue_type_template_id_63d2e83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63d2e83e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/user/documents/sign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/user/documents/sign.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/sign.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sign.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sign.vue?vue&type=style&index=2&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/user/documents/sign.vue?vue&type=template&id=63d2e83e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/pages/user/documents/sign.vue?vue&type=template&id=63d2e83e&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_template_id_63d2e83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./sign.vue?vue&type=template&id=63d2e83e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/user/documents/sign.vue?vue&type=template&id=63d2e83e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_template_id_63d2e83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_template_id_63d2e83e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);