import React, { Component } from 'react';
import './AboutMePage.css';
import me from '../../images/me.jpg';
import destiny from '../../images/destiny-2-party.jpg';
import hiking from '../../images/me_cliff.jpg';

class AboutMePage extends Component {
    state = {
        text: ""
    }

    async componentDidMount() {
        const text = await (await fetch('/aboutme')).text();

        this.setState({ text: text });
    }

    render() {
        return (
            <div className="about-me-page-container">
                <img className="about-me-image" src={me} alt="meme"/>
                <p className="about-me-paragraph">{this.state.text}</p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img className="about-me-image-small" src={destiny} alt="destiny" />
                    <img className="about-me-image-small" src={hiking} alt="hiking" />
                </div>
            </div>
        )
    }
}

export default AboutMePage;