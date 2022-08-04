import { Link } from 'react-router-dom'; 

const WelcomePageCard = ({ text, link }) => {

  return (
    <Link to={`/${link}`} className='welcomeCardWrapper d-flex align-items-flexend' id={`${text}`}>
      <div className='welcomeCardBackgroundFade'>
        <h1 className='text-center'>{text}</h1>
      </div>
    </Link>
  )
}

export { WelcomePageCard }; 