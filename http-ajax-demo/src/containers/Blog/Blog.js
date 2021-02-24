import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import AsyncComponent from '../../hoc/AsyncComponent';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

// const Posts = React.lazy(() => import('./Posts/Posts'));
const asyncNewPost = AsyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
        error: false,
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                activeClassName="my-active" // use css class
                                activeStyle={{ // alternative inline styling
                                    color:'#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={
                                {  
                                    pathname: '/new-post', // absolute: '/new-post', relative: this.props.match.url + '/new-post'
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }
                                }>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*
                <Route 
                    path="/" 
                    render={() => <h1>Home 2</h1>} //for info messages 
                /> */}
                <Switch> {/* route one at a time */}
                    {/* {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null} */}
                    {this.state.auth ? <Route path="/new-post" component={asyncNewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Page Not Found!</h1>}/> {/*catch 404/catch unknown routes*/}
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;