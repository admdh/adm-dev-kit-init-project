const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = 'var app = require(\'adm-dev-kit\');\n' +
		'var pjson = require(\'./package.json\');\n\n' +
		'app.server({\n' +
		'\tsrc: pjson.srcFolder,\n' +
		'\tviews: pjson.viewsFolder,\n' +
		'\thost: pjson.host,\n' +
		'\tport: pjson.port,\n' +
		'\topenURL: pjson.host,\n' +
		'\tname: pjson.name,\n' +
		'\tdesc: pjson.description,\n' +
		'\tversion: pjson.version,\n' +
		'\tcssVariables: pjson.cssVariables\n' +
		'});\n';

	fs.writeFile(source, fileContent, (err) => {
		if (err) throw err;
	});
};
