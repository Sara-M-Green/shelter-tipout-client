import React, { Component } from 'react'
import moment from 'moment'
import './PrepTips.css'

class PrepTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailSales: "",
            prep:[{emp_id: 2, tip_date: parseInt(moment().format('YYYYMMDD')), tips: 0}]
        }
    }

    calculatePrepTips = (event) => {
        event.preventDefault()
        let tips = (Number(event.target.value) * 0.015).toFixed(2)

        this.setState({
            cocktailSales: Number(event.target.value),
        }, () => {
            this.updatePrep(this.state.prep[0], this.props.prepTips)
        })

        this.props.onUpdateState(tips, "prepTips")
    }

    updatePrep = (prep, tips) => {
        const prepObject = this.state.prep.map(p => {
            if (p === prep) {
                p.tips = tips
            }
            return p
        })

        this.setState({
            prep: prepObject
        }, () => {
            this.props.onUpdateArray(this.state.prep)
        })
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