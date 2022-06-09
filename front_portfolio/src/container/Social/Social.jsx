import React from 'react'
import './Social.scss';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';


function Social() {
  return (
      <div className='brand__social'>
          <div className='gradient__block'></div>
          <a href="https://github.com/MickaelCe"><FaGithubSquare /></a>
          <a href="https://www.linkedin.com/in/mickaelcecen/"><FaLinkedin /></a>
          <div className='gradient__block'></div>
    </div>
  )
}

export default Social