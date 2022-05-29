
import './App.css';
import {useState} from 'react'
import './App.css';
import Converter from './converter';

function App() {
  
  const [amount, setAmount] = useState();
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  
  let toAmount, fromAmount
  if(amountInFromCurrency)
  {
    fromAmount = amount
    toAmount = (amount * 9/5) + 32;
  }
  else{
    toAmount = amount
    fromAmount = (amount - 32) * 5/9;
  }
  
  function handleFromAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
  
  function handleToAmountChange(e){
  setAmount(e.target.value)
  setAmountInFromCurrency(false)
  }

  return (


    <div className="App">
      <h1>Temperature Converter</h1>
      <h3>celsius</h3>
      <Converter 
      amount= {fromAmount}
      onChangeAmount = {handleFromAmountChange}
      />
    
      <h3>farenheit</h3>

      <Converter
      amount= {toAmount}
      onChangeAmount = {handleToAmountChange}
      />
    </div>
  );

   
}

export default App;
