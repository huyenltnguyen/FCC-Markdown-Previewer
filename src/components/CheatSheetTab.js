// jshint ignore: start
import React from 'react';

const CheatSheetTab = (props) => {
	const renderedCheatSheet = props.dangerouslySetInnerHTML;
	return (
		<div dangerouslySetInnerHTML={renderedCheatSheet}/>		
	);
};

export default CheatSheetTab;