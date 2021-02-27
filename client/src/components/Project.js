import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

class Project extends Component {
    state = {
        text: "",
        to: ""
    }

    async componentDidMount() {
        let paragraph = await (await fetch(`/projects/${this.props.filename}`)).text();
        let to = {
            pathname: "projects/show/" + this.props.headertext.replace(' ', '-'),
            vidUrl: this.props.url
        }

        this.setState({ text: paragraph, to: to })        
    }

    render() {
        return (
            <div className={`project-wrapper ${this.props.reverse ? 'project-wrapper-reverse' : ''}`}>
                <ReactPlayer url={this.props.url} controls={true} width="480px" height="270px"/>
                <div className="project-description-wrapper">
                    <h2 className="project-header">{this.props.headertext}</h2>
                    <p className="project-description">{this.state.text}</p>
                    <Link to={this.state.to}>See More...</Link>
                </div>
            </div>
        )
    }
}

export default Project;