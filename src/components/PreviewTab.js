// jshint ignore: start
import React from 'react';
//import { Tabs, Tab } from 'react-bootstrap';
import markdownConverter from '../markdownConverter';

const PreviewTab = (props) => {
	const input = props.input;

	const convertedInput = markdownConverter(input);

	return (
		<div className="text-left">
			{ convertedInput }

			{/*
			<p id="previewer" className="text-left">
				
			</p>
			*/}
			

			{/*}
				<Tabs id="preview-tab" className="col-md-6">
					<Tab title="Previewer" disabled>
						<div className="form-group">
							<label htmlFor="Preview">Preview</label> 
							<textarea
								className="form-control"
								rows="5"
								placeholder="And see the preview here"				
								id="previewer">
							</textarea>
						</div>
					</Tab>
				</Tabs>
			*/}
		</div>


	);
};

export default PreviewTab;