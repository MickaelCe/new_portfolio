import React from 'react';
import {motion} from 'framer-motion';
import './Header.scss';
import BgAnimation from '../../components/BackgroundAnimation/BackgroundAnimation';

function Header() {

  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>✌️</span>
            <div style={{ marginLeft: 20}}>
              <h2 className='head-text'>Hello, I am</h2>
            </div>
          </div>
          <h1 className='gradient__text'>Mickael Cecen</h1>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>DÉVELOPPEUR WEB JUNIOR</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-anim'
      >
        <BgAnimation />
      </motion.div>
    </div>
  )
}

export default Header