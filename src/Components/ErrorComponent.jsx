import errorImg from '../assets/img/rickandmorty_portal_big.png'

const ErrorComponent = () => {
  return (
    <div className="errorComponentContainer">
      <h1 className="title">Search error</h1>
      <h3 className="subtitle"> We couldn't find any result in your search. Try with another word please</h3>
      <div className='errorImgWrapper'>
        <img src={errorImg} alt="Rick and morty error img" />
      </div>
    </div>
  )
}

export { ErrorComponent }; 