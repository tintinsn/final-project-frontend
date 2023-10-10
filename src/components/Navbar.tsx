import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src="src/assets/logo.svg" alt="" />
        <p>LearnHub</p>
      </div>
      <div className={classes.menuList}>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  )
}
export default Navbar
