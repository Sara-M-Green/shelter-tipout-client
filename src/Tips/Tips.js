import React from 'react'
import FohTipTable from '../FohTipTable/FohTipTable'
import BohTipTable from '../BohTipTable/BohTipTable'

import './Tips.css'
import config from '../config'

class Tips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tips: []
        }
    }

    

    render() {
        return (
            <div>
                <h1>Tips</h1>
                <section>
                    <h2>Select Date Range</h2>
                    <form>
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" name="start-date" id="start-date" />

                        <label htmlFor="end-date">End Date</label>
                        <input type="date" name="end-date" id="end-date" />

                        <div>
                            <input type="submit" />   
                        </div>
                        
                    </form>
                    
                </section>

                <FohTipTable />
                
            </div>
        )
    }
}

export default Tips