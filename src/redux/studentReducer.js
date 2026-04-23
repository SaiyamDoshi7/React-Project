const initialState = {
  students: JSON.parse(localStorage.getItem('students')) || []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_STUDENTS':
      localStorage.setItem('students', JSON.stringify(action.payload))
      return { ...state, students: action.payload }

    default:
      return state
  }
}