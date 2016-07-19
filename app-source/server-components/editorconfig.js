const fs = require('fs-extra');

module.exports = () => {
	const fileContent = 'root = true\n\n' +
		'[*.json]\n' +
		'end_of_line = lf\n' +
		'insert_final_newline = true\n' +
		'indent_style = space\n' +
		'indent_size = 2\n\n' +
		'[*.pug]\n' +
		'end_of_line = lf\n' +
		'insert_final_newline = true\n' +
		'indent_style = tab\n\b' +
		'[*.js]\n' +
		'end_of_line = lf\n' +
		'insert_final_newline = true\n' +
		'indent_style = tab\n\n' +
		'[*.css]\n' +
		'end_of_line = lf\n' +
		'insert_final_newline = true\n' +
		'indent_style = tab';

	fs.writeFile('./.editorconfig', fileContent, (err) => {
		if (err) throw err;
	});
};
