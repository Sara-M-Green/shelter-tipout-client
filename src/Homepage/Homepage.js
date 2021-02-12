import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Turbo Tips</h1>
                <Link to={"/calculator"}>
                    <button>Start Tip Out</button>
                </Link>
                <Link to={"/tips"}>
                    <button>View Tips</button>
                </Link>
            </div>
        )
    }
}

export default Homepage