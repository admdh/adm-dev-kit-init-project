#! /usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const fs = require('fs-extra');

const mainData = {
	name: 'adm-dev-kit',
	version: '1.0.0',
	author: '',
	repository: '',
	license: 'MIT',
	main: 'server.js',
	scripts: {
		run: 'node server.js',
		build: 'gulp',
		lint: 'gulp lint'
	},
	precommit: 'lint',
	srcFolder: './src',
	viewsFolder: './views',
	buildFolder: './dest',
	host: 'localhost',
	port: '3000',
	cssVariables: './src/_css-variables.css',
	eslint: 'eslint-config-adm-dev-kit',
	stylelint: 'stylelint-config-adm-dev-kit',
	dependencies: {
		'adm-dev-kit': '^2.5.3'
	},
	jspm: {
		directories: {
			baseURL: './src',
			packages: './src/__jspm_packages'
		},
		configFile: './src/_jspm-config.js',
		dependencies: {},
		devDependencies: {
			babel: 'npm:babel-core@^5.8.24',
			'babel-runtime': 'npm:babel-runtime@^5.8.24',
			'core-js': 'npm:core-js@^1.1.4'
		}
	}
};

const initType  = [
	{
		type: 'confirm',
		name: 'init',
		message: 'Init project automaticaly:',
		default: true
	}
];

const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'Name:',
		default: 'adm-dev-kit'
	},
	{
		type: 'input',
		name: 'version',
		message: 'Version:',
		default: '1.0.0'
	},
	{
		type: 'input',
		name: 'git',
		message: 'Git Repository:'
	},
	{
		type: 'input',
		name: 'author',
		message: 'Author:'
	},
	{
		type: 'input',
		name: 'license',
		message: 'License:',
		default: 'MIT'
	},
	{
		type: 'input',
		name: 'description',
		message: 'Description:'
	},
	{
		type: 'input',
		name: 'keywords',
		message: 'Keywords:'
	},
	{
		type: 'input',
		name: 'entryPoint',
		message: 'Entry Point:',
		default: 'server.js'
	},
	{
		type: 'input',
		name: 'srcFolder',
		message: 'Source Folder:',
		default: './src'
	},
	{
		type: 'input',
		name: 'viewsFolder',
		message: 'Views Folder:',
		default: './views'
	},
	{
		type: 'input',
		name: 'buildFolder',
		message: 'Build Folder:',
		default: './dest'
	},
	{
		type: 'input',
		name: 'host',
		message: 'Host:',
		default: 'localhost'
	},
	{
		type: 'input',
		name: 'port',
		message: 'Server Port:',
		default: '3000'
	},
	{
		type: 'input',
		name: 'cssvars',
		message: 'CSS Variables File:',
		default: './src/_css-variables.css'
	},
	{
		type: 'confirm',
		name: 'precommit',
		message: 'Enable Precommit Lint:',
		default: true
	},
	{
		type: 'input',
		name: 'eslint',
		message: 'Prefered Eslint:',
		default: 'eslint-config-adm-dev-kit'
	},
	{
		type: 'input',
		name: 'stylelint',
		message: 'Prefered Stylelint:',
		default: 'stylelint-config-adm-dev-kit'
	},
	{
		type: 'confirm',
		name: 'exampleComponent',
		message: 'Example Component:',
		default: true
	}
];

const manualInitType = () => {
	inquirer.prompt(questions).then(function (answers) {
		mainData.name = answers.name;
		mainData.version = answers.version;

		if (answers.git) {
			mainData.git = answers.git;
		}

		if (answers.author) {
			mainData.author = answers.author;
		}

		mainData.license = answers.license;

		if (answers.description) {
			mainData.description = answers.description;
		}

		if (answers.keywords) {
			mainData.keywords = answers.keywords;
		}

		mainData.main = answers.entryPoint;
		mainData.scripts = {
			run : 'node ' + answers.entryPoint,
			build: 'gulp',
			lint: 'gulp lint'
		};

		if (answers.precommit) {
			mainData.precommit = 'lint';
		}

		mainData.srcFolder = answers.srcFolder;
		mainData.viewsFolder = answers.viewsFolder;
		mainData.buildFolder = answers.buildFolder;
		mainData.host = answers.host;
		mainData.port = answers.port;
		mainData.cssVariable = answers.cssvars;
		mainData.eslint = answers.eslint;
		mainData.stylelint = answers.stylelint;

		packageJson(mainData);
		workDirectories(mainData.srcFolder, mainData.viewsFolder);
		entryPoint(mainData.main);
		entryPoint(mainData.main);
		eslintFile(mainData.eslint);
		stylelintFile(mainData.stylelint);
		exampleComponent(mainData.srcFolder);
	});
}

const packageJson = (data) => {
	fs.writeJson('./package.json', data, function (err) {
		if (err) throw err;
	});
}

const entryPoint = (data) => {
	const entryPointContent = 'var app = require(\'adm-dev-kit\');\n' +
		'var pjson = require(\'./package.json\');\n\n' +
		'app.server({\n' +
		'\tsrc: pjson.srcFolder,\n' +
		'\tviews: pjson.viewsFolder,\n' +
		'\thost: pjson.host,\n' +
		'\tport: pjson.port,\n' +
		'\topenURL: pjson.host,\n' +
		'\tname: pjson.name,\n' +
		'\tdesc: pjson.description,\n' +
		'\tversion: pjson.version,\n' +
		'\tcssVariables: pjson.cssVariables\n' +
		'});\n';

	fs.writeFile(data, entryPointContent, function(err) {
		if (err) throw err;
	})
}

const gulpfile = function() {
	const gulpfileContet = 'var app = require(\'adm-dev-kit\');\n' +
		'var pjson = require(\'./package.json\');\n\n' +
		'app.build({\n' +
		'\tsrc: pjson.srcFolder,\n' +
		'\tdest: pjson.buildFolder\n' +
		'});\n';

	fs.writeFile('gulpfile.js', gulpfileContet, function(err){
		if (err) throw err;
	})
};

const eslintFile = (data) => {
	const eslintContet = { "extends": data};

	fs.writeJson('.eslintrc', eslintContet, function(err){
		if (err) throw err;
	});
}

const stylelintFile = (data) => {
	const stylelintContet = { 'extends': data};

	fs.writeJson('.stylelintrc', stylelintContet, function(err){
		if (err) throw err;
	});
}

const workDirectories = (src, views) => {
	if (!fs.existsSync(src)){
		fs.mkdirs(src, function(err) {
			if (err) throw err;
		});
	}

	if (!fs.existsSync(views)){
		fs.mkdirs(views, function(err) {
			if (err) throw err;
		});
	}
}

const exampleComponent = (src) => {
	if (!fs.existsSync(src + '/_layouts')){
		fs.mkdirs(src + '/_layouts', function(err) {
			if (err) throw err;
		});
	}

	if (!fs.existsSync(src + '/index')){
		fs.mkdirs(src + '/index', function(err) {
			if (err) throw err;
		});
	}

	if (!fs.existsSync(src + '/index/hello-world/')){
		fs.mkdirs(src + '/index/hello-world', function(err) {
			if (err) throw err;
		});
	}

	const mainLayoutContent = 'doctype html\n' +
		'html\n' +
		'\thead\n' +
		'\t\tmeta(charset=\'UTF-8\')\n' +
		'\t\tmeta(name=\'viewport\' content=\'width=device-width, initial-scale=1\')\n' +
		'\t\tlink(rel=\'shortcut icon\' type=\'image/x-icon\' href=\'/favicon.ico\')\n' +
		'\t\tblock title\n' +
		'\t\t\ttitle Main Layout\n' +
		'\t\t//build:css\n' +
		'\t\t// endbuild\n' +
		'\tbody\n' +
		'\t\tblock content\n' +
		'\t\t// build:js\n' +
		'\t\t// endbuild\n';

	fs.writeFile(src + '/_layouts/_main.pug', mainLayoutContent, function(err){
		if (err) throw err;
	});


	const indexContent = 'extends _layouts/_main.pug\n' +
		'block title\n' +
		'\ttitle ADM DEV KIT\n\n' +
		'block content\n' +
		'\tscript(src=\'__jspm_packages/system.js\' type=\'text/javascript\')\n' +
		'\tscript(src=\'_jspm-config.js\' type=\'text/javascript\')\n\n' +
		'\tinclude index/hello-world/_hello-world';

	fs.writeFile(src + '/index.pug', indexContent, function(err){
		if (err) throw err;
	});

	const cssVarsContent = '/* stylelint-disable */\n' +
		':root{\n'+
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
		'/* stylelint-enable */';

	fs.writeFile(src + '/_css-variables.css', cssVarsContent, function(err){
		if (err) throw err;
	});


	const hellowWorldContent = 'link(href=\'index/hello-world/_hello-world.css\' type=\'text/css\' rel=\'stylesheet\')\n' +
		'.hello-world\n' +
		'\th1 Hello, World!\n\n' +
		'script System.import(\'index/hello-world/_hello-world.js\')';

	fs.writeFile(src + '/index/hello-world/_hello-world.pug', hellowWorldContent, function(err){
		if (err) throw err;
	});

	var hellowWorldCSS = '.hello-world {\n' +
		'\tdisplay: block;\n' +
		'\tleft: 50%;\n' +
		'\tposition: absolute;\n' +
		'\ttop: 50%;\n' +
		'\ttransform: translate(-50%, -50%);\n' +
		'}';

	fs.writeFile(src + '/index/hello-world/_hello-world.css', hellowWorldCSS, function(err){
		if (err) throw err;
	});

	const hellowWorldJS = 'console.log(\'Hello, World!\')';

	fs.writeFile(src + '/index/hello-world/_hello-world.js', hellowWorldJS, function(err){
		if (err) throw err;
	});
}

if (!fs.existsSync(__dirname + 'package.json')) {
	inquirer.prompt(initType).then((answers) => {
		if (answers.init) {
			packageJson(mainData);
			workDirectories(mainData.srcFolder, mainData.viewsFolder);
			entryPoint(mainData.main);
			entryPoint(mainData.main);
			eslintFile(mainData.eslint);
			stylelintFile(mainData.stylelint);
			exampleComponent(mainData.srcFolder);
			gulpfile();

			console.log('\n\nProject is created!');
			console.log('Don\'t forget to run: npm i, jspm i\n\n');
		} else {
			manualInitType();
			gulpfile();

			console.log('\n\nProject is created!');
			console.log('Don\'t forget to run: npm i, jspm i\n\n');
		}
	})
} else {
	console.log('Looks like package.json already exists!\n' +
		'Remove package.json or try in empty folder!');
}
