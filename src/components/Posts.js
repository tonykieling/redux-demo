import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: ""
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        data.forEach(element => {
          console.log("element: ", element)
          this.setState({
            id: element.id,
            name: element.name
          })
        });
        // this.setState({
        //   id: data.id,
        //   name: data.name
        // })
      })
      // .then(console.log("this.state: ", this.state))
  }

  componentDidMount() {
    console.log("DIDthis.state: ", this.state)
  }

  render() {
    return (
      <div>
        <h1>Posts component</h1>
        
      </div>
    )
  }
}

export default Posts;