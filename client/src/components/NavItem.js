import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css'

class NavItem extends Component {
    state = {}

    componentDidMount() {}

    render() {
        let item;

        if (!this.props.url) {
            item = [<span>{"stephen.burns230@gmail.com"}</span>, <span>{"630-730-9497"}</span>]
        } else {
            if (this.props.external) {
                item = <a href={this.props.url} className="nav-link">{this.props.name}</a>
            } else {
                item = <Link to={this.props.url} className="nav-link">{this.props.name}</Link>
            }
        }

        return (
            <div className={`nav-item ${this.props.external ? 'nav-extern-item': ''}`} style={this.props.style}>
                {item}
            </div>
        )
    }
}

export default NavItem