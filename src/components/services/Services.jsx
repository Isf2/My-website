import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
      <h2>Services</h2>

     <div className='container services__container'>
      <article className='service'>
      <div className='service__head'>
        <h3>Design UI/UX</h3>
     </div> 
     <ul className='service__list'>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design in UI/UX</p>
      </li>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design in UI/UX</p>
      </li>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design in UI/UX</p>
      </li>
      </ul> 
      </article>
      {/* End UI/UX */}
      <article className='service'>
      <div className='service__head'>
        <h3>Design web page</h3>
     </div> 
     <ul className='service__list'>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design web page</p>
      </li>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design web page</p>
      </li>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design web page</p>
      </li>
      </ul> 
      </article>
      {/*  END web development */}
      <article className='service'>
      <div className='service__head'>
        <h3>Design UI/UX</h3>
     </div> 
     <ul className='service__list'>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design in UI/UX</p>
      </li>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design in UI/UX</p>
      </li>
      <li>
        <BiCheck className='service__list-icon'/>
        <p>design in UI/UX</p>
      </li>
      </ul> 
      </article>
      {/* End UI/UX */}
      
     </div>

    </section>
  )
}

export default Services