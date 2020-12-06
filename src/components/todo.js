import React from "react";
import {useDispatch} from 'react-redux'

export default function Todo(props) {
    const dispatch = useDispatch()
  const item = props.children;
  return (
    <div>
      <li>
        <input type="checkbox" />
        {item}
        <button
        onClick={e=>{
            e.preventDefault();
            dispatch({type:'todos/todoDeleted',payload:props.item.id})
        }}
        >delete</button>
      </li>
    </div>
  );
}
