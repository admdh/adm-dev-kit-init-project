const fs = require('fs-extra');
const path = require('path');

module.exports = (source) => {

	const file = path.resolve(__dirname, './css/table.css');

	if (!fs.existsSync(source + '/_common-css')) {
		fs.mkdirs(source + '/_common-css', (err) => {
			if (err) throw err;
		});
	}

	fs.readFile(file, 'utf8', function (err, data) {
		if (err) throw err;
		fs.writeFile(source + '/_common-css/_table.css', data, (err) => {
			if (err) throw err;
		});
	});
};
