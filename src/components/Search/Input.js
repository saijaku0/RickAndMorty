import React from "react";

import "./Input.scss";
import SearchIcon from "./SearchIcon";

export default function Input(props) {


  return (
    <form>
      <SearchIcon />
      <input
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
        placeholder="Filter by name..."
      />
    </form>
  );
}
