import React from "react";

import "./CardWrapper.scss";

export default function CardWrapper(props) {
  return <div className="card-wrapper">{props.children}</div>;
}
