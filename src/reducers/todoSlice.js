import store from "../stores/index";

// object literal: {}
// array literal: []

const initialState = [
  {
    id: 0,
    text: "Learn about reducers",
    completed: false,
    edit: false,
  },
  {
    id: 1,
    text: "Learn about hook",
    completed: false,
    edit: false,
  },
  {
    id: 2,
    text: "Learn about Nothing",
    completed: false,
    edit: false,
  },
];

/*
function
method (function property of an object)
parameter (a parameter is a variable)
variable
assignment
reduce is a method of an array object.
reduce is not a method of an empty object: {}

*/
function nextTodoId(todos) {
  const arr = todos;

  const maxId = arr.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todoReducer(state = initialState, action) {
  console.log("reducer", action.type, action);

  switch (action.type) {
    case "todos/todoAdded": {
      const newState = [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
          edit: false,
        },
      ];

      return newState;
    }
    case "todos/todoToggled": {
      const oldState = state;
      const newArray = oldState.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
      const newState = newArray;
      return newState;
      // return {
      //   ...state,
      //   todos: state.todos.map((todo) => {
      //     if (todo.id !== action.payload) {
      //       return todo;
      //     }
      //     return {
      //       ...todo,
      //       completed: !todo.completed,
      //     };
      //   }),
      // };
    }
    case "todos/todoDeleted": {
      // console.log('old', state);
      //const oldArray = state;
      //const newArray = oldArray.filter((todo) => todo.id !== action.payload);

      const oldArray = state;
      const newArray = oldArray.filter((todo) => todo.id !== action.payload);
      const newState = newArray;
      return newState;

      //console.log('new', newState)
      // the shape of the new state is wrong, it is missing the todos property

      // filter makes a copy of the source array

      // must learn:
      //const arr2 = [...arr1];  // makes a copy of arr1

      //const arr3 = [arr1];
      //const arr4 = arr1.filter(()=> true);
      //   const newState = [
      //     ...state,
      //     {
      //         newArray
      //     }

      //   ];

      //   return newState;
    }

    case "todos/todoEdit": {
      const oldState = state;
      const newArray = oldState.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return { ...todo, edit: !todo.edit };
      });
      const newState = newArray;
      return newState;
    }

    case "todos/todoSubmit": {
      const oldState = state;
      const newArray = oldState.map((todo)=>{
        if(todo.id !== action.payload.id){return todo;}
        return{ ...todo, text:action.payload.text}
      })
      const newState = newArray;
      return newState;
    
    }
    default:
      return state;
  }
}
