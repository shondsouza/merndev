import React from "react";

export default function Destructuring() {
  const isName = {
    name : "Shon",
  };
  const myName = isName.name;
  return <div>{myName}</div>;
}
