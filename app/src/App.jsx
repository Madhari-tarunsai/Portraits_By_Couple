import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div>
        <NavBar/>
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/services" element={<h2>Services Page</h2>} />
        <Route path="/merge-arts" element={<h2>Merge Arts Page</h2>} />
        <Route path="/photo-arts" element={<h2>Photo Arts Page</h2>} />
        <Route path="/threading-photos" element={<h2>Threading Photos Page</h2>} />
        <Route path="/customised-gifts" element={<h2>Customised Gifts Page</h2>} />
      </Routes>
    </div>
  )
}

export default App