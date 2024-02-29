import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-proces-new">${props.new_price}</div>
        <del className="item-price-old">${props.old_price}</del>
      </div>
    </div>
  );
};

export default Item;
