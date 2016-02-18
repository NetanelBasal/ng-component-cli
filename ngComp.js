#! /usr/bin/env node

var fs = require('fs-extra'),
  swig = require('swig'),
  path = require('path'),
  _ = require('lodash'),
  askQuestions = require('./questions.js');

askQuestions().then(generateFiles);

swig.setFilter('camelCaseSnake', function(input, idx) {
  return _.capitalize(_.camelCase(input));
});

swig.setFilter('snakeToCamelCase', function(input, idx) {
  return _.camelCase(input);
});


function generateFiles(answers) {
  var whatToGenerate = answers.generate,
    dependencies = answers.dependencies ? answers.dependencies.split(' ') : [];
  name = answers.name;
  switch (whatToGenerate) {
    case 'service':
      generateFile('service', {
        name: name,
        depend: dependencies
      }, name);
      break;
    case 'directive':
      generateFile('directive', {
        name: name
      }, name);
      break;
    case 'controller':
      generateFile('controller', {
        name: name,
        depend: dependencies
      }, name);
      break;
    case 'module':
      genreateModule({
        name: name,
        depend: dependencies
      });
      break;
  }


}



function generateFile(type, data, fileName) {
  var tpl = __dirname + '/templates/temp.' + type + '.js';
  var tpl = swig.compileFile(tpl);
  var data = tpl(data);
  var filePath = path.join(process.cwd(), fileName + '.' + type + '.js');
  fs.outputFile(filePath, data, function(err) {
    if (err) console.log(err);
  });
}


function genreateModule(answers) {
  var templatesDir = __dirname + '/templates',
    tpl,
    compiled,
    fileName,
    folderPath;

  fs.readdir(templatesDir, function(error, dir) {

    dir.forEach(function(template) {
      tpl = swig.compileFile(templatesDir + '/' + template);
      compiled = tpl(answers);

      fileName = template.replace(/temp/, answers.name);
      folderPath = path.join(process.cwd(), answers.name);

      if (template.indexOf('service') > -1) {
        return;
      }

      filePath = path.join(folderPath, fileName);

      fs.outputFile(filePath, compiled, function(err) {
        if (err) console.log(err);
      });
    });
  });
}
