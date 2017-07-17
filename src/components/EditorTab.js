// jshint ignore: start
import React, { Component } from 'react';

class EditorTab extends Component {
	constructor(props) {
		super(props);

		this.state = { input: '' };
	}

	render() {
		const updateInput = this.props.updateInput;

		return (
			<div className="form-group text-left">
				<textarea
					className="form-control"
					rows="20" id="editor"
					placeholder="Type some markdown here..."
					onChange={ event => updateInput(event.target.value) }>
				</textarea>
			</div>
		);
	}	
}

export default EditorTab;