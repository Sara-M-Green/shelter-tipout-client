import React, { Component } from 'react'
import TotalCcTips from '../TotalCcTips/TotalCcTips'
import BohTips from '../BohTips/BohTips'
import PrepTips from '../PrepTips/PrepTips'
import BusserTips from '../BusserTips/BusserTips'
import './CalculatorForm.css'

class CalculatorForm extends Component {
    render() {
        return (
            <div>
                <h1>Tip Out Calculator</h1>
                <form>
                    <TotalCcTips />
                    <BohTips />
                    <PrepTips />
                    <BusserTips />
                </form>
            </div>
        )
    }
}

export default CalculatorForm