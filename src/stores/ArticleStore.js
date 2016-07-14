import { DELETE_ARTICLE } from '../constants'
import BasicStore from './BasicStore'

class ArticleStore extends BasicStore {
	constructor (...args) {
		super(...args)

		this._registerActionSubscription((action) => {
			const { type, payload } = action

			switch (type) {
				case DELETE_ARTICLE:
					this._delete(payload.id)
					this.emitChange()
				break
			}
		})
	}
}

export default ArticleStore