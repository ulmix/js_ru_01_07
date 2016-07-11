import React, { Component }  from 'react'
import Article from './Article'
import toggleSingle from './decorators/toggleSingle'

class ArticleList extends Component {
    render() {
        const { articles, openedId, toggle } = this.props

        const listItems = articles.map((el, index) => <li key = {el.id}>
            <Article article = {el}
                isOpen = {el.id == openedId}
                toggle = {toggle(el.id)}
                isLast = {index == articles.length-1} />
        </li>)
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default toggleSingle(ArticleList)