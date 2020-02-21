"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Svg = (0, _styledComponents2["default"])("svg")({
  flex: "none"
}, _styledSystem.space, _styledSystem.color);

var SvgFun = function SvgFun(props) {
  return _react2["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    height: props.size,
    width: props.size
  }), _react2["default"].createElement("path", {
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
    fill: "inherit"
  }), _react2["default"].createElement("path", {
    d: "M9.525 20.175a7.26 7.26 0 01-2.625-1.35 8.671 8.671 0 01-1.95-2.1 8.422 8.422 0 01-1.2-2.775 8.325 8.325 0 010-3.6A9.833 9.833 0 014.875 7.5a7.74 7.74 0 013.15-2.85 8.13 8.13 0 011.425-.6c.75.9 1.5 1.875 2.25 2.85.075.15.225.225.3.375a5.775 5.775 0 00-2.175.525A5.13 5.13 0 008.25 9.075a6.315 6.315 0 00-.975 1.875c-.2.817-.174 1.672.075 2.475l3.225-2.55c.75.975 1.5 1.875 2.25 2.85-1.05.825-2.175 1.65-3.225 2.55 1.05 1.35 2.175 2.775 3.225 4.2a8.01 8.01 0 01-3.3-.3zm7.147-9.086a4.627 4.627 0 00-.097-.364c-.101.08-2.332 1.785-3.225 2.55-.75-.975-1.5-1.875-2.25-2.85 1.05-.825 2.175-1.65 3.225-2.55-1.05-1.35-2.1-2.7-3.225-4.125 0-.075-.075-.075-.075-.15h1.05a8.25 8.25 0 015.25 1.95 8.1 8.1 0 011.8 2.1c.56.86.919 1.833 1.05 2.85a9.262 9.262 0 01-.075 3.525 7.41 7.41 0 01-1.2 2.7 8.048 8.048 0 01-1.875 2.025 6.577 6.577 0 01-2.475 1.35 52.319 52.319 0 01-1.875-2.4 5.718 5.718 0 01-.6-.825 4.62 4.62 0 003.675-1.8 4.853 4.853 0 00.9-1.875c.14-.57.147-1.273.023-2.11zm-3.542 6.28c.518.708 1.056 1.4 1.613 2.078a6.107 6.107 0 001.94-1.144 7.536 7.536 0 001.759-1.905 6.843 6.843 0 001.108-2.492 8.756 8.756 0 00.068-3.334 6.293 6.293 0 00-.976-2.634 7.55 7.55 0 00-1.68-1.958 7.685 7.685 0 00-4.82-1.817c.695.885 1.4 1.788 2.627 3.367l.33.423-.408.349a42.25 42.25 0 01-1.634 1.32c-.052.042-.69.531-1.168.902.197.251.426.538.776.975.345.431.573.718.77.97.348-.287.728-.589 1.182-.941.074-.058 1.272-.98 1.61-1.245l.643-.505.242.78c.28.9.309 1.86.086 2.771a5.41 5.41 0 01-1.003 2.09 5.183 5.183 0 01-3.092 1.919l.027.031z",
    fill: "white"
  }));
};

SvgFun.displayName = "SvgFun";
SvgFun.defaultProps = {
  size: 24,
  color: "#ED1968"
};
exports["default"] = SvgFun;