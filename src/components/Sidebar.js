import React from "react";
import classNames from "classnames";
import nodeEquality from "../util/array";
import SidebarButton from "./SidebarButton.js";

function Sidebar(props) {
  function getClasses(ob) {
    if (nodeEquality(ob, props.actives[props.iteration])) {
      return classNames(
        "button",
        "accordion",
        "button" + (props.iteration + 1),
        "active"
      );
    }
    return classNames("button", "accordion", "button" + (props.iteration + 1));
  }

  return (
    <div style={{ paddingBottom: null }}>
      {props.dictionary.map((ob, i) =>
        <div key={i}>
          <SidebarButton
            handleClick={props.handleClick}
            ob={ob}
            classes={getClasses(ob)}
            routePush={props.routePush}
            iteration={props.iteration}
          />
          {nodeEquality(ob, props.actives[ob.iteration])
            ? ob.Arr
              ? <Sidebar
                  dictionary={ob.Arr}
                  actives={props.actives}
                  handleClick={props.handleClick}
                  iteration={props.iteration + 1}
                  routePush={props.routePush}
                />
              : null
            : null}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
