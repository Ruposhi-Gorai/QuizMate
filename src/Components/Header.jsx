import React, { useContext } from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/ws-cube-white-logo.svg'
import { Context } from './ContextAPI'

export default function Header() {

    const {isLogin, setIsLogin} = useContext(Context)
  return (
    <>
     <div className ="nav-bar">
  <nav className ="navbar container-fluid navbar-expand-lg navbar-light bg-primary">
  <div className ="container">
    <Link to = '/' ><h1 className='text-white fst-italic pe-5'>?QuizMate</h1></Link>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav mx-auto mb-2 mb-lg-0 fs-4  text-white text-decoration-none">
        <li className ="nav-item">
            <Link to='/' className='text-white text-decoration-none m-2'>Home</Link>
        </li>
        <li className ="nav-item">
            <Link to='/play-quiz' className='text-white text-decoration-none m-2'>Play Quiz</Link>
        </li>
        <li className ="nav-item">
            <Link to='/add-quiz' className='text-white text-decoration-none m-2'>Add Quiz</Link>
        </li>
                <li className ="nav-item">
            <Link to='/view-quiz' className='text-white text-decoration-none m-2'>View Quiz</Link>
        </li>
      </ul>
      
      {
        isLogin == 1 ? 
        <button className='px-2 py-1 border-0 rounded'>LogOut</button>
        :
        <>
        <button className='px-2 py-1 border-0 rounded me-2'>Login</button>
        <button className='px-2 py-1 border-0 rounded mx-1'>Register</button>

        </>
      }
    </div>
  </div>
</nav>
        </div>

    </>
  )
}
