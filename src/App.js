import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
    
   <BrowserRouter>
   <Navbar />
   
    <Routes>
   
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        
          
          
          
        </Route>
     
    </Routes>
  </BrowserRouter>,
    </>
  )
}

export default App