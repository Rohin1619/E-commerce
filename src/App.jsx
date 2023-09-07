import { useState } from 'react'
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import SignUp from './Components/SignUp'
import TableLists from './Components/TableLists'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <SignUp />

        </>
    )
}

export default App
