import React from 'react'
import Select from 'react-select'
import FohTipTable from '../FohTipTable/FohTipTable'
// import BohTipTable from '../BohTipTable/BohTipTable'

import './Tips.css'
// import config from '../config'

class Tips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tips: [],
            employees: [],
            selctionOptions: [],
            selectedEmployee: ""
        }
    }

    componentDidMount() {
        Promise.all([fetch('http://localhost:8000/api/tips', {
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
        }),

        fetch('http://localhost:8000/api/employees', {
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
        .then(employees => {
            this.setState({ employees: employees })
        })])

        .catch(err => {
            console.log('Handling the error here.', err);
        });


    }

    onEmployeeSelect = (name) => {
        this.setState({
            selectedEmployee: name
        })
    }


    render() {
        const names = this.state.employees.map(emp => ({value: emp.emp_name, label: emp.emp_name}))
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

                        
                        <div className="react-select-container">
                        <label htmlFor={"employee" + this.state.employees.emp_id} className="input">Select Employee: </label>
                            <Select 
                                name={"employee" + this.state.employees.emp_id}
                                id={"employee" + this.state.employees.emp_id}
                                onChange={(event) => this.onEmployeeSelect(event.value)}
                                options={names}
                            />
                        </div>
                        <div>
                            <input type="submit" />   
                        </div>
                    </form>
                    
                </section>

                <FohTipTable 
                allTips={this.state.tips}
                selectedEmployee={this.state.selectedEmployee} />
                
            </div>
        )
    }
}

export default Tips