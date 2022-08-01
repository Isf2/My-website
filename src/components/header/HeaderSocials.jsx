import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
 const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/Isf2' target="_blank"><BsLinkedin/></a>
        <a href='https://www.linkedin.com/in/ibrahim-alsaif-7b3abb242/' target="_blank"><FaGithub/></a>
    </div>
  )
}
export default HeaderSocials