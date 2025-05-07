import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'    

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: "hitesh",
    age: 25
  }

  let newArr = [1,2,3,4,5,6,7,8,9]


  return (
    <>
     <h1 className='bg-blue-500 text-3xl font-bold rounded '> Tailwind test      </h1>
     <Card username={myObj.username} age={myObj.age} />

    </>
  )
}

export default App
