import Chai from "./chai"

function App() {

  const username = 'kushal';

  return (
    // you can assess only one tagin return ( you can declare one or more tag in the one tag )
    <div> 
      <Chai/>
      <h1>React ..{username}</h1>
      <p>Test</p>
    </div>
  )
}

export default App
