import { combineReducers } from 'redux'

import todoReducer from './todoSlice'
import filterReducer from './filterSlice'

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})

export default rootReducer