import React from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../stores/index";
import Todo from "./todo";

export function TodoList() {
  const storeTodos = useSelector((state) => state.todos);

  const pendingTodos = storeTodos.filter((item) => !item.completed);

  // console.log(storeTodos)
  //const StoreTodos = store.getState().todos.todos
  return (
    <ol style={{ listStyle: "none", textAlign: "left" }}>
      {pendingTodos.map((item, index) => (
        <Todo item={item} key={index}>
          {item.text}
        </Todo>
      ))}
    </ol>
  );
}

export function CompletedList() {
  const storeTodos = useSelector((state) => state.todos);
  const completedTodos = storeTodos.filter((todo) => todo.completed);
  // const item = props.children;
  return (
    <ol style={{ listStyle: "none", textAlign: "left", maxWidth: "80%" }}>
      {completedTodos.map((item, index) => {
        return (
          <Todo item={item} key={index}>
            {item.text}
          </Todo>
        );
      })}
    </ol>
  );
}
