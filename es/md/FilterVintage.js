var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgFilterVintage = function SvgFilterVintage(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: props.color ? "currentcolor" : "#000"
    }),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    React.createElement("path", { d: "M18.7 12.4a6.06 6.06 0 00-.86-.4c.29-.11.58-.24.86-.4a6.012 6.012 0 003-5.19 6.007 6.007 0 00-6 0c-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55a6.008 6.008 0 00-6 0 5.97 5.97 0 003 5.19c.28.16.57.29.86.4-.29.11-.58.24-.86.4a6.012 6.012 0 00-3 5.19 6.007 6.007 0 006 0c.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54a6.008 6.008 0 006 0 6.012 6.012 0 00-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" })
  );
};

SvgFilterVintage.displayName = "SvgFilterVintage";
SvgFilterVintage.defaultProps = {
  size: 24
};
export default SvgFilterVintage;