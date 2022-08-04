
const CardEpisodes = (props) => {
  
  const { name, airDate, created } = props;

  return (
    <article className="main__card-wrapper">
      <div className="card-text-wrapper">
        <div className="card-body-header">
          <h3>{ name }</h3>
        </div>
        <div className="card-body-title">
        </div>
        <div className="card-body-text">
          <h4>Air date:</h4>
          <p>{ airDate }</p>
        </div>
        <div className="card-body-text">
          <h4>Created: </h4>
          <p>{ created.slice(0, 10) }</p>  
        </div>
      </div>
    </article>
  )
}

export { CardEpisodes };
