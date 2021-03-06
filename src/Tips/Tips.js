import React from 'react'
import Select from 'react-select'
import FohTipTable from '../FohTipTable/FohTipTable'
import './Tips.css'

class Tips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tips: [],
            tipsByDates: [],
            employees: [],
            selctionOptions: [],
            selectedEmployee: "",
            startDate: 0,
            endDate: ""
        }
    }

    //gets all tips and all employees
    componentDidMount() {
        Promise.all([fetch(`https://young-crag-90287.herokuapp.com/api/tips`, {
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

        fetch('https://young-crag-90287.herokuapp.com/api/employees', {
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

    formatDate = (date) => {
        const year = date.toString().slice(0, 4)
        const month = date.toString().slice(5, 7)
        const day = date.toString().slice(8)
        const newDate = year + month + day
        return newDate
    }

    //these functions filter tips array for selected employee and date range

    onEmployeeSelect = (name) => {
        this.setState({
            selectedEmployee: name
        })
    }

    onStartDateSelect = (date) => {
        const dateAsNum = this.formatDate(date)
        this.setState({
            startDate: parseInt(dateAsNum)
        })
    }

    onEndDateSelect = (date) => {
        const dateAsNum = this.formatDate(date)
        this.setState({
            endDate: parseInt(dateAsNum)
        })
    }

    render() {
        const names = this.state.employees.map(emp => ({value: emp.emp_name, label: emp.emp_name}))
        return (
            <div>
                
                <section>
                    <h2 className="date-range">Select Date Range</h2>
                    <form>
                        <label htmlFor="start-date">Start Date</label>
                        <input 
                            type="date" 
                            name="start-date" 
                            id="start-date"
                            onChange={(event) => this.onStartDateSelect(event.target.value)} 
                        />

                        <label htmlFor="end-date">End Date</label>
                        <input 
                            type="date" 
                            name="end-date" 
                            id="end-date" 
                            onChange={(event) => this.onEndDateSelect(event.target.value)}
                        />
                        
                        <div className="react-select-container">
                        <label htmlFor={"employee" + this.state.employees.emp_id} className="input date-range">Select Employee</label>
                            <Select
                                className="select-options" 
                                name={"employee" + this.state.employees.emp_id}
                                id={"employee" + this.state.employees.emp_id}
                                onChange={(event) => this.onEmployeeSelect(event.value)}
                                options={names}
                            />
                        </div>
                       
                    </form>
                    
                </section>

                <div>
                    <h1 id="table-header">{this.state.selectedEmployee} Tips</h1>
                </div>

                <FohTipTable 
                allTips={this.state.tips}
                selectedEmployee={this.state.selectedEmployee} 
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                />
                
            </div>
        )
    }
}

export default Tips