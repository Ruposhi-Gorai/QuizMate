import React, { useContext } from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/ws-cube-white-logo.svg'
import { Context } from './ContextAPI'
import { ToastContainer } from 'react-toastify'

export default function Header() {
  const { isLogin, setIsLogin } = useContext(Context)

  const logout = () => {
    setIsLogin(0);
    localStorage.removeItem('user-login')
  }

  return (
    <>
      <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
        <div className="container">
          {/* Logo / Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <span className="fw-bold fs-3 fst-italic">QuizMate</span>
          </Link>

          {/* Mobile Toggler */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/play-quiz" className="nav-link text-white">Play Quiz</Link>
              </li>
              <li className="nav-item">
                <Link to="/add-quiz" className="nav-link text-white">Add Quiz</Link>
              </li>
              <li className="nav-item">
                <Link to="/view-quiz" className="nav-link text-white">View Quiz</Link>
              </li>
            </ul>

            {/* Right Side Buttons */}
            <div className="d-flex">
              {isLogin === 1 ? (
                <button 
                  onClick={logout} 
                  className="btn btn-outline-light btn-sm px-3 "
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="me-2">
                    <button className="btn btn-light btn-sm px-3 ">Login</button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-warning btn-sm px-3 ">Register</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
