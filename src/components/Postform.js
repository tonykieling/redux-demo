import React, { Component } from 'react'

class Postform extends Component {
  render() {
    return (
      <div>
        <h1>Postform is here</h1>
        <form>
          <div>
            <label>Name: </label>
            <input type="text" />
          </div>
          <br />
          <div>
            <label>Email: </label>
            <input type="text" />
          </div>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default Postform;
