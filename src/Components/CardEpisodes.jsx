import { Link } from "react-router-dom";

const CardEpisodes = (props) => {
  
  const { name, episode, created, id } = props;

  return (
    <Link to={`/episode/${id}`} className='col-12 offset-lg-1 offset-xl-2 especialCard-container'>
      <article className="especialCard-wrapper">
        <div className="especialCard-content">
          <div className="especialCard-header">
            <h3>{ name }</h3>
          </div>
          <div className="especialCard-body">
            <div className="especialCard-airDate">
              <p>Created:</p>
              <h4>{ created.slice(0, 10) }</h4>
            </div>
            <div className="especialCard-episode">
              <p>Episode: </p>
              <h4>{ episode }</h4>  
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export { CardEpisodes };
