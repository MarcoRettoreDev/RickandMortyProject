import axios from "axios";
import { useQuery } from "react-query";
import { ErrorComponent } from "./ErrorComponent";
import { LoadingComponent } from "./LoadingComponent";

const Card = (props) => {
  const { name, img, status, specie, episode, created, location } = props;

  const { isLoading, isError, data } = useQuery(
    [`character-location-${episode}`],
    () => {
      if (episode !== undefined) {
        return axios
          .get(`https://rickandmortyapi.com/api/location/${episode}`)
          .then((res) => res.data);
      }
    },
    { retry: 1, refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <article className=" main__card-wrapper">
      <div className="card-img-wrapper">
        <img src={img} alt={name}></img>
      </div>
      <div className="card-text-wrapper">
        <div className="card-body-header ">
          <h2>{name}</h2>
        </div>
        <div className="card-body">
          <div className="card-body-subheader">
            <p className={`${status.toLowerCase()} status`}></p>
            <p>
              {status} - {specie}
            </p>
          </div>
          <div className="card-body-text">
            <p>{episode !== undefined ? "First seen in:" : "Created:"}</p>
            <p>{episode !== undefined ? data.name : created.slice(0, 10)}</p>
          </div>
          <div className="card-body-text">
            <p>Location: </p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export { Card };
