import "./App.css";
import { TodoList, CompletedList } from "./components/todoList";
import AddTodo from "./components/addTodo";

import { Grid } from "@material-ui/core";
import { useStore } from "react-redux";

function App() {
  const store = useStore();

  // function handleLoadData() {
  //   let preloadedState;
  //   const persistedTodosString = localStorage.getItem('todos');
    
  //   if (persistedTodosString){
  //     preloadedState = JSON.parse(persistedTodosString);
    
  //   }
  //   console.log('loaded state', preloadedState);
  // }
  // function handleSaveData() {
  //   localStorage.setItem('todos', JSON.stringify(store.getState()));
  // }

  return (
    <div className="App">
      <Grid container direction="column" justify="center" alignItems="center">
        <h1>My Todo-List</h1>
        <AddTodo />
        <h3>Pending</h3>
        <TodoList />
        <h3>Done</h3>
        <CompletedList />
      </Grid>
    </div>
  );
}

export default App;
