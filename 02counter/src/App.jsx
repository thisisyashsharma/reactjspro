import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, functionForCounter] = useState(15)

  // let counter = 5
  

  const addValue = () => {
      if( counter < 20){
        functionForCounter(counter + Math.random());
      }
    }
  const removeValue = () => { 
    let last_val  = 0 ;
    if( counter > 1){
      functionForCounter(counter - 1);
    }else if( counter ){
      last_val = counter; 
      functionForCounter(counter - last_val);
    }
  }

 
  return (
    <>
      <div>  
        <h1>chai aur react</h1>
        <h2>Counter value: { counter } </h2>

        <button
        onClick = { addValue }>Add Value</button>
        <br /> <br />
        <button
        onClick = { removeValue }
        >Revmove value</button>
      </div>
    </>
  )
}

export default App
