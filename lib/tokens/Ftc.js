"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);
var SvgFtc = React.forwardRef(function (props, ref) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size,
    ref: ref
  }), React.createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), React.createElement("path", {
    d: "M18.452 4.5s1.235 1.098.359 3.332c-.167.411-.398.792-.686 1.13l-3.049 3.577-2.446 3.194s-2.81-.462-3.902.671l4.631.206s-.989 1.082-4.89.307c0 0 .053 1.086 1.822 1.395 0 0-1.563.517-2.5-.98 0 0 0 1.086 1.093 1.548 0 0-.885.205-1.614-.723l-1.247 1.338s-.26.052-.104-.204l1.04-1.236s.104-.877-.522-.569c0 0-.415.154-.26.62 0 0-.625-.513.105-1.184l-1.407-1.394 1.821.979-.78-1.908 1.298 1.651s-.108-1.855.467-2.369c0 0 .155 1.804.885 1.959l-.053-3.764.782-.67.103 2.368s.207.257.414-.05c0 0 .47-.774.47-3.041l1.248-1.185.156.929s.21.359.47.05l.259-1.803S14.08 6.767 18.452 4.5zm-8.325 10.463c4.316-3.968 6.608-7.833 6.603-7.833-2.131 1.492-6.603 7.833-6.603 7.833z",
    fill: "white"
  }));
});
SvgFtc.displayName = "SvgFtc";
SvgFtc.defaultProps = {
  size: 24,
  color: "#27323A"
};
exports["default"] = SvgFtc;