import React, { Component } from 'react';
import './AboutMePage.css';
import me from '../../images/me.jpg';
import destiny from '../../images/destiny-2-party.jpg'

class AboutMePage extends Component {
    state = {
        text: ""
    }

    async componentDidMount() {
        const text = await (await fetch('/about')).text();
        console.log(text);

        this.setState({text: text });
    }

    render() {
        return (
            <div className="about-me-page-container">
                <img className="about-me-image" src={me} alt="meme"/>
                <p className="about-me-paragraph">{this.state.text}</p>
                <img className = "about-me-image" src={destiny} alt="destiny" />
            </div>
        )
    }
}

export default AboutMePage;