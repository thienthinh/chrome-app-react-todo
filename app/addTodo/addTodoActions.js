import {
	ADD_TODO
} from '../common/constants'

let nextTodoId = 0

export function addTodo(text) {
	return {
		type: ADD_TODO,
		id: nextTodoId++,
		text
	}
}
