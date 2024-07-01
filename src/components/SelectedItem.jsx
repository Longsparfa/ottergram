import React from "react";

const SelectedItem = (prop) => {
  return (
    <div className="selected-item">
      <p className="">{prop.title}</p>
      <img src={prop.src} alt={prop.title} />
    </div>
  );
};

export default SelectedItem;
