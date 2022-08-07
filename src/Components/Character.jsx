import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ActionTypes } from "../Helpers/ActionTypes";
import { myContext } from "../Helpers/UseContext";
import { Card } from "./Card";
import { ErrorComponent } from "./ErrorComponent";
import { LoadingComponent } from "./LoadingComponent";

const Character = ({characterAPI}) => {
  
  const { state, dispatch } = useContext(myContext);
  const [ filter, setFilter ] = useState(false);

  const key = state.searchInput?.length >= 3 ? state.searchInput : 'null'; 

  // const URI = state?searchInput >= 0 ? `https://rickandmortyapi.com/api/character/${characterAPI}`

  const {isLoading, isError, data} = useQuery([`character-${characterAPI}`], () =>
    axios.get(`https://rickandmortyapi.com/api/character/${characterAPI}`)
     .then( res => res.data)
  )

  useEffect(() => {
    dispatch({type: ActionTypes.SET_TOTAL_PAGE, payload: 1})
  } ,[])

  if (isLoading) {
    return <LoadingComponent/>;
  }
  
  if (isError) {
    return <ErrorComponent/>;
  }
  
  // console.log(state.searchInput.length)
  // if(data.name.toLowerCase().includes(key.toLowerCase())){
  //   setFilter(true);
  //   return <Card
  //   name = {data.name}
  //   img = {data.image}
  //   status = {data.status}
  //   specie = {data.species}
  //   dimension = {data.dimension}
  //   created = {data.created}
  //   />
  //   return console.log('filtrado')
  // }

  // console.log(key)

  return(
    <>
      {
        filter ? null : (<Card
          name = {data.name}
          img = {data.image}
          status = {data.status}
          specie = {data.species}
          dimension = {data.dimension}
          created = {data.created}
        />)
      }
    </>
  )
}

export { Character };