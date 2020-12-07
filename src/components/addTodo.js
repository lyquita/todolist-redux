import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddTodo() {
    const[text,setText] = useState('')
    const dispatch = useDispatch()
    const handleChange = e => setText(e.target.value)
    return (
        <form>
        <div>
            <TextField id="standard-basic" 
            type="text"
            placeholder="pls type your task"
            value={text}
            onChange={handleChange}
            />
            <Button 
            color="primary"
             onClick={e => { 
                e.preventDefault();
                dispatch({type:'todos/todoAdded',payload:text})
                setText('');
            }}>Add</Button>
        </div></form>
    )
}
