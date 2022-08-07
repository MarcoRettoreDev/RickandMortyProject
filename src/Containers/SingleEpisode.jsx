import { Card } from '../Components/Card';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { LoadingComponent } from '../Components/LoadingComponent';
import { useContext } from 'react';
import { myContext } from '../Helpers/UseContext';
import { ActionTypes } from '../Helpers/ActionTypes';
import { ErrorComponent } from '../Components/ErrorComponent';
import { Character } from '../Components/Character';

const SingleEpisode = () => {

  const {state , dispatch} = useContext(myContext);

  const API = 'https://rickandmortyapi.com/api';

  const { episodeID } = useParams();

  const URIEPISODE = `${API}/episode/${episodeID}`;

  const { isLoading, isError, data } = useQuery([`episode/${episodeID}`], () =>
  axios.get(URIEPISODE)
    .then(res => res.data )
)

  if (isLoading) {
    return <LoadingComponent/>;
  }

  if (isError) {
    return <ErrorComponent/>;
  }
  
  return (
  <>
    <h1>{data.name}</h1>
    <h2>{data.air_date}</h2>
    {
      data != 'undefined' ? (
          data.characters.map((character, i)=>{
            const apiID = character.split('/').filter(Boolean);
            const characterID = apiID[apiID.length - 1];
          return (
            <Character
              characterAPI = {characterID}
              key = {i}
            />
          )
        })) : (
          <LoadingComponent/>
        )
    }
  </>
  )
}

export { SingleEpisode };