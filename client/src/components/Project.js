import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Project extends Component {
    state = {
        text: ""
    }

    async componentDidMount() {
        let paragraph = await (await fetch(`http://localhost:9000/projects/${this.props.filename}`)).text();
        this.setState({ text: paragraph })
    }

    render() {
        return (
            <div className={`project-wrapper ${this.props.reverse ? 'project-wrapper-reverse' : ''}`}>
                <ReactPlayer url={this.props.url} controls={true} width="480px" height="270px"/>
                <p className="project-description">{this.state.text}</p>
            </div>
        )
    }
}

export default Project;