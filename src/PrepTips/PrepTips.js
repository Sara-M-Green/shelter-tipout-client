import React, { Component } from 'react'
import './PrepTips.css'

class PrepTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailSales: "",
        }
    }

    calculatePrepTips = (event) => {
        event.preventDefault()
        let tips = (Number(event.target.value) * 0.015).toFixed(2)

        this.setState({
            cocktailSales: Number(event.target.value),
        })

        this.props.onUpdateState(tips, "prepTips")
    }

    render() {
        return (
            <div className="prep-tips">
                <h2>Prep Tips</h2>
                <div className="instructions-p">
                    <p >Enter Total Cocktail Sales</p> 
                </div>
                <div>
                    <label htmlFor="cocktail-sales" className="input">Total Cocktail Sales: $</label>
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
                        value={this.props.prepTips} 
                        readOnly
                    />    
                </div>
        
                
                {/* <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>    
                </div> */}
            </div>
        )
    }
}

export default PrepTips