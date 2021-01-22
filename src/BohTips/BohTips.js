import React, { Component } from 'react'
import './BohTips.css'

class BohTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodSales: "",
            bohTips: "",
        }
    }

    updateBohTips = (event) => {
        this.setState({
            bohTips: event.target.value
        })
    }


    calculateBohTips = (event) => {
        event.preventDefault()
        let tips = Number(this.state.foodSales) * 0.03
        console.log(tips)
        this.setState({
            foodSales: Number(event.target.value),
            bohTips: tips
        })
    }

    render() {
        return (
            <div className="boh-tips">
                <h2>BOH Tips</h2>
                <div>
                    <label htmlFor="food-sales">Enter total food sales: $</label>
                    <input 
                        type="number"
                        name="food-sales" 
                        id="food-sales"
                        step="0.01" 
                        min="0.00" 
                        placeholder="0.00" 
                        value={this.state.foodSales}
                        onChange={this.calculateBohTips}
                    />    
                </div>
                <div>
                    <label htmlFor="boh-tips">BOH Tips (3%): $</label>
                    <input 
                        type="number"
                        name="boh-tips" 
                        id="boh-tips"
                        step="0.01" 
                        min="0.00" 
                        placeholder="0.00"
                        value={this.state.bohTips}
                        onChange={this.updateBohTips} 
                    />    
                </div>
        
                
                {/* <button onClick={this.calculateBohTips}>Calculate</button> */}
            </div>
        )
    }
}

export default BohTips