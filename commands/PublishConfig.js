const cmdFactory = require('../src/Factory');
const fs = require('fs');
const {promisify} = require('util');
const copyFile = promisify(fs.copyFile);

exports.command = 'publish';
exports.aliases = ['publ'];
exports.describe = 'Publish the config file to your current directory';
exports.builder = {};

const baseDir = `/`;

exports.handler = async (argv) => {
    await copyFile(`${__dirname}/../stubs/Stub.json`, `${cmdFactory.configPublishPath}`)
            .then(res => console.log(`Flease.json published successfully!`))
            .catch(err => {console.log(`${err}`)});
}