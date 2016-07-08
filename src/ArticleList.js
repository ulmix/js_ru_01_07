import React  from 'react'
import Article from './Article'

function ArticleList(props) {
    const { articles } = props

    const listItems = articles.map((el, index) => <li key = {el.id}><Article article = {el} isLast = {index == articles.length-1} /></li>)
    return (
        <div>
            <h1>Article list</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ArticleList