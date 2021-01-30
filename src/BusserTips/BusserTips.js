import React, { Component } from 'react'
import Bussers from '../Bussers/Bussers'
import './BusserTips.css'

class BusserTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodSales: 0,
            totalTips: 0,
            tipsPerHr: 0,
            totalHrs: 0,
            busser1hrs: 0,
            busser2hrs: 0,
            busser3hrs: 0,
            busser1Tips: 0,
            busser2Tips: 0,
            busser3Tips: 0,
        }
    }

    updateTotalTips = (event) => {
        this.setState({
            totalTips: event.target.value
        })
    }

    updateTipsPerHr = (event) => {
        this.setState({
            tipsPerHr:  Number(event.target.value)
        })
    }


    // updateTotalHrs = (event) => {
    //     this.setState({
    //         totalHrs: parseFloat(this.state.busser1hrs) + parseFloat(this.state.busser2hrs) + parseFloat(this.state.busser3hrs)
    //     })
    // }

    updateBusserHrs = (event) => {
        this.setState({
        [event.target.name]: parseFloat(event.target.value),
        })
        this.updateBusserTips(event)
    }

    updateBusserTips = (event) => {
        (this.state.busser1hrs * (this.state.totalTips/this.sumBusserHrs())).toFixed(2)
        this.setState({
            [event.target.name]: parseFloat(event.target.value)
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

    sumBusserHrs = () => {
        return this.state.busser1hrs + this.state.busser2hrs + this.state.busser3hrs
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
                        value={this.state.totalTips}
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
                        value={(this.state.totalTips/this.sumBusserHrs()).toFixed(2)}
                        readOnly
                    />    
                </div>
                <Bussers 
                    busserhrs={this.state.busser1hrs}
                    updateBusserHrs={this.updateBusserHrs}
                />
                <Bussers 
                    busserhrs={this.state.busser2hrs}
                    updateBusserHrs={this.updateBusserHrs}
                />
                {/* <div>
                    <label htmlFor="busser-name-1">Busser: </label>
                    <select name="busser-name-1" id="busser-name-1">
                        <option value="">Busser Name:</option>
                        <option value="Jesus">Jesus</option>
                        <option value="Estefania">Estefania</option>
                        <option value="Fernanda">Fernanda</option>
                    </select>

                    <label htmlFor="busser1hrs">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        id="busser-hours-1"
                        name="busser1hrs"
                        value={this.state.busser1hrs}
                        onChange={this.updateBusserHrs}
                    />

                    <label htmlFor="busser1Tips">Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        htmlFor="busser1Tips" 
                        id="busser1Tips"
                        name="busser1Tips"
                        value={(this.state.busser1hrs * (this.state.totalTips/this.sumBusserHrs())).toFixed(2)}
                        onChange={this.updateBusserTips}
                    />
                </div>
                <div>
                    <label htmlFor="busser-name-2">Busser: </label>
                    <select name="busser-name-2" id="busser-name-2">
                        <option value="">Busser Name:</option>
                        <option value="Jesus">Jesus</option>
                        <option value="Estefania">Estefania</option>
                        <option value="Fernanda">Fernanda</option>
                    </select>

                    <label htmlFor="busser2hrs">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        htmlFor="busser-hours-2" 
                        id="busser-hours-2"
                        name="busser2hrs"
                        value={this.state.busser2hrs}
                        onChange={this.updateBusserHrs}
                    />

                    <label htmlFor="busser2Tips">Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="busser2Tips" 
                        id="busser2Tips"
                        value={(this.state.busser2hrs * (this.state.totalTips/this.sumBusserHrs())).toFixed(2)}
                        onChange={this.updateBusserTips}
                    />
                </div>
                <div>
                    <label htmlFor="busser-name-3">Busser: </label>
                    <select name="busser-name-3" id="busser-name-3">
                        <option value="">Busser Name:</option>
                        <option value="Jesus">Jesus</option>
                        <option value="Estefania">Estefania</option>
                        <option value="Fernanda">Fernanda</option>
                    </select>

                    <label htmlFor="busser3hrs">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        htmlFor="busser-hours-3" 
                        id="busser-hours-3"
                        name="busser3hrs"
                        value={this.state.busser3hrs}
                        onChange={this.updateBusserHrs}
                    />

                    <label htmlFor="busser3Tips">Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="busser3Tips" 
                        id="busser3Tips" 
                        value={(this.state.busser3hrs * (this.state.totalTips/this.sumBusserHrs())).toFixed(2)}
                        onChange={this.updateBusserTips}
                    />
                </div> */}
                <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>
                </div>
            </div>
        )
    }
}

export default BusserTips