import React from "react";
import "./OverviewCard.css";

const Card = ({ title, value }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-value">{value}</p>
      </div>
    </div>
  );
};

export default Card;
