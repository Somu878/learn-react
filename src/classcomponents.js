import React, { Component } from 'react'
import './box.css'
export class Classcomponents extends Component {
  render() {
    return (
      <div className="box"><h1>
        {this.props.title}</h1></div>
    )
  }
}
export default (Classcomponents)