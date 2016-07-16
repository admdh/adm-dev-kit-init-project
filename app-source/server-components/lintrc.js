const fs = require('fs-extra');

module.exports = (source, data) => {
	const fileContet = { extends: data };

	fs.writeJson(source, fileContet, (err) => {
		if (err) throw err;
	});
};
