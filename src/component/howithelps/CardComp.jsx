// eslint-disable-next-line no-unused-vars
import React from "react";
const card = ({ icon, heading, text }) => {
  return (
    <div>
      <div>
        <img src={icon} alt="" />
      </div>
      <h4>{heading}</h4>
      <p >{text}</p>
    </div>
  );
};
export default card;