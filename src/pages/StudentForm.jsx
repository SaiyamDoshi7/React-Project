import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from '../redux/studentActions'
import { useNavigate } from 'react-router-dom'

export default function StudentForm() {
  const [data, setData] = useState({ name:'', roll:'', class:'' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()

    if (!data.name || !data.roll || !data.class) {
      alert('All fields required')
      return
    }

    dispatch(addStudent(data))
    navigate('/students')
  }

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={submit} className="card p-4 shadow">
        <input className="form-control mb-2" placeholder="Name"
          onChange={e=>setData({...data,name:e.target.value})} />

        <input className="form-control mb-2" placeholder="Roll"
          onChange={e=>setData({...data,roll:e.target.value})} />

        <input className="form-control mb-2" placeholder="Class"
          onChange={e=>setData({...data,class:e.target.value})} />

        <button className="btn btn-primary">Add Student</button>
      </form>
    </div>
  )
}