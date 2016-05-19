import {
	TOGGLE_TODO
} from '../common/constants'

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		id
	}
}
