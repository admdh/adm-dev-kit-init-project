#! /usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const questions = require('../app-source/questions.json');
const initAuto = require('../app-source/init-automatically');
const initManual = require('../app-source/init-manual');

inquirer.prompt(questions.initType).then( function (answers) {
	if (answers.init) {
		initAuto();
	} else {
		initManual();
	}
});
