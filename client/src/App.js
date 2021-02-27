import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProjectPage from './components/pages/ProjectPage';
import AboutMePage from './components/pages/AboutMePage'
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
					<Route exact path="/" component={ProjectPage} />
					<Route path="/projects" component={ProjectPage} />
					<Route path="/about" component={AboutMePage} />
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
