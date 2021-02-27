import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ProjectPage from './components/pages/ProjectPage';
import AboutMePage from './components/pages/AboutMePage'
import SingleProjectPage from './components/pages/SingleProjectPage';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
	state = {}

	componentDidMount() {}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route exact path="/" render = {
						() => (
							<Redirect to="/projects"></Redirect>
						)
					} />
					<Route exact path="/projects" component={ProjectPage} />
					<Route path="/projects/show" component={SingleProjectPage} />
					<Route path="/about" component={AboutMePage} />
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
