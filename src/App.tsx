import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ContentDetail from './pages/ContentDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateContent from './pages/CreateContent'
import GuardRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'
import Edit from './pages/Edit'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      <Navbar />

      <div className="flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content/:id" element={<ContentDetail />} />
          <Route element={<GuardRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
            <Route path="/new" element={<CreateContent />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
          <Route element={<GuardRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
