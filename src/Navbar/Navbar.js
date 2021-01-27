import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/shelter-distilling-logo.png'

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li><img src={logo} id="logo" alt="Shelter Distilling logo"></img></li>
                    <li>Shelter Distilling</li>
                    <li><Link to={"/"}>Home</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar