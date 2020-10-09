import React, { useState } from "react";
import { ITodo } from "../entities/ITodo";
import {
  getAllActiveTodos,
  getAllHeaders,
  getAllDoneTodos,
} from "../services/fakeTodos";
import _ from "lodash";
import TableRow from "./TodoTableRow";

const TestTable = () => {
  const [todos, setTodos] = useState(getAllActiveTodos);
  const [headers] = useState(getAllHeaders);
  const [doneTodos, setDoneTodos] = useState(getAllDoneTodos);

  const updateTodos = (todo: ITodo) => {
    let checkTodos = false;
    const todoIndex = todos.findIndex((item) => item.id === todo.id);
    const todoOBJ = todos.find((item) => item.id === todo.id);
    if (todoOBJ !== undefined && todoOBJ.id === todo.id) {
      todos[todoIndex] = todo;
      checkTodos = _.isEqual(todoOBJ, todo);
    }

    let checkDoneTodos = false;
    const donetodoIndex = doneTodos.findIndex((item) => item.id === todo.id);
    const donetodoOBJ = doneTodos.find((item) => item.id === todo.id);
    if (donetodoOBJ !== undefined && donetodoOBJ.id === todo.id) {
      doneTodos[donetodoIndex] = todo;
      checkDoneTodos = _.isEqual(donetodoOBJ, todo);
    }

    if (todo.status && !checkDoneTodos) {
      setTodos(todos.filter((item) => item.status === false));
      setDoneTodos(
        doneTodos.concat(todos.filter((item) => item.status === true))
      );
    } else if (!todo.status && !checkTodos) {
      setDoneTodos(doneTodos.filter((item) => item.status === true));
      setTodos(todos.concat(doneTodos.filter((item) => item.status === false)));
    }
  };
  const handleDelete = (item: ITodo) => {
    const del = todos.filter((todo) => item.id !== todo.id);
    const del2 = doneTodos.filter((dones) => item.id !== dones.id);
    setTodos(del);
    setDoneTodos(del2);
  };

  const handleNewRow = () => {
    const newtodo: ITodo = {
      id: Math.floor(Math.random() * 100000) + 10,
      category: "",
      title: "",
      description: "",
      status: false,
      iseditable: true,
      newRow: true,
    };

    setTodos([...todos, newtodo]);
  };
  return (
    <div className=" -my-2  overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 ">
      <div className="align-middle inline-block min-w-full  overflow-hidden  bg-white shadow-dashboard px-8 pt-3 rounded-md ">
        <table className="  min-w-full">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header.id}
                  className={`${
                    header.id === 11 ? "text-center" : ""
                  } select-none px-3 py-2 border-b-2 border-gray-300 text-left  leading-4 text-blue-500 tracking-wider`}
                >
                  {header.title}
                  {header.isSort === true
                    ? (header.sort === "asc" ? "+" : "") +
                      (header.sort === "desc" ? "-" : "")
                    : ""}
                </th>
              ))}

              <th className=" px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"></th>
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {todos.map((todo) => (
              <TableRow
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                updateTodos={updateTodos}
              />
            ))}
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap  text-blue-900  text-sm leading-5">
                <button
                  disabled={
                    todos.length === 0 ? false : todos[todos.length - 1].newRow
                  }
                  onClick={handleNewRow}
                  className=" px-5 py-2 border-gray-500 border text-gray-500 rounded transition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none"
                >
                  New ToDo
                </button>
              </td>
            </tr>
            <tr className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans mb-2 text-sm leading-5 text-blue-700">
              <td>Showing {todos.length} records</td>
            </tr>

            <tr>
              <th className=" px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"></th>
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestTable;
