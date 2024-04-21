import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useForm } from 'react-hook-form'
import './Login.css'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("")) 

   
  return (
    <div>
      <Navbar logoText="ACWEB"/>
      <div className='log'>
      <h1 className='lh1'>Login page</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='frm'>
      <input placeholder='username'{...register("username")} type='text' className='lin' /><br></br>
      <input placeholder='password'{...register("password", { required: true })} type='password' className='lin' /><br></br>
      {errors.password && alert("fill form correctly...!")}
      <input type="submit" className='lbtn'/>
    </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Login