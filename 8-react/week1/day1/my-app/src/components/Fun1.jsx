import React, { Component } from "react";

export default function Fun1() {
  function click() {
    console.log("click");
  }

  return <div onClick={click}>事件</div>;
}
