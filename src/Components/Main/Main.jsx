import React from "react";
import "./main.css";

function Main(props)
{
  return (
    <main className="main__wrapper">
      {props.children}
    </main>
  )
}

export { Main };