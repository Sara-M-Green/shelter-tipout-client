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
            boh: [{emp_id: 1, tip_date: parseInt(moment().format('YYYYMMDD')), tips: 0}],
            prepTips: 0,
            prep: [{emp_id: 2, tip_date: parseInt(moment().format('YYYYMMDD')), tips: 0}],
            bussers: [],
            busserTips: 0,
            barbacks: [],
            totalTipOut: 0,
            tipsRemaining: 0,
            bartenders: []
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        
        this.state.bussers.forEach((e) => {
            delete e.busserHours
            delete e.busserName
        })

        this.state.barbacks.forEach((e) => {
            delete e.sales
            delete e.name
        })

        this.state.bartenders.forEach((e) => {
            delete e.hours
            delete e.name
        })    

        
        const employees = this.state.bussers.concat(this.state.barbacks).concat(this.state.bartenders).concat(this.state.boh).concat(this.state.prep)

        const requests = employees.map((emp) => {
            return fetch('https://https://young-crag-90287.herokuapp.com/api/tips', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(emp),
            })
        })
        return Promise.all(requests)        
        .then(() => {
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }



    addAllTips = () => {
        const busserTipsArray = this.state.bussers.map(b => b.tips)
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

    updateBohArray = (newArr) => {
        this.setState(state => {
            const boh = newArr

            return {
                boh
            }
        })
    }

    updatePrepArray = (newArr) => {
        this.setState(state => {
            const prep = newArr

            return {
                prep
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Tip Out Calculator</h1>
                <h2>{this.state.currentDateTime}</h2>
                <form onSubmit={this.handleSubmit}>
                    <TotalCcTips
                        totalCcTips={this.state.totalCcTips}
                        onUpdateState={this.updateState}
                    />
                    <BohTips 
                        bohTips={this.state.bohTips}
                        onUpdateArray={this.updateBohArray}
                        onUpdateState={this.updateState}
                    />
                    <PrepTips 
                        prepTips={this.state.prepTips}
                        onUpdateState={this.updateState}
                        onUpdateArray={this.updatePrepArray}
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