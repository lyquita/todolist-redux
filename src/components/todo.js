import React, {useState} from "react";
import { useDispatch } from "react-redux";

export default function Todo(props) {
  const dispatch = useDispatch();
  const [text,setText] = useState('')
  const item = props.children;
  const handleChange = e => setText(e.target.value)
  // console.log(props.item)
  return (
    <div>
      {
        props.item.edit ?  <li
        style={
          props.item.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
       <input 
       type="text"
       placeholder={item}
       value={text}
       onChange = {handleChange}
       ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "todos/todoDeleted", payload: props.item.id });
          }}
        >
          delete
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            // console.log('test',text)
            dispatch({ type: "todos/todoEdit", payload: props.item.id });
            dispatch({ type: "todos/todoSubmit", payload: {text : text , id:props.item.id} });
            setText('');
          }}
        >
          Submit
        </button>
      </li>
       :
       <li
       style={
         props.item.completed
           ? { textDecoration: "line-through" }
           : { textDecoration: "none" }
       }
     >
       <input
         type="checkbox"
         checked={props.item.completed ? "checked" : ""}
         onChange={() => {
           dispatch({ type: "todos/todoToggled", payload: props.item.id });
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
       <button
         onClick={(e) => {
           e.preventDefault();
           dispatch({ type: "todos/todoEdit", payload: props.item.id });
         }}
       >
         edit
       </button>
     </li>
      }
     
    </div>
  );
}
