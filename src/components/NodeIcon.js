import React from "react";
import { Link } from "react-router-dom";
import path from "path";

import { lineageToRoute } from "../util/lineageRouter";

function NodeIcon(props) {
  let element;
  return (
    <Link to={`/${lineageToRoute(props.node)}`}>
      {" "}<img
        className="im"
        alt=""
        onError={function() {
          element.onerror = null;
          element.src = "images/src/icon_offset.png";
        }}
        ref={el => (element = el)}
        height={props.width}
        style={{
          backgroundcolor: "rgb(34,34,34)",
          marginRight: "10px"
        }}
        src={path.join("images", props.node.SmallIcon)}
      />
    </Link>
  );
}

export default NodeIcon;
