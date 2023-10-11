import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="src/assets/logo-3.png" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
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
                type="username"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Sign in
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don&apos;t have an account?{' '}
            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </a>
            {/* <Link to="/register"><Link/> */}
          </p>
        </form>
      </div>

      {/* <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
        <p>Don&apos;t have an account? Register</p> */}
    </div>
  )
}

export default Login
