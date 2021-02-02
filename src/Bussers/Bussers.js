import React, { Component } from 'react'
import './Bussers.css'

class Bussers extends Component {
    render() {
        return (
            <li>
                <label htmlFor={"busserName" + this.props.id}>Busser: </label>
                <select 
                    name={"busserName" + this.props.id}
                    onChange={(event) => this.props.onUpdateName(this.props.busser, event.target.value)}
                >
                    <option value="">Busser Name:</option>
                    <option value="Jesus">Jesus</option>
                    <option value="Estefania">Estefania</option>
                    <option value="Fernanda">Fernanda</option>
                </select>

                <label htmlFor={"busserHours" + this.props.id}>Hours: </label>
                <input 
                    type="number" 
                    placeholder="0" 
                    name={"busserHours" + this.props.id}
                    value={this.props.busser.busserHours}
                    onChange={(event) => this.props.onUpdateHours(this.props.busser, Number(event.target.value))}
                />

                <label htmlFor={"busserTips" + this.props.id}>Tips: </label>
                <input 
                    type="number" 
                    placeholder="0.00" 
                    name={"busserTips" + this.props.id}
                    // value={0}
                    // onChange={this.updateBusserTips}
                />
            </li>
        )
    }
}

export default Bussers