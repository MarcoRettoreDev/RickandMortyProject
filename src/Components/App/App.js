
import React, { useState } from "react";
import { Header } from "../Header/Header"
import { Main } from "../Main/Main";
import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";

import "./app.css";

function App() 
{
  const API = 'https://rickandmortyapi.com/api';

  // Page state
  const [page, setPage] = useState(1);
  
  // Characters state
  const [characters, setCharacters] = useState([]);

  React.useEffect(() =>
  {
    async function fetchCharacters ()
    {
      const fullResponse = await fetch(`${API}/character?page=${page}`);
      const responseJson = await fullResponse.json();
      setCharacters(responseJson);
      console.log(characters.results);  
    }
    fetchCharacters();
  }, [page]);
  
  const checkCharacters = characters;

  return (
    <>
      <Header/>
      <NavBar/>
      <Main>
        {checkCharacters.length != 0 && <Card
        name = {characters.results[0].name}
        img = {characters.results[0].image}
        status = {characters.results[0].status}
        specie = {characters.results[0].species}
      ></Card>}
        
      </Main>
      <Footer
        page = {page}
        setPage = {setPage}
      ></Footer>
    </>
  );
}

export { App };