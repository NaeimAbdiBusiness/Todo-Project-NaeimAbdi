import React, { useState, useEffect, useRef } from "react";
import { ITodo } from "../entities/ITodo";
const TableRow = ({
  todo,
  handleDelete,
  updateTodos,
}: {
  todo: ITodo;
  handleDelete: (todo: ITodo) => void;
  updateTodos: (todo: ITodo) => void;
}) => {
  const [iseditable, setIseditable] = useState(todo.iseditable);
  const [category, setCategory] = useState(todo.category);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);
  const [newRow, setNewrow] = useState(todo.newRow);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      const todoOBJ: ITodo = {
        id: todo.id,
        category: category,
        title: title,
        description: description,
        status: status,
        iseditable: iseditable,
        newRow: newRow,
      };
      updateTodos(todoOBJ);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const saveTodo = () => {
    if (iseditable) {
      setIseditable(false);
    } else {
      setIseditable(true);
    }

    if (newRow) {
      const todoOBJ: ITodo = {
        id: todo.id,
        category: category,
        title: title,
        description: description,
        status: status,
        iseditable: iseditable ? false : true,
        newRow: false,
      };
      updateTodos(todoOBJ);
    } else {
      setNewrow(!newRow);
      const todoOBJ: ITodo = {
        id: todo.id,
        category: category,
        title: title,
        description: description,
        status: status,
        iseditable: iseditable ? false : true,
        newRow: newRow,
      };
      updateTodos(todoOBJ);
    }
  };
  const editTodo = () => {
    setIseditable(!iseditable);
  };
  return (
    <tr className="">
      <td className="px-5 text-center   whitespace-no-wrap border-b  border-gray-500">
        <div className="text-sm leading-5 text-gray-800 ">
          <input
            hidden={iseditable}
            checked={status}
            type="checkbox"
            onChange={() => setStatus((prev) => !prev)}
          ></input>
        </div>
      </td>
      <td
        className={`${
          status ? " opacity-50" : ""
        } px-2 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-left leading-5`}
      >
        <input
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={`p-3 text-sm leading-5 text-blue-900 focus:outline-none ${
            iseditable
              ? "bg-gray-300 rounded-lg  opacity-75 text-center"
              : "focus:outline-none  "
          } `}
          readOnly={!iseditable}
        ></input>
      </td>
      <td
        className={`${
          status ? " opacity-50" : ""
        }px-2 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-left leading-5`}
      >
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={`p-3 text-sm leading-5 text-blue-900 focus:outline-none ${
            iseditable
              ? "bg-gray-300 rounded-lg  opacity-75 text-center"
              : "focus:outline-none  "
          }`}
          readOnly={!iseditable}
        ></input>
      </td>
      <td
        className={`${
          status ? " opacity-50" : ""
        }px-2 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-left leading-5`}
      >
        <input
          type="textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className={`w-full p-3  text-sm leading-6 text-blue-900 focus:outline-none ${
            iseditable
              ? "bg-gray-300 rounded-lg  opacity-75 text-center"
              : "focus:outline-none  "
          }`}
          readOnly={!iseditable}
        ></input>
      </td>
      <td
        className={`${
          status ? " opacity-50" : ""
        }px-2 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5`}
      >
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className={`${
              status
                ? "bg-green-600 absolute inset-0  opacity-50 rounded-full"
                : "bg-blue-200 absolute inset-0  opacity-50 rounded-full"
            }`}
          ></span>
          <span className="relative text-xs">{status ? "Done" : "Active"}</span>
        </span>
      </td>
      <td
        className={`${
          status ? " opacity-50" : ""
        }text-center py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5`}
      >
        {" "}
        {!iseditable ? (
          <button
            hidden={status}
            onClick={() => editTodo()}
            className="px-5 py-2  hover:text-white focus:outline-none border-teal-600 border text-blue-500 rounded transition duration-300 hover:bg-blue-700"
          >
            Edit
          </button>
        ) : (
          <button
            disabled={status}
            hidden={status}
            onClick={() => saveTodo()}
            className={
              "px-5 py-2  hover:text-white focus:outline-none border-green-500 border text-white rounded transition duration-300 hover:bg-green-700 bg-green-600"
            }
          >
            Save
          </button>
        )}
      </td>
      <td
        className={
          "  whitespace-no-wrap text-left border-b border-gray-500 text-sm leading-5"
        }
      >
        <button
          onClick={() => handleDelete(todo)}
          className="px-5 py-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
