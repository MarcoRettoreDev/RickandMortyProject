import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import buttonGoBack from '../assets/svg/arrow-left-r.svg'
import { LoadingComponent } from '../Components/LoadingComponent';
import { ErrorComponent } from '../Components/ErrorComponent';
import { Character } from '../Components/Character';

const SingleEpisode = () => {

  const navigate = useNavigate();

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
    <div className='especialDescription-container'>
      <img src={buttonGoBack} alt='Go back button' onClick={ () => navigate(-1) }></img>
      <div>
        <h1>{data.name}</h1>
        <h2>{data.air_date}</h2>
      </div>
    </div>
    <div className='row my-5'>
      {
        data !== undefined ? (
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
    </div>
  </>
  )
}

export { SingleEpisode };