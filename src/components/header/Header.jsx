import React from 'react'
import './header.css'
import CTA from './CTA'
import ImgHeader from '../../assets/computer-header.png'
import HS from './HeaderSocials'
const Header=() => {
  return (
    <header id="home" >
      <div className="container header__container " >
    <h5>Hello I'm</h5>
    <h1>Ibrahim Alsaif</h1>
    <h5 className="tex-light">Fullstak Developer</h5>
    <CTA/>
    <HS/>

    <div className='Img-Header'>
      <img src={ImgHeader} alt='computer'/>
    </div>
    <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>   
    </header>


  )
}

export default Header