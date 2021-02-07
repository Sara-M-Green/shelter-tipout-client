import React, { Component } from 'react'
import TipContext from '../TipContext/TipContext'
import './TotalCcTips.css'

console.log(TipContext)

class TotalCcTips extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         totalCcTips: 0
    //     }
    // }

    // updateTotalCcTips = (event) => {
    //     this.setState({
    //         totalCcTips: Number(event.target.value)
    //     })
    // }

    render() {
        return (
            <div className="total-cc-tips">
                <h2>Total Credit Card Tips</h2>
                <label htmlFor="total-cc-tips">Enter total credit card tips: $</label>
                <input 
                    type="number"
                    name="total-cc-tips" 
                    id="total-cc-tips"
                    step="0.01" 
                    min="0.00" 
                    placeholder="0.00"
                    value={this.props.totalCcTips}
                    onChange={(event) => this.props.onUpdateState(event.target.value, "totalCcTips")} 
                />
                <button>Next</button>
            </div>
        )
    }
}

export default TotalCcTips