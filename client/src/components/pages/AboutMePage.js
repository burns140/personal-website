import React, { Component } from 'react';
import './AboutMePage.css';
import me from '../../images/me.jpg'

class AboutMePage extends Component {
    state = {}

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="about-me-page-container">
                <img className="about-me-image" src={me} alt="meme"/>
                <h1>this is about me</h1>
            </div>
        )
    }
}

export default AboutMePage;