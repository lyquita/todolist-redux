import {createStore,applyMiddleware} from "redux";
import rootReducer from "../reducers"

//preload state 
let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString){
    preloadedState =  JSON.parse(persistedTodosString);
}

/*
{
  key: value,
  key2: value2 
}
const result = f(...);

const obj = {
    key: result
};
*/

//create store

const store = createStore(rootReducer,preloadedState);

export default store;