// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/pages/projects';
import AboutMe from './components/pages/aboutMe'
import './App.css';

class App extends Component {
	state = {
		text: ''
	}

	componentDidMount() {
		//this.fetchText();
	}

	fetchText = async () => {
		const response = await fetch('/projects');
		const fetchText = await response.text();
		this.setState({ text: fetchText });
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<div>
					<Link to="https://google.com"><img src={logo} className="App-logo" alt="logoimage" /></Link>
						<div className="flexstart" style={{marginLeft:7}}>
							<a href="https://google.com"><img src={logo} className="App-logo" alt="logoimage" /></a>
							<Link to="/">Projects</Link>
							<Link to="/about">About</Link>
						</div>
					</div>

					<Route exact path="/" component={Projects} />
					<Route path="/about" component={AboutMe} />

					
				</div>

			</BrowserRouter>


			// <div>
			// 	<h1 className="App">{this.state.text.substr(0, 3)}</h1>
			// </div>
		)
	}
}

export default App;
