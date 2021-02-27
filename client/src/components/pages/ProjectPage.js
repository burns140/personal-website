import React, { Component } from 'react';
import Project from '../Project';
import './ProjectPage.css'

class ProjectPage extends Component {
    state = {}

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="project-container">
                <ul>
                    <Project url="https://www.youtube.com/watch?v=Eg9MSoZOOyY" filename="projOneDesc"/>
                    <Project url="https://www.youtube.com/watch?v=HJVS3nmBt6U" filename="projTwoDesc" reverse="true"/>
                    <Project url="https://www.youtube.com/watch?v=NHnmY1S3iUk" filename="projThreeDesc" />
                </ul>
            </div>
        )
    }
}

export default ProjectPage;