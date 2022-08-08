import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';

import buttonGoBack from '../assets/svg/buttonGoBack.svg'
import { LoadingComponent } from '../Components/LoadingComponent';
import { ErrorComponent } from '../Components/ErrorComponent';
import { Character } from '../Components/Character';

const SingleLocation = () => {

  const navigate = useNavigate();

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

  console.log(data)

  return (
  <>
    <div className='especialDescription-container'>
      <img src={buttonGoBack} alt='Go back button' onClick={ () => navigate(-1) }></img>
      <div>
        <h1>{data.name}</h1>
        <h2>{data.created.slice(0,10)}</h2>
      </div>
    </div>
    <div className='row my-5'>
      {
        data !== undefined ? (
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
    </div>
  </>
  )
}

export { SingleLocation };