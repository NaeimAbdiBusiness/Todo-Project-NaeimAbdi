import React from "react";
import NavBar from "./components/NavBar";
import TodoTable from "./components/TodoTable";

function App() {
  document.title = "DO-IT";
  return (
    <div className="pt-1 w-screen min-h-screen bg-gray-300 mt-0 ">
      <NavBar />
      <div className="m-4 shadow-2xl rounded-md ">
        <TodoTable />
      </div>
    </div>
  );
}

export default App;
