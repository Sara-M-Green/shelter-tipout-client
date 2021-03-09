import React, { Component } from 'react'
import moment from 'moment'
import './BohTips.css'

class BohTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodSales: "",
            boh: [{emp_id: 1, tip_date: parseInt(moment().format('YYYYMMDD')), tips: 0}]
        }
    }

    //math function to calculate 3% of food sales for kitchen tips

    calculateBohTips = (event) => {
        event.preventDefault()
        const tips = (Number(event.target.value) * 0.03).toFixed(2)
        
        this.setState({
            foodSales: Number(event.target.value)
        }, () => {
            this.updateBoh(this.state.boh[0], this.props.bohTips)
        })

        this.props.onUpdateState(tips, "bohTips")
    }

    updateBoh = (boh, tips) => {
        const bohObject = this.state.boh.map(b => {
            if (b === boh) {
                b.tips = tips
            }
            return b
        })

        this.setState({
            boh: bohObject
        }, () => {
            this.props.onUpdateArray(this.state.boh)
        })
    }

    render() {
        return (
            <div className="boh-tips">
                <h2>BOH Tips</h2>
                <div className="instructions-p">
                    <p >Enter Total Food Sales</p> 
                </div>
                <div>
                    <label htmlFor="food-sales" className="input">Total Food Sales: $</label>
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
            </div>
        )
    }
}

export default BohTips