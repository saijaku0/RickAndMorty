import React from "react";

import classes from "./Button.module.scss";

export default function Button(props) {
  return (
    <button
      className={`${props.className} ${classes.button}`}
      type={props.type || "button"}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
