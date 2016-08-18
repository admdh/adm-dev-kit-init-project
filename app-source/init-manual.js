const fs = require('fs-extra');
const inquirer = require('inquirer');
const questions = require('../app-source/questions.json');
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
	let newConfig = mainConfig;

	inquirer.prompt(questions.mainQuestions).then( function (answers) {

		newConfig.name = answers.name;
		newConfig.version = answers.version;
		newConfig.author = answers.author;
		newConfig.license = answers.license;
		newConfig.description = answers.description;
		newConfig.repository = answers.repository;
		newConfig.main = answers.entryPoint;
		newConfig.adm.srcFolder = answers.srcFolder;
		newConfig.adm.viewsFolder = answers.viewsFolder;
		newConfig.adm.buildFolder = answers.buildFolder;
		newConfig.adm.host = answers.host;
		newConfig.adm.port = answers.port;
		newConfig.adm.browserSync = answers.browserSync;
		newConfig.adm.cssVariables = answers.cssVars;
		newConfig.adm.eslint = answers.eslint;
		newConfig.adm.stylelint = answers.stylelint;

		fs.writeJson('./package.json', newConfig, (err) => {
			if (err) throw err;
		});

		serverFolders(newConfig.adm.srcFolder);
		serverFolders(newConfig.adm.viewsFolder);
		serverFile(newConfig.adm.main);
		gulpFile();
		editorconfig();
		lintFile('.eslintrc', newConfig.adm.eslint);
		lintFile('.stylelintrc', newConfig.adm.stylelint);

		componentFolder(newConfig.adm.srcFolder);
		mainLayout(newConfig.adm.srcFolder);
		indexPug(newConfig.adm.srcFolder);

		hwPUG(newConfig.adm.srcFolder);
		hwJS(newConfig.adm.srcFolder);
		hwCSS(newConfig.adm.srcFolder);

		cssVariables(newConfig.adm.srcFolder);
		resetCSS(newConfig.adm.srcFolder);
		typeCSS(newConfig.adm.srcFolder);
		formCSS(newConfig.adm.srcFolder);
		tableCSS(newConfig.adm.srcFolder);
		gridCSS(newConfig.adm.srcFolder);
		panelCSS(newConfig.adm.srcFolder);

		log(newConfig.name);
	});
};
