import React from 'react'
import './Social.scss';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';


function Social() {
  return (
      <div className='brand__social' id='skill'>
          <div className='gradient__block'></div>
          <a href="https://github.com/MickaelCe" target='_blank' rel="noopener noreferrer"><FaGithubSquare /></a>
          <a href="https://www.linkedin.com/in/mickaelcecen/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
          <div className='gradient__block'></div>
    </div>
  )
}

export default Social