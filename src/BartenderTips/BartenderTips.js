import React, { Component } from 'react'
import Bartender from '../Bartender/Bartender'
import './BartenderTips.css'

class BartenderTips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalTipOut: 0,
            tipsRemaining: 0,
            tipsPerHr: "",
            totalHrs: 0,
            bartenders: [
                {bartenderName: "", bartenderHours: 0, bartenderTips: 0, bartenderBottles: 0},
                {bartenderName: "", bartenderHours: 0, bartenderTips: 0, bartenderBottles: 0},
                {bartenderName: "", bartenderHours: 0, bartenderTips: 0, bartenderBottles: 0},
                {bartenderName: "", bartenderHours: 0, bartenderTips: 0, bartenderBottles: 0},
            ]
        }
    }

    render() {
        return (
            <div className="bartender-tips">
                <h2>Bartender Tips</h2>
                <div>
                    <label htmlFor="total-tip-out">Total Tip Out: $</label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="total-tip-out" 
                        id="total-tip-out"
                    />
                </div>
                <div>
                    <label htmlFor="tips-remaining">Tips Remaining for Bartenders: $</label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="tips-remaining" 
                        id="tips-remaining"
                    />
                </div>
                <div>
                    <label htmlFor="bartender-hours">Total Bartender Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="bartender-hours" 
                        id="bartender-hours"
                    />
                </div>
                <div>
                    <label htmlFor="bartender-hourly-tips">Bartender Tips Per Hour: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="bartender-hourly-tips" 
                        id="bartender-hourly-tips"
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
                                />
                            )}
                            
                            
                        </ul>
                    </section>
                    
                </div>
                <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>    
                </div>
            </div>
        )
    }
}

export default BartenderTips