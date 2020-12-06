import React from "react";
import { useDispatch } from "react-redux";

export default function Todo(props) {
  const dispatch = useDispatch();
  const item = props.children;
  // console.log(props.item)
  return (
    <div>
      <li style={props.item.completed ? {textDecoration:"line-through"}:{textDecoration:"none"}}>
        <input type="checkbox" 
        checked={props.item.completed ? 'checked' : ''}
        
          onChange={() => {
            dispatch({type:"todos/todoToggled",payload:props.item.id})
          }}
        />
        {item}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "todos/todoDeleted", payload: props.item.id });
          }}
        >
          delete
        </button>
      </li>
    </div>
  );
}
