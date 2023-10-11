import { NavLink } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

// **** Tailwind **** //

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <header className=" bg-white-500 mx-auto max-w-7xl lg:px-8 py-2 ">
      <nav className="flex flex-row">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex">
            {/* <span className="sr-only">LearnHub</span> */}
            <img className="h-10 w-auto" src="src/assets/logo-3.png" alt="" />
            {/* <p>LearnHub</p> */}
          </a>
        </div>

        <div className="flex lg:flex lg:gap-x-12 md:gap-x-12 sm:gap-x-12 ">
          {isLoggedIn ? (
            <button onClick={logout} className="text-sm font-semibold leading-6 text-gray-900 ">
              Log out
            </button>
          ) : (
            <>
              <NavLink className="text-sm font-semibold leading-6 text-gray-900 font-inter" to="/login">
                Login
              </NavLink>
              <NavLink
                className="text-sm font-semibold leading-6 text-gray-900 border-none font-inter  "
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
export default Navbar
