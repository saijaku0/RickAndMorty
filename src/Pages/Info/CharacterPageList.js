import React from "react";

export default function CharacterPageList({character}) {
  return (
    <>
      {" "}
      <ul>
        <li>
          <h2>Gender</h2>
          <label>{character.gender}</label>
        </li>
        <li>
          <h2>Status</h2>
          <label>{character.status}</label>
        </li>
        <li>
          <h2>Specie</h2>
          <label>{character.species}</label>
        </li>
        <li>
          <h2>Origin</h2>
          <label>{character.origin?.name}</label>
        </li>
        <li>
          <h2>Type</h2>
          <label>{character.type || "Unknown"}</label>
        </li>
      </ul>
    </>
  );
}
