const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = 'doctype html\n' +
		'html\n' +
		'\thead\n' +
		'\t\tmeta(charset=\'UTF-8\')\n' +
		'\t\tmeta(name=\'viewport\' content=\'width=device-width, ' +
		'		initial-scale=1\')\n' +
		'\t\tlink(rel=\'shortcut icon\' type=\'image/x-icon\' ' +
		'		href=\'/favicon.ico\')\n' +
		'\t\tblock title\n' +
		'\t\t\ttitle Main Layout\n' +
		'\t\t//build:css\n' +
		'\t\t// endbuild\n' +
		'\tbody\n' +
		'\t\tblock content\n' +
		'\t\t// build:js\n' +
		'\t\t// endbuild\n';

	fs.writeFile(source + '/_layouts/_main.pug', fileContent, (err) => {
		if (err) throw err;
	});
};
