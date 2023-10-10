import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ContentDetail from './pages/ContentDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateContent from './pages/CreateContent'
import GuardRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<GuardRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/new" element={<CreateContent />} />
          <Route path="/content/:id" element={<ContentDetail />} />
        </Route>

        <Route element={<GuardRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
