import { connect } from 'react-redux'
import { toggleTodo } from './visibleTodoActions'
import TodoList from './TodoList'

import { getVisibleTodos } from './visibleTodoSelector'

// const getVisibleTodos = (todos, filter) => {
// 	switch (filter) {
// 		case 'SHOW_ALL':
// 			return todos
// 		case 'SHOW_COMPLETED':
// 			return todos.filter(t => t.completed)
// 		case 'SHOW_ACTIVE':
// 			return todos.filter(t => !t.completed)
// 	}
// }

const mapStateToProps = (state) => {
	return {
		// todos: getVisibleTodos(state.todos, state.visibilityFilter)
		
		// Switch to use memoized selector to enhance performance
		// because it only recalculates todos when the value of state.todos or state.visibilityFilter changes
		// but not when changes occur in other (unrelated) parts of the state tree.
		todos: getVisibleTodos(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList
