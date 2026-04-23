import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents, deleteStudent, updateStudent } from '../redux/studentActions'

export default function StudentList() {
  const dispatch = useDispatch()
  const { students } = useSelector(s => s)

  const [search, setSearch] = useState('')
  const [editData, setEditData] = useState(null)

  useEffect(() => {
    dispatch(fetchStudents())
  }, [])

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  const saveEdit = () => {
    dispatch(updateStudent(editData.id, editData))
    setEditData(null)
  }

  return (
    <div>
      <h2>Students</h2>

      <input className="form-control my-3"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.class}</td>
              <td>
                <button className="btn btn-danger btn-sm me-2"
                  onClick={() => dispatch(deleteStudent(s.id))}>
                  Delete
                </button>

                <button className="btn btn-warning btn-sm"
                  onClick={() => setEditData(s)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editData && (
        <div className="card p-3 mt-3">
          <h5>Edit Student</h5>

          <input className="form-control mb-2"
            value={editData.name}
            onChange={(e)=>setEditData({...editData,name:e.target.value})}
          />

          <input className="form-control mb-2"
            value={editData.roll}
            onChange={(e)=>setEditData({...editData,roll:e.target.value})}
          />

          <input className="form-control mb-2"
            value={editData.class}
            onChange={(e)=>setEditData({...editData,class:e.target.value})}
          />

          <button className="btn btn-success" onClick={saveEdit}>
            Save
          </button>
        </div>
      )}
    </div>
  )
}