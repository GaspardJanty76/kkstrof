import React, { useState } from 'react';

const EditMarks = ({ student, onSave }) => {
  const [marks, setMarks] = useState(student.marks);

  const handleChange = (subject, value) => {
    setMarks({ ...marks, [subject]: value });
  };

  const handleSubmit = () => {
    onSave(marks);
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold mb-2">{student.name}</h2>
      <input
        type="number"
        value={marks['note1']}
        onChange={(e) => handleChange('note1', parseInt(e.target.value))}
        className="p-2 rounded-md border border-gray-300 mr-2"
      />
      <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded-md">
        Enregistrer
      </button>
    </div>
  );
};

export default EditMarks;
