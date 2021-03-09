import React from 'react'
import Select from 'react-select'

class Barbacks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectOptions: []
        }
    }

    render() {
        //creates appropriate array for react-select
        const names = this.props.selectOptions.map(emp => ({value: emp.emp_name, label: emp.emp_name}))

        return (
            <li>
                <div>
                    <label htmlFor="name" className="input">Barback Name: </label>
                    <Select
                        className="select-options"
                        name="name" 
                        id="barback-name"
                        options={names}
                        onChange={(event) => this.props.onUpdateBarbackName(this.props.barback, event.value)}
                    />
                </div>
                <div>
                    <label htmlFor="sales" className="input">Total Sales: $</label>
                    <input 
                        type="number"
                        name="sales" 
                        id="sales"
                        step="0.01" 
                        min="0.00" 
                        placeholder="0.00" 
                        value={this.props.barback.sales}
                        onChange={(event) => this.props.onCalculateBarbackTips(this.props.barback, event.target.value)}
                    />    
                
                    <label htmlFor="barback-tips">Barback Tips (1.5%): $</label>                    
                    <input 
                        type="number"
                        name="barback-tips" 
                        id="barback-tips"
                        step="0.01" 
                        min="0.00" 
                        placeholder="0.00"
                        value={this.props.barback.tips}
                        readOnly
                    />
                    <label htmlFor="barback-bottles-1">Bottles Sold: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name="barback-bottles-1" 
                        id="barback-bottles-1"
                        value={this.props.barback.bottles}
                        onChange={(event) => this.props.onUpdateBarbackBottles(this.props.barback, event.target.value)}>
                        
                    </input>
                </div>
            </li>
        )
    }
}

export default Barbacks