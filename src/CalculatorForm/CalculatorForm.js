import React, { Component } from 'react'
import TotalCcTips from '../TotalCcTips/TotalCcTips'
import BohTips from '../BohTips/BohTips'
import PrepTips from '../PrepTips/PrepTips'
import BusserTips from '../BusserTips/BusserTips'
import BarbackTips from '../BarbackTips/BarbackTips'
import BartenderTips from '../BartenderTips/BartenderTips'
import './CalculatorForm.css'
import moment from 'moment'

class CalculatorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDateTime: moment().format('MMMM Do YYYY'),
            totalCcTips: 0,
            bohTips: 0,
            prepTips: 0,
            busserTips: 0,
            barbacks: [],
            totalTipOut: 0,
            tipsRemaining: 0
        }
    }

    addAllTips = () => {
        const tipSum = this.state.bohTips + this.state.prepTips + this.state.busserTips
        this.setState({
            totalTipOut: tipSum
        }, () => {
            this.calculateTipsRemaining()
        })
    }

    calculateTipsRemaining = () => {
        console.log(this.state.totalCcTips, this.state.tipsRemaining, this.state.totalTipOut)

        const tipsRemaining = Number(this.state.TotalCcTips - this.state.totalTipOut) || 0
        this.setState({
            tipsRemaining: tipsRemaining
        })
    }

    updateState = (value, propName) => {
        this.setState({
            [propName]: Number(value)
        }, () => {
            this.addAllTips()
        })
       
    }

    render() {
        return (
            <div>
                <h1>Tip Out Calculator</h1>
                <h2>{this.state.currentDateTime}</h2>
                <form>
                    <TotalCcTips
                        totalCcTips={this.state.totalCcTips}
                        onUpdateState={this.updateState}
                    />
                    <BohTips 
                        bohTips={this.state.bohTips}
                        onUpdateState={this.updateState}
                    />
                    <PrepTips 
                        prepTips={this.state.prepTips}
                        onUpdateState={this.updateState}
                    />
                    <BusserTips 
                        busserTips={this.state.busserTips}
                        onUpdateState={this.updateState}
                    />
                    <BarbackTips 
                        barbacks={this.state.barbacks}
                        onUpdateState={this.updateState}
                    />
                    <BartenderTips
                        totalTipOut={this.state.totalTipOut}
                        tipsRemaining={this.state.tipsRemaining}
                        onAddTips={this.addAllTips}
                    />
                </form>
            </div>
        )
    }
}

export default CalculatorForm