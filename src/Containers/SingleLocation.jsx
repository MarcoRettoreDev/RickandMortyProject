import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { LoadingComponent } from '../Components/LoadingComponent';
import { useContext } from 'react';
import { myContext } from '../Helpers/UseContext';
import { ErrorComponent } from '../Components/ErrorComponent';
import { Character } from '../Components/Character';

const SingleLocation = () => {

  const API = 'https://rickandmortyapi.com/api';

  const { locationID } = useParams();

  const URIEPISODE = `${API}/location/${locationID}`;

  const { isLoading, isError, data } = useQuery([`location/${locationID}`], () =>
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
          data.residents.map((resident, i)=>{
            const apiID = resident.split('/').filter(Boolean);
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

export { SingleLocation };