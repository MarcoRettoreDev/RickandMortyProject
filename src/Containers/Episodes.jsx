import { useContext, useEffect } from 'react';
import { CardEpisodes } from '../Components/CardEpisodes';
import { useQuery } from 'react-query';
import axios from 'axios';

import { myContext } from "../Helpers/UseContext";
import { ActionTypes } from '../Helpers/ActionTypes';

import { LoadingComponent } from '../Components/LoadingComponent';
import { ErrorComponent } from '../Components/ErrorComponent';

const Episodes = () =>{

  const API = 'https://rickandmortyapi.com/api';

  const { state, dispatch } = useContext(myContext);

  const key = state.searchInput?.length >= 3 ? state.searchInput : ''; 
  
  const page = state.page;
  
  const URI = state.searchInput?.length >= 3 ? `${API}/episode/?page=${state.page}&name=${state.searchInput}` : `${API}/episode/?page=${state.page}`; 

  const { isLoading, isError, data } = useQuery(['episodeList', key, page], () =>
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

  return (
    <>
      {
        data?.results?.length > 0 ? (
          <section className="main__wrapper">
            { data.results.map((episode)=>
                <CardEpisodes
                  key={episode.id}
                  name={episode.name}
                  airDate={episode.air_date}
                  // character={episode.characters}
                  created={episode.created}
                />
              ) }
          </section>
        ) : (<ErrorComponent/>)
      }
    </>
  )
}

export { Episodes };