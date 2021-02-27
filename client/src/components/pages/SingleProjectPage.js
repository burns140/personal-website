import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './SingleProjectPage.css'

class SingleProjectPage extends Component {
    state = {
        featureItems: [],
        contribItems: [],
        githubUrl: ""
    }

    async componentDidMount() {
        const json = await (await fetch(`/projects/show/${window.location.href.substr(window.location.href.lastIndexOf('/') + 1).toLocaleLowerCase()}`)).json();
        const featureItems = json.features.map(feature => 
            <li className="single-project-list-item">{feature}</li>
        )
        const contribItems = json.contributions.map(contribution =>
            <li className="single-project-list-item">{contribution}</li>    
        )

        this.setState(
            {
                featureItems: featureItems,
                contribItems: contribItems,
                githubUrl: json.github
            }
        );
    }

    render() {
        return (
            <div className="single-project-container">
                <ul className="single-project-outer-list">
                    <h1 style={{marginBlockStart: '0.4em', marginBlockEnd: 0}}>{window.location.href.substr(window.location.href.lastIndexOf('/') + 1).replace('-', ' ')}</h1>
                    <a style={{fontSize: '20px'}} href={this.state.githubUrl}>Github</a>
                    <ReactPlayer style={{paddingTop: '10px'}} url={this.props.location.vidUrl} controls={true} width="1024px" height="576px"/>
                    <div className="side-by-side-list-container">
                        <div className="project-list-container">
                            <ol className="single-project-list">
                                <h2 className="single-project-list-item" style={{textAlign: 'center', margin: '0px'}}>FEATURES</h2>
                                {this.state.featureItems}
                            </ol>
                        </div>
                        
                        <div className="project-list-container">
                            <ol className="single-project-list">
                                <h2 className="single-project-list-item" style={{textAlign: 'center', margin: '0px'}}>CONTRIBUTIONS</h2>
                                {this.state.contribItems}
                            </ol>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default SingleProjectPage;