import React, { useState, useEffect } from "react";
import { useQuery } from 'react-query'

// Components
import { Header } from "../Header"
import { SearchBar } from "../SearchBar";
import { Main } from "../Main";
import { Card } from "../Card";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";

import "../../Styles/App.scss";

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

  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch(`${API}/character?page=${page}`)
      .then(res => res.json() )
  )
  
  console.log(data)

  useEffect(()=>
  {
    setCharacters(data.results);
    setSearchCharacter(data.results);
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