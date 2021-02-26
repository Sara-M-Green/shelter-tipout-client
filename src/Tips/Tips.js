import React from 'react'
import FohTipTable from '../FohTipTable/FohTipTable'
// import BohTipTable from '../BohTipTable/BohTipTable'

import './Tips.css'
// import config from '../config'

class Tips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tips: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/tips', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
              throw new Error(res.status)
            }
            return res.json()
        })
        .then(tips => {
            this.setState({ tips: tips })
            console.log(this.state.tips)
        })

        .catch(err => {
            console.log('Handling the error here.', err);
        });
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

                <FohTipTable allTips={this.state.tips} />
                
            </div>
        )
    }
}

export default Tips