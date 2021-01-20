import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import CalculatorForm from './CalculatorForm/CalculatorForm'
import './App.css'

class App extends Component {
  startTipOutClick = () => {
    alert("CLICK!!")
  }

  render() {
    return (
      <main className="App">
        <Navbar />
        <button onClick={this.startTipOutClick}>Start Tip Out</button>
        <button>Payroll Tips</button>
      </main>
    )
  }
  
}

export default App;
