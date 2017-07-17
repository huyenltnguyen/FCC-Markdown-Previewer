const rawCheatSheet = [
	'(Credit: https://guides.github.com/features/mastering-markdown/)',
	'### Headers',
	'```\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6```',
	'### Emphasis',
	'```\n*This text will be italic.*\n_This text will also be italic_.\n\n**This text will be bold.**\n__This text will also be bold.__\n\nOf course, it can be *__both__*.\n\n~~This text is crossed out.~~```',
	'### Lists',
	'```\n(Use two trailing spaces for indentation)\n* Unordered list item 1\n* Unordered list item 2\n * Unordered list item 2a\n  * Unordered list item 2b\n\n1. Ordered list item 1\n2. Ordered list item 2\n  1. Ordered list item 2.1\n  2. Ordered list item 2.2\n```',
	'### Images',
	'```\n![GitHub Logo](/images/logo.png)\nFormat: ![Alt Text](url)\n```',
	'### Links',
	'```\nhttp://github.com - automatic!\n[GitHub](http://github.com)\n```',
	'### Blockquotes',
	'```\nAs Kanye West said:\n\n> We\'re living the future so\n> the present is our past.\n```',
	'### Inline Code',
	'```\nI think you should use an\n`<addr>` element here instead.\n```',
	'### Syntax highlighting',
	'````\n```javascript\nfunction fancyAlert(arg) {\n  if(arg) {\n    $.facebox({div:\'#foo\'})\n  }\n}\n```\n````',
	'### Task Lists',
	'```\n- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported\n- [x] list syntax required (any unordered or ordered list supported)\n- [x] this is a complete item\n- [ ] this is an incomplete item\n```',
	'### Tables',
	'```\nFirst Header | Second Header\n------------ | -------------\nContent from cell 1 | Content from cell 2\nContent in the first column | Content in the second column\n```'
].join('\n');

export default rawCheatSheet;