const fs = require('fs-extra');

module.exports = (source) => {
	const fileContent = '/* stylelint-disable */\n' +
		':root{\n' +
		'\t--ms-bases: 1, .6;\n' +
		'\t--ms-ratios: 1.414;\n' +
		'\t--primary-color: #000;\n' +
		'\t--secondary-color: #fff;\n' +
		'\t--body-primary-color: #fff;\n' +
		'\t--body-secondary-color: #e0e0e0;\n' +
		'\t--type-primary-color: #000;\n' +
		'\t--type-secondary-color: #b3b3b3;\n' +
		'\t--type-oposit-color: #fff;\n' +
		'\t--divider-color: #d9d9d9;\n' +
		'\t--divider-darken-color: #808080;\n' +
		'\t--error-color: #ff4f37;\n' +
		'\t--warning-color: #ffdd22;\n' +
		'\t--success-color: #7dc142;\n' +
		'\t--help-color: #b2ebf2;\n' +
		'\t--font-family: \'Raleway\', arial, sans-serif;\n' +
		'\t--font-weight: normal;\n' +
		'\t--line-height: 1.5;\n' +
		'\t--border-radius: 5px;\n' +
		'\t--table-row-even-color : #f6f6f6;\n' +
		'\t--table-row-odd-color : #fff;\n' +
		'}\n' +
		'@custom-media --small (width >= 479px);' +
		'@custom-media --small-down (width <= 479px);' +
		'@custom-media --small-only (width <= 479px);' +
		'@custom-media --medium (width >= 480px);' +
		'@custom-media --medium-down (width <= 959px);' +
		'@custom-media --medium-only (width >= 960px and width <= 1439px);' +
		'@custom-media --large (width >= 960px);' +
		'@custom-media --large-down (width <= 1439px);' +
		'@custom-media --large-only (max-width: 30em);' +
		'@custom-media --xlarge (width >= 1440px);' +
		'@custom-media --xlarge-down (width <= 1919px);' +
		'@custom-media --xlarge-only (width >= 1440px and width <= 1919px);' +
		'/* stylelint-enable */';

	fs.writeFile(source + '/_css-variables.css', fileContent, (err) => {
		if (err) throw err;
	});
};
