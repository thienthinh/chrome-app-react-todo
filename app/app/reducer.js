import { combineReducers } from 'redux'
import todos from '../visibleTodoList/todosReducer'
import visibilityFilter from '../filterLink/filterReducer'

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp
