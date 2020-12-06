import {createStore,applyMiddleware} from "redux";
import rootReducer from "../reducers/index"

//preload state 
let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString){
    preloadedState = {
        todos: JSON.parse(persistedTodosString)
    }
}

//create store

const store = createStore(rootReducer,preloadedState);

export default store;