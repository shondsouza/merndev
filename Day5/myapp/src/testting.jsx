import React from "react";
import "./style.css";
import image1 from "./assets/image.png";
export default function Testting() {
  const mystyle = {
    color: "red",
    border: "2px solid black",
  };
  return (
    <div>
      <h2 style={{ color: "red", border: "2px solid black" }}></h2>
      <h4 style={mystyle}>INTERNAL CSS</h4>

      <h5 className="myclass">EXTERNAL CSS</h5>
      <img src={image1} alt="" height={200} width={200} />
    </div>
  );
}
