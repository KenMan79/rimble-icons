var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSrn = function SvgSrn(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: props.color ? "currentcolor" : "#1C1C1C",
      height: props.size,
      width: props.size
    }),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "inherit"
    }),
    React.createElement("path", {
      d: "M11.786 10.075c.23.094.46.046.643 0 .138.468.367.889.596 1.075-.137 1.17-.55 1.591-1.01 1.591-.641 0-.963-1.357-.963-1.59.138-.094.551-.375.735-1.076zm-.688 4.117c.276-.235.459-.609.688-1.217.184.094.46.046.643 0 .138.655.275 1.076.596 1.263-.091.748-.55 1.263-.963 1.263-.597 0-.872-.935-.964-1.31zm-3.672 1.45c.184-.235.184-.608.093-1.31.137.046.275.046.367 0 .275.654.504 1.075.872 1.31.046.327 0 .701-.138.748-.505.234-.964-.375-1.193-.749zM5.5 14.377c.092 0 .138 0 .23.047.321.842.872 1.31.872 1.31.184.374.275.748.137.748-.413.047-.734-.233-1.055-.842.046-.14 0-.234-.184-1.263zm-1.239 0c.459 1.965 1.331 1.872 1.285 1.778-.183-.327-.367-.467-.55-.608-.413-.421-.735-1.31-.735-1.17zm5.599 1.263c.322-.234.367-.748.413-1.402.184.045.412.045.55 0 .093.42.23 1.028.643 1.31-.046.514-.184.794-.505.84-.229.095-.872.095-1.101-.748zm-3.947-1.45c.184-.234.23-.608.276-1.122.138.046.321.046.412 0 .138.607.368.982.644 1.17.091.981 0 1.31-.184 1.31-.413 0-.964-.89-1.148-1.358zm-1.423 0c0-.093.046-.702.093-1.122h.183c.23.888.551 1.17.551 1.17.23 1.075.23 1.356.045 1.262-.412-.14-.733-.935-.872-1.31zm3.672 0c.23-.187.367-.514.459-1.122.23.093.459.046.597 0 .137.607.367.982.688 1.17 0 .513-.046 1.356-.688 1.215-.552-.14-1.01-1.076-1.056-1.263zm-.413-.14c-.551 0-.872-.89-.872-1.17.275-.28.412-.795.55-1.684.093.047.23.047.368 0 .046.983.321 1.404.55 1.638-.091.795-.32 1.216-.596 1.216zm-2.845-1.17c.091-.187.091-.234.367-1.684H5.5c0 .983.275 1.45.413 1.638-.045.514.046 1.216-.367 1.216-.183 0-.413-.234-.642-1.17zm-.918-1.637c.138.047.046 1.263.23 1.684 0 0 0 1.17-.092 1.076-.689-.842-.23-2.806-.138-2.76zm5.507 1.637c.321-.234.505-.748.78-1.684a1.1 1.1 0 00.55 0c.093.702.276 1.217.643 1.59-.091.749-.459 1.264-.918 1.264-.734 0-1.01-1.03-1.055-1.17zm-3.764-1.824c.368-.14.598-.936.643-1.03a.275.275 0 00.368 0c0 .609.183.89.32.983-.137.795-.321 1.731-.734 1.731-.367 0-.55-.842-.596-1.684zm-1.147 1.73c-.321 0-.413-1.215-.321-1.73 0 0 .275-.421.459-1.03.046 0 .138.048.184 0-.046.609.046.89.137 1.03 0 0-.229 1.73-.458 1.73H4.58zm3.488-1.73c.184-.094.55-.608.734-1.076.184.094.368.094.597.046.092.516.23.843.551 1.03-.138.842-.413 1.684-1.01 1.684-.55 0-.826-1.123-.872-1.684zm.413-1.263c-.275.749-.55 1.17-.917 1.17-.46 0-.505-.983-.505-1.077.367-.28.642-.841.871-1.31h.322c-.092.702.091 1.03.23 1.217h-.001zm-2.249-1.17c-.23.655-.137.983-.045 1.217-.367.935-.551 1.17-.826 1.17-.276-.047-.276-.61-.184-1.077.275-.187.872-1.263.872-1.31h.183zm-1.33.047c.137-.047-.368.655-.321.983.045.467-.506 1.263-.551 1.216-.183-.047.183-1.731.872-2.199zm6.516 1.123c-.138.515-.321 1.17-1.101 1.17-.413-.047-.642-.608-.734-1.077.459-.327.688-.889.826-1.31a.93.93 0 00.505 0c.091.702.32 1.03.505 1.217zM5.178 8.53c.091-.046.689-.841 1.01-.841.183.046-.321.514-.276.748-.138.234-.78 1.403-1.01 1.403-.183 0-.183-.608.276-1.31zm11.29 5.802c-.047.701-.047 1.075.091 1.31-.184.374-.688.935-1.192.748-.185-.047-.185-.421-.139-.749.413-.234.688-.701.872-1.31.092.047.23.047.368 0zm1.835 0c.046.046.138.046.23-.048-.184 1.03-.23 1.123-.184 1.264-.321.608-.642.842-1.055.842-.184 0-.092-.327.137-.749 0 0 .551-.467.872-1.31zm.735 1.216c-.184.187-.367.28-.506.608-.045.094.827.187 1.285-1.778-.091-.14-.367.749-.78 1.17h.001zm-5.279-1.216c0 .56.139 1.075.414 1.403-.23.795-.872.795-1.101.748-.322-.093-.413-.374-.505-.842.367-.327.55-.889.642-1.31.184.047.367.047.55 0zm4.13-1.31c0 .561.047.935.277 1.122-.184.468-.78 1.358-1.148 1.358-.184 0-.275-.328-.184-1.31.276-.188.505-.656.643-1.17a.422.422 0 00.413 0zm1.653.093c0 .375 0 .983.092 1.123-.183.375-.505 1.17-.872 1.31-.23.047-.184-.234.046-1.264 0 0 .322-.327.551-1.169h.183zm-4.085-.094c.093.656.184.983.46 1.123-.046.234-.551 1.17-1.056 1.263-.643.141-.688-.748-.688-1.216.32-.187.55-.608.688-1.17a.857.857 0 00.596 0zm1.745-.14c-.047.28-.413 1.17-.872 1.17-.275 0-.505-.468-.596-1.216.229-.188.504-.655.55-1.638.118.047.25.047.367 0 .183.843.322 1.404.551 1.684zm1.606-1.684c.23 1.45.275 1.498.367 1.684-.23.889-.459 1.17-.643 1.17-.412 0-.32-.748-.367-1.216.184-.188.413-.655.413-1.638.093.047.138 0 .23 0zm.963 1.684c.23-.374.139-1.59.23-1.684.138-.047.55 2.012-.137 2.76-.093.094-.093-1.076-.093-1.076zm-5.873-1.684c.138.936.367 1.45.78 1.684-.046.14-.413 1.17-1.056 1.17-.505.047-.78-.562-.918-1.264.321-.373.55-.888.643-1.59.091.047.321.047.55 0zm3.809-1.17c0 .094.275.89.596 1.123 0 .795-.23 1.685-.596 1.685-.413 0-.597-.889-.735-1.731.138-.14.322-.468.322-1.03a.44.44 0 00.412-.046zm2.064 1.03c.046.515-.045 1.73-.275 1.684-.23 0-.459-1.731-.459-1.731.093-.14.184-.467.138-.982a.138.138 0 00.184 0c.183.608.412 1.03.412 1.03zm-4.497-1.03c.184.422.505.937.78 1.077-.045.562-.367 1.684-.872 1.684-.688.047-.871-.796-1.01-1.684.276-.188.46-.561.505-1.03a.882.882 0 00.598-.046zm1.148.89c-.322.046-.597-.375-.918-1.123.183-.187.321-.562.23-1.216.137.046.229.046.32 0 .276.514.551 1.029.872 1.263 0 .14-.045 1.076-.505 1.076h.001zm1.468-1.123c.046-.187.138-.515-.137-1.216h.183c0 .046.642 1.17.872 1.31.092.514.092 1.029-.184 1.075-.229 0-.412-.233-.734-1.17v.001zm1.56-.14c.046-.328-.413-1.03-.367-.983.735.468 1.01 2.152.872 2.199-.045.047-.55-.795-.504-1.217h-.001zm-5.828 1.263c-.688.046-.872-.608-1.01-1.123.23-.14.46-.562.505-1.216a.93.93 0 00.505 0c.137.42.368.982.735 1.263-.046.56-.276 1.029-.736 1.076h.001zm4.268-3.228c.23 0 .918.795.963.841.506.749.506 1.31.322 1.31-.275 0-.872-1.17-1.01-1.403.046-.234-.458-.748-.275-.748zm-10.188.14c-.092.28-.138.561 0 .701-.276.562-.734 1.358-1.148 1.31-.458-.093-.091-1.17-.045-1.262.276-.14.917-1.03 1.148-1.03.137.047.045.281.045.281zm2.157-.046c0 .28.046.607.275.747-.183.562-.55 1.31-1.148 1.264-.412-.047-.504-.748-.412-1.264.412-.14.78-1.029 1.055-1.029.23 0 .23.234.23.282zm6.517.747c.092-.14.092-.42 0-.7 0-.047-.092-.281.045-.281.23 0 .873.888 1.148 1.029.046.093.412 1.17-.046 1.263-.459.046-.872-.795-1.148-1.31h.001zm-2.433 0c.184-.14.23-.467.276-.747 0-.048 0-.282.229-.282.23-.046.688.89 1.056 1.03.137.608.045 1.216-.413 1.263-.643.093-.964-.748-1.148-1.264zm-1.927-1.029c.459 0 .459.89.826 1.077 0 .234-.138 1.263-.872 1.263-.643 0-.78-.843-.826-1.263.55-.234.368-1.077.872-1.077z",
      fill: "white"
    })
  );
};

SvgSrn.displayName = "SvgSrn";
SvgSrn.defaultProps = {
  size: 24
};
export default SvgSrn;