import './App.css';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo'

function App() {
  return (
    <div className="App">
      <h1>My Todo-List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
