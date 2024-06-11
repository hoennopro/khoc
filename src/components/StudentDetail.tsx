import React, { useEffect } from "react";
import { getStudentById, Student } from "../services/studentService";

interface StudentDetailProps {
  id: number;
}

const StudentDetail: React.FC<StudentDetailProps> = ({ id }) => {
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const student = await getStudentById(id);
        if (student) {
          console.log(student);
        } else {
          console.log("Không tìm thấy bản ghi");
        }
      } catch (error) {
        console.error("Failed to fetch student", error);
      }
    };

    fetchStudent();
  }, [id]);

  return (
    <div>
      <h1>Student Detail</h1>
      <p>Check the console for student details.</p>
    </div>
  );
};

export default StudentDetail;
