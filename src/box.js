import React,{useState} from 'react'
import './box.css'
import PropTypes from 'prop-types' 
function Box({title,price,stock}){ //props initialiazatiom
    let [count , setCount] = useState(stock);
    return (
        <>
        <div className="box" draggable='true'>
            <h1>{title}</h1>
            <p>Price ${price}</p>
            <p>
                In Stock: {count}
            </p> 
             <button onClick={()=> setCount(--count)}>
                Add to Cart
            </button>
        </div>
        </>
)}
Box.propTypes={ //default props
    title: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number
} // ".isRequired" required props
Box.defaultProps ={
    title:'Product',
    price:0,
    stock:0
}

export default Box;