import React from 'react'
import BohTipTable from '../BohTipTable/BohTipTable'
import FohTipTable from '../FohTipTable/FohTipTable'
import './Tips.css'

class Tips extends React.Component {
    render() {
        return (
            <div>
                <h1>Tips</h1>
                <section>
                    <h2>Select Date Range</h2>
                    <div>
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" name="start-date" id="start-date" value="2020-12-28" readOnly />
                    </div>
                    <div>
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" name="end-date" id="end-date" value="2021-01-10" readOnly />    
                    </div>
                </section>

                <FohTipTable />
                <BohTipTable />
                
            </div>
        )
    }
}

export default Tips