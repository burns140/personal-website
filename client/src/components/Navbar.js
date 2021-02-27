import React, { Component } from 'react';
import logo from '../logo.svg'
import githubLogo from '../github_logo.svg'
import linkedinLogo from '../linkedin_logo.svg'
import NavItem from './NavItem'
import './Navigation.css'

class Navbar extends Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <div className="navbar">
                <div className="nav-intern">
                    <NavItem url="/" name={<img src={logo} className='App-logo' alt='logoimage' />}></NavItem>
                    <NavItem url="/projects" name="Projects"></NavItem>
                    <NavItem url="/about" name="About Me"></NavItem>
                </div>
                <div className="nav-extern">
                    <NavItem url="https://github.com/burns140?tab=repositories" name={<img src={githubLogo} className='extern-app-logo' alt='gitLogo' />} external="true"></NavItem>
                    <NavItem url="https://www.linkedin.com/in/stephen-burns-2140b4157" name={<img src={linkedinLogo} className='extern-app-logo' alt='linkedinLogo' />} external="true"></NavItem>
                </div>
            </div>
        )
    }
}

export default Navbar