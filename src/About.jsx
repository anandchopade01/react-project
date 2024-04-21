import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <Navbar logoText="ACWEB"/>
      <h1 className='ah1'>About page</h1>
      <div className='container'>
      <div className='card'>
        <img src='logo.jpg' className='img'></img>
        <br></br>
        <p className='cp cpp'>Developer - ACPatil</p>
        <p className='cp'>This is demo text,<br></br>
        This react application developed <br></br>by AC Patil(Frontend developer)...<br></br></p>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About