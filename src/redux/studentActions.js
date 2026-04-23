export const fetchStudents = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem('students')) || []
  dispatch({ type: 'SET_STUDENTS', payload: data })
}

export const addStudent = (student) => (dispatch) => {
  let data = JSON.parse(localStorage.getItem('students')) || []

  const newStudent = {
    ...student,
    id: Date.now()
  }

  data.push(newStudent)
  localStorage.setItem('students', JSON.stringify(data))

  alert(' Student Added Successfully')
  dispatch(fetchStudents())
}

export const deleteStudent = (id) => (dispatch) => {
  let data = JSON.parse(localStorage.getItem('students')) || []

  const updated = data.filter(s => s.id !== id)
  localStorage.setItem('students', JSON.stringify(updated))

  alert(' Student Deleted')
  dispatch(fetchStudents())
}

export const updateStudent = (id, updatedData) => (dispatch) => {
  let data = JSON.parse(localStorage.getItem('students')) || []

  const updated = data.map(s => s.id === id ? updatedData : s)
  localStorage.setItem('students', JSON.stringify(updated))

  alert(' Student Updated')
  dispatch(fetchStudents())
}