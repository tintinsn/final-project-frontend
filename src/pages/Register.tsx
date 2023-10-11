import axios from 'axios'
import { useState } from 'react'
import { RegisterDTO } from '../types/dto'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
  })

  const { username, name, password, confirmPassword } = formData

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords not match.')
      return
    }

    try {
      const registerData: RegisterDTO = {
        username,
        password,
        name,
      }

      const response = await axios.post('https://api.learnhub.thanayut.in.th/user', registerData)

      console.log('Registration successful:', response.data)

      setFormData({
        username: '',
        name: '',
        password: '',
        confirmPassword: '',
      })
      navigate('/login')
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return (
    // <div>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="src/assets/logo-3.png" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
      </div>

      {/* Username */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={username}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Your Name */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Your Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                // onChange={(e) => setPassword(e.target.value)}
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Register
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            have an account?{' '}
            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </a>
            {/* <Link to="/register"><Link/> */}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register

{
  /* 
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={handleChange} />
        <label>Your name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} />
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
        <button type="submit">Register</button>
      </form> */
}
