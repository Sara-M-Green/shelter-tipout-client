import React, { Component } from 'react'
import './Navbar.css'
import logo from '../images/shelter-distilling-logo.png'

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li><img src={logo} id="logo"></img></li>
                    <li>Shelter Distilling</li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar