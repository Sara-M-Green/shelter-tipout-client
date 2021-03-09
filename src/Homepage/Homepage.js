import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1 className="homepage-heading">Turbo Tips</h1>
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