import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todos = useSelector((state) => state.todos);
  return <h4 className="mt-3">Num of Items: {todos.length}</h4>;
};

export default TotalCompleteItems;
