import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Basket } from './features/basket/Basket'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <h1>Корзина</h1>
      <Basket/>

      </div>
    </>
  )
}

export default App
