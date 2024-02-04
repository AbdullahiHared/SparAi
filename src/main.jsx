import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import {BrowserRouter} from "react-router-dom";
import Routers from "./extras/Routers.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routers />
      </BrowserRouter>
  </React.StrictMode>,
)
