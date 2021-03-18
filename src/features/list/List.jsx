import React from "react";
import ListItem from "./ListItem";
import "../../css/_list.scss";

export default function List({ videos }) {
  return (
    <div className="list" id="videos">
      <h2 className="list__header">Our Videos</h2>
      {videos.map((v, index) => (
        <ListItem video={v.video} title={v.title} key={index} />
      ))}
    </div>
  );
}
