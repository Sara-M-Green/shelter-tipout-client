import React, { Component } from 'react'
import moment from 'moment'
import Bussers from '../Bussers/Bussers'
import './BusserTips.css'

const createNewBusser = () => {
    return {busserName: "", emp_id: 0, busserHours: 0, tips: 0, tip_date: parseInt(moment().format('YYYYMMDD'))}
}

class BusserTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: "",
            totalTips: 0,
            tipsPerHr: "",
            totalHrs: 0,
            bussers: [
                {busserName: "", emp_id: 0, busserHours: 0, tips: 0, tip_date: parseInt(moment().format('YYYYMMDD'))},
            ],
            employees: []
        }
    }

    //gets all employee names who work as bussers
    componentDidMount() {
        fetch(`https://young-crag-90287.herokuapp.com/api/employees/3`, {
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
        .then(bussers => {
            this.setState({ 
                employees: bussers 
            })
        })

        .catch(err => {
            console.log('Handling the error here.', err);
        });
    }

    //these functions do the math to calculate tips for the bussers
    updateTotalTips = (event) => {
        let newTotalTips = Number(event.target.value)
        this.setState({
            totalTips: newTotalTips
        })    
    }

    updateTipsPerHr = (event) => {
        this.setState({
            tipsPerHr:  Number(event.target.value)
        })
    }

    updateBusserName = (busser, name) => {
        this.state.bussers.map(b => {
            if (b === busser) {
                b.busserName = name
            }
            return b
        })

        const emp = this.state.employees.find(e => e.emp_name === name)

        const updatedBusser = this.state.bussers.map(b => {
            if (b === busser) {
                b.emp_id = emp.emp_id
            }
            return b
        })
        

        this.setState({
            bussers: updatedBusser
        }, () => {
            this.props.onUpdateArray(this.state.bussers)
        })
    }

    updateBusserHrs = (busser, newHours) => {
        const updatedBussers = this.state.bussers.map(b => {
            if (b === busser) {
                b.busserHours = newHours
            }
            return b
        
        })
        this.setState({bussers: updatedBussers}, () => {
            this.sumBusserHrs(busser)
        }, () => {
            this.props.onUpdateArray(this.state.bussers)
        })
    }

    sumBusserHrs = (busser) => {
        const hoursArray = this.state.bussers.map(b => (
            b.busserHours
        ))
        const sumOfHours = hoursArray.reduce(function(a, b) {
            return parseInt(a) + parseInt (b)
        }, 0)

        this.setState({totalHrs: sumOfHours}, () => {
            this.calculateTipsPerHour(busser)
        })   
    }

    calculateTipsPerHour = (busser) => {
        if (this.state.totalHrs === 0) {
            return
        }
        const tipsPerHour = (this.state.totalTips/this.state.totalHrs).toFixed(2)
        this.setState({tipsPerHr: Number(tipsPerHour)}, () => {
            this.updateBusserTips(busser)
        }) 
    }

    updateBusserTips = () => {
        this.state.bussers.map(b => {
            const tips = (b.busserHours * this.state.tipsPerHr).toFixed(2)
            b.tips = Number(tips)
            return b
        })
        this.setState({}, () => {
            this.props.onUpdateArray(this.state.bussers)
        })
    }


    calculateTotalTips = (event) =>{
        event.preventDefault()
        const totalTips = (Number(event.target.value) * 0.02).toFixed(2)

        this.setState({
            sales: Number(event.target.value),
            totalTips: Number(totalTips)
        })
        
        this.props.onUpdateState(totalTips, "tips")
    } 
    

    //dynamically adds another busser instance
    handleAddBusser = (event) => {
        event.preventDefault()
        const newBusser = createNewBusser()

        const newBussersArray = [...this.state.bussers, newBusser]

        this.setState({
            bussers: newBussersArray
        })
    }

    render() {     
        return (
            <div className="busser-tips">
                <h2>Busser Tips</h2>
                <div className="instructions-p">
                    <p>Enter Total Sales During Busser Time Frame</p> 
                    <p>Select the Busser's name, and enter how many hours they worked</p>
                </div>
                
                <div>
                    <label htmlFor="busser-sales" className="input">Total Sales During Busser Shift: $</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-sales" 
                        id="busser-sales" 
                        value={this.state.sales}
                        onChange={this.calculateTotalTips}
                    />    
                </div>
                <div>
                    <label htmlFor="busser-total-tips">Busser Total Tips (2%): $</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-total-tips" 
                        id="busser-total-tips"
                        value={(this.state.totalTips).toFixed(2)}
                        onChange={this.updateTotalTips}
                    />
                </div>
                <div className="hide">
                    <label htmlFor="total-busser-hrs">Total Busser Hours:</label>
                    <input 
                        placeholder="0" 
                        type="number" 
                        name="total-busser-hrs" 
                        id="total-busser-hrs"
                        value={this.state.totalHrs}
                        onChange={() => this.sumBusserHrs()}
                    />    
                </div>
                <div className="hide">
                    <label htmlFor="busser-hourly-tips">Busser Tips Per Hour:</label>
                    <input 
                        placeholder="0.00" 
                        type="number" 
                        name="busser-hourly-tips" 
                        id="busser-hourly-tips" 
                        value={this.state.tipsPerHr}
                        readOnly
                    />    
                </div>
                <div>
                    <section className="busser-insances">
                        <ul>
                            {this.state.bussers.map((busser, i) =>
                                <Bussers
                                    key={i}
                                    id={i}
                                    busser={busser}
                                    selectOptions={this.state.employees}
                                    onUpdateHours={this.updateBusserHrs} 
                                    sumBusserHrs={this.sumBusserHrs}
                                    onUpdateName={this.updateBusserName}
                                    onCaclulateHourlyTips={this.calculateTipsPerHour}
                                    onUpdateTips={this.updateBusserTips}

                                />
                            )}
                        </ul>
                        <button onClick={this.handleAddBusser}>Add Busser</button>
                    </section>
                </div>
            </div>
        )
    }
}

export default BusserTips