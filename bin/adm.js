#! /usr/bin/env node
'use strict';

const fs = require('fs-extra');
const inquirer = require('inquirer');
const questions = require('../app-source/questions.json');
const initAuto = require('../app-source/init-automatically');
const initManual = require('../app-source/init-manual');

if (!fs.existsSync('package.json')) {
	inquirer.prompt(questions.initType).then(function (answers) {
		if (answers.init) {
			initAuto();
		} else {
			initManual();
		}
	});
} else {
	console.log('Looks like package.json already exists!\n' +
		'Remove package.json or try in empty folder!');
}
