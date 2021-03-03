import React from 'react'
import Select from 'react-select'

class Bartender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectOptions: []
        }
    }

    render () {
        const names = this.props.selectOptions.map(emp => ({value: emp.emp_name, label: emp.emp_name}))

        return (
            <li>
                <div>
                    <label htmlFor={"bartenderName" + this.props.id} className="input">Bartender Name: </label>
                    <Select
                        name={"bartenderName" + this.props.id}
                        id={"bartenderName" + this.props.id}
                        onChange={(event) => this.props.onUpdateName(this.props.bartender, event.value)}
                        options={names}
                    />
                    
                   

                    <label htmlFor={"bartenderHours" + this.props.id} className="input">Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        id={"bartenderHours" + this.props.id}
                        name={"bartenderHours" + this.props.id}
                        value={this.props.bartender.hours}
                        onChange={(event) => {
                            this.props.onUpdateHours(this.props.bartender, Number(event.target.value))
                        }}
                    />

                    <label htmlFor={"bartenderTips" + this.props.id}>Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        id={"bartenderTips" + this.props.id}
                        name={"bartenderTips" + this.props.id}
                        value={this.props.bartender.tips}
                        readOnly
                    />

                    <label htmlFor={"bartenderBottles" + this.props.id}>Bottles Sold: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name={"bartenderBottles" + this.props.id}
                        id={"bartenderBottles" + this.props.id}
                        value={this.props.bartender.bottles}
                        onChange={(event) => this.props.onUpdateBottles(this.props.bartender, event.target.value)}
                    />
                </div>
            </li>
        )
    }
}

export default Bartender