import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

const Home = () => {
  // const a = prompt("Enter your name");
  return (
    <>
    <div className="App">
    <Navbar logoText="ACWEB"/>
    <div className='div1'>
    <div className='div11'>
      <h2>Hello,</h2>
      <h3>Welcome to this first react project<br></br>-By ACPatil</h3>
      <p>Start your journey now...</p>
      <button className='button'>Click here</button>
    </div>
    <img src='logo.jpg' className='react-img'></img>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Home