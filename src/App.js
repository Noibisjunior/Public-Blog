import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App