import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { myContext } from "../Helpers/UseContext";
import { ActionTypes } from "../Helpers/ActionTypes";

import { CardLocations } from "../Components/CardLocations";
import { LoadingComponent } from "../Components/LoadingComponent";
import { ErrorComponent } from "../Components/ErrorComponent";

const Locations = () => {
  const { state, dispatch } = useContext(myContext);

  const key = state.searchInput?.length >= 3 ? state.searchInput : "";

  const page = state.page;

  const URI =
    state.searchInput?.length >= 3
      ? `${process.env.REACT_APP_API_KEY}/location/?name=${state.searchInput}`
      : `${process.env.REACT_APP_API_KEY}/location/?page=${state.page}`;

  const { isLoading, isError, data } = useQuery(
    ["locationsList", key, page],
    () => axios.get(URI).then((res) => res.data),
    { retry: 1, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (data !== undefined && !isError) {
      dispatch({ type: ActionTypes.SET_TOTAL_PAGE, payload: data.info.pages });
      dispatch({
        type: ActionTypes.SET_TOTAL_LOCATIONS,
        payload: data.info.count,
      });
    }
  }, [isLoading]);

  console.log(isLoading, isError);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      {data?.results?.length > 0 ? (
        <section className="row my-5 especialCardDeck">
          {data.results.map((locations, i) => (
            <CardLocations
              key={locations.id}
              name={locations.name}
              type={locations.type}
              created={locations.created}
              id={locations.id}
              index={i}
            />
          ))}
        </section>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};

export { Locations };
