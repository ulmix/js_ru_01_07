import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
	state = {
	    openedId: null
	}

	toggle = id => ev => {
		var newId = (this.state.openedId == id) ? null : id;
	    if (ev) ev.preventDefault()

	    this.setState({
	        openedId: newId
	    })
	}

	render() {
		return <Component {...this.props} openedId = {this.state.openedId} toggle = {this.toggle}/>
	}
}