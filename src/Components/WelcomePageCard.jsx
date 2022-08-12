import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';

const WelcomePageCard = ({ text, link }) => {

  return (
    <Link to={`/${link}`} className='welcomeCardWrapper d-flex align-items-flexend' id={`${text}`}>
      <motion.div className='welcomeCardBackgroundFade'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-center'>{text}</h1>
      </motion.div>
    </Link>
  )
}

export { WelcomePageCard }; 