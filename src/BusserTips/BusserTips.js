import React, { Component } from 'react'
import './BusserTips.css'

class BusserTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodSales: ""
        }
    }
    render() {
        return (
            <div className="busser-tips">
                <h2>Busser Tips</h2>
                <div>
                    <label for="busser-food-sales">Total Food Sales During Busser Shift: $</label>
                    <input placeholder="0.00" type="number" name="busser-food-sales" id="busser-food-sales" />    
                </div>
                <div>
                    <label for="busser-total-tips">Busser Total Tips (5%): $</label>
                    <input placeholder="0.00" type="number" name="busser-total-tips" id="busser-total-tips" />
                </div>
                <div>
                    <label for="total-busser-hrs">Total Busser Hours:</label>
                    <input placeholder="0" type="number" name="total-busser-hrs" id="total-busser-hrs" />    
                </div>
                <div>
                    <label for="busser-hourly-tips">Buser Tips Per Hour:</label>
                    <input placeholder="0.00" type="number" name="busser-hourly-tips" id="busser-hourly-tips" />    
                </div>
                <div>
                    <label for="busser-name-1">Busser: </label>
                    <select name="busser-name-1" id="busser-name-1" form="busser-tips">
                        <option value="">Busser Name:</option>
                        <option value="Jesus">Jesus</option>
                        <option value="Estefania">Estefania</option>
                        <option value="Fernanda">Fernanda</option>
                    </select>

                    <label for="busser-hours-1">Hours: </label>
                    <input type="number" placeholder="0" for="busser-hours-1" id="busser-hours-1" />

                    <label for="busser-tips-1">Tips: </label>
                    <input type="number" placeholder="0.00" for="busser-tips-1" id="busser-tips-1" />
                </div>
                <div>
                    <label for="busser-name-2">Busser: </label>
                    <select name="busser-name-2" id="busser-name-2" form="busser-tips">
                        <option value="">Busser Name:</option>
                        <option value="Jesus">Jesus</option>
                        <option value="Estefania">Estefania</option>
                        <option value="Fernanda">Fernanda</option>
                    </select>

                    <label for="busser-hours-2">Hours: </label>
                    <input type="number" placeholder="0" for="busser-hours-2" id="busser-hours-2" />

                    <label for="busser-tips-2">Tips: </label>
                    <input type="number" placeholder="0.00" for="busser-tips-2" id="busser-tips-2" />
                </div>
                <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>
                </div>
            </div>
        )
    }
}

export default BusserTips