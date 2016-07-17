const fs = require('fs-extra');
const path = require('path');

module.exports = (source) => {

	const file = path.resolve(__dirname, './css/css-variables.css');

	fs.readFile(file, 'utf8', function (err, data) {
		if (err) throw err;
		fs.writeFile(source + '/_css-variables.css', data, (err) => {
			if (err) throw err;
		});
	});
};
