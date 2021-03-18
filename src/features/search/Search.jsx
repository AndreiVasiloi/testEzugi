import React from "react";
import "../../css/_navBar.scss";

export default function Search({ setText }) {
  const ENTER = 13;
  function handleSearch(event) {
    if (event.which === ENTER) {
      const { value } = event.target;
      setText(value);
    }
  }
  return (
    <div className="search">
      <input type="text" onKeyPress={handleSearch} placeholder="Press Enter" />
    </div>
  );
}
