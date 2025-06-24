import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import RecipeDetail from './Pages/RecipeDetail';

function App() {

  return (
  <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/recipedetail/:id" element={<RecipeDetail/>} />
          <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
   </>

  )
}

export default App;

