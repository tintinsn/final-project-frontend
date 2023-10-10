import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src="src/assets/logo.svg" alt="" />
        <p>LearnHub</p>
      </div>
      <div className={classes.menuList}>
        {isLoggedIn ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </div>
  )
}
export default Navbar
