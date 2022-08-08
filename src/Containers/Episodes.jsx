import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { myContext } from "../Helpers/UseContext";
import { ActionTypes } from '../Helpers/ActionTypes';

import { CardEpisodes } from '../Components/CardEpisodes';
import { LoadingComponent } from '../Components/LoadingComponent';
import { ErrorComponent } from '../Components/ErrorComponent';

const Episodes = () =>{

  const API = 'https://rickandmortyapi.com/api';

  const { state, dispatch } = useContext(myContext);

  const key = state.searchInput?.length >= 3 ? state.searchInput : '';

  const page = state.page;
  const URILIST = state.searchInput?.length >= 3 ? `${API}/episode/?name=${state.searchInput}` : `${API}/episode/?page=${state.page}`; 

  const { isLoading, isError, data } = useQuery(['episodeList', page, key], () =>
     axios.get(URILIST)
     .then(res => res.data)
  )

  useEffect(() => {
    if(data !== undefined && !isError){
      dispatch({type: ActionTypes.SET_TOTAL_PAGE, payload: data.info.pages})
      dispatch({type: ActionTypes.SET_TOTAL_EPISODES, payload: data.info.count})
    }
  } ,[isLoading])

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
          <section className='row my-5'>
            { data.results.map((episode)=>
              <CardEpisodes
                name = {episode.name}
                created = {episode.created}
                episode = {episode.episode}
                key = {episode.id}
                id = {episode.id}
              />
              )
            }
          </section>
        ) : (<ErrorComponent/>)
      }
    </>
  )
}

export { Episodes };