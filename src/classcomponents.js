import React, { Component } from "react";
import "./box.css";
export class Classcomponents extends Component {
    constructor(props){
        super(props);
        this.state ={
            stockCount : this.props.stock
        }
        this.decStock=()=>{
            this.setState({
                stockCount : this.state.stockCount-1
            })
        }
    }
  render() {
    return (
      <div className="box">
        <h1>{this.props.title}</h1>
        <p>Price {this.props.price}$</p>
        <p>In Stock:{this.state.stockCount}</p>
        <button onClick={this.decStock}>Buy</button>
      </div>
    );
  }
}
export default Classcomponents;
