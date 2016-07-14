import React, { PropTypes } from 'react'

function Comment(props) {
    const { comment: { user, text } } = props;
    return (
        <div>
            <h4>{ user }</h4>
            <p>{ text }</p>
        </div>
    );
}

Comment.propTypes = {
	comment: PropTypes.object.isRequired
}

export default Comment