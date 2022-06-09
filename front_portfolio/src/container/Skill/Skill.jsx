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
    <div>
      <h2 className='head-text'>Skills</h2>
      <div className='app__skills-list'>
        {skills.map((skill, index) => (
          <motion.div key={skill.title + index}>
            <img src={urlFor(skill.icon)} alt="" />
          </motion.div>
        )) }
      </div>
    </div>
  )
}

export default Skill