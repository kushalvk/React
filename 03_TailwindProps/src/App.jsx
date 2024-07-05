
import './App.css'
import Card from './Components/Card'

function App() {
  // let myObj = {
  //   name: "kushal",
  //   age: 22
  // }

  // let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="kushalvk" /*someObj= {newArr}*/ btnText="push me"/>
      <Card userName="VK" /*btnText="Click me"*/ />
    </>
  )
}

export default App
