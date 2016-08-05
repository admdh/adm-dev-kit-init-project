const fs = require('fs-extra');
const mainConfig = require('./main-config.json');
const serverFolders = require('./server-components/server-folders');
const serverFile = require('./server-components/server-js');
const gulpFile = require('./server-components/gulpfile-js');
const editorconfig = require('./server-components/editorconfig');
const lintFile = require('./server-components/lintrc');

const componentFolder = require('./app-components/component-folder');
const indexPug = require('./app-components/index-pug');
const mainLayout = require('./app-components/main-layout-pug');

const hwPUG = require('./app-components/hello-world/hello-world-pug');
const hwJS = require('./app-components/hello-world/hello-world-js');
const hwCSS = require('./app-components/hello-world/hello-world-css');

const cssVariables = require('./app-components/admdevkit.css/css-variables');
const resetCSS = require('./app-components/admdevkit.css/reset');
const typeCSS = require('./app-components/admdevkit.css/type');
const formCSS = require('./app-components/admdevkit.css/form');
const tableCSS = require('./app-components/admdevkit.css/table');
const gridCSS = require('./app-components/admdevkit.css/grid');
const panelCSS = require('./app-components/admdevkit.css/panel');

const log = require('./console-log');

module.exports = () => {
	fs.writeJson('./package.json', mainConfig, (err) => {
		if (err) throw err;
	});

	serverFolders(mainConfig.adm.srcFolder);
	serverFolders(mainConfig.adm.viewsFolder);
	serverFile(mainConfig.main);
	gulpFile();
	editorconfig();
	lintFile('.eslintrc', mainConfig.adm.eslint);
	lintFile('.stylelintrc', mainConfig.adm.stylelint);

	componentFolder(mainConfig.adm.srcFolder);
	mainLayout(mainConfig.adm.srcFolder);
	indexPug(mainConfig.adm.srcFolder);
	hwPUG(mainConfig.adm.srcFolder);

	hwJS(mainConfig.adm.srcFolder);
	hwCSS(mainConfig.adm.srcFolder);

	cssVariables(mainConfig.adm.srcFolder);
	resetCSS(mainConfig.adm.srcFolder);
	typeCSS(mainConfig.adm.srcFolder);
	formCSS(mainConfig.adm.srcFolder);
	tableCSS(mainConfig.adm.srcFolder);
	gridCSS(mainConfig.adm.srcFolder);
	panelCSS(mainConfig.adm.srcFolder);

	log(mainConfig.name);
};
