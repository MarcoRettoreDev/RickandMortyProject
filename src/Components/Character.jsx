import axios from "axios";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { ActionTypes } from "../Helpers/ActionTypes";
import { myContext } from "../Helpers/UseContext";
import { Card } from "./Card";
import { ErrorComponent } from "./ErrorComponent";
import { LoadingComponent } from "./LoadingComponent";

const Character = ({characterAPI}) => {

  const { dispatch } = useContext(myContext);

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

  return(
    <>
      {
        <Card
          key={data.id}
          name = {data.name}
          img = {data.image}
          status = {data.status}
          specie = {data.species}
          dimension = {data.dimension}
          location = {data.location.name}
          created = {data.created}
          episode = {undefined}
        />
      }
    </>
  )
}

export { Character };