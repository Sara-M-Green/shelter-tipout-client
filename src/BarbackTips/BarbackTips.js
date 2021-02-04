import React, { Component } from 'react'
import './BarbackTips.css'

class BarbackTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: "",
            barback: {name: "", tips: 0, bottles: 0}
        }
    }

    // updateBarbackTips = (event) => {
    //     this.setState({
    //         barbackTips: event.target.value
    //     })
    // }

    updateBarbackName = (event) => {
        this.setState({
            barback: {name: event.target.value}
        })
    }


    calculateBarbackTips = (event) => {
        event.preventDefault()
        const tips = (Number(event.target.value) * 0.015).toFixed(2)
        
        this.setState({
            sales: Number(event.target.value),
            barback: {tips: Number(tips)}
        })
    }

    render() {
        return (
            <div className="barback-tips">
                <h2>Barback Tips</h2>
                <div>
                    <label htmlFor="sales">Enter total sales: $</label>
                    <input 
                        type="number"
                        name="sales" 
                        id="sales"
                        step="0.01" 
                        min="0.00" 
                        placeholder="0.00" 
                        value={this.state.sales}
                        onChange={this.calculateBarbackTips}
                    />    
                </div>
                <div>
                    <label htmlFor="name">Barback: </label>
                        <select 
                            name="name" 
                            id="barback-name" 
                            onChange={this.updateBarbackName}
                        >
                            <option defaultValue="">Barback Name:</option>
                            <option value="Cam">Cam</option>
                            <option value="Maddy">Maddy</option>
                            <option value="Jesus">Jesus</option>
                        </select>
                    <label htmlFor="barback-tips">Barback Tips (1.5%): $</label>                    
                    <input 
                        type="number"
                        name="barback-tips" 
                        id="barback-tips"
                        step="0.01" 
                        min="0.00" 
                        placeholder="0.00"
                        value={this.state.barback.tips}
                        readOnly
                    />
                    <label htmlFor="barback-bottles-1">Bottles Sold: </label>
                    <input type="number" placeholder="0" name="barback-bottles-1" id="barback-bottles-1"></input>   
                </div>
        
                <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>    
                </div>
                
            </div>
        )
    }
}

export default BarbackTips