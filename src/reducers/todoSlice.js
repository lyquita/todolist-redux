import store from "../stores/index"

const initialState = { 
    todos: [
        // { id: 0, text: 'Learn React', completed: true },
        // { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        // { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ]
}



function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }


export default function todoReducer(state=initialState,action) {
console.log('reducer', action.type, action);
    switch(action.type){
        case 'todos/todoAdded':{
            const newState = {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false
                    }
                ]
            };
            console.log({newState});
            return newState;
        }
        case 'todos/todoToggled':{
            return {
                ...state,
                todos: state.todos.map(todo=> {
                    if(todo.id!==action.payload){
                        return todo
                    }
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                })
            }
        }
        case 'todos/todoDeleted':{
            console.log('old', state);
            const oldArray = state.todos;
            const newArray = oldArray.filter((todo) => todo.id !== action.payload)
            //console.log('new', newState)
            // the shape of the new state is wrong, it is missing the todos property
         
            // filter makes a copy of the source array

            // must learn:
            //const arr2 = [...arr1];  // makes a copy of arr1

            //const arr3 = [arr1];
            //const arr4 = arr1.filter(()=> true);

            const newState = {
                ...state,
                todos: newArray,
            };
            return newState;
        }
        default:
            return state
}
}