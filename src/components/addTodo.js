import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

export default function AddTodo() {
    const[text,setText] = useState('')
    const dispatch = useDispatch()
    const handleChange = e => setText(e.target.value)
    return (
        <form>
        <div>
            <input 
            type="text"
            placeholder="pls type your task"
            value={text}
            onChange={handleChange}
            />
            <button onClick={e => { 
                e.preventDefault();
                dispatch({type:'todos/todoAdded',payload:text})
                setText('');
            }}>Add</button>
        </div></form>
    )
}
