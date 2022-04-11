import React from "react";
import katie from "../images/katie-zaferes.png";
import weddingPhoto from "../images/wedding-photography.png";
import mountainBike from "../images/mountain-bike.png";
import star from "../images/star.png";
import dj from "../images/dj.webp"

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.item.location==="Online")
  badgeText = "ONLINE";


  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--stats">
        <img src={determineID(props.item)} className="card--image" />
      </div>
      <div className="stats">
        <img src={star} className="card--star"></img>
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

const determineID = function (props) {
  switch (props.price) {
    case 136:
      return katie;
    case 125:
      return weddingPhoto;
    case 47:
      return dj;
      default:
      return mountainBike;
  }
};

//      ^ caveman solution, gotta find the fix for webpack image loading soon...
