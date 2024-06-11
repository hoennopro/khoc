import React from "react";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import DeleteStudent from "./components/DeleteStudent";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";

const App: React.FC = () => {
  return (
    <div className="App">
      <StudentList />
      <StudentDetail id={1} />
      <DeleteStudent id={1} />
      <AddStudent />
      <UpdateStudent id={1} />
    </div>
  );
};

export default App;
