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
		newConfig.srcFolder = answers.srcFolder;
		newConfig.viewsFolder = answers.viewsFolder;
		newConfig.buildFolder = answers.buildFolder;
		newConfig.host = answers.host;
		newConfig.port = answers.port;
		newConfig.cssVariables = answers.cssVars;
		newConfig.eslint = answers.eslint;
		newConfig.stylelint = answers.stylelint;

		fs.writeJson('./package.json', newConfig, (err) => {
			if (err) throw err;
		});

		serverFolders(newConfig.srcFolder);
		serverFolders(newConfig.viewsFolder);
		serverFile(newConfig.main);
		gulpFile();
		editorconfig();
		lintFile('.eslintrc', newConfig.eslint);
		lintFile('.stylelintrc', newConfig.stylelint);

		componentFolder(newConfig.srcFolder);
		mainLayout(newConfig.srcFolder);
		indexPug(newConfig.srcFolder);

		hwPUG(newConfig.srcFolder);
		hwJS(newConfig.srcFolder);
		hwCSS(newConfig.srcFolder);

		cssVariables(newConfig.srcFolder);
		resetCSS(newConfig.srcFolder);
		typeCSS(newConfig.srcFolder);
		formCSS(newConfig.srcFolder);
		tableCSS(newConfig.srcFolder);
		gridCSS(newConfig.srcFolder);
		panelCSS(newConfig.srcFolder);

		log(newConfig.name);
	});
};
