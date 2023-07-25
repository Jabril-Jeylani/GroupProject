
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookCatalog from './pages/BookCatalog'
import SeparateBook from './pages/SeparateBook'
import './App.css'
import {DuneContext} from "./DuneContext"

function App() {
  

  return (
    <div> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-catalog" element={<BookCatalog />} />
        <Route path="/book/:bookId" element={<SeparateBook />} /> 
      </Routes> 
    </div>
  )
}

export default App
