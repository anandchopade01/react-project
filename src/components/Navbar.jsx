import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'

const Navbar = (props) => {
  return (
    <div>
    <div className='logo'>
    <div className='lgtext'>ACWEB</div>
        <ul className='ul'>
            <Link to='/' className='link'><li>Home</li></Link>
            <Link to='/about' className='link'><li>About</li></Link>
            <Link to='/login' className='link'><li>Login</li></Link>
        </ul>
        </div>
    </div>
  )
}

export default Navbar