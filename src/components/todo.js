import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditeIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/TextField";

export default function Todo(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const item = props.children;
  const handleChange = (e) => setText(e.target.value);
  // console.log(props.item)
  return (
    <div>
      {props.item.edit ? (
        <li
          style={
            props.item.completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          <Textfield
            placeholder={item}
            value={text}
            onChange={handleChange}
          ></Textfield>
          <Button
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              // console.log('test',text)
              dispatch({ type: "todos/todoEdit", payload: props.item.id });
              dispatch({
                type: "todos/todoSubmit",
                payload: { text: text, id: props.item.id },
              });
              setText("");
            }}
          >
            Submit
          </Button>
        </li>
      ) : (
        <li
          style={
            props.item.completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          <Checkbox
            color="primary"
            checked={props.item.completed ? "checked" : ""}
            onChange={() => {
              dispatch({ type: "todos/todoToggled", payload: props.item.id });
            }}
          />
          {props.item.id + 1} .  {item}
          <IconButton
            aria-label="delete"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "todos/todoDeleted", payload: props.item.id });
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "todos/todoEdit", payload: props.item.id });
            }}
          >
            <EditeIcon />
          </IconButton>
        </li>
      )}
    </div>
  );
}
