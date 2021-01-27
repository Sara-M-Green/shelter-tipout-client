import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import CalculatorForm from './CalculatorForm/CalculatorForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />
        <Link to={"/calculator"}>
          <button>Start Tip Out</button>
        </Link>
  
        <Route 
          path="/calculator" component={CalculatorForm} 
        />
        <Route 
          exact 
          path="/" 
        />
      </main>
    )
  }
  
}

export default App;
