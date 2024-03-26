import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlicer";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const [inputValue, setInputValue] = useState("");

  console.log(todos);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
      })
    );
    setInputValue("");
  };
  return (
    <div className=" container mx-auto mt-8">
      <h1 className="mb-4 text-2xl font-semibold">To-Do List</h1>
      <form className=" mb-4 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new todo"
          className="w-full rounded-l border border-gray-300 py-2 px-4 focus:border-blue-500"
        />
        <button
          className=" rounded-r bg-blue-500 px-4 py-2 hover:bg-blue-600"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul className=" space-y-2">
        {todos.map((todo) => (
          <li
            className=" flex items-center rounded-md bg-gray-100 p-3"
            key={todo.id}
          >
            <input type="checkbox" id="todo1" className="mr-2" />
            <label htmlFor="todo1" className=" flex-grow cursor-pointer">
              {todo.text}
            </label>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className=" rounded bg-red-500 px-2 py-1  text-white hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
