// jshint ignore: start
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import EditorTab from './EditorTab';
import PreviewTab from './PreviewTab';

class ControlledTabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			key: 1
		};

		this.handleSelect = this.handleSelect.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}

	handleSelect(key) {
		this.setState({key});
	}

	updateInput(input) {
		this.setState({input});
	}

	render() {
		return (
			<div>
				<Tabs className="col-md-6" activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tabs">
					<Tab eventKey={1} title="Editor">
						<EditorTab updateInput={this.updateInput} />
					</Tab>        
					<Tab eventKey={2} title="Cheat Sheet">Tab 2 content</Tab>
				</Tabs>


				<Tabs className="col-md-6" id="preview-tab">
					<Tab title="Previewer" disabled>
						<PreviewTab input={this.state.input} />
					</Tab>   
				</Tabs>
				    	
			</div>
		);
	}
}

export default ControlledTabs;