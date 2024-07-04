import { useState } from 'react'
import './App.css'

function App() {

  let[counter, setCounter] = useState(7) // Hooks

  // let counter = 7;

  const addvalue = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log("value added", counter);
  }

  const removevalue =() => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React with VK</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br /><br />
      <button onClick={removevalue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
