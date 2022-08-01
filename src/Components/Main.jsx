import React from "react";

function Main(props)
{
  return (
    <main className="main__wrapper">
      {props.children}
    </main>
  )
}

export { Main };