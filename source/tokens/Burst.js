import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgBurst = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={props.color ? "currentcolor" : "#2D2D2D"}
    height={props.size}
    width={props.size}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M8.78 14.472L3 12.578h3.866l.383-1.833 3.433.003L11.54 6h3.454c2.339 0 3.287.941 2.937 2.884l-.075.416c-.205 1.132-.722 1.884-1.61 2.318.88.45 1.175 1.301.954 2.528l-.171.95C16.686 16.99 15.293 18 13.029 18H9.373l.947-5.245H9.172l-.393 1.717zm3.799-2.06l-.708 3.922h1.459c.865 0 1.346-.384 1.51-1.29l.183-1.014c.209-1.158-.192-1.618-1.326-1.618h-1.118zm.857-4.747l-.618 3.423h1.06c.965 0 1.53-.412 1.703-1.372l.118-.65c.169-.935-.18-1.401-1.066-1.401h-1.197z"
      fill="white"
    />
  </Svg>
);

SvgBurst.displayName = "SvgBurst";
SvgBurst.defaultProps = {
  size: 24
};
export default SvgBurst;
