import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import store from '../stores/index'
import Todo from './todo'

export function TodoList() {
    const storeTodos = useSelector(state => state.todos.todos);
    const pendingTodos = storeTodos.filter((todo)=> !todo.completed)
    // console.log(storeTodos)
    //const StoreTodos = store.getState().todos.todos
    return (
        <ul>
          {
              pendingTodos.map((item,index)=>(
                  <Todo item={item} key={index}>{item.text}</Todo>
              ))
          }
        </ul>
    )
}

export function CompletedList(){
    const storeTodos = useSelector(state => state.todos.todos);
    const completedTodos = storeTodos.filter((todo) => todo.completed)
    // const item = props.children;
    return(
        <ul>
          {
             completedTodos.map((item,index)=>{
             return <Todo item={item} key={index}>{item.text}</Todo>
             })
          }
        </ul>
    )
}
