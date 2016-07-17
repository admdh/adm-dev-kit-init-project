const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = 'extends _layouts/_main.pug\n' +
		'block title\n' +
		'\ttitle ADM DEV KIT\n\n' +
		'block content\n' +
		'\tlink(href="_common-css/_reset.css" type="text/css" ' +
		'rel="stylesheet")\n' +
		'\tlink(href="_common-css/_type.css" type="text/css" ' +
		'rel="stylesheet")\n' +
		'\tlink(href="_common-css/_form.css" type="text/css" ' +
		'rel="stylesheet")\n' +
		'\tlink(href="_common-css/_table.css" type="text/css" ' +
		'rel="stylesheet")\n' +
		'\tlink(href="_common-css/_grid.css" type="text/css" ' +
		'rel="stylesheet")\n' +
		'\tlink(href="_common-css/_panel.css" type="text/css" ' +
		'rel="stylesheet")\n' +
		'\tscript(src=\'__jspm_packages/system.js\' ' +
				'type=\'text/javascript\')\n' +
		'\tscript(src=\'_jspm-config.js\' type=\'text/javascript\')\n\n' +
		'\tinclude index/hello-world/_hello-world';

	fs.writeFile(source + '/index.pug', fileContent, (err) => {
		if (err) throw err;
	});
};
