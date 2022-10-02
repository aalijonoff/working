import React, { memo } from "react";
import { useState } from "react";
import { Body, Clock } from "./styled";

export const Time = () => {
  var time = new Date();
  //   const [ring, setRing] = useState(0);
  var a = 2;
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  console.log();

  //   const increase = () => {
  //     a = a + 1;
  //   };

  return (
    <div>
      <Body>
        <Clock>
          {hours.toString().length < 2 ? "0" + hours.toString() : hours}:{" "}
          {minutes.toString().length < 2 ? "0" + minutes.toString() : minutes} :{" "}
          {seconds.toString().length < 2 ? "0" + seconds.toString() : seconds}{" "}
          <div>{a}</div>
          <button>+</button>
        </Clock>
      </Body>
    </div>
  );
};
