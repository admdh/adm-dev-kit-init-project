const fs = require('fs-extra');

module.exports = (source) => {
	if (!fs.existsSync(source)) {
		fs.mkdirs(source, (err) => {
			if (err) throw err;
		});
	}
};
