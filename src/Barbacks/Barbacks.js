import React from 'react'

class Barbacks extends React.Component {
    render() {
        return (
            <li>
                <div>
                    <label htmlFor="name">Barback: </label>
                        <select 
                            name="name" 
                            id="barback-name" 
                            value={this.props.barback.name}
                            onChange={(event) => this.props.onUpdateBarbackName(this.props.barback, event.target.value)}
                        >
                            <option value="">Name:</option>
                            <option value="Cam">Cam</option>
                            <option value="Maddy">Maddy</option>
                            <option value="Jesus">Jesus</option>
                        </select>    
                </div>
                <div>
                    <label htmlFor="sales">Enter total sales: $</label>
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