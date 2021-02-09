import React, { Component } from 'react'
import Bussers from '../Bussers/Bussers'
import './BusserTips.css'

class BusserTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: 0,
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
        let newTotalTips = Number(event.target.value)
        this.setState({
            totalTips: newTotalTips
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
        }, () => {
            this.props.onUpdateArray(this.state.bussers)
        })
    }

    updateBusserHrs = (busser, newHours) => {
        const updatedBussers = this.state.bussers.map(b => {
            if (b === busser) {
                b.busserHours = newHours
            }
            return b
        
        })
        this.setState({bussers: updatedBussers}, () => {
            this.sumBusserHrs(busser)
        }, () => {
            this.props.onUpdateArray(this.state.bussers)
        })
    }

    sumBusserHrs = (busser) => {
        const hoursArray = this.state.bussers.map(b => (
            b.busserHours
        ))
        const sumOfHours = hoursArray.reduce(function(a, b) {
            return parseInt(a) + parseInt (b)
        }, 0)

        this.setState({totalHrs: sumOfHours}, () => {
            this.calculateTipsPerHour(busser)
        })   
    }

    calculateTipsPerHour = (busser) => {
        if (this.state.totalHrs === 0) {
            return
        }
        const tipsPerHour = (this.state.totalTips/this.state.totalHrs).toFixed(2)
        this.setState({tipsPerHr: Number(tipsPerHour)}, () => {
            this.updateBusserTips(busser)
        }) 
    }

    updateBusserTips = () => {
        this.state.bussers.map(b => {
            const tips = (b.busserHours * this.state.tipsPerHr).toFixed(2)
            b.busserTips = Number(tips)
            return b
        })
        this.setState({}, () => {
            this.props.onUpdateArray(this.state.bussers)
        })
    }


    calculateTotalTips = (event) =>{
        event.preventDefault()
        const totalTips = (Number(event.target.value) * 0.02).toFixed(2)

        this.setState({
            sales: Number(event.target.value),
            totalTips: Number(totalTips)
        })
        
        this.props.onUpdateState(totalTips, "busserTips")
    }   

    render() {
        return (
            <div className="busser-tips">
                <h2>Busser Tips</h2>
                <div className="instructions">
                    <p>Enter Total Sales During Busser Time Frame</p> 
                    <p>Select the Busser's name, and enter how many hours they worked</p>
                </div>
                
                <div>
                    <label htmlFor="busser-sales">Total Sales During Busser Shift: $</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-sales" 
                        id="busser-sales" 
                        value={this.state.sales}
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
                        value={this.state.totalHrs}
                        onChange={() => this.sumBusserHrs()}
                    />    
                </div>
                <div>
                    <label htmlFor="busser-hourly-tips">Busser Tips Per Hour:</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-hourly-tips" 
                        id="busser-hourly-tips" 
                        value={this.state.tipsPerHr}
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
                                    sumBusserHrs={this.sumBusserHrs}
                                    onUpdateName={this.updateBusserName}
                                    onCaclulateHourlyTips={this.calculateTipsPerHour}
                                    onUpdateTips={this.updateBusserTips}

                                />
                            )}
                        </ul>
                    </section>
                </div>
                
                {/* <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>
                </div> */}
            </div>
        )
    }
}

export default BusserTips