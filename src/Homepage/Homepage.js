import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Route 
                    path="/calculator" component={CalculatorForm} 
                />
                <Link to={"/calculator"}>
                    <button>Start Tip Out</button>
                </Link>
            </div>
        )
    }
}

export default Homepage