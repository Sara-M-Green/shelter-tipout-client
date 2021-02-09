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
            totalCcTips: "",
            bohTips: 0,
            prepTips: 0,
            bussers: [],
            busserTips: 0,
            barbacks: [],
            totalTipOut: 0,
            tipsRemaining: 0,
            bartenders: []
        }
    }

    addAllTips = () => {
        const busserTipsArray = this.state.bussers.map(b => b.busserTips)
        const busserTipsSum = busserTipsArray.reduce(function(a, b) {
            return a + b
        }, 0)
        
        const barbackTipsArray = this.state.barbacks.map(b => b.tips)
        const barbackTipsSum = barbackTipsArray.reduce(function(a, b) {
            return a + b
        }, 0)
      
        const tipSum = this.state.bohTips + this.state.prepTips + busserTipsSum + barbackTipsSum
        this.setState({
            totalTipOut: tipSum
        }, () => {
            this.calculateTipsRemaining()
        })
    }

    calculateTipsRemaining = () => {
        if (this.state.totalCcTips === 0) {
            return
        }
        const tips = Number(this.state.totalCcTips - this.state.totalTipOut)
        this.setState({
            tipsRemaining: tips
        })
    }

    updateState = (value, propName) => {
        this.setState({
            [propName]: Number(value)
        }, () => {
            this.addAllTips()
        })
       
    }

    updateBarbacksArray = (newArr) => {
        this.setState(state => {
            const barbacks = newArr

            return {
                barbacks
            }
        }, () => {
            this.addAllTips()
        })
    }

    updateBussersArray = (newArr) => {
        this.setState(state => {
            const bussers = newArr

            return {
                bussers
            }
        }, () => {
            this.addAllTips()
        })
    }

    updateBartendersArray = (newArr) => {
        this.setState(state => {
            const bartenders = newArr

            return {
                bartenders
            }
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
                        onUpdateArray={this.updateBussersArray}
                    />
                    <BarbackTips 
                        barbacks={this.state.barbacks}
                        onUpdateArray={this.updateBarbacksArray}
                    />
                    <BartenderTips
                        totalTipOut={this.state.totalTipOut}
                        tipsRemaining={this.state.tipsRemaining}
                        onAddTips={this.addAllTips}
                        onUpdateArray={this.updateBartendersArray}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default CalculatorForm