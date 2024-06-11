import React from "react";
import { removeById } from "../services/studentService";

interface DeleteStudentProps {
  id: number;
}

const DeleteStudent: React.FC<DeleteStudentProps> = ({ id }) => {
  const handleDelete = async () => {
    try {
      await removeById(id);
    } catch (error) {
      console.error("Failed to delete student", error);
    }
  };

  return (
    <div>
      <h1>Delete Student</h1>
      <button onClick={handleDelete}>Delete Student with ID {id}</button>
      <p>Check the console for the result.</p>
    </div>
  );
};

export default DeleteStudent;
