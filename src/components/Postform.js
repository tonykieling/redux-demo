import React, { Component } from 'react'

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(e.target)
  }

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      name: this.state.name,
      email: this.state.email
    }
    
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

  }

  render() {
    return (
      <div>
        <h1>Postform is here</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
          </div>
          <br />
          <div>
            <label>Email: </label>
            <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
          </div>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default Postform;
