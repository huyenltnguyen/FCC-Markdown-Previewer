// jshint ignore: start
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const PreviewTab = (props) => {
	const convertedHTML = props.dangerouslySetInnerHTML;

	return (
		<div>
			{
				convertedHTML.__html !== '' ?
					<div dangerouslySetInnerHTML={convertedHTML} /> :
					<p className="previewer-placeholder">and see the result here.</p>
			}
		</div>

		
		
	);
};

export default PreviewTab;