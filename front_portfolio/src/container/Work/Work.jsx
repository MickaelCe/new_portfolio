import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { urlFor, client } from '../../client';
import './Work.scss';

function Work() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query)
    .then((data) => setWorks(data))
  }, []);

  
  return (
    <div className='app__work-container'>
      <div className='app__work-title'>
        <h2 className='head-text'>Check out some of my latest<span className='gradient__text'> work.</span></h2>
      </div>
      <div className='app__work-list'>
        {works.map((work, index) => (
          <motion.div key={index} className='app__work-details'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}>
              <motion.a href={work.projectLink} target='_blank' rel="noopener noreferrer"><motion.img src={urlFor(work.imgUrl)} alt={work.title}/></motion.a>
              <motion.h6>{work.description}</motion.h6>
          </motion.div>
        ))}
      </div>
      <div id='contact' style={{ position: 'relative' , bottom: '72px'}}></div>
      <div className='app__mail-section'>
        <div className='app__mail-button'><h6>Feel free to contact me at :&nbsp;&nbsp;</h6><button>mickael.cecen@gmail.com</button></div>
      </div>
    </div>
  )
}

export default Work