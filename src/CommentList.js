import React, { Component }  from 'react'
import Comment from './Comment'
import toggleOpen from './decorators/toggleOpen'

class CommentList extends Component {
    render() {
        const { comments, isOpen, toggleOpen } = this.props,
            items = comments.map((el) => <li key = {el.id}><Comment comment = {el} /></li>),
            linkText = isOpen ? 'close comments' : 'open comments',
            body = isOpen ? <ul>{ items }</ul> : null;

        return (
            <div>
                <p><a href="#" onClick = { toggleOpen }>{ linkText }</a></p>
                { body }
            </div>
        );
    }
}

export default toggleOpen(CommentList)