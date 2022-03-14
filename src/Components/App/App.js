
import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header"
import { SearchBar } from "../SearchBar/SearchBar";
import { Main } from "../Main/Main";
import { Card } from "../Card/Card";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

import "./app.css";

function App() 
{
  const API = 'https://rickandmortyapi.com/api';

  // Page state
  const [page, setPage] = useState(1);
  
  // Characters state
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");

  const filterCharacters = event =>
  {
    const value = event.target.value.toLowerCase();
    const filteredUsers = searchCharacter.filter(
      character => (`${character.name}`.toLocaleLowerCase()
      .includes(value)
      )
    )
    setCharacters(filteredUsers);
  }

  const  fetchCharacters = async (api) =>
  {
    await fetch(`${api}/character?page=${page}`)
      .then(response => response.json())
      .then(data => {setCharacters(data.results); setSearchCharacter(data.results)})
      .catch(error => console.error(error))
  };

  useEffect(()=>
  {
    fetchCharacters(API)
  }, [page])

  return (
    <>
      <Header/>
      <SearchBar
        filterCharacters = {filterCharacters}
      />
      <Main>
        { characters.map((character, index)=>
          <Card 
          name={character.name} 
          key= {index}
          img = {character.image}
          status = {character.status}
          specie = {character.species}
          dimension = {character.origin.name}
          created = {character.created}
          />
        ) }
      </Main>
      <NavBar
        page = {page}
        setPage = {setPage}
      ></NavBar>

      <Footer/>
    </>
  );
}

export { App };