import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Body from './components/Body'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>
)
