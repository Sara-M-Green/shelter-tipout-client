import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Homepage from './Homepage/Homepage'
import CalculatorForm from './CalculatorForm/CalculatorForm'
import './App.css'


class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />  
        <Route 
          path="/calculator" 
          component={CalculatorForm} 
        />
        <Route 
          exact 
          path="/" 
          component={Homepage}
        />
      </main>
    )
  }
  
}

export default App;
