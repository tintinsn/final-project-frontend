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
      alert('Passwords do not match.')
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
    <div>
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
      </form>
    </div>
  )
}

export default Register
