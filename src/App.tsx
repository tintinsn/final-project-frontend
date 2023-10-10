import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ContentDetail from './pages/ContentDetail'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/content/:id" element={<ContentDetail />} />
      </Routes>
    </>
  )
}

export default App
