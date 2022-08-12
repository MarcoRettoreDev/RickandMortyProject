import { Link } from "react-router-dom";
import { motion, useAnimationControls } from 'framer-motion'; 
import { useEffect } from "react";

const CardEpisodes = (props) => {
  
  const { name, episode, created, id, index } = props;

  const controls = useAnimationControls();
  useEffect(() => {
    controls.set({ opacity: 0 });
    controls.start(i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }));

  }, [])
  
  return (
    
    <Link to={`/episode/${id}`} className='col-12 offset-lg-1 offset-xl-2 especialCard-container'>
      <motion.article className="especialCard-wrapper"
        animate={controls}
        custom={index}
      >
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
      </motion.article>
    </Link>
  )
}

export { CardEpisodes };
