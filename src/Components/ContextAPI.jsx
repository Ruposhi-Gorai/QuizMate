import React, { createContext, useState } from 'react'
    const Context = createContext();

export default function ContextAPI({children}) {




    const [isLogin, setIsLogin] = useState(false)
    const data = {isLogin, setIsLogin}
  return (
    <>
        <Context.Provider value = {data} >
            {children}
        </Context.Provider>
    </>
  )
}

export {Context}