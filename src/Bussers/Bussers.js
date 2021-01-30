import React, { Component } from 'react'
import './Bussers.css'

class Bussers extends Component {
    render() {
        return (
            <div>
                <label htmlFor="busser-name-1">Busser: </label>
                <select name="busser-name-1" id="busser-name-1">
                    <option value="">Busser Name:</option>
                    <option value="Jesus">Jesus</option>
                    <option value="Estefania">Estefania</option>
                    <option value="Fernanda">Fernanda</option>
                </select>

                <label htmlFor="busser1hrs">Hours: </label>
                <input 
                    type="number" 
                    placeholder="0" 
                    id="busser-hours-1"
                    name="busser1hrs"
                    value={this.props.busserhrs}
                    onChange={this.props.updateBusserHrs}
                />

                <label htmlFor="busser1Tips">Tips: </label>
                <input 
                    type="number" 
                    placeholder="0.00" 
                    htmlFor="busser1Tips" 
                    id="busser1Tips"
                    name="busser1Tips"
                    // value={(this.state.busser1hrs * (this.state.totalTips/this.sumBusserHrs())).toFixed(2)}
                    // onChange={this.updateBusserTips}
                />
            </div>
        )
    }
}

export default Bussers