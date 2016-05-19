import {
	SET_VISIBILITY_FILTER
} from '../common/constants'

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}
