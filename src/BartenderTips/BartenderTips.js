import React, { Component } from 'react'
import Bartender from '../Bartender/Bartender'
import './BartenderTips.css'

class BartenderTips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalTipOut: 0,
            tipsPerHr: 0,
            totalHrs: 0,
            bartenders: [
                {name: "", hours: 0, tips: 0, bottles: 0},
                {name: "", hours: 0, tips: 0, bottles: 0},
                {name: "", hours: 0, tips: 0, bottles: 0},  
            ]
        }
    }

    updateBartenderBottles = (bartender, bottles) => {
        const bartenderBottles = this.state.bartenders.map(b => {
            if (b === bartender) {
                b.bottles = Number(bottles)
            }
            return b
        })

        this.setState({
            bartenders: bartenderBottles
        })
    }

    updateBartenderName = (bartender, name) => {
        const bartenderName = this.state.bartenders.map(b => {
            if (b === bartender) {
                b.name = name
            }
            return b
        })
        this.setState({
            bartenders: bartenderName
        }, () => {
            this.props.onUpdateArray(this.state.bartenders)
        })
    }

    updateBartenderHrs = (bartender, newHours) => {
        const updatedHours = this.state.bartenders.map(b => {
            if (b === bartender) {
                b.hours = newHours
            }
            return b
        })

        this.setState({
            bartenders: updatedHours
        }, () => {
            this.sumBartenderHrs(bartender)
        }, () => {
            this.props.onUpdateArray(this.state.bartenders)
        })
    }

    sumBartenderHrs = (bartender) => {
        const hoursArray = this.state.bartenders.map(b =>
            b.hours
        )
        const sumOfHours = hoursArray.reduce(function(a, b) {
            return parseInt(a) + parseInt (b)
        }, 0)

        this.setState({
            totalHrs: sumOfHours
        }, () => {
            this.calculateTipsPerHr(bartender)
        })
    }

    calculateTipsPerHr = (bartender) => {
        if (this.state.totalHrs === 0) {
            return
        }
        const tipsPerHour = (this.props.tipsRemaining/this.state.totalHrs).toFixed(2)
        this.setState({
            tipsPerHr: Number(tipsPerHour)
        }, () => {
            this.updateBartenderTips(bartender)
        })
    }

    updateBartenderTips = () => {
        this.state.bartenders.map(b => {
            const tips = (b.hours * this.state.tipsPerHr).toFixed(2)
            b.tips = Number(tips)
            return b
        })
        this.setState({}, () => {
            this.props.onUpdateArray(this.state.bartenders)
        })
    }

    render() {
        return (
            <div className="bartender-tips">
                <h2>Bartender Tips</h2>
                <div className="instructions">
                    <p>Select the Bartender's name, enter how many hours they worked and how many bottles they sold</p>
                </div>
                <div>
                    <label htmlFor="total-tip-out">Total Tip Out: $</label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="total-tip-out" 
                        id="total-tip-out"
                        value={(this.props.totalTipOut).toFixed(2)}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="tips-remaining">Tips Remaining for Bartenders: $</label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="tips-remaining" 
                        id="tips-remaining"
                        value={this.props.tipsRemaining}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="bartender-hours">Total Bartender Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="bartender-hours" 
                        id="bartender-hours"
                        value={this.state.totalHrs}
                        onChange={() => this.sumBartenderHrs()}
                    />
                </div>
                <div>
                    <label htmlFor="bartender-hourly-tips">Bartender Tips Per Hour: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="bartender-hourly-tips" 
                        id="bartender-hourly-tips"
                        value={this.state.tipsPerHr}
                        readOnly
                    />
                </div>
                <div>
                    <section>
                        <ul>
                            {this.state.bartenders.map((bartender, i) =>
                                <Bartender
                                    key={i}
                                    id={i}
                                    bartender={bartender}
                                    onUpdateName={this.updateBartenderName}
                                    onUpdateBottles={this.updateBartenderBottles}
                                    onUpdateHours={this.updateBartenderHrs}
                                />
                            )}
                            
                            
                        </ul>
                    </section>
                    
                </div>
                {/* <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>    
                </div> */}
            </div>
        )
    }
}

export default BartenderTips