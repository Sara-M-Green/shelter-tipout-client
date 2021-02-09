import React, { Component } from 'react'
import Barbacks from '../Barbacks/Barbacks'
import './BarbackTips.css'

const createNewBarback = () => {
    return {name: "", sales: 0, tips: 0, bottles: 0}
}

class BarbackTips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barbacks: [
                {name: "", sales: 0, tips: 0, bottles: 0},
            ]
        }
    }

    updateBarbackName = (barback, name) => {
        const barbackName = this.state.barbacks.map(b => {
            if (b === barback) {
                b.name = name
            }
            return b
        })
        this.setState({
            barbacks: barbackName
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
        console.log('adding barback')
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