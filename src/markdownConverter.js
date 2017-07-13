// jshint ignore: start
import React from 'react';

const markdownConverter = (input) => {
	//const inputWithBrTag = input.replace(/\n/g, '<br/>');

	const lines = input.split(/\n/g);

	const converted = lines.map(line => {
		const key = lines.indexOf(line);

		// Headings
		if (line.startsWith('# ')) {
			return (
				<div key={key}>
					<h1>{line.substr(2, line.length - 1)}</h1>
					<hr/>
				</div>
			);
		} else if (line.startsWith('## ')) {
			return (
				<div key={key}>
					<h2>{line.substr(3, line.length - 1)}</h2>
					<hr/>
				</div>
			);
		} else if (line.startsWith('### ')) {
			return <h3 key={key}>{line.substr(4, line.length - 1)}</h3>;
		} else if (line.startsWith('#### ')) {
			return <h4 key={key}>{line.substr(5, line.length - 1)}</h4>;
		} else if (line.startsWith('##### ')) {
			return <h5 key={key}>{line.substr(6, line.length - 1)}</h5>;
		} else if (line.startsWith('###### ')) {
			return <h6 key={key}>{line.substr(7, line.length - 1)}</h6>;
		}
		return <span key={key}>{line}<br/></span>;
	});

	return converted;

};

export default markdownConverter;
