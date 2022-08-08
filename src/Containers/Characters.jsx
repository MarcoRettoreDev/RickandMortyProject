import { useContext } from 'react';
import { Card } from '../Components/Card';
import { useQuery } from 'react-query';
import axios  from 'axios';
import { ActionTypes } from '../Helpers/ActionTypes';
import { myContext } from "../Helpers/UseContext";
import { useEffect } from 'react';

import { LoadingComponent } from '../Components/LoadingComponent';
import { ErrorComponent } from '../Components/ErrorComponent';

const Characters = () =>{

  const API = 'https://rickandmortyapi.com/api';

  const { state, dispatch } = useContext(myContext);

  const key = state.searchInput?.length >= 3 ? state.searchInput : ''; 

  const page = state.page;

  const URI = state.searchInput?.length >= 3 ? `${API}/character/?page=${state.page}&name=${state.searchInput}` : `${API}/character/?page=${state.page}`; 

  const { isLoading, isError, data } = useQuery(['characterList', key, page], () =>
    axios.get(URI)
      .then(res => res.data )
  )

  useEffect(() => {
    if(data !== undefined && !isError){
      dispatch({type: ActionTypes.SET_TOTAL_PAGE, payload: data.info.pages})
    }
  } , [isLoading])

  if (isLoading) {
    return <LoadingComponent/>;
  }

  if (isError) {
    return <ErrorComponent/>;
  }
  console.log(data.results)
  return (
    <>
      {
        data?.results?.length > 0 ? (
        <>
          <main className="main__wrapper">
            { data.results.map((character, index)=>{
                  const ChapterID = character.episode[0].split('/')[5];
                  return (<Card  
                  name={character.name} 
                  key= {character.id}
                  img = {character.image}
                  status = {character.status}
                  specie = {character.species}
                  episode = {ChapterID}
                  location = {character.location.name}
                  />)
                }
              )
            }
          </main>
        </> )
        : (<ErrorComponent/>)
      }
    </>
  )
}

export { Characters };