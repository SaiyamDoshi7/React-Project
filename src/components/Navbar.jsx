import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ children }) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('auth')
    navigate('/login')
  }

  return (
    <div className="d-flex">

      <div className="bg-dark text-white p-3 d-flex flex-column justify-content-between vh-100" style={{ width: '220px' }}>
        
        <div>
          <h4 className="mb-4">Student Panel</h4>

          <Link to="/" className="d-block text-white mb-2">Dashboard</Link>
          <Link to="/students" className="d-block text-white mb-2">Students</Link>
          <Link to="/add" className="d-block text-white mb-2">Add Student</Link>
        </div>

        <button className="btn btn-danger mt-3" onClick={logout}>
          Logout
        </button>

      </div>

      <div className="flex-grow-1 p-4">
        {children}
      </div>

    </div>
  )
}