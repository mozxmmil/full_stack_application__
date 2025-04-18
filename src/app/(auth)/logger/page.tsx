"use client";
import { getSession } from "next-auth/react";

const Logger = () => {
  getSession().then((data) => console.log(data));
  

  return <div></div>;
};

export default Logger;
