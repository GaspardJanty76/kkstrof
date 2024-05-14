// AddStudent.js
import React, { useState } from 'react';

const AddStudent = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState({});

  const handleChange = (subject, value) => {
    setMarks({ ...marks, [subject]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, marks };
    onAdd(student);
    setName('');
    setMarks({});
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        placeholder="Nom de l'élève"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded-md border border-gray-300 mr-2"
      />
      <input
        type="number"
        placeholder="Note 1"
        value={marks['note1'] || ''}
        onChange={(e) => handleChange('note1', parseInt(e.target.value))}
        className="p-2 rounded-md border border-gray-300 mr-2"
      />
      {/* Ajoutez les inputs pour les autres matières ici */}
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
        Ajouter Élève
      </button>
    </form>
  );
};

export default AddStudent;
