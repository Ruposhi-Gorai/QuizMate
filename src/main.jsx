import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './Components/RootLayout.jsx'
import HomePage from './Components/HomePage.jsx';
import AddQuiz from './Components/AddQuiz.jsx';
import PlayQuiz from './Components/PlayQuiz.jsx';
import ViewQuiz from './Components/ViewQuiz.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>} >
      <Route path='/' element={<HomePage/>} />
      <Route path='/add-quiz' element={<AddQuiz/>} />
      <Route path='/play-quiz' element={<PlayQuiz/>} />
      <Route path='/view-quiz' element={<ViewQuiz/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </>,
)
