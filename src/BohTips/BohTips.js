import React, { Component } from 'react'
import './BohTips.css'

class BohTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodSales: "",
        }
    }

    calculateBohTips = (event) => {
        event.preventDefault()
        const tips = (Number(event.target.value) * 0.03).toFixed(2)
        
        this.setState({
            foodSales: Number(event.target.value),
        })

        this.props.onUpdateState(tips, "bohTips")
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
                        value={this.props.bohTips}
                        readOnly 
                    />    
                </div>
        
                <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>    
                </div>
                
            </div>
        )
    }
}

export default BohTips