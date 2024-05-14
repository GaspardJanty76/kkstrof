// StudentList.js
import React from 'react';

const StudentList = ({ students, onDelete, onEdit }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Nom</th>
          <th className="px-4 py-2">Note 1</th>
          {/* Ajoutez les en-têtes pour les autres matières ici */}
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{student.name}</td>
            <td className="border px-4 py-2">{student.marks['note1']}</td>
            {/* Affichez les notes pour les autres matières ici */}
            <td className="border px-4 py-2">
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
              >
                Supprimer
              </button>
              <button
                onClick={() => onEdit(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md"
              >
                Modifier
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
