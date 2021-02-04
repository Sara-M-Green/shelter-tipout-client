import React from 'react'

class Bartender extends React.Component {
    render () {
        return (
            <li>
                <div>
                    <label htmlFor={"bartenderName" + this.props.id}>Bartender: </label>
                    <select name={"bartenderName" + this.props.id} id={"bartenderName" + this.props.id}>
                        <option value="">Bartender Name:</option>
                        <option value="Tucker">Tucker</option>
                        <option value="Sara">Sara</option>
                        <option value="Steph">Steph</option>
                    </select>

                    <label htmlFor={"bartenderHours" + this.props.id}>Hours: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        id={"bartenderHours" + this.props.id}
                        name={"bartenderHours" + this.props.id}
                    />

                    <label htmlFor={"bartenderTips" + this.props.id}>Tips: </label>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        id={"bartenderTips" + this.props.id}
                        name={"bartenderTips" + this.props.id}
                    />

                    <label htmlFor={"bartenderBottles" + this.props.id}>Bottles Sold: </label>
                    <input 
                        type="number" 
                        placeholder="0" 
                        name={"bartenderBottles" + this.props.id}
                        id={"bartenderBottles" + this.props.id}
                    />
                </div>
            </li>
        )
    }
}

export default Bartender