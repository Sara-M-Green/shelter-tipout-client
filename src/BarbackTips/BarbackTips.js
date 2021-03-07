import React, { Component } from 'react'
import moment from 'moment'
import Barbacks from '../Barbacks/Barbacks'
import './BarbackTips.css'

const createNewBarback = () => {
    return {name: "", emp_id: 0, sales: 0, tips: 0, bottles: 0, tip_date: parseInt(moment().format('YYYYMMDD'))}
}

class BarbackTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barbacks: [
                {name: "", emp_id: 0, sales: 0, tips: 0, bottles: 0, tip_date: parseInt(moment().format('YYYYMMDD'))},
            ],
            employees: []
        }
    }

    componentDidMount() {
        fetch('https://https://young-crag-90287.herokuapp.com/api/employees/4', {
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
        .then(barbacks => {
            this.setState({ employees: barbacks })
        })

        .catch(err => {
            console.log('Handling the error here.', err);
        });
    }

    updateBarbackName = (barback, name) => {
        this.state.barbacks.map(b => {
            if (b === barback) {
                b.name = name
            }
            return b
        })

        const emp = this.state.employees.find(e => e.emp_name === name)

        const updatedBarback = this.state.barbacks.map(b => {
            if (b === barback) {
                b.emp_id = emp.emp_id
            }
            return b
        })


        this.setState({
            barbacks: updatedBarback
        }, () => {
            this.props.onUpdateArray(this.state.barbacks)
        })
    }

    updateBarbackBottles = (barback, bottles) => {
        const barbackBottles = this.state.barbacks.map(b => {
            if (b === barback) {
                b.bottles = Number(bottles)
            }
            return b
        })
        this.setState({
            barbacks: barbackBottles
        }, () => {
            this.props.onUpdateArray(this.state.barbacks)
        })
    }


    calculateBarbackTips = (barback, sales) => {
        const barbackSales = this.state.barbacks.map(b => {
            if (b === barback) {
                b.sales = Number(sales)
                b.tips = Number((sales * 0.015).toFixed(2))
            }
            return b
        })

        this.setState({
            barbacks: barbackSales
        }, () => {
            this.props.onUpdateArray(this.state.barbacks)
        })
    }

    handleAddBarback = (event) => {
        event.preventDefault()
        const newBarback = createNewBarback()

        const newBarbackArray = [...this.state.barbacks, newBarback]


        this.setState({
            barbacks: newBarbackArray
        })
        
    }

    render() {
        return (
            <div className="barback-tips">
                <h2>Barback Tips</h2>
                <div className="instructions">
                    <p>Enter Total Sales During Barback Time Frame</p> 
                    <p>Select the Barback's name, enter how many hours they worked and how many bottles they sold</p>
                </div>
                
                <div>
                    <section className="barback-instances">
                        <ul>
                            {this.state.barbacks.map((barback, i) => 
                                <Barbacks 
                                    key={i}
                                    id={i}
                                    selectOptions = {this.state.employees}
                                    barback={barback}
                                    onCalculateBarbackTips={this.calculateBarbackTips}
                                    onUpdateBarbackName={this.updateBarbackName}
                                    onUpdateBarbackBottles={this.updateBarbackBottles}
                                />
                            )}
                        </ul>
                        <button onClick={this.handleAddBarback}>Add Barback</button>
                    </section>
                    
                </div>
        
                {/* <div className="btns">
                    <button>Next</button>
                    <button>Skip</button>    
                </div> */}
                
            </div>
        )
    }
}

export default BarbackTips