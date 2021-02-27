import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css'

class NavItem extends Component {
    state = {}

    componentDidMount() {}

    render() {
        let item;
        if (this.props.external) {
            item = <a href={this.props.url} className="nav-link">{this.props.name}</a>
        } else {
            item = <Link to={this.props.url} className="nav-link">{this.props.name}</Link>
        }

        return (
            <div className={`nav-item ${this.props.external ? 'nav-extern-item': ''}`}>
                {item}
            </div>
        )
    }
}

export default NavItem