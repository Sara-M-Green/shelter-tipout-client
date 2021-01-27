import React, { Component } from 'react'
import './BartenderTips.css'

class BartenderTips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalTipOut: "",
            tipsRemaining: "",
            tipsPerHr: "",
            totalHrs: "",
            bartender1hrs: "",
            bartender2hrs: "",
            bartender3hrs: "",
            bartender4hrs: "",
            bartender1tips: "",
            bartender2tips: "",
            bartender3tips: "",
            bartender4tips: "",
            bartender1bottles: "",
            bartender2bottles: "",
            bartender3bottles: "",
            bartender4bottles: "",
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
                    <label htmlFor="bartender-name-1">Bartender: </label>
                    <select name="bartender-name-1" id="bartender-name-1" form="bartender-tips">
                        <option value="">Bartender Name:</option>
                        <option value="Tucker">Tucker</option>
                        <option value="Sara">Sara</option>
                        <option value="Steph">Steph</option>
                    </select>

                    <label htmlFor="bartender-hours-1">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        id="bartender-hours-1"
                        name="bartender-hours-2"
                    />

                    <label htmlFor="bartender-tips-1">Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        id="bartender-tips-1"
                        name="bartender-tips-1"
                    />

                    <label htmlFor="bartender-bottles-1">Bottles Sold: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="bartender-bottles-1" 
                        id="bartender-bottles-1"
                    />
                </div>
                <div>
                    <label htmlFor="bartender-name-2">Bartender: </label>
                    <select name="bartender-name-2" id="bartender-name-2" form="bartender-tips">
                        <option value="">Bartender Name:</option>
                        <option value="Tucker">Tucker</option>
                        <option value="Sara">Sara</option>
                        <option value="Steph">Steph</option>
                    </select>

                    <label htmlFor="bartender-hours-2">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        id="bartender-hours-2"
                        name="bartender-hours-2"
                    />

                    <label htmlFor="bartender-tips-2">Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00"
                        id="bartender-tips-2"
                        name="bartender-tips-2"
                    />

                    <label htmlFor="bartender-bottles-2">Bottles Sold: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="bartender-bottles-2" 
                        id="bartender-bottles-2"
                    />
                </div>
                <div>
                    <label htmlFor="bartender-name-3">Bartender: </label>
                    <select name="bartender-name-3" id="bartender-name-3" form="bartender-tips">
                        <option value="">Bartender Name:</option>
                        <option value="Tucker">Tucker</option>
                        <option value="Sara">Sara</option>
                        <option value="Steph">Steph</option>
                    </select>

                    <label htmlFor="bartender-hours-3">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="bartender-hours-3" 
                        id="bartender-hours-3"
                    />

                    <label htmlFor="bartender-tips-3">Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name="bartender-tips-3" 
                        id="bartender-tips-3"
                    />

                    <label htmlFor="bartender-bottles-3">Bottles Sold: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="bartender-bottles-3" 
                        id="bartender-bottles-3"
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

export default BartenderTips