"use strict";
var inquirer = require("inquirer"),
  _ = require('lodash'),
  Promise = require('bluebird');


var whatToGenerateQuestion = {
    type: "list",
    name: "generate",
    message: "What can i generate for you?",
    choices: [
      "module",
      "controller",
      "service",
      "directive"
    ]
  },

  whatIsTheNameQuesion = function(answers) {
    return {
      type: "input",
      name: "name",
      message: "What is the " + answers.generate + " name?",
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  },

  whatIsYourDependenciesQuestion = {
    type: "input",
    name: "dependencies",
    message: "Write your dependencies..."
  };

function askQuestions() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([whatToGenerateQuestion], function(firstAnswers) {
      if (/controller|service/.test(firstAnswers.generate)) {
        inquirer.prompt([whatIsYourDependenciesQuestion], function(answersDependencies) {
          inquirer.prompt([whatIsTheNameQuesion(firstAnswers)], function(secondAnswers) {
            resolve(_.extend(firstAnswers, secondAnswers, answersDependencies));
          });
        });
      } else {
        inquirer.prompt([whatIsTheNameQuesion(firstAnswers)], function(secondAnswers) {
          resolve(_.extend(firstAnswers, secondAnswers));
        });
      }

    });
  });
}

module.exports = askQuestions;
