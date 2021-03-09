import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1 className="homepage-heading">Turbo Tips</h1>
                <p>
                    Turbo Tips helps bartenders at Shelter Distilling calculate tip out percentages for employees in 
                    other departments. It then takes the remaining tips and allocates them to bartenders based on hours.
                </p>
                <p className="bold">
                    Click 'Start Tip Out' to give it a try!
                </p>
                <p>
                    Turbo Tips also shows accumulated tips and bottle commissions total for each employee at a specified date range.
                </p>
                <p className="bold">
                    Click 'View Tips' to check your tips.
                </p>

                <Link to={"/calculator"} className="link">
                    <button className="homepage-btn">Start Tip Out</button>
                </Link>
                <Link to={"/tips"} className="link">
                    <button className="homepage-btn">View Tips</button>
                </Link>
            </div>
        )
    }
}

export default Homepage