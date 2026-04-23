import { useSelector } from 'react-redux'

export default function Dashboard() {
  const { students } = useSelector(s => s)

  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>

      <div className="card shadow p-4">
        <h5>Total Students</h5>
        <h1>{students.length}</h1>
      </div>
    </div>
  )
}