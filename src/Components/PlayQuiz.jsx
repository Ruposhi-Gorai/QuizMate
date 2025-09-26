import React, { useContext, useEffect } from 'react'
import { Context } from './ContextAPI';
import { useNavigate } from 'react-router'

export default function
() 
{
  const {isLogin} = useContext(Context)

 const navigate = useNavigate();
useEffect(()=>{
  if(isLogin == 0){
      navigate('/')

  }
}, [])

  return (
    <>
    <h1>Play Quiz</h1>
        
    </>
  )
}
