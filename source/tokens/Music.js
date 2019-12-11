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

const SvgMusic = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={props.color ? "currentcolor" : "white"}
    height={props.size}
    width={props.size}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      d="M13.988.17A12 12 0 0012 0C5.37 0 0 5.37 0 12c0 2.546.8 4.898 2.145 6.848.825-1.212 2.728-2.048 4.934-2.048 1.515 0 2.885.4 3.866 1.043L13.988.169zm6.376 3.236c2.072 4.582.254 7.03.254 7.03-1.406-4.23-5.478-4.848-5.478-4.848s-2.68 14.436-2.68 14.618c0 1.564-1.66 2.885-3.915 3.285C9.667 23.828 10.83 24 12 24c6.63 0 12-5.37 12-12 0-3.37-1.394-6.412-3.636-8.594z"
      fill="#FBBF02"
    />
  </Svg>
);

SvgMusic.displayName = "SvgMusic";
SvgMusic.defaultProps = {
  size: 24
};
export default SvgMusic;
