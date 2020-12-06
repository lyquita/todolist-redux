import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo'

function App() {
  return (
    <div className="App">
      <h1>My Todo-List</h1>
      <AddTodo />
      <h3>Pending List</h3>
      <TodoList />
      <h3>Done</h3>
    </div>
  );
}

export default App;
