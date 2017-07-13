// jshint ignore: start

import React, { Component } from 'react';
import ControlledTabs from './components/ControlledTabs';
//import PreviewTab from './components/PreviewTab';
// import EditorTab from './components/EditorTab';

import './App.css';


class App extends Component {
	render() {
		return (
			<div className="App">
		  	<ControlledTabs />
		  	{/* <PreviewTab /> */}
			</div>
		);
	}
}

export default App;
