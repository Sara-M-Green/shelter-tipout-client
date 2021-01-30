import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Link to={"/calculator"}>
                    <button>Start Tip Out</button>
                </Link>
            </div>
        )
    }
}

export default Homepage