const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = '.hello-world {\n' +
		'\tdisplay: block;\n' +
		'\tleft: 50%;\n' +
		'\tposition: absolute;\n' +
		'\ttop: 50%;\n' +
		'\ttransform: translate(-50%, -50%);\n' +
		'}';

	fs.writeFile(source + '/index/hello-world/_hello-world.css', fileContent,
		(err) => {
			if (err) throw err;
		});
};
