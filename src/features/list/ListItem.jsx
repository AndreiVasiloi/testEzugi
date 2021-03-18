import React, { useState } from "react";
import "../../css/_list.scss";

export default function ListItem({ video, title }) {
  const [like, changeLike] = useState(false);
  const [disLike, changeDisLike] = useState(false);

  const selectIcon = function (icon) {
    if (icon === "like" && disLike === false) changeLike(!like);
    if (icon === "disLike" && like === false) changeDisLike(!disLike);
  };

  return (
    <div className="list__item">
      <h3 className="list__item-title">{title}</h3>
      <video className="list__item-video" controls>
        <source src={video} type="video/mp4" />
        Your browser is not supported!
      </video>
      <div className="icons">
        <div className="icon icon__like" onClick={() => selectIcon("like")}>
          <i
            className={like ? "fas fa-thumbs-up selected" : "fas fa-thumbs-up"}
          ></i>
        </div>
        <div
          className="icon icon__dislike"
          onClick={() => selectIcon("disLike")}
        >
          <i
            className={
              disLike ? "fas fa-thumbs-down selected" : "fas fa-thumbs-down"
            }
          ></i>
        </div>
      </div>
    </div>
  );
}
