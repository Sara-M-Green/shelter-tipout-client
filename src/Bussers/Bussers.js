import React, { Component } from 'react'
import Select from 'react-select'
import './Bussers.css'

class Bussers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectOptions: []
        }
    }

    render() {
        const names = this.props.selectOptions.map(emp => ({value: emp.emp_name, label: emp.emp_name}))
     
        return (
            <li>
                <div>
                    <label htmlFor={"busserName" + this.props.id} className="input">Busser Name: </label>
                    {/* <Select  /> */}
                    
                    <Select 
                        name={"busserName" + this.props.id}
                        onChange={(event) => this.props.onUpdateName(this.props.busser, event.value)}
                        options={names}
                    />
                </div>
                <div>
                    <label htmlFor={"busserHours" + this.props.id} className="input">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name={"busserHours" + this.props.id}
                        value={this.props.busser.busserHours}
                        step={0.05}
                        onChange={(event) => {
                            this.props.onUpdateHours(this.props.busser, Number(event.target.value))
                        }}
                    />
                </div>
                <div>
                    <label htmlFor={"busserTips" + this.props.id}>Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        name={"busserTips" + this.props.id}
                        value={this.props.busser.tips}
                        readOnly
                    />
                </div>    
            </li>
        )
    }
}

export default Bussers