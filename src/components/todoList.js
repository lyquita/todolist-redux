import React from 'react'
import {useSelector} from 'react-redux';
import store from '../stores/index'
import Todo from './todo'

export default function TodoList() {
    const storeTodos = useSelector(state => state.todos.todos);
    console.log(storeTodos)
    //const StoreTodos = store.getState().todos.todos
    return (
        <ul>
          {
              storeTodos.map((item,index)=>(
                  <Todo item={item} key={index}>{item.text}</Todo>
              ))
          }
        </ul>
    )
}
