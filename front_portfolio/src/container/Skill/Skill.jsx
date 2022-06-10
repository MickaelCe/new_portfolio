import React, {useState, useEffect} from 'react';
import './Skill.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'skills']";
    client.fetch(query)
    .then((data) => setSkills(data))
  }, []);
  
  return (
    <div className="app__skills-section">
      <h2 className='head-text'>Skills</h2>
      <div className="app__skills-container">
      <div className='gradient__block skill__topband'></div>
      <div className='app__skills-list'>
        {skills.map((skill, index) => (
          <motion.div key={skill.title + index}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <img src={urlFor(skill.icon)} alt="" />
            <p>{skill.name}</p>
          </motion.div>
        )) }
        </div>
        <div className='gradient__block skill__botband'></div>
    </div>
    </div>

  )
}

export default Skill