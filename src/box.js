import React from 'react'
import './box.css'
import PropTypes from 'prop-types' 
function Box(props){ //propTypes
    return (
        <div className="box" draggable='true'>
            <h1>{props.title}</h1>
            <p>Price ${props.price}</p>
        </div>
    )
}
Box.propTypes={ //default props
    title: PropTypes.string,
    price: PropTypes.number.isRequired} //required props
Box.defaultProps ={
    title:'Product',
}

export default Box;