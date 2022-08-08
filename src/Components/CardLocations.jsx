import { Link } from "react-router-dom";

const CardLocations = (props) => {
  
  const { name, type, created, id } = props;
  
  return (
    <Link to={`/location/${id}`} className='col-12 offset-lg-1 offset-xl-2 especialCard-container'>
      <article className="especialCard-wrapper">
        <div className="especialCard-content">
          <div className="especialCard-header">
            <h3>{ name }</h3>
          </div>
          <div className="especialCard-body">
            <div className="especialCard-airDate">
              <p>Type:</p>
              <h4>{ type }</h4>
            </div>
            <div className="especialCard-episode">
              <p>Created: </p>
              <h4>{ created.slice(0, 10) }</h4>  
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export { CardLocations };
