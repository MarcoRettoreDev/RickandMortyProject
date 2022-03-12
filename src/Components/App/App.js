// import './App.css';
import React from "react";
import { Header } from "../Header/Header"
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import { Card } from "../Card/Card";

import "./app.css";

function App() 
{
  const tarjeta = Card;

  return (
    <>
      <Header/>
      <NavBar/>
      <Main />
      <Footer/>
    </>
  );
}

export { App };