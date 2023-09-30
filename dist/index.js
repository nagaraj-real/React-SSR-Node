"use strict";

var _Dashboard = _interopRequireDefault(require("./Dashboard.js"));
var _server = require("react-dom/server");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require("express");
var app = express();
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  var _renderToPipeableStre = (0, _server.renderToPipeableStream)( /*#__PURE__*/_react["default"].createElement(_Dashboard["default"]), {
      onShellReady: function onShellReady() {
        res.setHeader("content-type", "text/html");
        pipe(res);
      }
    }),
    pipe = _renderToPipeableStre.pipe;
});
app.listen(9090);
console.log("listening at 9090");