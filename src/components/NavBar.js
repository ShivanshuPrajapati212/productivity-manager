import React, { useState } from "react";

const NavBar = () => {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  const [time, setTime] = useState({ hours, mins, secs });

  setInterval(() => {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    setTime({ hours: hours, mins: mins, secs: secs });
  }, 1000);

  return (
    <div className="text-3xl text-white shadow-lg border-gray-400 rounded-xl p-5 bg-zinc-800 flex justify-between">
      <div className="left">Hi, Shivanshu</div>
      <div className="center">{`${time.hours}:${time.mins}:${time.secs}`}</div>
      <div className="right">Icon</div>
    </div>
  );
};

export default NavBar;
