
const CardLocations = (props) => {
  
  const { name, type, created } = props;

  return (
    <article className="main__card-wrapper">
      <div className="card-text-wrapper">
        <div className="card-body-header">
          <h3>{ name }</h3>
        </div>
        <div className="card-body-title">
        </div>
        <div className="card-body-text">
          <h4>Type:</h4>
          <p>{ type }</p>
        </div>
        <div className="card-body-text">
          <h4>Created: </h4>
          <p>{ created.slice(0, 10) }</p>  
        </div>
      </div>
    </article>
  )
}

export { CardLocations };
