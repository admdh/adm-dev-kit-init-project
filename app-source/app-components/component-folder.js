const fs = require('fs-extra');

module.exports = (source) => {
	if (!fs.existsSync(source + '/_layouts')) {
		fs.mkdirs(source + '/_layouts', (err) => {
			if (err) throw err;
		});
	}

	if (!fs.existsSync(source + '/index')) {
		fs.mkdirs(source + '/index', (err) => {
			if (err) throw err;
		});
	}

	if (!fs.existsSync(source + '/index/hello-world/')) {
		fs.mkdirs(source + '/index/hello-world', (err) => {
			if (err) throw err;
		});
	}
};
