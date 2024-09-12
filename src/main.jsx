import React from 'react'
import ReactDOM from 'react-dom/client'

import { TailwindApp } from './TailwindApp'

import './index.css'
import { CustomButtons } from './components/buttons/CustomButtons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CustomButtons/> */}
    <TailwindApp/>
  </React.StrictMode>,
)
