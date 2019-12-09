import React from "react";

const SvgTix = props => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#EF494D"}
    height={props.size}
    width={props.size}
    {...props}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 8.54c0-.16.13-.29.29-.29h3.768c1.739 0 2.826.897 2.826 2.164 0 .529-.241 1.01-.724 1.442.675.385 1.014.962 1.014 1.73 0 1.804-1.74 2.164-2.899 2.164H4.789a.29.29 0 01-.289-.29v-.862c0-.16.13-.29.29-.29h3.985c.821 0 1.232-.265 1.232-.794 0-.528-.41-.817-1.232-.865H4.789a.29.29 0 01-.289-.289v-.862c0-.161.13-.29.29-.29h3.985c.58-.097.87-.337.87-.722 0-.528-.29-.793-.87-.793H4.789a.29.29 0 01-.289-.29V8.54zm7.826 0c0-.16.13-.29.29-.29h3.84c.16 0 .29.13.29.29v6.92a.29.29 0 01-.29.29H15.37a.29.29 0 01-.29-.29V9.982a.29.29 0 00-.289-.29h-2.175a.29.29 0 01-.29-.29l.001-.862zm5.434-.29h1.45c.16 0 .29.13.29.29v.862a.29.29 0 01-.29.29h-1.45a.29.29 0 01-.29-.29V8.54c0-.16.13-.29.29-.29z"
      fill="white"
    />
  </svg>
);

export default SvgTix;