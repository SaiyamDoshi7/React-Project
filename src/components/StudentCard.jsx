import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../redux/studentActions';

const classBadge = {
  '10th Grade': 'bg-primary',
  '11th Grade': 'bg-success',
  '12th Grade': 'bg-warning text-dark',
};

const classAvatar = {
  '10th Grade': 'bg-primary bg-opacity-10 text-primary',
  '11th Grade': 'bg-success bg-opacity-10 text-success',
  '12th Grade': 'bg-warning bg-opacity-10 text-warning',
};

const getInitials = (name) =>
  name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

const StudentCard = ({ student }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Delete ${student.name}?`)) {
      dispatch(deleteStudent(student.id));
    }
  };

  return (
    <div
      className="card h-100 student-card shadow-sm"
      onClick={() => navigate(`/student/${student.id}`)}
    >
      <div className="card-body p-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className={`avatar-circle ${classAvatar[student.class] || 'bg-secondary bg-opacity-10 text-secondary'}`}>
            {getInitials(student.name)}
          </div>
          <div className="overflow-hidden">
            <h6 className="mb-0 fw-semibold text-truncate">{student.name}</h6>
            <small className="text-muted text-truncate d-block">{student.email}</small>
          </div>
        </div>

        {/* Badges */}
        <div className="d-flex gap-2 flex-wrap mb-2">
          <span className="badge bg-secondary bg-opacity-10 text-secondary fw-normal">
             {student.rollNumber}
          </span>
          <span className={`badge ${classBadge[student.class] || 'bg-secondary'} fw-normal`}>
            {student.class}
          </span>
        </div>

        <small className="text-muted">📱 {student.phone}</small>
      </div>

      <div className="card-footer bg-transparent border-top d-flex gap-2 justify-content-end py-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={(e) => { e.stopPropagation(); navigate(`/edit-student/${student.id}`); }}
        >

        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={handleDelete}
        >

        </button>
      </div>
    </div>
  );
};

export default StudentCard;