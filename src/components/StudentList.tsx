import React, { useEffect, useState } from "react";
import { getAllStudents, Student } from "../services/studentService";

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const students = await getAllStudents();
        setStudents(students);
        console.log(students);
      } catch (error) {
        console.error("Failed to fetch students", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.student_name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <p>Check the console for the list of students.</p>
    </div>
  );
};

export default StudentList;
