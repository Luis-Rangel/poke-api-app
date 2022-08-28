import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/Home'
import {Route, Routes} from 'react-router-dom'
import Pokedex from './Components/Pokedex'
import PokemonDetails from './Components/PokemonDetails'
import ProtectedRoutes from './Components/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
    <Routes>

    <Route path='/' element={<Home />} />

<Route element={<ProtectedRoutes />}>  
    <Route path='/pokedex' element={<Pokedex />} />
    <Route path='/pokedex/:id' element={<PokemonDetails />} />

</Route>

    </Routes>

    </div>
  )
}

export default App
