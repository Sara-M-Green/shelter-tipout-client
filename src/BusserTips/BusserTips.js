import React, { Component } from 'react'
import Bussers from '../Bussers/Bussers'
import './BusserTips.css'

class BusserTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodSales: 0,
            totalTips: 0,
            tipsPerHr: "",
            totalHrs: 0,
            bussers: [
                {busserName: "", busserHours: 0, busserTips: 0},
                {busserName: "", busserHours: 0, busserTips: 0},
            ]
        }
    }

    updateTotalTips = (event) => {
        this.setState({
            totalTips: Number(event.target.value)
        })
    }

    updateTipsPerHr = (event) => {
        this.setState({
            tipsPerHr:  Number(event.target.value)
        })
    }

    updateBusserName = (busser, name) => {
        const busserName = this.state.bussers.map(b => {
            if (b === busser) {
                b.busserName = name
            }
            return b
        })
        this.setState({
            bussers: busserName
        })
    }

    updateBusserHrs = (busser, newHours) => {
        const updatedBussers = this.state.bussers.map(b => {
            if (b === busser) {
                b.busserHours = newHours
            }
            return b
        
        })
        this.setState({
            bussers: updatedBussers
        })
        console.log(this.state)
    }
    

    updateBusserTips = (busser, newTips) => {
        const updatedTips = this.state.bussers.map(b => {
            if (b === busser) {
                b.busserTips = newTips
            }
            return b
        })
        this.setState({
            bussers: updatedTips
        })

    }

    calculateTotalTips = (event) =>{
        event.preventDefault()
        const totalTips = (Number(event.target.value) * 0.05).toFixed(2)

        this.setState({
            foodSales: Number(event.target.value),
            totalTips: Number(totalTips)
        })
    }

    sumBusserHrs() {
        const hoursArray = this.state.bussers.map(b => (
            b.busserHours
        ))
        const sumOfHours = hoursArray.reduce(function(a, b) {
            return a + b
        }, 0)

        return sumOfHours
    }

    calculateTipsPerHour() {

        const tipsPerHour = (this.state.totalTips/this.sumBusserHrs()).toFixed(2)
        return tipsPerHour
    }

    render() {


        return (
            <div className="busser-tips">
                <h2>Busser Tips</h2>
                <div>
                    <label htmlFor="busser-food-sales">Total Food Sales During Busser Shift: $</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-food-sales" 
                        id="busser-food-sales" 
                        value={this.state.foodSales}
                        onChange={this.calculateTotalTips}
                    />    
                </div>
                <div>
                    <label htmlFor="busser-total-tips">Busser Total Tips (5%): $</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-total-tips" 
                        id="busser-total-tips"
                        value={(this.state.totalTips).toFixed(2)}
                        onChange={this.updateTotalTips}
                    />
                </div>
                <div>
                    <label htmlFor="total-busser-hrs">Total Busser Hours:</label>
                    <input 
                        placeholder="0" 
                        type="number" 
                        name="total-busser-hrs" 
                        id="total-busser-hrs"
                        value={this.sumBusserHrs()}
                        readOnly
                    />    
                </div>
                <div>
                    <label htmlFor="busser-hourly-tips">Busser Tips Per Hour:</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-hourly-tips" 
                        id="busser-hourly-tips" 
                        value={this.calculateTipsPerHour()}
                        readOnly
                    />    
                </div>
                <div>
                    <section className="busser-insances">
                        <ul>
                            {this.state.bussers.map((busser, i) =>
                                <Bussers
                                    key={i}
                                    id={i}
                                    busser={busser}
                                    onUpdateHours={this.updateBusserHrs} 
                                    onUpdateName={this.updateBusserName}
                                    onUpdateTips={this.calculateTipsPerHour()}
                                />
                            )}
                        </ul>
                    </section>
                </div>
                
                <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>
                </div>
            </div>
        )
    }
}

export default BusserTips