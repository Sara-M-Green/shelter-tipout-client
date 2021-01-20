import React, { Component } from 'react'
import TotalCcTips from '../TotalCcTips/TotalCcTips'
import './CalculatorForm.css'

class CalculatorForm extends Component {
    render() {
        return (
            <div>
                <h1>Tip Out Calculator</h1>
                <form>
                    <TotalCcTips />
                </form>
            </div>
        )
    }
}

export default CalculatorForm