import axios from "axios";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";

import { LoadingComponent } from "../Components/LoadingComponent";
import { ErrorComponent } from "../Components/ErrorComponent";
import { Character } from "../Components/Character";
import { Icon } from "@iconify/react";

const SingleLocation = () => {
  const navigate = useNavigate();

  const { locationID } = useParams();

  const URIEPISODE = `${process.env.REACT_APP_API_KEY}/location/${locationID}`;

  const { isLoading, isError, data } = useQuery(
    [`location/${locationID}`],
    () => axios.get(URIEPISODE).then((res) => res.data),
    {
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      <div className="especialDescription-container">
        <Icon
          onClick={() => navigate(-1)}
          icon="material-symbols:arrow-back"
          width="32"
          height="32"
          className="button_prev"
        />
        <div>
          <h1>{data.name}</h1>
          <h2>{data.created.slice(0, 10)}</h2>
        </div>
      </div>
      <div className="row my-5 cardDeck">
        {data !== undefined ? (
          data.residents.map((resident, i) => {
            const apiID = resident.split("/").filter(Boolean);
            const characterID = apiID[apiID.length - 1];
            return <Character characterAPI={characterID} key={i} />;
          })
        ) : (
          <LoadingComponent />
        )}
      </div>
    </>
  );
};

export { SingleLocation };
