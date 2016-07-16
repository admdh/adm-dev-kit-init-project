const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = 'extends _layouts/_main.pug\n' +
		'block title\n' +
		'\ttitle ADM DEV KIT\n\n' +
		'block content\n' +
		'\tscript(src=\'__jspm_packages/system.js\' ' +
				'type=\'text/javascript\')\n' +
		'\tscript(src=\'_jspm-config.js\' type=\'text/javascript\')\n\n' +
		'\tinclude index/hello-world/_hello-world';

	fs.writeFile(source + '/index.pug', fileContent, (err) => {
		if (err) throw err;
	});
};
