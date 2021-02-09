import React, { Component } from 'react'
import './Bussers.css'

class Bussers extends Component {
    render() {
        return (
            <li>
                <div>
                    <label htmlFor={"busserName" + this.props.id} className="input">Busser Name: </label>
                    <select 
                        name={"busserName" + this.props.id}
                        onChange={(event) => this.props.onUpdateName(this.props.busser, event.target.value)}
                    >
                        <option value="">Busser Name:</option>
                        <option value="Jesus">Jesus</option>
                        <option value="Estefania">Estefania</option>
                        <option value="Fernanda">Fernanda</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={"busserHours" + this.props.id} className="input">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name={"busserHours" + this.props.id}
                        value={this.props.busser.busserHours}
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
                        value={this.props.busser.busserTips}
                        readOnly
                    />
                </div>    
            </li>
        )
    }
}

export default Bussers