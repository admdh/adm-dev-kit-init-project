const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = 'link(href=\'index/hello-world/_hello-world.css\' ' +
'							type=\'text/css\' rel=\'stylesheet\')\n' +
		'.hello-world\n' +
		'\th1 Hello, World!\n\n' +
		'script System.import(\'index/hello-world/_hello-world.js\')';

	fs.writeFile(source + '/index/hello-world/_hello-world.pug',
		fileContent, (err) => {
			if (err) throw err;
		});
};
