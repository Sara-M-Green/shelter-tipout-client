import React, { Component } from 'react'
import './PrepTips.css'

class PrepTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailSales: "",
            prepTips: "",
        }
    }

    updatePrepTips = (event) => {
        this.setState({
            prepTips: event.target.value
        })
    }


    calculatePrepTips = (event) => {
        event.preventDefault()
        let tips = (Number(event.target.value) * 0.015).toFixed(2)

        this.setState({
            cocktailSales: Number(event.target.value),
            prepTips: tips
        })
    }

    render() {
        return (
            <div className="prep-tips">
                <h2>Prep Tips</h2>
                <div>
                    <label htmlFor="cocktail-sales">Enter total cocktail sales: $</label>
                    <input 
                        type="number"
                        name="cocktail-sales" 
                        id="cocktail-sales"
                        step="0.01" 
                        min="0.00" 
                        placeholder="0.00" 
                        value={this.state.cocktailSales}
                        onChange={this.calculatePrepTips}
                    />    
                </div>
                <div>
                    <label htmlFor="prep-tips">Prep Tips (1.5%): $</label>
                    <input 
                        type="number"
                        name="prep-tips" 
                        id="prep-tips"
                        step="0.01" 
                        min="0.00" 
                        placeholder="0.00"
                        value={this.state.prepTips} 
                        onChange={this.updatePrepTips}
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

export default PrepTips