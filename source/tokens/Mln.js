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

const SvgMln = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={props.color ? "currentcolor" : "#0B1529"}
    height={props.size}
    width={props.size}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.47 15.093l3.954 2.319v1.297L5.25 15.664V7.72L12 3.75l6.75 3.971v7.943l-5.174 3.045V17.41l3.953-2.318-1.02-.59.133-.231 1.008.582v-5.89l-5.115 3.032v8.67L12 21l-.536-.334v-8.67L6.35 8.965v5.888l1.007-.581.133.232-1.02.589zm5.381-9.982L6.885 8.024 12 11.057l5.115-3.033-4.996-2.93v1.202h-.268V5.11zm0 1.944h.268v1.242h-.268V7.054zm0 2h.268v1.243l-.134.061-.133-.06V9.056zm4.17 4.838l-.133.232-1.077-.622.134-.232 1.076.623v-.001zm-1.698-1l-.135.232-1.076-.623.015-.145.119-.085 1.077.62zm-6.345 1l1.076-.622.134.233-1.076.62-.134-.231zm1.7-1l1.075-.622.12.086.014.146-1.076.621-.134-.232z"
      fill="white"
    />
  </Svg>
);

SvgMln.displayName = "SvgMln";
SvgMln.defaultProps = {
  size: 24
};
export default SvgMln;
