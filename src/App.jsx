import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import StudentList from './pages/StudentList'
import StudentForm from './pages/StudentForm'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/students" element={<PrivateRoute><StudentList /></PrivateRoute>} />
          <Route path="/add" element={<PrivateRoute><StudentForm /></PrivateRoute>} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  )
}