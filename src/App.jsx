import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={`${darkTheme ? 'dark':''} dark:bg-gradient-to-tr from-slate-800 via-slate-700 to-violet-950`}>
<Home/>
    </div>
  )
}

export default App