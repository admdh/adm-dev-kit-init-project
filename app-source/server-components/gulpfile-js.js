const fs = require('fs-extra');

module.exports = () => {
	const fileContent = 'var app = require(\'adm-dev-kit\');\n' +
		'var pjson = require(\'./package.json\');\n\n' +
		'app.build({\n' +
		'\tsrc: pjson.adm.srcFolder,\n' +
		'\tdest: pjson.adm.buildFolder\n' +
		'});\n';

	fs.writeFile('gulpfile.js', fileContent, (err) => {
		if (err) throw err;
	});
};
