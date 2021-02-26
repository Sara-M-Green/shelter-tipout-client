import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import CalculatorForm from '../CalculatorForm/CalculatorForm'

class TipOutCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

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