import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartProvider } from './Contexts/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <h1> Hello World</h1>
    </CartProvider>
  )
}

export default App
