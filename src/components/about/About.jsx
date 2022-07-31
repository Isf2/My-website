import React from 'react'
import './about.css'
import ImageAbout from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About= () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className=' container about__conteiner'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ImageAbout} alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>clints</h5>
              <small>200+ worlddwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>project</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
          A orderedA complete list of standard tags available in HTML5 is given below.
           All the tags are orderedalphabetically beenalphabetically along with an indication 
           if they have been introduced newly or they have beendeprecated deprecated in HTML5.
           if they have been introduced newly or they have beendeprecated deprecated in HTML5.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About