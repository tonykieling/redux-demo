import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({posts: data}))
  }

  // componentDidUpdate() {
  //   console.log("DIDthis.state: ", this.state)
  // }

  render() {
    const postItems = this.state.posts.map(post => (
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

export default Posts;