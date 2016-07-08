import React, { Component }  from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    };

    render() {
        const { comments } = this.props,
            items = comments.map((el) => <li key = {el.id}><Comment comment = {el} /></li>),
            linkText = this.state.isOpen ? 'close comments' : 'open comments',
            body = this.state.isOpen ? <ul>{ items }</ul> : null;

        return (
            <div>
                <p><a href="#" onClick = { this.toggleOpen }>{ linkText }</a></p>
                { body }
            </div>
        );
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default CommentList