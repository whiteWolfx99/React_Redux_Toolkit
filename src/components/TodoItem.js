import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const [edit, hasedit] = useState(false);
  const [titles, setTitles] = useState(title);
  let dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleEditClick = () => {
    if (titles) {
      dispatch(editTodo({ id: id, title: titles }));
    }
    hasedit(!edit);
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <div className="inputs">
            {id}
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCompleteClick}
            />
            <div>
              {edit ? (
                <input
                  onChange={(e) => setTitles(e.target.value)}
                  type="text"
                  value={titles}
                />
              ) : (
                title
              )}
            </div>
          </div>
        </span>
        <div className="button">
          {" "}
          <button onClick={handleEditClick} className="btn btn-warning">
            {edit ? "Save" : "Edit"}
          </button>
          <button onClick={handleDeleteClick} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
