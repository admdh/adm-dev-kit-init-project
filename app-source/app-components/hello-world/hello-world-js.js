const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = 'console.log(\'Hello, World!\')';

	fs.writeFile(source + '/index/hello-world/_hello-world.js', fileContent,
		(err) => {
			if (err) throw err;
		});
};
