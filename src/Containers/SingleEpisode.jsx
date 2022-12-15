import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import { LoadingComponent } from "../Components/LoadingComponent";
import { ErrorComponent } from "../Components/ErrorComponent";
import { Character } from "../Components/Character";
import { Icon } from "@iconify/react";

const SingleEpisode = () => {
  const navigate = useNavigate();

  const { episodeID } = useParams();

  const URIEPISODE = `${process.env.REACT_APP_API_KEY}/episode/${episodeID}`;

  const { isLoading, isError, data } = useQuery([`episode/${episodeID}`], () =>
    axios.get(URIEPISODE).then((res) => res.data)
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
          <h2>{data.air_date}</h2>
        </div>
      </div>
      <div className="row my-5 cardDeck">
        {data !== undefined ? (
          data.characters.map((character, i) => {
            const apiID = character.split("/").filter(Boolean);
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

export { SingleEpisode };
