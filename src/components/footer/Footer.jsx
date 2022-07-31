import React from 'react'
import './footer.css'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
      <a href='#about' className='footer__logo'>IBRAHIM</a>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Expeirience</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        {/* <li><a href='#portfolio'>Portfolio</a></li> */}
        {/* <li><a href='#Testmonials'>Testmonials</a></li> */}
        <li><a href='#Contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        {/* <a href='https://facebook.com'><FaFacebookF/></a> */}
        <a href='https://instagram.com/isf028' target='_blank'><AiFillInstagram/></a>
        <a href='https://twitter.com/isf028' target='_blank'><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ibrahim. All right reserved. </small>
      </div>

    </footer>
  )
}

export default Footer