import React, { Component } from 'react';
import Project from '../Project';
import './ProjectPage.css'

class ProjectPage extends Component {
    state = {}

    componentDidMount() {   }

    render() {
        return (
            <div className="project-container">
                <ul className="project-list">
                    <h1 className="project-page-header">PROJECTS</h1>
                    <Project url="https://www.youtube.com/watch?v=Eg9MSoZOOyY" filename="projOneDesc" headertext="Eldritch Duels" />
                    <Project url="https://www.youtube.com/watch?v=HJVS3nmBt6U" filename="projTwoDesc" headertext="TeamUp" reverse="true"/>
                    <Project url="https://www.youtube.com/watch?v=NHnmY1S3iUk" filename="projThreeDesc" headertext="Gunsmith" />
                </ul>
            </div>
        )
    }
}

export default ProjectPage;