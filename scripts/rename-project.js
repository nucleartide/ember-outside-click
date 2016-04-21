
var fs = require('fs')
var dasherize = require('dasherize')

var name = process.argv[2]
if (!name) {
  console.log('no name provided')
  process.exit(1)
}

// bower.json
var bowerJSON = JSON.parse(fs.readFileSync('bower.json'))
bowerJSON.name = dasherize(name)
fs.writeFileSync('bower.json', JSON.stringify(bowerJSON, null, 2) + '\n')

// index.js
var index = String(fs.readFileSync('index.js'))
index = index.replace('ember-default-addon', dasherize(name))
fs.writeFileSync('index.js', index)

// package.json
var packageJSON = JSON.parse(fs.readFileSync('package.json'))
packageJSON.name = dasherize(name)
fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2) + '\n')

