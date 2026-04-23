import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  const handleLogin = () => {
    if (user.username === 'admin' && user.password === '1234') {
      localStorage.setItem('auth', 'true')
      navigate('/')
    } else {
      alert(' Invalid Credentials')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '320px' }}>
        <h3 className="mb-3 text-center">Login</h3>

        <input
          className="form-control mb-2"
          placeholder="Username (admin)"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password (1234)"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button className="btn btn-success w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}