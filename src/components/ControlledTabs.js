// jshint ignore: start
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import marked from 'marked';
import Media from 'react-media';
import EditorTab from './EditorTab';
import PreviewTab from './PreviewTab';
import CheatSheetTab from './CheatSheetTab';
import rawCheatSheet from './rawCheatSheet';

//var marked = require('marked');

class ControlledTabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
		};

		this.updateInput = this.updateInput.bind(this);
		this.getMarkdownText = this.getMarkdownText.bind(this);
	}

	updateInput(input) {
		this.setState({input});
	}

	getMarkdownText(input) {
		const rawMarkup = marked(input, {sanitize: false});
		return { __html: rawMarkup };
	}

	render() {
		return (
			<div>

				{/*------- for smaller screen, display Previewer Tab as a part of the Main Tab Panel -----------*/}				
				<Media query="(max-width: 767px)" render={() => (
					<Tabs className="col-md-5 col-md-offset-1 col-sm-6 text-left" defaultActiveKey={1} id="uncontrolled-tabs">
						<Tab eventKey={1} title="Editor">
							<EditorTab updateInput={this.updateInput} />
						</Tab>        
						
						<Tab eventKey={2} title="Cheat Sheet">
							<CheatSheetTab dangerouslySetInnerHTML={ this.getMarkdownText(rawCheatSheet) }/>
						</Tab>

						<Tab eventKey={3} title="Previewer">
							<PreviewTab dangerouslySetInnerHTML={ this.getMarkdownText(this.state.input) } />
						</Tab>						
					</Tabs>
				)}/>

				{/*---------- for larger screen, display Previewer Tab as an individual Tab Panel -----------*/}
				<Media query="(min-width: 768px)" render={() => (
					<div>
						<Tabs className="col-md-5 col-md-offset-1 col-sm-6 text-left" defaultActiveKey={1} id="uncontrolled-tabs">
							<Tab eventKey={1} title="Editor">
								<EditorTab updateInput={this.updateInput} />
							</Tab>        
							
							<Tab eventKey={2} title="Cheat Sheet">
								<CheatSheetTab dangerouslySetInnerHTML={ this.getMarkdownText(rawCheatSheet) }/>
							</Tab>						
						</Tabs>

						<Tabs className="col-md-5 col-sm-6 text-left" id="preview-tab">
							<Tab eventKey={3} title="Previewer">
								<PreviewTab dangerouslySetInnerHTML={ this.getMarkdownText(this.state.input) } />
							</Tab>   
						</Tabs>
					</div>
				)}/>
			</div>
		);
	}
}

export default ControlledTabs;