import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Homepage from './Components/Homepage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { User } from './Components/User';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path=":userId" element={<User />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
