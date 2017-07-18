// jshint ignore: start
import React from 'react';

const PreviewTab = (props) => {
	const convertedHTML = props.dangerouslySetInnerHTML;

	return (
		<div id="preview-tab">
			{
				convertedHTML.__html !== '' ?
					<div dangerouslySetInnerHTML={convertedHTML} /> :
					<p className="previewer-placeholder">and see the result here.</p>
			}
		</div>	
		
	);
};

export default PreviewTab;