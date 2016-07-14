import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    };

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const { isOpen, toggle, article: { title, text, comments }, isLast } = this.props
        const body = isOpen ? <section>{ text }</section> : null

        const hr = isLast ? null : <hr />
        const commentList = (comments && comments.length) ? <CommentList comments = {comments} /> : null

        return (
            <div>
                <h2 onClick = {toggle}>{ title }</h2>
                { body }
                <a href="#" onClick={this.handleDelete}>Delete</a> 
                { commentList }
                { hr }
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault();
        console.log('trying to delete Article', this.props.article.id);
    }
}

export default Article