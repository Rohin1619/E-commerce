import { useState } from 'react'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import SignUp from './Components/SignUp'
import TableLists from './Components/TableLists'
import Cart from './Components/Cart'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <HomePage />

        </>
    )
}

export default App
