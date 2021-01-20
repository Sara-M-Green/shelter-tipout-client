import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import CalculatorForm from '../CalculatorForm/CalculatorForm'

class TipOutCalculator extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <CalculatorForm />
            </div>
        )
    }
}

export default TipOutCalculator