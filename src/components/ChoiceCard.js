import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = "Your code here";
  return (
    <img
      onClick={() => {
        "Your code here";
      }}
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
