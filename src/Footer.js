import React from "react";
const Footer = ({ length, onClear }) => {
  const dateTime = new Date();

  const options = {
    hour12: false, // Set to false to use 24-hour format
    hour: "2-digit",
    minute: "2-digit",

  };

  return (
    <footer>
      <p>
        { length === 0 ? "No itmes" : `${length} List ${length === 1 ? "item" : "items"}`}
      </p>
      <button onClick={onClear}>Clear List</button>{" "}
      <p className="time">{dateTime.toLocaleTimeString(undefined, options)}</p>
    </footer>
  );
};

export default Footer;
