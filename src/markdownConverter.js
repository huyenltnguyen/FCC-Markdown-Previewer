// jshint ignore: start
import React from 'react';

const markdownConverter = (input) => {
	//const inputWithBrTag = input.replace(/\n/g, '<br/>');

	const lines = input.split(/\n/g);

	const converted = lines.map(line => {
		const key = lines.indexOf(line);
		const headingRegex = /#+\s/g;

		const boldRegex =  /\*{2}(.*?)\*{2}/g;		

		// Headings
		if (line.startsWith('# ')) {
			return (
				<div key={key}>
					<h1>{ line.replace(headingRegex, '') }</h1>
					<hr/>
				</div>
			);
		} else if (line.startsWith('## ')) {
			return (
				<div key={key}>
					<h2>{ line.replace(headingRegex, '') }</h2>
					<hr/>
				</div>
			);
		} else if (line.startsWith('### ')) {
			return <h3 key={key}>{ line.replace(headingRegex, '') }</h3>;
		} else if (line.startsWith('#### ')) {
			return <h4 key={key}>{ line.replace(headingRegex, '') }</h4>;
		} else if (line.startsWith('##### ')) {
			return <h5 key={key}>{ line.replace(headingRegex, '') }</h5>;
		} else if (line.startsWith('###### ')) {
			return <h6 key={key}>{ line.replace(headingRegex, '') }</h6>;
		}
		// Emphasis
		else if ( boldRegex.test(line) ) {
			const boldMatched = line.match(boldRegex)[1];

			return <span key={key}>{ line.substr(0, line.indexOf(boldMatched)).replace(/\*/g, '') }<strong>{ boldMatched }</strong>{ line.substring(line.indexOf(boldMatched) + boldMatched.length).replace(/\*/g, '') }</span>;
		}
		// else if ( (/(^\*{2})|(\s\*{2})/.test(line) && /(\*{2}$)|(\s\*{2}$)/.test(line)) || (line.startsWith('__') && line.endsWith('__')) ) {
		// 	return <strong key={key}>{ line.replace(emphasisRegex, '') }</strong>;
		// } else if ( (line.startsWith('*') && line.endsWith('*')) || (line.startsWith('_') && line.endsWith('_')) ) {
		// 	return <em key={key}>{ line.replace(emphasisRegex, '') }</em>;
		// }

			
		return <span key={key}>{line}<br/></span>;
		
	});

	return converted;

};

export default markdownConverter;
