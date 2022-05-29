import React from "react";
import './App.css'

const Converter = (props) => {

const {onChangeAmount, amount} = props

return ( 
<div className="container">
<input type='number' 
className='input' 
value={amount} 
onChange={onChangeAmount}
placeholder='input your temperature'/>
</div>
     );
}
 
export default Converter;