import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { myContext } from "../Helpers/UseContext";
import { ActionTypes } from '../Helpers/ActionTypes';

import { CardLocations } from '../Components/CardLocations';
import { LoadingComponent } from '../Components/LoadingComponent';
import { ErrorComponent } from '../Components/ErrorComponent';

const Locations = () =>{

  const API = 'https://rickandmortyapi.com/api';

  const { state, dispatch } = useContext(myContext);

  const key = state.searchInput?.length >= 3 ? state.searchInput : ''; 
  
  const page = state.page;

  const URI = state.searchInput?.length >= 3 ? `${API}/location/?page=${state.page}&name=${state.searchInput}` : `${API}/location/?page=${state.page}`; 

  const { isLoading, isError, data } = useQuery(['locationsList', key, page], () =>
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
            { data.results.map((locations)=>
                <CardLocations
                  key={locations.id}
                  name={locations.name}
                  type={locations.type}
                  created={locations.created}
                />
              ) }
          </section>
        ) : (<ErrorComponent/>)
      }
    </>
  )
}

export { Locations };