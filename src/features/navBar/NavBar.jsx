import React from "react";
import "../../css/_navBar.scss";
import Search from "../search/Search";

export default function NavBar({ setText }) {
  return (
    <div className="navBar">
      <Search setText={setText} />
    </div>
  );
}
