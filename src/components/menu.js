import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="green">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo hide-on-med-and-down">{this.props.title}</Link>
                        <Link to="/" className="brand-logo hide-on-large-only">Mexico</Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}