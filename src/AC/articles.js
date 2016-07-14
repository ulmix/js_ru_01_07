import AppDispatcher from '../dispatcher'

export function deleteArticle(id) {
	const action = {
		type: 'DELETE_ARTICLE',
		payload: {
			id: id
		}
	}

	AppDispatcher.dispatch(action)
}