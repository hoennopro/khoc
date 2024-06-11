import axios from "axios";

const API_URL = "http://localhost:3000/students";

export interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export const getAllStudents = async (): Promise<Student[]> => {
  try {
    const response = await axios.get<Student[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching students", error);
    throw error;
  }
};

export const getStudentById = async (id: number): Promise<Student | null> => {
  try {
    const response = await axios.get<Student>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Không tìm thấy bản ghi");
      return null;
    } else {
      console.error("Error fetching student", error);
      throw error;
    }
  }
};

export const removeById = async (id: number): Promise<void> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Không tìm thấy bản ghi để xóa");
    } else {
      console.error("Error deleting student", error);
      throw error;
    }
  }
};

export const createStudent = async (
  student: Omit<Student, "id">
): Promise<void> => {
  try {
    const response = await axios.post(API_URL, student);
    console.log(response.data);
  } catch (error) {
    console.error("Error creating student", error);
    throw error;
  }
};

export const updateStudentById = async (
  id: number,
  student: Partial<Student>
): Promise<void> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, student);
    console.log(response.data);
  } catch (error) {
    console.error("Error updating student", error);
    throw error;
  }
};
