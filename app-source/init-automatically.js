const fs = require('fs-extra');
const mainConfig = require('./main-config.json');
const serverFolders = require('./server-components/server-folders');
const serverFile = require('./server-components/server-js');
const gulpFile = require('./server-components/gulpfile-js');
const lintFile = require('./server-components/lintrc');

const componentFolder = require('./app-components/component-folder');
const indexPug = require('./app-components/index-pug');
const mainLayout = require('./app-components/main-layout-pug');
const cssVariables = require('./app-components/css-varables-css');
const hwPUG = require('./app-components/hello-world/hello-world-pug');
const hwJS = require('./app-components/hello-world/hello-world-js');
const hwCSS = require('./app-components/hello-world/hello-world-css');

const log = require('./console-log');

module.exports = () => {
	fs.writeJson('./package.json', mainConfig, (err) => {
		if (err) throw err;
	});

	serverFolders(mainConfig.srcFolder);
	serverFolders(mainConfig.viewsFolder);
	serverFile(mainConfig.main);
	gulpFile();
	lintFile('.eslintrc', mainConfig.eslint);
	lintFile('.stylelintrc', mainConfig.stylelint);

	componentFolder(mainConfig.srcFolder);
	mainLayout(mainConfig.srcFolder);
	indexPug(mainConfig.srcFolder);
	cssVariables(mainConfig.srcFolder);

	hwPUG(mainConfig.srcFolder);
	hwJS(mainConfig.srcFolder);
	hwCSS(mainConfig.srcFolder);

	log(mainConfig.name);
};
