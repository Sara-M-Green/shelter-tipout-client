import React, { Component } from 'react'
import './BusserTips.css'

class BusserTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodSales: "",
            totalTips: "",
            tipsPerHr: "",
            totalHrs: 0,
            busser1hrs: 0,
            busser2hrs: 0,
            busser3hrs: 0

        }
    }

    updateTotalTips = (event) => {
        this.setState({
            totalTips: Number(event.target.value)
        })
    }

    updateTotalHrs = (event) => {
        this.setState({
            totalHrs:  Number(event.target.value)
        })
    }

    updateTipsPerHr = (event) => {
        this.setState({
            tipsPerHr:  Number(event.target.value)
        })
    }

    updateBusser1Hrs = (event) => {
        this.setState({
            busser1hrs: Number(event.target.value)
        })
    }

    updateBusser2Hrs = (event) => {
        this.setState({
            busser2hrs: Number(event.target.value)
        })
    }

    updateBusser3Hrs = (event) => {
        this.setState({
            busser3hrs: Number(event.target.value)
        })
    }


    calculateTotalTips = (event) =>{
        event.preventDefault()
        const totalTips = (Number(event.target.value) * 0.05).toFixed(2)

        this.setState({
            foodSales: Number(event.target.value),
            totalTips: totalTips
        })
    }

    calculateTotalHrs = (event) => {
        event.preventDefault()
        const totalHrs = Number(parseFloat(this.state.busser1hrs) + parseFloat(this.state.busser2hrs) + parseFloat(this.state.busser3hrs))

        this.setState({
            [event.target.name]: event.target.value,
            totalHrs: totalHrs
        })
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
                        value={this.state.totalHrs}
                        onChange={this.updateTotalHrs} 
                    />    
                </div>
                <div>
                    <label htmlFor="busser-hourly-tips">Buser Tips Per Hour:</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-hourly-tips" 
                        id="busser-hourly-tips" 
                        value={this.state.tipsPerHr}
                        onChange={this.updateTipsPerHr}
                    />    
                </div>
                <div>
                    <label htmlFor="busser-name-1">Busser: </label>
                    <select name="busser-name-1" id="busser-name-1">
                        <option value="">Busser Name:</option>
                        <option value="Jesus">Jesus</option>
                        <option value="Estefania">Estefania</option>
                        <option value="Fernanda">Fernanda</option>
                    </select>

                    <label htmlFor="busser-hours-1">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        htmlFor="busser-hours-1" 
                        id="busser-hours-1"
                        name="busser1hrs"
                        value={this.state.busser1hrs}
                        onChange={this.calculateTotalHrs}
                    />

                    <label htmlFor="busser-tips-1">Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        htmlFor="busser-tips-1" 
                        id="busser-tips-1"
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

                    <label htmlFor="busser-hours-2">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        htmlFor="busser-hours-2" 
                        id="busser-hours-2"
                        name="busser2hrs"
                        value={this.state.busser2hrs}
                        onChange={this.calculateTotalHrs}
                    />

                    <label htmlFor="busser-tips-2">Tips: </label>
                    <input type="number" placeholder="0.00" htmlFor="busser-tips-2" id="busser-tips-2" />
                </div>
                <div>
                    <label htmlFor="busser-name-3">Busser: </label>
                    <select name="busser-name-3" id="busser-name-3">
                        <option value="">Busser Name:</option>
                        <option value="Jesus">Jesus</option>
                        <option value="Estefania">Estefania</option>
                        <option value="Fernanda">Fernanda</option>
                    </select>

                    <label htmlFor="busser-hours-3">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        htmlFor="busser-hours-3" 
                        id="busser-hours-3"
                        name="busser3hrs"
                        value={this.state.busser3hrs}
                        onChange={this.calculateTotalHrs} 
                    />

                    <label htmlFor="busser-tips-3">Tips: </label>
                    <input type="number" placeholder="0.00" htmlFor="busser-tips-3" id="busser-tips-3" />
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