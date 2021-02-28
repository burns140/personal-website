import React, { Component } from 'react';
import logo from '../logo.svg'
//import githubLogo from '../github_logo.svg'
import githubLogoLight from '../GitHub-Mark-Light-64px.png';
//import linkedinLogo from '../linkedin_logo.svg'
import linkedinLogoLight from '../linkedin-3-64.png'
import NavItem from './NavItem'
import './Navigation.css'

class Navbar extends Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <div className="navbar">
                <div className="nav-intern">
                    <img style={{borderRight: '1px solid white'}} src={logo} className='App-logo' alt='logoimage' />
                    <NavItem url="/projects" name="Projects"></NavItem>
                    <NavItem url="/about" name="About Me"></NavItem>
                </div>
                <div className="nav-extern">
                    <NavItem external="true" style={{marginTop: 0, flexDirection: 'column', marginRight: '5px'}}/>
                    <NavItem url="https://github.com/burns140?tab=repositories" name={<img src={githubLogoLight} className='extern-app-logo' alt='gitLogo' />} external="true"></NavItem>
                    <NavItem url="https://www.linkedin.com/in/stephen-burns-2140b4157" name={<img src={linkedinLogoLight} className='extern-app-logo' alt='linkedinLogo' />} external="true"></NavItem>
                </div>
            </div>
        )
    }
}

export default Navbar