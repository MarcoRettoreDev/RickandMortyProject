import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAnimationControls, motion } from "framer-motion";

const CardLocations = (props) => {
  
  const { name, type, created, id, index } = props;

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
    <Link to={`/location/${id}`} className='col-12 offset-lg-1 offset-xl-2 especialCard-container'>
      <motion.article 
        className="especialCard-wrapper"
        custom={index}
        animate={controls}
      >
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
      </motion.article>
    </Link>
  )
}

export { CardLocations };
