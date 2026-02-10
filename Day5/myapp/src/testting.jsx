import React from "react";

export default function Testting() {
  const mystyle = {
    color: "red",
    border: "2px solid black",
  };
  return (
    <div>
      <h2 style={{ color: "red", border: "2px solid black" }}></h2>
      <h4 style={mystyle}>INTERNAL CSS</h4>
    </div>
  );
}
