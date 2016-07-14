import React, { Component, PropTypes } from 'react';
import { articleStore } from '../stores';
import ArticleList from './ArticleList';

class Container extends Component {
    static propTypes = {

    };

    constructor() {
    	super();
    	this.state = {
    		articles: articleStore.getAll()
    	}
    }

    render() {
        return <ArticleList articles = { this.state.articles } />
    }
}

export default Container;
