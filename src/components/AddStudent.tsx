import React, { useState } from "react";
import { createStudent } from "../services/studentService";

const AddStudent: React.FC = () => {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(false);
  const [createdAt, setCreatedAt] = useState("");

  const handleAddStudent = async () => {
    try {
      const student = {
        student_name: studentName,
        email,
        address,
        phone,
        status,
        created_at: createdAt,
      };

      await createStudent(student);
    } catch (error) {
      console.error("Failed to create student", error);
    }
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddStudent();
        }}
      >
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </div>
        <div>
          <label>Created At:</label>
          <input
            type="text"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
      <p>Check the console for the result.</p>
    </div>
  );
};

export default AddStudent;
