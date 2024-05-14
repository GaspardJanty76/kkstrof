import React, { useState } from 'react';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import EditMarks from './components/EditMarks';

const App = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleDeleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const handleEditMarks = (index, updatedMarks) => {
    const updatedStudents = [...students];
    updatedStudents[index].marks = updatedMarks;
    setStudents(updatedStudents);
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Gestion des élèves</h1>
      <AddStudent onAdd={handleAddStudent} />
      <StudentList students={students} onDelete={handleDeleteStudent} onEdit={handleEditMarks} />
    </div>
  );
};

export default App;
