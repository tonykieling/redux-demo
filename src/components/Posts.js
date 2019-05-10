import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../dataStore/actions/postActions.js'

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>id: {post.id}</h3>
        <h3>name: {post.name}</h3>
      </div>
    ))
    return (
      <div>
        <h1>Posts component</h1>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);