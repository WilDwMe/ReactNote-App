import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from '../src/pages/home.js';
import { Alert } from "./components/alert.js";
import { Navbar } from "./components/navbar.js";
import {About} from './pages/about.js';

function App() {
  return (
    <BrowserRouter>
          
    <Navbar/>
      <div className='container pt-4'>
        <Alert alert={'danger'}/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
